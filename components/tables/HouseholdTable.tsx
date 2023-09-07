import HouseHoldTableRow from "./HouseholdTableRow";

export default function HouseholdTable({ data }) {
  return (
    <div className="grid gap-y-6">
      {data.map((person, index) => (
        <HouseHoldTableRow key={index} person={person} index={index} />
      ))}
    </div>
  );
}
