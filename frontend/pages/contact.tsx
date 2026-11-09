import { useState } from "react";
import ContactTemplate from "@components/templates/ContactTemplate";
import type { ContactMessage, Profile } from "@models/profile";
import { getProfile, sendContact } from "@services/profileService";
import type { GetStaticProps } from "next";
import Head from "next/head";

type ContactPageProps = {
  profile: Profile;
};

export default function ContactPage({ profile }: ContactPageProps) {
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");

  async function handleSubmit(message: ContactMessage) {
    setPending(true);
    setNotice("");
    try {
      await sendContact(message);
      setNotice("Sent.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "The message could not be sent.");
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact · Rakheoana Lefela</title>
      </Head>
      <ContactTemplate profile={profile} pending={pending} notice={notice} onSubmit={handleSubmit} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async () => {
  const profile = await getProfile();
  return { props: { profile } };
};
