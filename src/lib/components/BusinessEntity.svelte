<script lang="ts">
  import type { BusinessEntityState } from '../types/types';

  export let formState: BusinessEntityState;

  let entityTypes = ['OPC', 'Pvt Ltd', 'LLP'];
  formState.entityType = entityTypes[0];
</script>

<h2 class="text-lg font-semibold text-gray-800">Business Entity</h2>
<p class="mb-4 text-[14px] text-gray-600">
  Identifies the legal business entity.
</p>

<div class="flex flex-wrap gap-2 font-light">
  <div class="flex flex-col gap-1">
    <label for="entityType" class="text-[15px]">Entity Type</label>
    <select
      name="entityType"
      id="entityType"
      bind:value={formState.entityType}
      class="w-55 border border-gray-400 h-10 rounded text-[14px]"
    >
      {#each entityTypes as entityType}
        <option value={entityType} class="text-gray-400">{entityType}</option>
      {/each}
    </select>
  </div>

  <div class="flex flex-col gap-1">
    <label for="registrationNumber" class="text-[15px]"
      >Registration Number</label
    >
    <input
      type="number"
      id="registrationNumber"
      placeholder="Enter registration number"
      bind:value={formState.registrationNumber}
      class="border rounded px-2 py-1 w-55 text-[14px] h-10 border-gray-400"
    />
  </div>

  <div class="flex flex-col gap-1">
    <label for="countryOfIncorporation">Country of Incorporation</label>
    <input
      type="text"
      id="countryOfIncorporation"
      placeholder="e.g. India"
      bind:value={formState.countryOfIncorporation}
      class="border rounded px-2 text-[14px] py-1 border-gray-400 w-55 h-10"
    />
  </div>

  <div class="flex flex-col gap-1">
    <label for="shareHolders">Share Holder</label>
    <input
      type="text"
      id="shareHolders"
      placeholder="Name(s) of shareholder(s)"
      bind:value={formState.shareHolders}
      class="border rounded text-[14px] px-2 py-1 h-10 w-55 border-gray-400"
    />
  </div>

  <div class="flex flex-col gap-1">
    <label for="directors" class="text-[14px]">Director</label>
    <input
      type="text"
      id="directors"
      placeholder="Name(s) of director(s)"
      bind:value={formState.directors}
      class="border rounded px-2 py-1 text-[14px] border-gray-400 w-55 h-10"
    />
  </div>
</div>
