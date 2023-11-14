<script>
import AppModal from "./AppModal.vue";
import Exercise from "@/models/Exercise";

export default {
  name: "AddExerciseModal",
  components: {AppModal},
  data() {
    return {
      newExercise: new Exercise(),
    }
  },
  props: {
    modelValue: {
      type: Object,

    },
    id: {
      type: String,

    },
    training: {
      type: Object,
    },
  },
  emit: ['add-exercise'],
  methods: {
    addExercise: function () {
      this.$emit('add-exercise', this.newExercise)
      this.training.addExercise(this.newExercise);
      this.newExercise = new Exercise();
    },
  },
}
</script>

<template>
<span>
            <button class="btn btn-tiny w-30"
                    :data-bs-target="'#addExerciseModal' + id"
                    data-bs-toggle="modal"
                    title="Add Exercise" type="button">
            <i class="fa-solid fa-circle-plus"></i>
        </button>
        <app-modal :id="'addExerciseModal' + id" title="Add Exercise">
             <div class="mb-3">
                <label class="form-label" for="exerciseName">Name of Exercise</label>
                <input v-model="newExercise.exerciseName" class="form-control" id="exerciseName"
                       type="text">
            </div>
                  <template #footer>
            <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
            </button>
            <button class="btn btn-primary"
                    id="addExercise" type="submit"
                    @click.prevent="addExercise">Add Exercise
            </button>
            </template>
        </app-modal>
    </span>
</template>

<style scoped>

</style>