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
  };
  
  type Rank = {
    ProviderName: string;
    Rank: number;
    Reason: string;
  };
  
  type Comparison = {
    Type: string;
    Description: string;
    Pros: string[];
    Cons: string[];
    "Best For": string;
  };
  
 export type InternetData = {
    providers: Provider[];
    Ranks: Rank[];
    comparison: Comparison[];
  };
  