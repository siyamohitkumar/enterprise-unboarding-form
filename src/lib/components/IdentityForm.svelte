<script lang="ts">
  import type { IndentityState } from '../types/types';
  export let formState: IndentityState;

  let countries = ['India', 'US', 'Rusia', 'Japan', 'Germany'];
  let selected = countries[0];
</script>

<div class="flex flex-col gap-2 font-light">
  <div class="flex justify-between">
    <label for="legalName">Legal Name</label>
    <input
      type="text"
      id="legalName"
      bind:value={formState.legalName}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="nationality">Nationality</label>
    <select
      name="nationlity"
      id="nationlity"
      bind:value={selected}
      class="border rounded"
    >
      {#each countries as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
  <div class="flex justify-between">
    <label for="residencyStatus">Residency Status</label>
    <input
      type="text"
      id="residencyStatus"
      bind:value={formState.residencyStatus}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="dob">DOB</label>
    <input
      type="date"
      id="dob"
      bind:value={formState.dob}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="riskCategory">Risk Category</label>
    <input
      type="text"
      id="riskCategory"
      bind:value={formState.riskCategory}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="pepStatus">PEP Status</label>
    <input
      type="text"
      id="pepStatus"
      bind:value={formState.pepStatus}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="sectionedCountry">Sectioned Country</label>
    <input
      type="text"
      id="sectionedCountry"
      bind:value={formState.sectionedCountry}
      class="border rounded"
    />
  </div>
</div>
