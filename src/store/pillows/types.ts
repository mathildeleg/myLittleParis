export interface PillowsState {
  pillowCount: number;
  subscriber: Subscriber;
}

export interface Subscriber {
  email?: string;
  birthDate?: Date;
  optin?: boolean;
}