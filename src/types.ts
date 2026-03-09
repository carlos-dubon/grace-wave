export type Site = {
  title: string;
  description: string;
  streamUrl: string;
  bankAccountDetails: {
    bankName: string;
    accountNumber: string;
    accountType: string;
    accountHolder: string;
  };
};
