<script>
import MuscleAccordion from "@/components/MuscleAccordion.vue";

export default {
  name: "NavTabContent",
  components: {
    MuscleAccordion,
  },
}
</script>
<template>
  <div class="container px-0">
    <form class="needs-validation" novalidate>
      <div class="row">
        <div class="tab-content pb-5" id="myTabContent">
          <div aria-labelledby="exercises-tab" class="tab-pane fade show active"
               id="exercises-tab-pane">
            <div class="row justify-content-end">
              <muscle-accordion></muscle-accordion>
              <div class="col-md-4 col-sm-12">
                <button class="btn btn-success fw-bold w-100"
                        data-bs-target="#addMuscleModal"
                        data-bs-toggle="modal"
                        title="Add Muscle"
                        type="button">ADD MUSCLE
                  <i class="fa-solid fa-hand-holding-medical"></i>
                </button>
              </div>
            </div>
          </div>
          <div aria-labelledby="workouts-tab" class="tab-pane fade show" id="workouts-tab-pane">
            <span>Workouts</span>
            <div class="col-md-4">
            </div>
          </div>
          <div aria-labelledby="favorites-tab" class="tab-pane fade show" id="favorites-tab-pane">
            <span>Favorites</span>
          </div>
          <div aria-labelledby="personalBests-tab" class="tab-pane fade show"
               id="personalBests-tab-pane">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>