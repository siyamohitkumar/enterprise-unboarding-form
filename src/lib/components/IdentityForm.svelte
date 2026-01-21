<script lang="ts">
  import type { IndentityState } from '../types/types';
  export let formState: IndentityState;

  let countries = ['India', 'US', 'Rusia', 'Japan', 'Germany'];
  let selected = countries[0];

  let pepStatus = ['Yes', 'No'];
  formState.pepStatus = pepStatus[0];
</script>

<div class="">
  <!-- Identity Information -->
  <section>
    <h3 class="text-lg font-semibold text-slate-900">Identity Information</h3>
    <p class="text-sm text-slate-500 mb-5">
      Used to verify legal identity and residency
    </p>

    <div class="flex mb-5 gap-2">
      <div class="flex flex-col gap-1">
        <label for="legalName" class="ui-label text-[15px] text-gray-900"
          >Legal Name</label
        >
        <input
          id="legalName"
          type="text"
          bind:value={formState.legalName}
          class="ui-input border border-gray-400 w-50 h-10 px-2 text-[14px] rounded"
          placeholder="Enter legal name"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="nationality" class="ui-label text-[15px] text-gray-900"
          >Nationality</label
        >
        <select
          id="nationality"
          bind:value={selected}
          class="ui-input border border-gray-400 w-40 h-10 text-[14px] text-gray-500 rounded"
        >
          {#each countries as country}
            <option value={country}>{country}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label for="residencyStatus" class="ui-label text-[15px] text-gray-900"
          >Residency Status</label
        >
        <input
          id="residencyStatus"
          type="text"
          bind:value={formState.residencyStatus}
          class="ui-input border border-gray-400 rounded w-50 h-10 px-2 text-sm"
          placeholder="Resident / Non-resident"
        />
      </div>

      <div class="flex flex-col gap-1 col-span-2">
        <label for="dob" class="ui-label text-[15px] text-gray-900"
          >Date of Birth</label
        >
        <input
          id="dob"
          type="date"
          bind:value={formState.dob}
          class="ui-input border border-gray-400 w-40 rounded h-10 px-2 text-sm text-gray-500"
        />
      </div>
    </div>
  </section>

  <!-- Risk & Compliance -->
  <section
    class="rounded-2xl bg-slate-50 pt-4 px-4 pb-6 text-[14px] border border-gray-300"
  >
    <h3 class="text-lg font-semibold text-slate-900 mb-2">Risk & Compliance</h3>

    <div class="flex gap-2">
      <div class="flex flex-col gap-1">
        <label for="riskCategory" class="ui-label text-[15px] text-gray-900"
          >Risk Category</label
        >
        <input
          id="riskCategory"
          type="text"
          bind:value={formState.riskCategory}
          class="ui-input border border-gray-400 w-60 h-10 px-2 rounded"
          placeholder="Low / Medium / High"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="pepStatus" class="ui-label text-[15px] text-gray-900"
          >PEP Status</label
        >
        <select
          id="pepStatus"
          bind:value={formState.pepStatus}
          class="ui-input border border-gray-400 w-60 h-10 px-2 rounded"
        >
          {#each pepStatus as status}
            <option value={status}>{status}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label
          for="sectionedCountry"
          class="ui-label text-[15px] text-gray-900"
        >
          Sanctioned Country
        </label>
        <input
          id="sectionedCountry"
          type="text"
          bind:value={formState.sectionedCountry}
          class="ui-input border border-gray-400 rounded w-60 h-10 px-2"
          placeholder="If applicable"
        />
      </div>
    </div>
  </section>
</div>
