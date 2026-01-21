<script lang="ts">
  import type { FinancialIncomeState } from '../types/types';

  export let formState: FinancialIncomeState;

  let currencies = ['INR', 'USD', 'NPR', 'AED'];
  formState.currency = currencies[0];

  let cryptoExposures = ['None', 'Low', 'Medium', 'High'];
  formState.cryptoExposure = cryptoExposures[0];
</script>

<div class="space-y-10">
  <!-- Financial & Income -->
  <section>
    <h3 class="text-lg font-semibold text-slate-900 mb-1">
      Financial & Income Details
    </h3>
    <p class="text-sm text-slate-500 mb-6">
      Used for financial profiling and risk assessment
    </p>

    <div class="flex flex-wrap gap-4">
      <div class="flex flex-col gap-1">
        <label for="incomeSource" class="ui-label"> Income Source </label>
        <input
          id="incomeSource"
          type="text"
          bind:value={formState.incomeSource}
          class="ui-input border border-gray-400 rounded text-[14px] w-55 h-10 px-2"
          placeholder="Salary, Business, Investments"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="anualIncome" class="ui-label"> Annual Income </label>
        <input
          id="anualIncome"
          type="number"
          bind:value={formState.anualIncome}
          class="ui-input border border-gray-400 h-10 px-2 text-[14px] rounded w-55"
          placeholder="Amount per year"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="currency" class="ui-label"> Currency </label>
        <select
          id="currency"
          bind:value={formState.currency}
          class="ui-input border w-40 h-10 border-gray-400 rounded text-[14px] text-gray-500"
        >
          {#each currencies as currency}
            <option value={currency}>{currency}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="taxResidency" class="ui-label"> Tax Residency </label>
        <input
          id="taxResidency"
          type="text"
          bind:value={formState.taxResidency}
          class="ui-input border border-gray-400 px-2 rounded w-55 h-10"
          placeholder="Tax residence"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="cryptoExposure" class="ui-label"> Crypto Exposure </label>
        <select
          id="cryptoExposure"
          bind:value={formState.cryptoExposure}
          class="ui-input border border-gray-400 rounded w-40 h-10 text-[14px]"
        >
          {#each cryptoExposures as cryptoExposure}
            <option value={cryptoExposure}>{cryptoExposure}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="bankAccount" class="ui-label"> Bank Account Number </label>
        <input
          id="bankAccount"
          type="number"
          bind:value={formState.bankAccount}
          class="ui-input border w-55 h-10 px-2 border-gray-400 rounded"
          placeholder="Account number"
        />
      </div>
    </div>
  </section>
</div>
