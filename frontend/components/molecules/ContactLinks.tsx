import TextLink from "@components/atoms/TextLink";
import type { ContactDetails } from "@models/profile";
import styles from "./ContactLinks.module.css";

type ContactLinksProps = {
  contact: ContactDetails;
};

export default function ContactLinks({ contact }: ContactLinksProps) {
  return (
    <ul className={styles.list}>
      <li>
        <TextLink href={`mailto:${contact.email}`}>{contact.email}</TextLink>
      </li>
      <li>
        <TextLink href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</TextLink>
      </li>
      <li>
        <TextLink href={contact.linkedin} target="_blank">
          LinkedIn
        </TextLink>
      </li>
      <li>
        <TextLink href={contact.site} target="_blank">
          {contact.site.replace(/^https?:\/\//, "")}
        </TextLink>
      </li>
    </ul>
  );
}
