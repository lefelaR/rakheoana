import ContactForm from "@components/organisms/ContactForm";
import ContactLinks from "@components/molecules/ContactLinks";
import SectionHeading from "@components/atoms/SectionHeading";
import type { ContactMessage, Profile } from "@models/profile";
import styles from "./ContactTemplate.module.css";

type ContactTemplateProps = {
  profile: Profile;
  pending: boolean;
  notice: string;
  onSubmit: (message: ContactMessage) => void;
};

export default function ContactTemplate({ profile, pending, notice, onSubmit }: ContactTemplateProps) {
  return (
    <div className={`page ${styles.page}`}>
      <SectionHeading>Contact</SectionHeading>
      <p className={styles.lede}>
        {profile.location}. {profile.relocate}.
      </p>
      <ContactLinks contact={profile.contact} />
      <ContactForm pending={pending} notice={notice} onSubmit={onSubmit} />
    </div>
  );
}
