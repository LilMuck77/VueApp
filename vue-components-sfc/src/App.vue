<script>
import {defineComponent} from "vue";
import MuscleAccordion from "./components/MuscleAccordion.vue";
import MuscleCollection from "./models/MuscleCollection";
import Exercise from "./models/Exercise";
import TrainingGroup from "./models/TrainingGroup";
import MuscleGroup from "./models/MuscleGroup";
import AddMuscleModal from "@/components/AddMuscleModal.vue";


export default defineComponent({
  components: {AddMuscleModal, MuscleAccordion},

  data: function () {


    //DATA FOR ABS
    let strengthForAbs = new TrainingGroup('Strength')
        .addExercise(new Exercise('Machine Crunch'))
        .addExercise(new Exercise('Cable Crunch'))
        .addExercise(new Exercise('Sit Ups'));

    let enduranceForAbs = new TrainingGroup('Endurance')
        .addExercise(new Exercise('Plank'))
        .addExercise(new Exercise('Crunch It Out Crunches'));

    let balanceForAbs = new TrainingGroup('Balance')
        .addExercise(new Exercise('Roll Out'))
        .addExercise(new Exercise('Stability Ball Crunch Sit'));

    let flexibilityForAbs = new TrainingGroup('Flexibility')
        .addExercise(new Exercise('Cobra Pose'))
        .addExercise(new Exercise('Prone Abdominal Stretch'));

    let abs = new MuscleGroup('Abs')
        .addTrainingGroup(enduranceForAbs)
        .addTrainingGroup(strengthForAbs)
        .addTrainingGroup(balanceForAbs)
        .addTrainingGroup(flexibilityForAbs);

    //DATA FOR BACK
    let strengthForBack = new TrainingGroup('Strength')
        .addExercise(new Exercise('Deadlift'))
        .addExercise(new Exercise('Bent-Over Row'))
        .addExercise(new Exercise('Seated Row'));

    let enduranceForBack = new TrainingGroup('Endurance')
        .addExercise(new Exercise('Pull-Up'))
        .addExercise(new Exercise('Superman'));

    let balanceForBack = new TrainingGroup('Balance')
        .addExercise(new Exercise('Back Leg Raises'))
        .addExercise(new Exercise('Squats on Bosu Ball'));

    let flexibilityForBack = new TrainingGroup('Flexibility')
        .addExercise(new Exercise('Childs Pose'))
        .addExercise(new Exercise('Knee to Chest'))
        .addExercise(new Exercise('Supine Twist'));

    let back = new MuscleGroup('Back')
        .addTrainingGroup(enduranceForBack)
        .addTrainingGroup(strengthForBack)
        .addTrainingGroup(balanceForBack)
        .addTrainingGroup(flexibilityForBack);

    //DATA FOR BICEPS
    let strengthForBicep = new TrainingGroup('Strength')
        .addExercise(new Exercise('Incline Dumbbell Curl'))
        .addExercise(new Exercise('Concentration Curl'))
        .addExercise(new Exercise('Single-Arm Preacher Curl'));

    let enduranceForBicep = new TrainingGroup('Endurance')
        .addExercise(new Exercise('EZ-bar Curls'))
        .addExercise(new Exercise('Zottman Curls'));

    let balanceForBicep = new TrainingGroup('Balance')
        .addExercise(new Exercise('Rope Twist Curl'));

    let flexibilityForBicep = new TrainingGroup('Flexibility')
        .addExercise(new Exercise('Wall Bicep Stretch'))
        .addExercise(new Exercise('Doorway Bicep Stretch'));

    let bicep = new MuscleGroup('Bicep')
        .addTrainingGroup(enduranceForBicep)
        .addTrainingGroup(strengthForBicep)
        .addTrainingGroup(balanceForBicep)
        .addTrainingGroup(flexibilityForBicep);


    //DATA FOR CHEST
    let strengthForChest = new TrainingGroup('Strength')
        .addExercise(new Exercise('Dumbbell Bench Press'))
        .addExercise(new Exercise('Incline Bench Press'))
        .addExercise(new Exercise('Chest Fly'));

    let enduranceForChest = new TrainingGroup('Endurance')
        .addExercise(new Exercise('Push Ups'))
        .addExercise(new Exercise('DB Standing Flies'));

    let balanceForChest = new TrainingGroup('Balance')
        .addExercise(new Exercise('Stability Ball Push Ups'))
        .addExercise(new Exercise('Triangle Push Ups'));

    let flexibilityForChest = new TrainingGroup('Flexibility')
        .addExercise(new Exercise('Seated Shoulder Ext.'))
        .addExercise(new Exercise('Chest Opener Stretch.'));

    let chest = new MuscleGroup('Chest')
        .addTrainingGroup(enduranceForChest)
        .addTrainingGroup(strengthForChest)
        .addTrainingGroup(balanceForChest)
        .addTrainingGroup(flexibilityForChest);

    return {
      //ADD all  muscleGroups to muscleCollection
      muscleCollection: new MuscleCollection()
          .addMuscleGroup(abs)
          .addMuscleGroup(back)
          .addMuscleGroup(bicep)
          .addMuscleGroup(chest),

    }
  },
  methods: {
    showModel: function () {
      // set focus to name field when modal is opened
      $('#addExerciseModal').on('shown.bs.modal', function () {
        $('#exerciseName').focus();
      });
    },

    addExercise: function (newExerciseFromModal) {

      for (let muscleGroup of this.muscleCollection.listOfMuscles) {
        for (let training of muscleGroup.listOfTrainings) {
          training.listOfExercises.push(newExerciseFromModal);
        }
      }

    },
    deleteIt(exercise) {

      for (let muscleGroup of this.muscleCollection.listOfMuscles) {
        for (let training of muscleGroup.listOfTrainings) {
          let exerciseIndex = training.listOfExercises.indexOf(exercise);
          if (exerciseIndex !== -1) {
            training.listOfExercises.splice(exerciseIndex, 1);
            return;
          }
        }
      }

    },

    addMuscle: function (newMuscleFromModal) {
      this.muscleCollection.listOfMuscles.push(newMuscleFromModal);

      newMuscleFromModal.addTrainingGroup(new TrainingGroup('Strength'))
          .addTrainingGroup(new TrainingGroup('Endurance'))
          .addTrainingGroup(new TrainingGroup('Balance'))
          .addTrainingGroup(new TrainingGroup('Flexibility'));


    },
  },


  mounted: function () {

    if (localStorage.getItem('exerciseList')) {
      // this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'))
    }
    //if list exists in storage, replace current list

    //if you want to delete local storage =  < inspector < application < localstorage <http... < press X

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
        <img alt="" class="me-3 rounded" height="42" src="../../weights.jpg">
        <h1 class="name">Welcome to Gym Rat Records</h1>
      </div>

      <nav class="navbar navbar-expand-xl rounded navbar-light bg-dark">
        <div class="container-fluid">
          <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                  class="navbar-toggler btn-primary bg-dark" data-bs-target="#navbarSupportedContent"
                  data-bs-toggle="collapse" type="button">
            <span class="navbar-toggler-icon btn btn-primary btn-outline-light"></span>
          </button>
          <div class="collapse navbar-collapse fw-bold w-100" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 nav-justified justify-content-around w-100" id="myTab"
                role="tablist">
              <li class="nav-item mx-2">
                <a aria-controls="exercises-tab-pane" aria-selected="true"
                   class="nav-link active btn btn-primary"
                   data-bs-target="#exercises-tab-pane"
                   data-bs-toggle="tab" href="#exercises-tab" id="exercises-tab">EXERCISES
                  <i class="fa-solid fa-person-running"></i>
                </a>


              </li>
              <li class="nav-item">
                <a aria-controls="workouts-tab-pane" class="nav-link btn btn-primary"
                   data-bs-target="#workouts-tab-pane"
                   data-bs-toggle="tab" href="#workouts-tab" id="workouts-tab">WORKOUTS <i
                    class="fa-solid fa-dumbbell"></i></a>
              </li>
              <li class="nav-item">
                <a aria-controls="favorites-tab-pane" class="nav-link btn btn-primary"
                   data-bs-target="#favorites-tab-pane"
                   data-bs-toggle="tab" href="#favorites-tab" id="favorites-tab">FAVORITES
                  <i class="fa-solid fa-star"></i></a>
              </li>
              <li class="nav-item">
                <a aria-controls="personalBests-tab-pane" class="nav-link btn btn-primary"
                   data-bs-target="#personalBests-tab-pane"
                   data-bs-toggle="tab" href="#personalBests-tab" id="personalBests-tab">PERSONAL
                  RECORDS <i class="fa-solid fa-trophy"></i></a>
              </li>
            </ul>
            <!--                    <form class="d-flex">-->
            <!--                        <input aria-label="Search" class="form-control me-2" placeholder="Search" type="search">-->
            <!--                        <button class="btn btn-outline-primary fw-bold" type="submit">SEARCH</button>-->
            <!--                    </form>-->
          </div>
        </div>
      </nav>
      <div class="container px-0">
        <form class="needs-validation" novalidate>
          <div class="row">
            <div class="tab-content pb-5" id="myTabContent">
              <div aria-labelledby="exercises-tab" class="tab-pane fade show active"
                   id="exercises-tab-pane">
                <div class="row justify-content-end">
                  <muscle-accordion
                      @delete-exercise="deleteIt"
                      :exercises="muscleCollection">
                  </muscle-accordion>
                  <div class="col-md-4 col-sm-12">
                    <button class="btn btn-success fw-bold w-100"
                            data-bs-target="#addMuscleModal"
                            data-bs-toggle="modal"
                            title="Add Muscle"
                            type="button">ADD MUSCLE
                      <i class="fa-solid fa-hand-holding-medical"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div aria-labelledby="workouts-tab" class="tab-pane fade show" id="workouts-tab-pane">
                <span>Workouts</span>
                <div class="col-md-4">
                  <button class="btn btn-primary fw-bold w-100" title="Create New Workout"
                          type="button">CREATE NEW WORKOUT
                  </button>
                </div>
              </div>


              <div aria-labelledby="favorites-tab" class="tab-pane fade show" id="favorites-tab-pane">
                <span>Favorites</span>
              </div>
              <div aria-labelledby="personalBests-tab" class="tab-pane fade show"
                   id="personalBests-tab-pane">
                <span>Personal Bests</span>
              </div>
            </div>
          </div>
        </form>
        <add-muscle-modal id="addMuscleModal" @add-muscle="addMuscle"></add-muscle-modal>

      </div>
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

<style>
#app {
  background-image: url("/gym.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;

}
</style>