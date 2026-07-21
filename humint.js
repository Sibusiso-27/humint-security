

const toastTrigger = document.getElementById('livetoastbtn');
const toastLiveExample = document.getElementById('liveToast');
const NameCheck = document.getElementById('form-input-name');
const email = document.getElementById('form-input');
const message = document.getElementById('form-text');


function clearErrors() {
   console.log('formValidation called');

    const existingErrors = document.querySelectorAll('.error-message');
    existingErrors.forEach(el => el.remove());
    
    document.querySelectorAll('.form-control').forEach(el => {
        el.classList.remove('is-invalid');
    });
}


function showError(inputElement, messageText) {
    
    inputElement.classList.add('is-invalid');
    
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.style.cssText = 'color: #ff6b6b; font-size: 13px; margin-top: 4px; display: block;';
    errorSpan.innerText = messageText;
    
   
    inputElement.parentNode.appendChild(errorSpan);
}


function formValidation() {
    
    clearErrors();
    
    let isValid = true;
    
  
    if (NameCheck.value.trim() === '') {
        showError(NameCheck, 'Please enter a valid name');
        isValid = false;
    }
    
   
    const emailValue = email.value.trim();
    if (emailValue === '') {
        showError(email, 'Please enter a valid email');
        isValid = false;
    } else {
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
    }
    
    
    if (message.value.trim() === '') {
        showError(message, 'Please describe your security requirement');
        isValid = false;
    }
    
    if (isValid) {
       
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
        
      NameCheck.value = '';
      email.value = '';
      message.value = '';

      clearErrors();
 
    }
    
    return isValid;
}


toastTrigger.addEventListener('click', formValidation);






