import styles from "./RoleMeta.module.css";

type RoleMetaProps = {
  period: string;
  location: string;
};

export default function RoleMeta({ period, location }: RoleMetaProps) {
  return (
    <p className={styles.meta}>
      <span>{period}</span>
      <span aria-hidden="true">·</span>
      <span>{location}</span>
    </p>
  );
}
