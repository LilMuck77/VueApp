app.component('MuscleAccordion', {
    data() {
        return {}


    },
    props: {
        exercises: {
            type: Object,

        },



    },
    method: {},

    computed: {

    },

    emits: ['delete-exercise'],

    template: `
                <div class="muscle-accordion accordion justify-content-evenly" id="accordionExample">
                   
                    <muscle-accordion-item v-for="muscle in exercises.listOfMuscles" 
                    :key="muscle" 
                    :muscle="muscle "
                    :name="muscle.muscleGroup" 
                    @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></muscle-accordion-item>
                </div>


    `


});