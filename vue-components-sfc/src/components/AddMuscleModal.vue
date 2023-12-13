<script>
import AppModal from "./AppModal.vue";
import Muscle from "@/models/Muscle";

export default {
  name: "AddMuscleModal",
  components: {AppModal},
  data() {
    return {
      newMuscle: new Muscle(),
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    muscles: {
      type: Object
    },
  },
  emit: ['add-muscle'],
  methods: {
    //emit click event to parent where add method is.
    addMuscle: function () {
      this.$emit('add-muscle', this.newMuscle)
      this.newMuscle = new Muscle();
    },
  },
}
</script>
<template>
  <app-modal :id="id" title="Add Muscle">
    <div class="mb-3">
      <label for="muscle" class="form-label">Muscle</label>
      <select v-model="newMuscle.muscle" class="form-select" id="muscle"
              required>
        <option disabled hidden selected value>Choose Muscle</option>
        <option v-for="muscle in muscles" :value="muscle.muscle" :key="muscles.muscle">
          {{ muscle.muscle.toUpperCase() }}
        </option>
      </select>
    </div>
    <template #footer>
      <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
      </button>
      <button class="btn btn-primary"
              id="addMuscle" type="submit"
              data-bs-dismiss="modal"
              @click.prevent="addMuscle">Add Muscle
      </button>
    </template>
  </app-modal>
</template>
