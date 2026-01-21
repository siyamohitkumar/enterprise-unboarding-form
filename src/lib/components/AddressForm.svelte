<script lang="ts">
  import type { AddressState } from '../types/types';
  export let formState: AddressState;
</script>

<div class="">
  <section>
    <h3 class="text-lg font-semibold text-slate-900">Address Details</h3>
    <p class="text-sm text-slate-500 mb-4">
      Used to verify your current residential address
    </p>

    <div class="flex w-3xl flex-wrap gap-2">
      <div class=" flex flex-col">
        <label for="addressLineOne" class="ui-label"> Address Line 1 </label>
        <input
          id="addressLineOne"
          type="text"
          bind:value={formState.addressLineOne}
          class="ui-input border px-2 border-gray-400 rounded w-80 h-10 text-[14px]"
          placeholder="Street address, building, apartment"
        />
      </div>

      <div class=" flex flex-col">
        <label for="addressLineTwo" class="ui-label">
          Address Line 2 (Optional)
        </label>
        <input
          id="addressLineTwo"
          type="text"
          bind:value={formState.addressLineTwo}
          class="ui-input border-gray-400 border px-2 rounded w-80 h-10 text-[14px]"
          placeholder="Landmark, area, etc."
        />
      </div>

      <div class="flex flex-col">
        <label for="city" class="ui-label">City</label>
        <input
          id="city"
          type="text"
          bind:value={formState.city}
          class="ui-input border border-gray-400 rounded w-53 h-10 text-[14px] px-2"
          placeholder="City"
        />
      </div>

      <div class="flex flex-col">
        <label for="state" class="ui-label">State</label>
        <input
          id="state"
          type="text"
          bind:value={formState.state}
          class="ui-input border border-gray-400 rounded w-53 h-10 px-2 text-[14px]"
          placeholder="State / Province"
        />
      </div>

      <div class="flex flex-col">
        <label for="pinCode" class="ui-label">Pin Code</label>
        <input
          id="pinCode"
          type="number"
          bind:value={formState.pinCode}
          class="ui-input border border-gray-400 w-53 rounded h-10 text-[14px] px-2"
          placeholder="Postal code"
        />
      </div>

      <div class="flex flex-col">
        <label for="country" class="ui-label">Country</label>
        <input
          id="country"
          type="text"
          bind:value={formState.country}
          class="ui-input border border-gray-400 rounded w-53 px-2 h-10 text-[14px]"
          placeholder="Country"
          required
        />
      </div>
    </div>
  </section>
</div>
