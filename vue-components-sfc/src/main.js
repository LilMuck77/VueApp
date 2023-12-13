import '@/scss/app.scss'
import 'bootstrap'

import {createApp} from 'vue'

import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'

import {
    faPersonRunning, faDumbbell, faStar, faTrophy
    , faHandHoldingMedical, faCirclePlus
    , faPencil, faTrash
} from '@fortawesome/free-solid-svg-icons';
library.add(faPersonRunning);
library.add(faDumbbell);
library.add(faStar);
library.add(faTrophy);
library.add(faHandHoldingMedical);
library.add(faCirclePlus);
library.add(faPencil);
library.add(faTrash);


createApp(App).mount('#app')
import App from './App.vue'

