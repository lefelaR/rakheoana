import SkillIcon from "@components/atoms/SkillIcon";
import styles from "./SkillTile.module.css";

type SkillTileProps = {
  name: string;
  selected: boolean;
  disabled?: boolean;
  onToggle?: () => void;
};

const SkillTile = ({ name, selected, disabled, onToggle }: SkillTileProps) => {
  const className = selected ? `${styles.tile} ${styles.selected}` : styles.tile;
  const content = (
    <>
      <span className={styles.icon}>
        <SkillIcon name={name} />
      </span>
      <span>{name}</span>
    </>
  );

  if (!onToggle) {
    return <div className={className}>{content}</div>;
  }

  return (
    <button
      type="button"
      className={`${className} ${styles.button}`}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onToggle}
    >
      {content}
    </button>
  );
};

export default SkillTile;
