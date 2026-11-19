import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import TechStackTemplate, {
  type TechStackGroup,
} from "@components/templates/TechStackTemplate";
import type { Skill } from "@components/organisms/SkillGroup";
import {
  getSkills,
  removeSkill,
  selectSkill,
} from "@services/skillsService";

const DashboardTechStack = () => {
  const [groups, setGroups] = useState<TechStackGroup[]>([]);
  const [pendingId, setPendingId] = useState<string>();
  const [status, setStatus] = useState("Loading tech stack.");
  const [catalogOnly, setCatalogOnly] = useState(false);

  useEffect(() => {
    let active = true;

    getSkills()
      .then((records) => {
        if (!active) {
          return;
        }
        setGroups(records);
        setCatalogOnly(false);
        setStatus("");
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setGroups([]);
        setCatalogOnly(true);
        setStatus("Could not load the tech stack from the API.");
      });

    return () => {
      active = false;
    };
  }, []);

  const applySelection = (records: TechStackGroup[], id: string, selected: boolean) =>
    records.map((group) => ({
      ...group,
      skills: group.skills.map((skill) =>
        skill.id === id ? { ...skill, selected } : skill
      ),
    }));

  const onToggle = async (skill: Skill) => {
    if (catalogOnly) {
      toast.error("The tech stack API is unavailable, so this selection was not saved.");
      return;
    }

    const nextSelected = !skill.selected;
    setPendingId(skill.id);
    setGroups((current) => applySelection(current, skill.id, nextSelected));

    try {
      if (nextSelected) {
        await selectSkill(skill.name);
        toast.success(`${skill.name} will show on your public tech stack.`);
      } else {
        await removeSkill(skill.id);
        toast.success(`${skill.name} was removed from your public tech stack.`);
      }
    } catch {
      setGroups((current) => applySelection(current, skill.id, skill.selected));
      toast.error("Could not update this skill.");
    } finally {
      setPendingId(undefined);
    }
  };

  return (
    <Layout>
      <TechStackTemplate
        groups={groups}
        pendingId={pendingId}
        catalogOnly={catalogOnly}
        status={status}
        onToggle={onToggle}
      />
    </Layout>
  );
};

export default DashboardTechStack;
