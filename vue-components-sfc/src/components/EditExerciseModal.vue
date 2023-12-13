<script>
import AppModal from "./AppModal.vue";
import Exercise from "@/models/Exercise";
import db from "@/models/Firebase";
import Training from "@/models/Training";

export default {
  name: "EditExerciseModal",
  components: {AppModal},
  data() {
    return {
      editExercise: {
        ...this.modelValue
      },
      uid: 'eim-' + Math.floor(Math.random() * 10e16),
    }
  },
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    training: {
      type: Training,
      required: true,
    },
  },
  methods: {
    editIt: function () {
      //edit object
      Object.assign(this.modelValue, this.editExercise)
      //update firebase with the updated exercise
      db.doc(this.training._path)
          .collection(Exercise.collectionName)
          .doc(this.modelValue.id)
          .update(this.modelValue.toFirestore())
          .then(() => {
            console.log('Exercise updated successfully');
          })
          .catch(error => {
            console.error('Error updating exercise:', error);
          });
    },
  },
}
</script>
<template>
 <span class="edit-exercise-modal">
  <button class="btn btn-tiny float-sm-end"
          type="button"
          :data-bs-target="'#editModal' + uid"
          data-bs-toggle="modal">
        <i class="fa-solid fa-pencil"></i>
    </button>
    <app-modal :id="'editModal' + uid" title="Edit Exercise">
     <div>
        <label class="form-label" for="exerciseName">Name of Exercise:</label>
        <input v-model="editExercise.name" class="form-control mb-3" id="exerciseName"
               type="text">
       <label class="form-label" for="exerciseEquipment">Exercise Equipment:</label>
        <input v-model="editExercise.equipment" class="form-control mb-3" id="exerciseEquipment"
               type="text">
       <label class="form-label" for="exerciseInstructions">Instructions:</label>
        <textarea v-model="editExercise.instructions" class="form-control mb-3" id="exerciseInstructions"
                  type="text"></textarea>
     </div>
      <template #footer>
      <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
      </button>
      <button @click.prevent="editIt"
              class="btn btn-primary"
              id="editExercise"
              type="submit"
              data-bs-dismiss="modal">Save Exercise</button>
      </template>
    </app-modal>
  </span>
</template>
