<script>
import AppModal from "./AppModal.vue";
import db from "@/models/Firebase";
import MuscleModel from "@/models/Muscle";
import TrainingModel from "@/models/Training";
import ExerciseModel from "@/models/Exercise";

export default {
  name: "DeleteMuscleModal",
  components: {AppModal},
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
    },
  },
  methods: {
    deleteMuscle() {
      //muscle reference path
      const muscleRef = db.collection(MuscleModel.collectionName).doc(this.modelValue.id);

      // get each training in muscle
      muscleRef.collection(TrainingModel.collectionName).get()
          .then(trainingCollection => {
            // get each training by iterating over training collection
            trainingCollection.forEach(trainingDoc => {
              //training reference path
              const trainingRef = muscleRef.collection(TrainingModel.collectionName).doc(trainingDoc.id);

              // exercise reference path
              const exerciseRef = trainingRef.collection(ExerciseModel.collectionName).get()
                  .then(exerciseCollection => {
                    //array to hold exercise to delete, all at same time.
                    const exercisesToDelete = [];
                    exerciseCollection.forEach(exerciseDoc => {
                      //reference to the exercise document that will be deleted
                      exercisesToDelete.push(exerciseDoc.ref.delete());
                    });

                    // Delete all once for each is finished adding to the array.
                    return Promise.all(exercisesToDelete);
                  });
            });
          })
          .then(() => {
            // Now delete the muscle itself
            return muscleRef.delete();
          })
          .then(() => {
            console.log('Muscle deleted successfully');
          })
          .catch(error => {
            console.error('Error deleting muscle:', error);
          });
    },
  },
}
</script>
<template>
 <span class="delete-muscle-modal">
      <button class="btn btn-lg float-sm-end"
              type="button"
              :data-bs-target="'#deleteModal' + id"
              data-bs-toggle="modal">
            <i class="fa-solid fa-trash"></i>
      </button>
      <app-modal :id="'deleteModal' + id" title="Delete Muscle">
        <div class="mb-3">
                <label class="delete-form-label"
                       for="approveDelete">Are you sure you want to DELETE<br> -
                    <b>{{ modelValue.id.toUpperCase() }}</b>?
                </label>
        </div>
        <template #footer>
           <button class="btn btn-secondary"
                   data-bs-dismiss="modal"
                   type="button">Nevermind
           </button>
           <button @click.prevent="deleteMuscle"
                   class="btn btn-danger"
                   type="submit"
                   data-bs-dismiss="modal">Delete Muscle</button>
        </template>
        </app-modal>
    </span>
</template>
