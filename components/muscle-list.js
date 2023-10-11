app.component('MuscleList', {
    props: {
        muscleName: {
            type: String,
            default: 'Muscle'
        },
        list: {
            type: Array,
            required: true,
        },
    },

    template: `
            <div class="muscle-list">
                <h4>{{muscleName}}</h4>
                <hr>                                                     
                <ul class="list-group list-group-flush border-bottom">
                    <muscle-list-muscle v-for="(muscle, m) in list" 
                    :key="muscle.muscleGroup"
                    :muscle="muscle"
                    >
                    <div id="muscle.muscleGroup" class="accordion-item">
                        <h2 class="accordion-header" id="{{muscleName}} + Heading">
                            <button aria-controls="collapse + {{muscleName}}" class="accordion-button collapsed"
                                    data-bs-target="#collapse + {{muscleName}}"
                                    data-bs-toggle="collapse" type="button">
                                <b>ABS</b>
                            </button>
                        </h2>
                        <div aria-labelledby="{{muscleName}} + Heading" class="accordion-collapse collapse show"
                             data-bs-parent="#accordionExample"
                             id="collapse + {{muscleName}}">
                            <div class="accordion-body">
                                <div class="body-content row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
</muscle-list-muscle>
                </ul>
            </div>
    `


});