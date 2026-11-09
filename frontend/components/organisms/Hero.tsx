import Monogram from "@components/atoms/Monogram";
import Title from "@components/atoms/Title";
import type { Profile } from "@models/profile";
import styles from "./Hero.module.css";

type HeroProps = {
  profile: Profile;
};

function initialsFrom(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Monogram href="/" label={`${profile.name}, home`}>
        {initialsFrom(profile.name)}
      </Monogram>
      <p className={styles.name}>{profile.name}</p>
      <Title>{profile.title}</Title>
      <p className={styles.place}>{profile.location}</p>
    </section>
  );
}
