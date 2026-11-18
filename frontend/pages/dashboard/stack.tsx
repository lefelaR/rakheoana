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
  type SkillGroupRecord,
} from "@services/skillsService";

const DashboardTechStack = () => {
  const [groups, setGroups] = useState<TechStackGroup[]>([]);
  const [pendingId, setPendingId] = useState<string>();
  const [status, setStatus] = useState("Loading tech stack.");

  useEffect(() => {
    let active = true;

    getSkills()
      .then((records) => {
        if (!active) {
          return;
        }
        setGroups(records);
        setStatus("");
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setStatus("The tech stack could not be loaded.");
      });

    return () => {
      active = false;
    };
  }, []);

  const applySelection = (records: SkillGroupRecord[], id: string, selected: boolean) =>
    records.map((group) => ({
      ...group,
      skills: group.skills.map((skill) =>
        skill.id === id ? { ...skill, selected } : skill
      ),
    }));

  const onToggle = async (skill: Skill) => {
    const nextSelected = !skill.selected;
    setPendingId(skill.id);
    setGroups((current) => applySelection(current, skill.id, nextSelected));

    try {
      if (nextSelected) {
        await selectSkill(skill.name);
      } else {
        await removeSkill(skill.id);
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
      {status ? <p>{status}</p> : null}
      {groups.length > 0 ? (
        <TechStackTemplate groups={groups} pendingId={pendingId} onToggle={onToggle} />
      ) : null}
    </Layout>
  );
};

export default DashboardTechStack;
