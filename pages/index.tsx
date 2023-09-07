import HouseholdTable from "components/tables/HouseholdTable";
import Head from "next/head";
import { useCallback, useState } from "react";

export default function Home() {
  // TODO: Replace this with a call to the API + loading + error states, deal with undefined case TS
  const [data, setData] = useState<HouseholdData>(HOUSEHOLD_MOCK);

  const addMemberHandler = useCallback((newMember: HouseholdMember) => {
    setData((prevData) => [...prevData, { ...newMember }]);
  }, []);

  return (
    <>
      <Head>
        <title>Get Neem Interview</title>
        <meta name="description" content="Get Neem Interview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto max-w-2xl">
        <section className="flex flex-col gap-y-6"></section>
      </main>
    </>
  );
}
