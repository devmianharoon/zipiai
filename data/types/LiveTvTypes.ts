export interface LiveTv {
  name: string;
  logo: string; 
  description: string;
  features: string[];
  price: {
    amount: string;
    trial?: string;
  };
}