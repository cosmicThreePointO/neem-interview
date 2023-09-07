declare interface HouseholdMember {
  covered: boolean;
  firstName: string;
  lastName: string;
  nickname: string;
  subscribed: boolean;
  insurance: string;
  id?: string;
}

declare type HouseholdData = HouseholdMember[];