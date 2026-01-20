<script lang="ts">
  import type { BasicsDetailState } from '../types/types';
  export let formState: BasicsDetailState;
</script>

<div class="font-light">
  <div>
    <input
      type="radio"
      id="individual"
      name="businessType"
      bind:value={formState.businessType}
    />
    <label for="individual">Individual</label>
  </div>

  <div>
    <input
      type="radio"
      id="freelancer"
      name="businessType"
      bind:value={formState.businessType}
    />
    <label for="freelancer">Freelancer</label>
  </div>

  <div>
    <input
      type="radio"
      id="company"
      name="businessType"
      bind:value={formState.businessType}
    />
    <label for="company">Company</label>
  </div>

  <div>
    <input
      type="radio"
      id="enterprise"
      name="businessType"
      bind:value={formState.businessType}
    />
    <label for="enterprise">Enterprise</label>
  </div>
</div>
