<script>
import AddExerciseModal from "./AddExerciseModal.vue";
import TrainingModel from "@/models/Training";
import ExerciseModel from "@/models/Exercise";
import db from "@/models/Firebase";
import ExerciseList from "@/components/ExerciseList.vue";
import MuscleModel from "@/models/Muscle";

export default {
  name: "Training",
  components: {ExerciseList, AddExerciseModal},
  data() {
    return {
      uid: 'tra-' + Math.floor(Math.random() * 10e16),
      exercises: [],
    }
  },
  props: {
    training: {
      type: TrainingModel,
    },
    muscle: {
      type: MuscleModel,
    },
  },
  created() {
    //create exercises of the trainings and update firestore.
    db.doc(this.training._path)
        .collection(ExerciseModel.collectionName)
        .withConverter(ExerciseModel)
        .onSnapshot(snapshot => {
          this.exercises = snapshot.docs.map(doc => doc.data());
        });
    console.log(this.training.type);
  },
}
</script>
<template>
  <li>
    <div class="row exercise-list justify-content-center">
      <div class="header row justify-content-center">
        <h3 class="col-6 pt-5" id="trainingTitle"><b>{{ training.type.toUpperCase() }}</b>
          <add-exercise-modal :key="training.id"
                              :id="uid"
                              :list="exercises"
                              :muscle="muscle"
                              :training="training">
          </add-exercise-modal>
        </h3>
      </div>
    </div>
    <div class="row">
      <exercise-list :exercises="exercises" :training="training"></exercise-list>
    </div>
  </li>
</template>
