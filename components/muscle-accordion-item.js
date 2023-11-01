app.component('MuscleAccordionItem', {
    props: {
        name: {
            type: String,
            default: ''
        },
        allexercises: {
            type: Object,
        },
        muscle: {
            type: Object,
        },
        trainings: {
            type: Array,
        },
        muscles: {
            type: Array,
        }

    },

    method: {},


    computed: {},
    emits: ['delete-exercise'],

    template: `
       <div :id="name" class="muscle-accordion-item accordion-item">
      
            <h1 class="accordion-header" :id="name + 'Heading'">
                <row class="d-flex">
                
                 <button :aria-controls="'collapse' + name" class="accordion-button collapsed"
                        :data-bs-target="'#collapse' + name"
                        data-bs-toggle="collapse" type="button">
                    <b>{{name}}</b>
                   
                </button>
                 <button class="btn btn-tiny px-2 mx-0"
                    type="button">
                    <i class="fa-solid fa-file-pen"></i>
                </button>
                <button class="btn btn-tiny px-2 mx-0"
                    type="button">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
</row>
               
            </h1>
                                             
            <div :aria-labelledby="name + 'Heading'" :class="'accordion-collapse collapse'" 
                 data-bs-parent="#accordionExample"
                 :id="'collapse' + name">
                <div class="accordion-body">
                    <div class="body-content row">
                        <exercise-list v-for="training in muscle.listOfTrainings" 
                        :key="training" 
                        :training="training" 
                        :allexercises="training.listOfTrainings"
                        :muscle="muscle.muscleGroup"
                        :muscles="muscles"
                        @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)">
                        </exercise-list>
                         
                    
                    </div>
                     
                </div>
            </div>
        </div>

    `


});