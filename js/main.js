import {showAlert, showErrorMessage, showSuccessMessage} from './util.js';
import {renderPreview} from './add-preview.js';
import './big-photo.js';
import './image-overlay.js';
import {sendUsersData} from './image-form.js';
import './image-edit.js';
import {getData} from './api.js';
import './preview-filters.js';

getData(renderPreview, showAlert);

sendUsersData(showSuccessMessage, showErrorMessage);


