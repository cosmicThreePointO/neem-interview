import HouseholdTable from "components/tables/HouseholdTable";

export default function Household({ data, addNewMember }) {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-base font-medium leading-6 -tracking-[0.32]">
        Household
      </h2>
      <HouseholdTable data={data} />
      {/* <a
            href="#"
            onClick={addNewMember}
            className="text-blue-500 mt-4 inline-block"
          >
            +Add new member
          </a> */}
    </div>
  );
}
