<script>
import Training from "@/components/Training.vue";
import MuscleModel from "@/models/Muscle";

export default {
  name: "TrainingList",
  components: {Training},
  props: {
    trainings: {
      type: Array,
    },
    muscle: {
      type: MuscleModel,
    },
  },
  emits: ['delete-exercise', 'add-exercise'],
}
</script>
<template>
  <ul>
    <training v-for="training in trainings" :muscle="muscle" :key="training.id" :training="training"></training>
  </ul>
</template>
