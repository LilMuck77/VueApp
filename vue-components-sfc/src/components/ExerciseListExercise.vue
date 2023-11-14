<script>
import DeleteExerciseModal from "./DeleteExerciseModal.vue";
import EditExerciseModal from "./EditExerciseModal.vue";

export default {
  name: "ExerciseListExercise",
  components: {EditExerciseModal, DeleteExerciseModal},
  data: function () {
    return {
      uid: 'sli-' + Math.floor(Math.random() * 10e16),
    }
  },

  props: {
    exercise: {
      type: Object,
      required: true,
    },

  },
  emits: ['delete-exercise'],

}
</script>

<template>
  <li class="exercise-list-exercise list-group-item flex-wrap">
    <div class="form-check">
      <span :class="'form-check-label'" class="exercise-name" :id="uid">{{ exercise.exerciseName }}</span>
      <delete-exercise-modal :id="uid" :model-value="exercise"
                             @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></delete-exercise-modal>
      <edit-exercise-modal :model-value="exercise"></edit-exercise-modal>
    </div>
  </li>
</template>

<style scoped>

</style>