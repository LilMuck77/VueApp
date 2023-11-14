<script>
import ExerciseList from "./ExerciseList.vue";

export default {
  name: "MuscleAccordionItem",
  components: {ExerciseList},
  props: {
    name: {
      type: String,
      default: ''
    },

    muscle: {
      type: Object,
    },

  },

  method: {},


  computed: {},
  emits: ['delete-exercise'],
}
</script>

<template>
  <div :id="name" class="muscle-accordion-item accordion-item">

    <h1 class="accordion-header" :id="name + 'Heading'">
      <row class="d-flex">

        <button :aria-controls="'collapse' + name" class="accordion-button collapsed"
                :data-bs-target="'#collapse' + name"
                data-bs-toggle="collapse" type="button">
          <b>{{ name }}</b>

        </button>

        <button class="btn btn-tiny px-2 mx-0"
                type="button">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </row>

    </h1>

    <div :aria-labelledby="name + 'Heading'" :class="'accordion-collapse collapse'"
         data-bs-parent="#accordionExample"
         :id="'collapse' + name">
      <div class="accordion-body">
        <div class="body-content row">
          <exercise-list v-for="training in muscle.listOfTrainings"
                         :key="training"
                         :training="training"

                         @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)">
          </exercise-list>


        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>