<script lang="ts">
  import type { BusinessEntityState } from '../types/types';

  export let formState: BusinessEntityState;
</script>

<div class="flex flex-col gap-2 font-light">
  <p>{formState.entityType}</p>
  <div class="flex justify-between">
    <label for="entityType">Entity Type</label>
    <input
      type="text"
      id="entityType"
      bind:value={formState.entityType}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="registrationNuber">Registration Number</label>
    <input
      type="text"
      id="registrationNumber"
      bind:value={formState.registrationNumber}
      class="border rounded"
    />
  </div>
  <div class="flex justify-between">
    <label for="countryOfIncorporation">Country of Incorporation</label>
    <input
      type="text"
      id="countryOfIncorporation"
      bind:value={formState.countryOfIncorporation}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="shareHolders">Share Holder</label>
    <input
      type="text"
      id="shareHolders"
      bind:value={formState.shareHolders}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="directors">Director</label>
    <input
      type="text"
      id="directors"
      bind:value={formState.directors}
      class="border rounded"
    />
  </div>
</div>
