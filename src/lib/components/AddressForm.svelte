<script lang="ts">
  import type { AddressState } from '../types/types';
  export let formState: AddressState;
</script>

<div class="flex flex-col gap-1 font-light">
  <div class="flex justify-between">
    <label for="addressLineOne">Address Line 1</label>
    <input
      type="text"
      id="addressLineOne"
      bind:value={formState.addressLineOne}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="addressLineTwo">Address Line 1</label>
    <input
      type="text"
      id="addressLineTwo"
      bind:value={formState.addressLineTwo}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="city">City</label>
    <input
      type="text"
      id="city"
      bind:value={formState.city}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="state">State</label>
    <input
      type="text"
      id="state"
      bind:value={formState.state}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="pinCode">Pin Code</label>
    <input
      type="text"
      id="pinCode"
      bind:value={formState.pinCode}
      class="border rounded"
    />
  </div>

  <div class="flex justify-between">
    <label for="country">Country</label>
    <input
      type="text"
      id="country"
      bind:value={formState.country}
      class="border rounded"
    />
  </div>
</div>
