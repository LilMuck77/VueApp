<script>
import ExerciseActivity from "./ExerciseActivity.vue";
import db from "@/models/Firebase";
import TrainingModel from "@/models/Training";
import ExerciseModel from "@/models/Exercise";
import Training from "@/models/Training";
export default {
  name: "ExerciseList",
  components: {ExerciseActivity,},
  data() {
    return {
      uid: 'tra-' + Math.floor(Math.random() * 10e16),
    }
  },
  props: {
    exercises: {
      type: Array,
    },
    training: {
      type: Training,
    }
  },
}
</script>
<template>
  <div class="row justify-content-center">
    <exercise-activity class="my-1 mx-1" v-for="exercise in exercises"
                       :key="exercise.id"
                       :exercise="exercise"
                       :training="training">
    </exercise-activity>
  </div>
</template>
