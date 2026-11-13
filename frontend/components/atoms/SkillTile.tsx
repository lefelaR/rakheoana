import styles from "./SkillTile.module.css";

type SkillTileProps = {
  name: string;
};

const SkillTile = ({ name }: SkillTileProps) => {
  return <div className={styles.tile}>{name}</div>;
};

export default SkillTile;
