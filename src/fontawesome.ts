// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faMinus, faCartPlus, faTrash);

export default FontAwesomeIcon;
