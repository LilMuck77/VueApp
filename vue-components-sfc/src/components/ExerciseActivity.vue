<script>
import DeleteExerciseModal from "./DeleteExerciseModal.vue";
import EditExerciseModal from "./EditExerciseModal.vue";
import ExerciseDetails from "./ExerciseDetails.vue";
import ExerciseModel from "@/models/Exercise.js";
import Training from "@/models/Training";

export default {
  name: "ExerciseActivity",
  components: {ExerciseDetails, EditExerciseModal, DeleteExerciseModal},
  props: {
    exercise: {
      type: ExerciseModel,
      required: true,
    },
    training: {
      type: Training,
    },
  },
}
</script>
<template>
  <div class="card border-primary col-xl-3 col-md-5 col-sm-12">
    <div class="row form">
      <div class="col-1 ms-3 mt-1">
        <delete-exercise-modal :key="exercise.id"
                               :id="exercise.id"
                               :training="training"
                               :model-value="exercise">
        </delete-exercise-modal>
      </div>
      <div class="col">
        <button class="btn exercise-list-exercise w-100"
                type="button"
                :data-bs-target="'#exerciseDetails' + exercise.id"
                data-bs-toggle="modal"
                title="Exercise Details">
          <div class="card-body">
            <h5 :class="'card-name'" class="exercise-name" :id="exercise.id">
              <b>Name:</b> <br> {{ exercise.name }} <br>
            </h5>
            <span :class="'card-text'" class="exercise-equipment" :id="exercise.id">
           <b>Equipment:</b> <br> {{ exercise.equipment.toUpperCase() }} <br>
          </span>
          </div>
        </button>
      </div>
      <div class="col-1 me-4 mt-1">
        <div class="d-flex align-items-center">
          <edit-exercise-modal :model-value="exercise" :training="training"></edit-exercise-modal>
        </div>
      </div>
      <exercise-details :key="exercise.id" :model-value="exercise"
                        :idString="'exerciseDetails' + exercise.id"></exercise-details>
    </div>
  </div>
</template>
