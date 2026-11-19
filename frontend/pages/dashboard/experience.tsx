import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import DashboardExperienceTemplate from "@components/templates/DashboardExperienceTemplate";
import {
  createBlankExperienceRole,
  createExperience,
  deleteExperience,
  getExperience,
  isDraftExperienceId,
  updateExperience,
  type ExperienceRole,
} from "@services/experienceService";

const DashboardExperience = () => {
  const [roles, setRoles] = useState<ExperienceRole[]>([]);
  const [savingId, setSavingId] = useState<string>();
  const [readOnly, setReadOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    let active = true;

    getExperience()
      .then((records) => {
        if (!active) {
          return;
        }
        setRoles(records);
        setReadOnly(false);
        setStatus("");
        setLoading(false);
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setRoles([]);
        setReadOnly(true);
        setStatus("Could not load experience from the API.");
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const onAddRole = () => {
    setRoles((current) => [createBlankExperienceRole(), ...current]);
  };

  const onSave = async (role: ExperienceRole) => {
    if (readOnly) {
      toast.error("The experience API is unavailable, so this role was not saved.");
      return;
    }

    const { id, ...payload } = role;
    setSavingId(id);

    try {
      if (isDraftExperienceId(id)) {
        const saved = await createExperience(payload);
        setRoles((current) =>
          current.map((item) => (item.id === id ? saved : item))
        );
        toast.success(`${saved.company} added.`);
      } else {
        const saved = await updateExperience(id, payload);
        setRoles((current) => current.map((item) => (item.id === id ? saved : item)));
        toast.success(`${saved.company} saved.`);
      }
    } catch {
      toast.error("Could not save this role.");
    } finally {
      setSavingId(undefined);
    }
  };

  const onDelete = async (role: ExperienceRole) => {
    if (isDraftExperienceId(role.id)) {
      setRoles((current) => current.filter((item) => item.id !== role.id));
      return;
    }

    if (readOnly) {
      toast.error("The experience API is unavailable, so this role was not deleted.");
      return;
    }

    setSavingId(role.id);

    try {
      await deleteExperience(role.id);
      setRoles((current) => current.filter((item) => item.id !== role.id));
      toast.success(`${role.company || "Role"} deleted.`);
    } catch {
      toast.error("Could not delete this role.");
    } finally {
      setSavingId(undefined);
    }
  };

  return (
    <Layout loading={loading} loadingLabel="Loading experience.">
      <DashboardExperienceTemplate
        roles={roles}
        savingId={savingId}
        readOnly={readOnly}
        status={status}
        onSave={onSave}
        onDelete={onDelete}
        onAddRole={onAddRole}
      />
    </Layout>
  );
};

export default DashboardExperience;