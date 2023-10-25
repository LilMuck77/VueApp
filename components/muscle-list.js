app.component('MuscleList', {
    props: {
        list: {
            type: Array,

        },

    },
    method: {

    },

    computed: {},
    emits: ['delete-exercise'],

    template: `
                <div class="muscle-accordion accordion justify-content-evenly pb-3" id="accordionExample">
                                 
                    <muscle-accordion-item :list="muscleList" v-for="(muscle, m) in muscleList" @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)" show="collapse show"></muscle-accordion-item>
                  
        
                </div>


    `


});