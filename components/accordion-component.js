app.component('AddExerciseModal', {
    data() {
        return {
            muscleList: [
                {muscleGroup: 'abs', color: '#FFEB00'},
                {muscleGroup: 'back', color: '#32FF19'},
                {muscleGroup: 'biceps', color: '#1028FF'},
            ]
            // {muscleGroup: 'chest', color: '#FF1713'},
            // {muscleGroup: 'legs', color: '#FF008B'},
            // {muscleGroup: 'shoulders', color: '#fd7e14'},
            // {muscleGroup: 'triceps', color: '#31d2f2'},

        }

    },
    props: {

        muscle: {
            type: Object,
            required: true,
        }
    },

    methods: {},

    template: `                                    <div id="muscle" class="accordion-item">
                                        <h2 class="accordion-header" id="absHeading">
                                            <button aria-controls="collapseAbs" class="accordion-button collapsed"
                                                    data-bs-target="#collapseAbs"
                                                    data-bs-toggle="collapse" type="button">
                                                <b>ABS</b>
                                                
                                            </button>
                                        </h2>

                                        <div aria-labelledby="absHeading" class="accordion-collapse collapse show"
                                             data-bs-parent="#accordionExample"
                                             id="collapseAbs">
                                            <div class="accordion-body">
                                                <div class="body-content row">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>

    
    `

})