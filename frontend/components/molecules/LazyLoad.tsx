import { cloneElement, type CSSProperties, type ReactElement } from "react";
import styles from "./LazyLoad.module.css";

type LazyLoadProps = {
  children: ReactElement;
  /** Estimated block size until the browser renders this section. */
  intrinsicSize?: string;
};

const childProps = (element: ReactElement) =>
  element.props as { className?: string; style?: CSSProperties };

/**
 * Skips layout and paint until the section is near the viewport.
 * The markup stays in the document.
 */
const LazyLoad = ({ children, intrinsicSize = "32rem" }: LazyLoadProps) => {
  const props = childProps(children);
  const style = {
    ...props.style,
    "--lazy-size": intrinsicSize,
  } as CSSProperties;

  return cloneElement(children, {
    className: [styles.root, props.className].filter(Boolean).join(" "),
    style,
  });
};

export default LazyLoad;
