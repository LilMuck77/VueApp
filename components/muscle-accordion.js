app.component('MuscleAccordion', {
    data() {
        return {}


    },
    props: {
        allexercises: {
            type: Object,

        },
        muscles: {
            type: Array,
        },
        trainings: {
            type: Array,
        },


    },
    method: {},

    computed: {
        // trainingsList() {
        //     return this.allexercises.listOfTrainings.filter((TrainingGroup) => TrainingGroup.training === this.training);
        // },
        comp() {
            // console.log(this.allexercises.listOfMuscles);
            // // console.log(this.allexercises.listOfMuscles.listOfTrainings);
            // // console.log(this.allexercises.listOfMuscles.listOfTrainings.listOfExercises);
            //  console.log(this.allexercises.listOfMuscles.muscleGroup);
            //  console.log(this.allexercises.listOfMuscles.muscleGroup.listOfTrainings.training);


        }
    },

    emits: ['delete-exercise'],

    template: `
                <div class="muscle-accordion accordion justify-content-evenly" id="accordionExample">
                   
                    <muscle-accordion-item v-for="muscle in allexercises.listOfMuscles" 
                    :key="muscle" 
                    :muscle="muscle "
                    :trainings="trainings" 
                    :allexercises="trainingsList" 
                    :name="muscle.muscleGroup" 
                    :muscles="muscles"
                    @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></muscle-accordion-item>
                </div>


    `


});