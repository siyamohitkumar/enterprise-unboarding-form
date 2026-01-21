<script lang="ts">
  import type { BasicsDetailState } from '../types/types';
  export let formState: BasicsDetailState;
</script>

<div>
  <!-- Title -->
  <h3 class="text-lg font-semibold text-gray-800">Business Type</h3>
  <p class="mb-6 text-gray-600 text-[14px]">
    Identifies the type of business entity.
  </p>

  <!-- Radio Grid -->
  <div class="font-light flex flex-wrap gap-2 w-[70%]">
    <div class="border border-gray-400 p-2 w-60 rounded py-2 px-4">
      <input
        type="radio"
        id="individual"
        name="businessType"
        value="individual"
        bind:group={formState.businessType}
      />
      <label for="individual" class="text-[14px]">Individual</label>
    </div>

    <div class="border border-gray-400 w-60 p-2 rounded py-2 px-4">
      <input
        type="radio"
        id="freelancer"
        name="businessType"
        value="freelancer"
        bind:group={formState.businessType}
      />
      <label for="freelancer" class="text-[14px]">Freelancer</label>
    </div>

    <div class="border border-gray-400 w-60 p-2 rounded py-2 px-4">
      <input
        type="radio"
        id="company"
        name="businessType"
        value="company"
        bind:group={formState.businessType}
      />
      <label for="company" class="text-[14px]">Company</label>
    </div>

    <div class="border border-gray-400 w-60 p-2 rounded py-2 px-4">
      <input
        type="radio"
        id="enterprise"
        name="businessType"
        value="enterprise"
        bind:group={formState.businessType}
      />
      <label for="enterprise" class="text-[14px]">Enterprise</label>
    </div>
  </div>
</div>
