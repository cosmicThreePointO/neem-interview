export default function HouseholdTableRow({ person, index }) {
  return (
    <div className="grid grid-cols-[65px,1fr,auto,120px,120px] gap-4 items-center">
      <div className="flex items-center">
        <input type="checkbox" checked={person.covered} />
      </div>
      <div className="flex">
        <div className="rounded-full bg-gray-500 text-white w-8 h-8 flex items-center justify-center">
          {person.firstName[0]}
          {person.lastName[0]}
        </div>
        <span className="ml-4">
          {person.firstName} {person.lastName} ({person.location})
        </span>
      </div>
      <div className="w-24 h-24 flex items-center">
        <input
          type="radio"
          checked={person.subscribed}
          name={`subscriber${index}`}
        />
      </div>
      <div>
        <select className="form-select w-full">
          <option value="Primary" selected={person.insurance === "Primary"}>
            Primary
          </option>
          <option value="" selected={person.insurance === ""}>
            --
          </option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Ins. ID/SSN"
          className="form-input w-full"
          defaultValue={person.id}
        />
      </div>
    </div>
  );
}
