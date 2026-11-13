import type { ReactNode } from "react";
import styles from "./SkillTile.module.css";

type SkillTileProps = {
  name: string;
  icon: ReactNode;
};

const SkillTile = ({ name, icon }: SkillTileProps) => {
  return (
    <div className={styles.tile}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span>{name}</span>
    </div>
  );
};

export default SkillTile;
