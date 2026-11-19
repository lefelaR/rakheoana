import styles from "./LoadingOverlay.module.css";

type LoadingOverlayProps = {
  label: string;
};

const LoadingOverlay = ({ label }: LoadingOverlayProps) => {
  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
    </div>
  );
};

export default LoadingOverlay;
