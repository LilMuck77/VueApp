<script>
import ExerciseList from "./ExerciseList.vue";
import TrainingModel from "@/models/Training";
import MuscleModel from "@/models/Muscle";
import db from "@/models/Firebase";
import TrainingList from "@/components/TrainingList.vue";
import DeleteMuscleModal from "@/components/DeleteMuscleModal.vue";

export default {
  name: "MuscleAccordionItem",
  components: {DeleteMuscleModal, TrainingList, ExerciseList},
  data() {
    return {
      trainings: [],
    }
  },
  props: {
    muscle: {
      type: MuscleModel,
    },
  },
  created() {
    //create trainings of the muscle and update firestore
    db.collection(MuscleModel.collectionName)
        .doc(this.muscle.id)
        .collection(TrainingModel.collectionName)
        .withConverter(TrainingModel)
        .onSnapshot(snapshot => {
          this.trainings = snapshot.docs.map(doc => doc.data());
        });
  },
}
</script>
<template>
  <div :id="muscle.id" class="muscle-accordion-item accordion-item custom-background">
    <h1 class="accordion-header" :id="muscle.id + 'Heading'">
      <row class="d-flex">
        <button :aria-controls="'collapse' + muscle.id" class="accordion-button collapsed"
                :data-bs-target="'#collapse' + muscle.id"
                data-bs-toggle="collapse" type="button">
          <b>{{ muscle.id.toUpperCase() }}</b>
        </button>
        <delete-muscle-modal class="mt-2 mx-2" :key="muscle.id" :id="muscle.id"
                             :model-value="muscle"></delete-muscle-modal>
      </row>
    </h1>
    <div :aria-labelledby="muscle.id + 'Heading'"
         :class="'accordion-collapse collapse'"
         data-bs-parent="#accordionExample"
         :id="'collapse' + muscle.id">
      <div class="accordion-body">
        <training-list :trainings="trainings"
                       :muscle="muscle">
        </training-list>
      </div>
    </div>
  </div>
</template>
