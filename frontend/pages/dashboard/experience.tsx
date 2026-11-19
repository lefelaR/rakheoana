import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import DashboardExperienceTemplate from "@components/templates/DashboardExperienceTemplate";
import {
  createBlankExperienceRole,
  createExperience,
  getExperience,
  isDraftExperienceId,
  updateExperience,
  type ExperienceRole,
} from "@services/experienceService";

const DashboardExperience = () => {
  const [roles, setRoles] = useState<ExperienceRole[]>([]);
  const [savingId, setSavingId] = useState<string>();
  const [readOnly, setReadOnly] = useState(false);
  const [status, setStatus] = useState("Loading experience.");

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
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setRoles([]);
        setReadOnly(true);
        setStatus("Could not load experience from the API.");
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

  return (
    <Layout>
      <DashboardExperienceTemplate
        roles={roles}
        savingId={savingId}
        readOnly={readOnly}
        status={status}
        onSave={onSave}
        onAddRole={onAddRole}
      />
    </Layout>
  );
};

export default DashboardExperience;