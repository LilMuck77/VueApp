app.component('MuscleAccordion', {
    data() {
        return {}


    },
    props: {
        allexercises: {
            type: Array,

        },
        muscles: {
            type: Array,
        },
        trainings: {
            type: Array,
        },


    },
    method: {},

    computed: {},

    emits: ['delete-exercise'],

    template: `
                <div class="muscle-accordion accordion justify-content-evenly" id="accordionExample">
                    <muscle-accordion-item v-for="(muscle, m) in muscles" 
                    :key="muscle" 
                    :muscle="muscle "
                    :trainings="trainings" 
                    :allexercises="allexercises" 
                    :name="muscle.muscleGroup" 
                    :muscles="muscles"
                    @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></muscle-accordion-item>
                </div>


    `


});