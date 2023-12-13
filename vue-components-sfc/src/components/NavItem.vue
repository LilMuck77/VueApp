<script>
export default {
  props: {
    title: String,
    icon: String,
    active: Boolean,
    tabId: String,
  },
  computed: {
    isActive() {
      return this.active;
    },
  },
};
</script>

<template>
  <li class="nav-item mx-2">
    <a :aria-controls="tabId + '-pane'"
       :aria-selected="isActive.toString()"
       class="nav-link btn btn-primary"
       :class="{ 'active': isActive }"
       :data-bs-target="'#' + tabId + '-pane'"
       data-bs-toggle="tab"
       :href="'#' + tabId"
       :id="tabId">
      {{ title }}
      <i :class="'fa-solid ' + icon"></i>
    </a>
  </li>
</template>
