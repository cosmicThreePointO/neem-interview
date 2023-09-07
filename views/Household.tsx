import HouseholdTable from "components/tables/HouseholdTable";

interface HouseholdProps {
  data: HouseholdData;
  addNewMember: () => void;
  handleSubscriberChange: (index: number) => void;
  handleCoveredChange: (index: number) => void;
  handleInsuranceChange: (index: number, newValue: string) => void;
}

export default function Household({
  data,
  addNewMember,
  handleSubscriberChange,
  handleCoveredChange,
  handleInsuranceChange,
}: HouseholdProps) {
  return (
    <div className="flex flex-col gap-y-3 w-full">
      <h2 className="text-base leading-6 -tracking-[0.32] font-bold ">
        Household
      </h2>
      <HouseholdTable
        data={data}
        handleSubscriberChange={handleSubscriberChange}
        handleCoveredChange={handleCoveredChange}
        handleInsuranceChange={handleInsuranceChange}
      />
      <div className="flex items-center w-full">
        <button
          onClick={addNewMember}
          className="text-neem-turquoise text-xs font-rubik font-normal leading-[1.33] tracking-[-0.24px] border-0 hover:opacity-80 hover:cursor-pointer focus:outline-none"
        >
          +Add new member
        </button>
      </div>
    </div>
  );
}
