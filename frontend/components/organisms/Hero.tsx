import ContactLinks from "@components/molecules/ContactLinks";
import Eyebrow from "@components/atoms/Eyebrow";
import Title from "@components/atoms/Title";
import type { Profile } from "@models/profile";
import styles from "./Hero.module.css";

type HeroProps = {
  profile: Profile;
};

export default function Hero({ profile }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div>
        <Eyebrow>{profile.availability}</Eyebrow>
        <Title>{profile.name}</Title>
        <p className={styles.role}>{profile.title}</p>
        <p className={styles.summary}>{profile.summary}</p>
      </div>
      <aside className={styles.facts}>
        <p>{profile.location}</p>
        <p>{profile.relocate}</p>
        <p>{profile.years}</p>
        <ContactLinks contact={profile.contact} />
      </aside>
    </section>
  );
}
