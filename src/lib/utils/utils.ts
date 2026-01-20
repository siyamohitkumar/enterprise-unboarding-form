import type {
  AddressState,
  BasicsDetailState,
  BusinessEntityState,
  FinancialIncomeState,
  IndentityState,
} from "../types/types";

export abstract class Utils {
  static GetBasicsDetailState(): BasicsDetailState {
    return {
      businessType: "",
    };
  }
  static GetIndentityState(): IndentityState {
    return {
      legalName: "",
      nationality: "",
      residencyStatus: "",
      dob: "",
      riskCategory: "",
      pepStatus: "",
      sectionedCountry: "",
    };
  }
  static GetAddressState(): AddressState {
    return {
      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      state: "",
      pinCode: "",
      country: "",
    };
  }
  static GetFinancialIncomeState(): FinancialIncomeState {
    return {
      incomeSource: "",
      anualIncome: "",
      currency: "",
      taxResidency: "",
      cryptoExposure: "",
      bankAccount: "",
    };
  }
  static GetBusinessEntityState(): BusinessEntityState {
    return {
      entityType: "",
      registrationNumber: "",
      countryOfIncorporation: "",
      shareHolders: "",
      directors: "",
    };
  }
}
