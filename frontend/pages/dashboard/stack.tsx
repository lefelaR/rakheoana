import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Layout from "components/layouts/dashboardLayout";
import TechStackTemplate, {
  type TechStackGroup,
} from "@components/templates/TechStackTemplate";
import type { Skill } from "@components/organisms/SkillGroup";
import {
  getSkillCatalog,
  getSkills,
  removeSkill,
  selectSkill,
  type SkillGroupRecord,
} from "@services/skillsService";

const DashboardTechStack = () => {
  const [groups, setGroups] = useState<TechStackGroup[]>(() => getSkillCatalog());
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
        setGroups(Array.isArray(records) && records.length > 0 ? records : getSkillCatalog());
        setCatalogOnly(false);
        setStatus("");
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setGroups(getSkillCatalog());
        setCatalogOnly(true);
        setStatus(
          "Could not reach the API. Showing the full catalog — selections will apply once the API is available."
        );
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
