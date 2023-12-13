<script>
import MuscleAccordionItem from "./MuscleAccordionItem.vue";
import db from "@/models/Firebase";
import MuscleModel from "@/models/Muscle"

export default {
  name: "MuscleAccordion",
  components: {MuscleAccordionItem},
  data() {
    return {
      muscles: [],
    }
  },
  created() {
    //create muscle and update firestore
    db.collection(MuscleModel.collectionName)
        .withConverter(MuscleModel)
        .onSnapshot(snapshot => {
          //for each muscle in array, copy muscle's data
          this.muscles = snapshot.docs.map(doc => doc.data());
        })
  },
}
</script>
<template>
  <div class="muscle-accordion accordion justify-content-evenly" id="accordionExample">
    <muscle-accordion-item v-for="muscle in muscles"
                           :key="muscle.id"
                           :muscle="muscle">
    </muscle-accordion-item>
  </div>
</template>
