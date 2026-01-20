<script lang="ts">
  import type { FormWrapperState } from '../types/types';
  import { Utils } from '../utils/utils';

  import BasicsDetialForm from './BasicsDetialForm.svelte';
  import IdentityForm from './IdentityForm.svelte';
  import AddressForm from './AddressForm.svelte';
  import FinancialIncome from './FinancialIncome.svelte';
  import BusinessEntity from './BusinessEntity.svelte';

  const forms: FormWrapperState[] = [
    {
      id: 0,
      title: 'Basics Detail',
      formState: Utils.GetBasicsDetailState(),
    },
    {
      id: 1,
      title: 'Indentity Profilling',
      formState: Utils.GetIndentityState(),
    },
    {
      id: 2,
      title: 'Address Details',
      formState: Utils.GetAddressState(),
    },
    {
      id: 3,
      title: 'Financial & Income',
      formState: Utils.GetFinancialIncomeState(),
    },
    {
      id: 4,
      title: 'Business Entity',
      formState: Utils.GetBusinessEntityState(),
    },
  ];

  let activeIndex = $state(0);

  function showForm(e: any) {
    activeIndex = e.target.value;
  }
</script>

<section class="w-[64%] m-auto mt-10 rounded-2xl bg-gray-50 text-sm">
  <div class="bg-white rounded-2xl shadow-lg border border-gray-200">
    <h2 class="text-center py-6 font-semibold text-2xl text-gray-800 border-b">
      Business Onboarding Details
    </h2>

    <div class="grid grid-cols-[1fr_1.5fr] gap-6 p-6">
    
      <div class="border-r pr-4 space-y-2">
        {#each forms as form, index}
          <button
            onclick={showForm}
            value={index}
            class={`w-full text-left px-4 py-2 rounded-lg transition
              ${
                index === activeIndex
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {index + 1}. {form.title}
          </button>
        {/each}
      </div>

      <div class="p-4 min-h-65">
        {#if activeIndex == 0}
          <BasicsDetialForm formState={forms[0].formState} />
        {:else if activeIndex == 1}
          <IdentityForm formState={forms[1].formState} />
        {:else if activeIndex == 2}
          <AddressForm formState={forms[2].formState} />
        {:else if activeIndex == 3}
          <FinancialIncome formState={forms[3].formState} />
        {:else}
          <BusinessEntity formState={forms[4].formState} />
        {/if}
      </div>
    </div>

    <!-- Footer Navigation -->
    <div
      class="flex justify-between items-center px-6 py-4 border-t bg-gray-50 rounded-b-2xl"
    >
      <div>
        {#if activeIndex > 0}
          <button
            class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            onclick={() => (activeIndex -= 1)}
          >
            ← Previous
          </button>
        {/if}
      </div>

      <button
        class="px-6 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
        onclick={() => (activeIndex += 1)}
      >
        {activeIndex >= 4 ? 'Save' : 'Next →'}
      </button>
    </div>
  </div>
</section>
