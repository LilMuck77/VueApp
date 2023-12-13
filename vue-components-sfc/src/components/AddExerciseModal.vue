<script>
import AppModal from "./AppModal.vue";
import Exercise from "@/models/Exercise";
import db from "@/models/Firebase";
import axios from "axios";
import Muscle from "@/models/Muscle";
import Training from "@/models/Training";

export default {
  name: "AddExerciseModal",
  components: {AppModal, db},
  data() {
    return {
      newExercise: new Exercise(),
      offset: 0,
      selectedExercises: [],
      loadExercises: [],

    }
  },
  props: {
    muscle: {
      type: Muscle,
    },
    id: {
      type: String,
    },
    list: {
      type: Array,
    },
    training: {
      type: Object,
    },
  },
  methods: {
    isExerciseInList(exercise) {
      //check if the exercises that can be added are
      //already in our collections and disable if so
      return this.list.some((listExercise) => listExercise.name === exercise.name);
    },
    clearArrays() {
      //call this event if the modal is dismissed
      // and set arrays to empty and restart offset.
      this.selectedExercises = [];
      this.loadExercises = [];
      this.offset = 0;
    },
    addExercise: function () {
      //add records to firebase, edit and delete from firebase. collection should be bound to firebase.

      //try console.log(snapshot to see if firebase is updating)
      //return json,parse(json.strify(this)

      //promose.all
      //if


      //loop through the selected exercises and make them into newExercise object
      //and then emit them so they can be added to our collection.
      for (const selectedExercise of this.selectedExercises) {
        console.log(selectedExercise);
        console.log('train', this.training);

        this.selectedExercises.name = this.newExercise.name
        // this.$emit('add  -exercise', selectedExercise);
        // this.training.addExercise(selectedExercise);
        db.doc(this.training._path)
            .collection(Exercise.collectionName).add(selectedExercise)
            .then(function (docRef) {
              console.log('added', docRef)
            })
            .catch(error => {
              console.log('not added', error);
            })

      }
      this.newExercise = new Exercise();
      //clear checkboxes when added.
      this.selectedExercises = [];
      //bring offset back to 0 so they can view all exercises still
      //better way would be to have a back and forth button.
      this.offset = 0;
      //set load array to nothing again.
      this.loadExercises = [];
    },
    //using this method to load exercises so they can be selected and added.
    loadMoreExercises: function () {
      const apiKey = 'zpYCycM1L+jc6n/BS5NBZg==AP7fDiWtScIMuKPs';
      const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${this.muscle.id}`;
      const muscle = this.muscle; // You need to replace this with the selected muscle.
      const limit = 10; // or any other value you prefer

      axios.get(apiUrl, {
        params: {
          muscle: this.muscle.id,
          limit: limit,
          offset: this.offset,
        },
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
          //get exercises from api
          .then(response => {
            const newExercises = response.data;
            this.offset += limit;
            this.loadExercises.push(...newExercises);
          })
          .catch(error => {
            console.error('Error fetching exercises:', error);
          });
    },
  },
}
</script>
<template>
  <span>
    <button class="btn btn-tiny w-30"
            :data-bs-target="'#addExerciseModal' + id"
            data-bs-toggle="modal"
            title="Add Exercise" type="button"
            @click.prevent="loadMoreExercises">
        <i class="fa-solid fa-circle-plus"></i>
    </button>
    <app-modal :id="'addExerciseModal' + id" title="Add Exercise">
       <div class="mb-3 addExerciseModal">
         <label for="exerciseName" id="exerciseListTitle" class="add-form-label mb-2">Exercise List</label>
         <table class="table">
            <tbody>
              <tr>
                <td>
                  <div class="form-check" v-for="(exercise, index) in loadExercises" :key="index">
                      <input v-model="selectedExercises" class="selectBox form-check-input"
                             type="checkbox"
                             :id="'exercise_' + index"
                             :value="exercise"
                             :disabled="isExerciseInList(exercise)">
                    <label class="form-check-label" :for="exercise">{{ exercise.name }}</label>
                  </div>
                  <div>
                    <button id="loadMoreExercises" class="btn btn-success mt-4" @click.prevent="loadMoreExercises">Load More</button>
                  </div>
                </td>
              </tr>
            </tbody>
         </table>
       </div>
       <template #footer>
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button"
                  @click="clearArrays">Close
          </button>
          <button class="btn btn-primary"
                  id="addExercise" type="submit"
                  data-bs-dismiss="modal"
                  @click.prevent="addExercise">Add Exercise
          </button>
       </template>
    </app-modal>
  </span>
</template>
