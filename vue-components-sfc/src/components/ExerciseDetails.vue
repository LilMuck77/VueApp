<script>

import AppModal from "@/components/AppModal.vue";

export default {
  name: "ExerciseDetails",
  components: {AppModal},
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    idString: {
      String,
    }
  },
};
</script>
<template>
  <span>
    <app-modal :id="idString" aria-modal="true" title="Exercise Details">
      <div class="mb-3 text-start">
        <label class="form-label" for="exerciseName">Name of Exercise:</label>
        <h5 class="form-control mb-2" id="exerciseName" type="text">{{ modelValue.name }}</h5>
        <label class="form-label" for="exerciseEquipment">Exercise Equipment:</label>
        <h5 class="form-control" id="exerciseEquipment" type="text">{{ modelValue.equipment.toUpperCase() }}</h5>
        <label class="form-label" for="exerciseInstructions">Exercise Instructions:</label>
        <span class="form-control" id="exerciseInstructions">{{ modelValue.instructions }}</span>
      </div>
    </app-modal>
  </span>
</template>
