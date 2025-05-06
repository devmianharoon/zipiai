export type Plan = {
  plan_name: string;
  Price: string;
  Speeds: string;
  Contract: string;
  Upfront_Cost: string;
  Extras: string;
};

export type Provider = {
  ProviderName: string;
  logo: string;
  contact: string;
  Plans_Starting_At: string;
  Speeds_Up_To: string;
  Connection_Type: string;
  available: string;
  feactures: string[];
  "Data Caps": string;
  Contract: string;
  "Best For": string;
  plans: Plan[];
};

export type Rank = {
  ProviderName: string;
  Rank: number;
  Reason: string;
};

export type ConnectionType = {
  Description: string;
  Pros: string[];
  Cons: string[];
  "Best For": string;
};

export type Comparison = {
  DSL: ConnectionType;
  Cable: ConnectionType;
  Fiber: ConnectionType;
  Satellite: ConnectionType;
};

export type InternetData = {
  providers: Provider[];
  Ranks: Rank[];
  comparison: Comparison;
};