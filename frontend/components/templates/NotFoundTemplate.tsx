import SectionHeading from "@components/atoms/SectionHeading";
import TextLink from "@components/atoms/TextLink";
import styles from "./NotFoundTemplate.module.css";

export default function NotFoundTemplate() {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Page not found</SectionHeading>
      <TextLink href="/">Back home</TextLink>
    </div>
  );
}
