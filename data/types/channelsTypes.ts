export type Channel = {
  chnlname: string;
  chnlNumber: string;
  logo: string;
  inPackags: number[];
};

export type ChannelData = {
  RSNs: Channel[];
  localChnl: Channel[];
  RSN_Price: string;
  ZipCode: string;
};