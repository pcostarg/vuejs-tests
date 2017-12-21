// import '../css/main.scss';
import '../index.html';

import {secretButton,secretParagraph} from './dom-loader';

var showSecret=true;
secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
    showSecret=!showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton(){
    if(showSecret) {
        secretButton.textContent = 'Hide the secret!';
    }
    else{
        secretButton.textContent = 'show the secret!';
    }
}

function updateSecretParagraph(){
    if(showSecret) {
        secretButton.style.display = 'block';
    }
    else{
        secretButton.style.display = 'none';
    }
}