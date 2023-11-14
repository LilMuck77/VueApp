<script>
import AppModal from "./AppModal.vue";

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
  },
  methods: {
    editIt: function () {

      Object.assign(this.modelValue, this.editExercise)

    },
  },


  emit: ['update:modelValue'],

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
                     <div class="mb-3">
                        <label class="form-label" for="exerciseName">Name of Exercise</label>
                        <input v-model="editExercise.exerciseName" class="form-control" id="exerciseName"
                               type="text">
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

<style scoped>

</style>