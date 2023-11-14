import '@/scss/app.scss'
import 'bootstrap'

import {createApp} from 'vue'

import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'

import {faPersonRunning} from '@fortawesome/free-solid-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

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

