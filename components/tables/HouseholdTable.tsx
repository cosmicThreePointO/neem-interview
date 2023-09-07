import HouseholdTableRow from "./HouseholdTableRow";
import { v4 as uuidv4 } from "uuid";

interface HouseholdTableProps {
  data: HouseholdData;
  handleSubscriberChange: (index: number) => void;
  handleCoveredChange: (index: number) => void;
  handleInsuranceChange: (index: number, newValue: string) => void;
  handleIDChange: (index: number, newValue: string) => void;
}

export default function HouseholdTable({
  data,
  handleSubscriberChange,
  handleCoveredChange,
  handleInsuranceChange,
  handleIDChange,
}: HouseholdTableProps) {
  return (
    <div className="grid gap-y-3">
      <div className="grid grid-cols-[65px,1fr,auto,120px,120px] gap-4 items-center">
        <div className="flex justify-center">Covered</div>
        <div className="flex">Name</div>
        <div className="flex justify-center">Subscriber</div>
        <div className="flex">Insurance</div>
        <div className="flex">ID</div>
      </div>
      {data?.map((person: HouseholdMember, index) => (
        <HouseholdTableRow
          key={uuidv4()}
          person={person}
          index={index}
          handleSubscriberChange={handleSubscriberChange}
          handleCoveredChange={handleCoveredChange}
          handleInsuranceChange={handleInsuranceChange}
          handleIDChange={handleIDChange}
        />
      ))}
    </div>
  );
}
