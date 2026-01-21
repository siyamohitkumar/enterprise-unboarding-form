type FormWrapperState = {
  id: number;
  title: string;
  formState: any;
  // isValidate: boolean;
  validator:(input:any)=>boolean
};

type BasicsDetailState = {
  businessType: string;
};

type IndentityState = {
  legalName: string;
  nationality: string;
  residencyStatus: string;
  dob: string;
  riskCategory: string;
  pepStatus: string;
  sectionedCountry: string;
};

type AddressState = {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
};

type FinancialIncomeState = {
  incomeSource: string;
  anualIncome: string;
  currency: string;
  taxResidency: string;
  cryptoExposure: string;
  bankAccount: string;
};

type BusinessEntityState = {
  entityType: string;
  registrationNumber: string;
  countryOfIncorporation: string;
  shareHolders: string;
  directors: string;
};

export type {
  BasicsDetailState,
  FormWrapperState,
  IndentityState,
  AddressState,
  FinancialIncomeState,
  BusinessEntityState,
};
