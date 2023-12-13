<script>
import NavItem from "@/components/NavItem.vue";

export default {
  components: {
    NavItem,
  },
  props: {
    navbarColor: String,
  }
};
</script>

<template>
  <nav :class="['navbar navbar-expand-xl rounded navbar-light', navbarColor]">
    <div class="container-fluid">
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
              class="navbar-toggler btn-primary bg-dark" data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse" type="button">
        <span class="navbar-toggler-icon btn btn-primary btn-outline-light"></span>
      </button>
      <div class="collapse navbar-collapse fw-bold w-100" id="navbarSupportedContent">
        <a class="navbar-brand ms-2 d-none d-xl-block">
          <img src="/rightarm.jpg" alt="Logo" height="50">
        </a>
        <ul class="navbar-nav mb-2 mb-lg-0 nav-justified justify-content-evenly w-100" role="tablist">
          <nav-item title="EXERCISES" icon="fa-person-running" :active="true" tabId="exercises-tab"/>
          <nav-item title="WORKOUTS" icon="fa-dumbbell" tabId="workouts-tab"/>
          <nav-item title="FAVORITES" icon="fa-star" tabId="favorites-tab"/>
          <nav-item title="ANNOUNCEMENTS" icon="fa-trophy" tabId="personalBests-tab"/>
        </ul>
        <a class="navbar-brand ms-2 d-none d-xl-block">
          <img src="/leftarm.jpg" alt="Logo" height="50">
        </a>
      </div>
    </div>
  </nav>
</template>
