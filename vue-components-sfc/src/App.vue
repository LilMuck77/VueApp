<script>
import {defineComponent} from "vue";
import MuscleAccordion from "./components/MuscleAccordion.vue";
import Exercise from "./models/Exercise";
import Training from "./models/Training";
import Muscle from "./models/Muscle";
import AddMuscleModal from "@/components/AddMuscleModal.vue";
import axios from "axios";
import db from "@/models/Firebase";
import NavBar from "@/components/NavBar.vue";
import NavTabContent from "@/components/NavTabContent.vue";

export default defineComponent({
  components: {NavTabContent, NavBar, AddMuscleModal, MuscleAccordion},
  data() {
    return {
      //muscle list for adding muscles linked to the api
      muscleList: [{muscle: 'abdominals'}, {muscle: 'abductors'}, {muscle: 'adductors'}, {muscle: 'biceps'},
        {muscle: 'calves'}, {muscle: 'chest'}, {muscle: 'forearms'}, {muscle: 'glutes'},
        {muscle: 'hamstrings'}, {muscle: 'lats'}, {muscle: 'lower_back'}, {muscle: 'middle_back'},
        {muscle: 'neck'}, {muscle: 'quadriceps'}, {muscle: 'traps'}, {muscle: 'triceps'}
      ],
    };
  },
  methods: {
    showModel: function () {
      // set focus to name field when modal is opened
      $('#addExerciseModal').on('shown.bs.modal', function () {
        $('#exerciseName').focus();
      });
    },
    addMuscle: function (newMuscleFromModal) {
      this.fetchExercises(newMuscleFromModal.muscle);
    },
    fetchExercises(muscle) {
      const apiKey = 'zpYCycM1L+jc6n/BS5NBZg==AP7fDiWtScIMuKPs';
      const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

      axios
          .get(apiUrl, {
            params: {
              muscle: muscle,
              offset: this.offset,
            },
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            const exercises = response.data.splice(0, 2);
            // Set muscle, training, and exercise information
            exercises.forEach(exercise => {
              const muscleRef = db.collection(Muscle.collectionName).doc(exercise.muscle);
              muscleRef.set({muscle: exercise.muscle})
                  .then(() => {
                    console.log('Muscle added:', exercise.muscle);
                    const trainingRef = muscleRef.collection(Training.collectionName).doc(exercise.type);
                    trainingRef.set({type: exercise.type})
                        .then(() => {
                          console.log('Training added:', exercise.type);
                          const exerciseRef = trainingRef.collection(Exercise.collectionName).doc();
                          exerciseRef.set({
                            name: exercise.name,
                            equipment: exercise.equipment,
                            instructions: exercise.instructions,
                          })
                              .then(() => {
                                console.log('Exercise added:', exercise.name);
                              })
                              .catch(error => {
                                console.log('Error adding exercise:', error);
                              });
                        })
                        .catch(error => {
                          console.log('Error adding training:', error);
                        });
                  })
                  .catch(error => {
                    console.log('Error adding muscle:', error);
                  });
            });
          })
          .catch(error => {
            console.error('Error:', error);
          });
    },
  },
  mounted: function () {
    this.fetchExercises('biceps');
  },
  watch: {
    exerciseList: {
      //call this function when an item changes
      handler: function (newList) {
        // localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
      },
      deep: true, //tells vue to watch nested properties
    }
  }
})
</script>
<template>
  <div class="container min-vh-100 d-flex flex-column">
    <main>
      <div class=" pt-5 mb-4 text-center border-bottom d-flex justify-content-start align-items-center">
        <img alt="" class="me-3 rounded" height="42" src="../public/weights.jpg">
        <h1 class="name">Welcome to Gym Rat Records</h1>
      </div>
      <nav-bar class="navbar navbar-expand-xl rounded navbar-light bg-dark"
               :navbarColor="'bg-black'">
      </nav-bar>
      <nav-tab-content></nav-tab-content>
      <add-muscle-modal id="addMuscleModal" :muscles="muscleList" @add-muscle="addMuscle"></add-muscle-modal>

    </main>
  </div>
  <footer class="d-sm-flex justify-content-center text-light bg-dark">
    <p class="text-center slogan">
      <i class="fa-solid fa-dumbbell"></i>
      <em> It's time to get SWOLENIZED! </em>
      <i class="fa-solid fa-trophy"></i>
    </p>
  </footer>
</template>