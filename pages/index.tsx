import HouseholdTable from "components/tables/HouseholdTable";
import { HOUSEHOLD_MOCK } from "mocks/household";
import Head from "next/head";
import { useCallback, useState } from "react";
import Household from "views/Household";

export default function Home() {
  // TODO: Replace this with a call to the API + loading + error states, deal with undefined case TS
  const [data, setData] = useState<HouseholdData>(HOUSEHOLD_MOCK);

  const addMemberHandler = useCallback((newMember: HouseholdMember) => {
    setData((prevData) => [...prevData, { ...newMember }]);
  }, []);

  const handleSubscriberChange = useCallback((index: number) => {
    setData((prevData) => {
      const newData = prevData.map((item, i) =>
        i === index
          ? { ...item, subscribed: true }
          : { ...item, subscribed: false }
      );
      return newData;
    });
  }, []);

  const handleCoveredChange = useCallback((index: number) => {
    setData((prevData) => {
      const newData = prevData.map((item, i) =>
        i === index ? { ...item, covered: !item.covered } : item
      );
      return newData;
    });
  }, []);

  const handleInsuranceChange = useCallback(
    (index: number, newValue: string) => {
      setData((prevData) => {
        const newData = prevData.map((item, i) =>
          i === index ? { ...item, insurance: newValue } : item
        );
        return newData;
      });
    },
    []
  );

  return (
    <>
      <Head>
        <title>Get Neem Interview</title>
        <meta name="description" content="Get Neem Interview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto max-w-2xl">
        <section className="flex flex-col gap-y-6">
          <Household
            handleSubscriberChange={handleSubscriberChange}
            handleCoveredChange={handleCoveredChange}
            handleInsuranceChange={handleInsuranceChange}
            data={data}
            addNewMember={() =>
              addMemberHandler({
                covered: false,
                firstName: "Test FN",
                lastName: "Test LN",
                nickname: "tester",
                subscribed: false,
                insurance: "",
                id: "",
              })
            }
          />
        </section>
      </main>
    </>
  );
}
