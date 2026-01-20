<script lang="ts">
  import type { FinancialIncomeState } from '../types/types';

  export let formState: FinancialIncomeState;
</script>

<div class="flex flex-col gap-2 font-light">
  <div class="flex justify-between">
    <label for="incomeSource">Income Source</label>
    <input
      type="text"
      id="incomeSource"
      bind:value={formState.incomeSource}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="anualIncome">Anual Income</label>
    <input
      type="text"
      id="anualIncome"
      bind:value={formState.anualIncome}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="currency">Currency</label>
    <input
      type="text"
      id="currency"
      bind:value={formState.currency}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="taxResidency">Tax Residency</label>
    <input
      type="text"
      id="taxResidency"
      bind:value={formState.taxResidency}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="cryptoExposure">Crypto Exposure</label>
    <input
      type="text"
      id="cryptoExposure"
      bind:value={formState.cryptoExposure}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="bankAccount">Bank Account</label>
    <input
      type="text"
      id="bankAccount"
      bind:value={formState.bankAccount}
      class="border rounded"
    />
  </div>
</div>
