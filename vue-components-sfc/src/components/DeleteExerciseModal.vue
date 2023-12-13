<script>
import AppModal from "./AppModal.vue";
import db from "@/models/Firebase";
import Training from "@/models/Training";
import Exercise from "@/models/Exercise";

export default {
  name: "DeleteExerciseModal",
  components: {AppModal},
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
    },
    training: {
      type: Training,
    }
  },
  methods: {
    //delete exercise
    deleteIt() {
      //find path and collection name
      db.doc(this.training._path)
          .collection(Exercise.collectionName)
          //delete doc with the id
          .doc(this.modelValue.id).delete()
          .then(() => {
            console.log('Exercise deleted successfully');
          })
          .catch(error => {
            console.error('Error deleting exercise:', error);
          });
    },
  },
}
</script>
<template>
 <span class="delete-exercise-modal">
      <button class="btn btn-tiny float-sm-end"
              type="button"
              :data-bs-target="'#deleteModal' + id"
              data-bs-toggle="modal">
            <i class="fa-solid fa-trash"></i>
      </button>
      <app-modal :id="'deleteModal' + id" title="Delete Exercise">
        <div class="mb-3">
                <label class="delete-form-label"
                       for="approveDelete">Are you sure you want to DELETE<br> -
                    <b>{{ modelValue.name }}</b>?
                </label>
        </div>
        <template #footer>
           <button class="btn btn-secondary"
                   data-bs-dismiss="modal"
                   type="button">Nevermind
           </button>
           <button @click.prevent="deleteIt"
                   class="btn btn-danger"
                   type="submit"
                   data-bs-dismiss="modal">Delete Exercise</button>
        </template>
        </app-modal>
    </span>
</template>
