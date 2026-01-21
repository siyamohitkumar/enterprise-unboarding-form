import type {
  AddressState,
  BasicsDetailState,
  BusinessEntityState,
  FinancialIncomeState,
  IndentityState,
} from '../types/types';

export abstract class Validation {
  static validateBasicDetailsForm(input: BasicsDetailState): boolean {
    if (!input.businessType) {
      return false;
    }
    return true;
  }
  static validateIndentityForm(input: IndentityState): boolean {
    if (
      !input.legalName ||
      !input.residencyStatus ||
      !input.riskCategory ||
      !input.sectionedCountry
    ) {
      console.log(input.dob);
      console.log(input.legalName);
      console.log(input.nationality);
      console.log(input.pepStatus);
      console.log(input.residencyStatus);
      console.log(input.riskCategory);
      console.log(input.sectionedCountry);

      return false;
    }
    return true;
  }
  static validateAddressForm(input: AddressState): boolean {
    if (
      !input.addressLineOne ||
      !input.addressLineTwo ||
      !input.city ||
      !input.country ||
      !input.pinCode ||
      !input.state
    ) {
      return false;
    }
    return true;
  }
  static validateFinancialIncomeForm(input: FinancialIncomeState): boolean {
    if (
      !input.anualIncome ||
      !input.anualIncome ||
      !input.cryptoExposure ||
      !input.currency ||
      !input.incomeSource ||
      !input.taxResidency
    ) {
      return false;
    }
    return true;
  }
  static validateBusinessEntityForm(input: BusinessEntityState): boolean {
    if (
      !input.countryOfIncorporation ||
      !input.directors ||
      !input.entityType ||
      !input.registrationNumber ||
      !input.shareHolders
    ) {
      return false;
    }
    return true;
  }
}
