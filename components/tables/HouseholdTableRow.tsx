import { useEffect, useState } from "react";

interface HouseholdTableRowProps {
  person: HouseholdMember;
  index: number;
  handleSubscriberChange: (index: number) => void;
  handleCoveredChange: (index: number) => void;
  handleInsuranceChange: (index: number, newValue: string) => void;
  handleIDChange: (index: number, newValue: string) => void;
}

export default function HouseholdTableRow({
  person,
  index,
  handleSubscriberChange,
  handleCoveredChange,
  handleInsuranceChange,
  handleIDChange,
}: HouseholdTableRowProps) {
  const [localID, setLocalID] = useState(person.id || "");

  return (
    <div className="grid grid-cols-[65px,1fr,auto,120px,120px] gap-4 items-center">
      <div className="flex justify-center">
        <input
          onChange={() => handleCoveredChange(index)}
          type="checkbox"
          checked={person.covered}
        />
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
          {person.firstName[0]}
          {person.lastName[0]}
        </div>
        <span className="ml-4">
          {person.firstName} {person.lastName} ({person.nickname})
        </span>
      </div>
      <div className="flex justify-center items-center">
        <input
          type="radio"
          onChange={() => handleSubscriberChange(index)}
          checked={person.subscribed}
          name={`subscriber${index}`}
        />
      </div>
      <div className="flex items-center">
        <select
          value={person.insurance}
          onChange={(e) => handleInsuranceChange(index, e.target.value)}
          className={`form-select w-full border border-gray-200 bg-white rounded-md shadow-custom p-2 ${
            person.insurance === "" ? "bg-gray-100" : "bg-white"
          }`}
        >
          <option value=""></option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
        </select>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ins. ID/SSN"
          className="form-input w-full border border-gray-200 bg-white rounded-md shadow-custom p-2"
          value={localID}
          onChange={(e) => setLocalID(e.target.value)}
          onBlur={() => handleIDChange(index, localID)}
        />
      </div>
    </div>
  );
}
