<script lang="ts">
  import type { FormWrapperState } from '../types/types';
  import { Utils } from '../utils/utils';

  import BasicsDetialForm from './BasicsDetialForm.svelte';
  import IdentityForm from './IdentityForm.svelte';
  import AddressForm from './AddressForm.svelte';
  import FinancialIncome from './FinancialIncome.svelte';
  import BusinessEntity from './BusinessEntity.svelte';
  import { Validation } from '../utils/validation';

  const forms: FormWrapperState[] = [
    {
      id: 0,
      title: 'Basics Details',
      formState: Utils.GetBasicsDetailState(),
      // isValidate: false,
      validator: (input: any) => {
        return Validation.validateBasicDetailsForm(input);
      },
    },
    {
      id: 1,
      title: 'Indentity Profilling',
      formState: Utils.GetIndentityState(),
      // isValidate: false,
      validator: (input: any) => {
        return Validation.validateIndentityForm(input);
      },
    },
    {
      id: 2,
      title: 'Address Details',
      formState: Utils.GetAddressState(),
      // isValidate: false,
      validator: (input: any) => {
        return Validation.validateAddressForm(input);
      },
    },
    {
      id: 3,
      title: 'Financial & Income',
      formState: Utils.GetFinancialIncomeState(),
      // isValidate: false,
      validator: (input: any) => {
        return Validation.validateFinancialIncomeForm(input);
      },
    },
    {
      id: 4,
      title: 'Business Entity',
      formState: Utils.GetBusinessEntityState(),
      // isValidate: false,
      validator: (input: any) => {
        return Validation.validateBusinessEntityForm(input);
      },
    },
  ];

  let activeIndex = $state(0);

  function validateForm() {
    return forms[activeIndex].validator(forms[activeIndex].formState);
  }

  function showForm(e: any) {
    if (validateForm()) {
      console.log(e.target.value);
      activeIndex = Number(e.target.value);
      console.log(Number(e.target.value));
    } else {
      alert('Please fill the form');
    }
  }

  function showPreviousForm() {
    activeIndex -= 1;
  }

  function showNextForm() {
    if (validateForm()) {
      activeIndex += 1;
    } else {
      alert('Please fill the form');
    }
  }
</script>

<section class=" bg-linear-to-br from-slate-50 to-slate-100 py-4">
  {activeIndex}
  <div class="max-w-6xl mx-auto">
    <!-- Header -->
    <div class="mb-4">
      <h1 class="text-2xl font-semibold text-slate-900">Business Onboarding</h1>
      <p class="text-slate-500 mt-1 text-md">
        {forms[activeIndex].title} · Step {activeIndex + 1} of {forms.length}
      </p>
    </div>

    <!-- Main Card -->
    <div
      class="
        bg-white/70 backdrop-blur-xl
        rounded-3xl
        border border-white/60
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]
      "
    >
      <div class="grid grid-cols-[1fr_3fr] gap-4 p-6">
        <!-- Stepper -->
        <div class="space-y-6">
          {#each forms as form, index}
            <button
              onclick={showForm}
              value={index}
              class="flex gap-2 items-start text-left w-60 group bg-[#F2F2F2] py-1 px-2 rounded {activeIndex ===
              index
                ? 'bg-[#F5F5F5]'
                : ''} hover:bg-gray-200"
            >
              <!-- Indicator -->
              <!-- <div
                class="
                  h-8 w-8 rounded-full flex items-center justify-center
                  font-medium text-sm transition 
                  {index === activeIndex
                  ? 'bg-blue-600 text-white shadow-lg'
                  : index < activeIndex
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-200 text-slate-400'}
                "
              > -->
              <!-- {index < activeIndex ? '✓' : index + 1} -->
              <span
                class=" rounded-[50%] w-8 h-8 text-center p-0.75 {activeIndex ===
                index
                  ? 'bg-blue-500'
                  : ''}"
              >
                {index + 1}</span
              >
              <!-- </div> -->

              <!-- Text -->
              <span class="mt-1 text-sm"> {form.title}</span>
            </button>
          {/each}
        </div>

        <!-- Form Area -->
        <div
          class="
            bg-white rounded-2xl
            p-8 min-85
            shadow-sm
          "
        >
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

      <!-- Footer -->
      <div
        class="flex justify-between items-center px-10 py-2 bg-white/60 rounded-b-3xl"
      >
        <div>
          {#if activeIndex > 0}
            <button
              onclick={showPreviousForm}
              class="text-slate-500 hover:text-slate-800 transition"
            >
              ← Back
            </button>
          {/if}
        </div>

        <button
          onclick={showNextForm}
          class="
            px-4 py-2 rounded-xl
            bg-blue-600 text-white font-medium
            hover:bg-blue-700
            shadow-lg shadow-blue-600/30
            transition
          "
        >
          {activeIndex >= forms.length - 1 ? 'Save & Finish' : 'Continue →'}
        </button>
      </div>
    </div>
  </div>
</section>
