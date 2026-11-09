import NotFoundTemplate from "@components/templates/NotFoundTemplate";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Page not found · Rakheoana Lefela</title>
      </Head>
      <NotFoundTemplate />
    </>
  );
}
