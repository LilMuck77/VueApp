<script>
import AppModal from "./AppModal.vue";
import MuscleGroup from "@/models/MuscleGroup";

export default {
  name: "AddMuscleModal",
  components: {AppModal},
  data() {
    return {
      newMuscle: new MuscleGroup()

    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
  },
  emit: ['add-muscle'],
  methods: {
    addMuscle: function () {
      this.$emit('add-muscle', this.newMuscle)

      this.newMuscle = new MuscleGroup();

    },
  },
}
</script>

<template>
  <app-modal :id="id" title="Add Muscle">
    <div class="mb-3">
      <label class="form-label" for="muscleName">Name of Muscle</label>
      <input v-model="newMuscle.muscleGroup" class="form-control" id="muscleName"
             type="text">
    </div>
    <template #footer>
      <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
      </button>
      <button class="btn btn-primary"
              id="addMuscle" type="submit"
              @click.prevent="addMuscle">Add Muscle
      </button>
    </template>
  </app-modal>
</template>

<style scoped>

</style>