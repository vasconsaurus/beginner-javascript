const wes = document.querySelector('.wes')

wes.addEventListener('click', function(event) {
  // event.preventDefault();
  // const shouldChangePage = confirm('procede?');
  // if(shouldChangePage) {
  //   window.location = event.currentTarget.href;
  // }

  // or

  const shouldChangePage = confirm('procede?');
  if (!shouldChangePage) {
    event.preventDefault();
  }

});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.currentTarget.name.value
  const email = event.currentTarget.email.value
  const agree = event.currentTarget.agree.checked

  if(name.includes('chad')){ // if you want case sensitive use regex
    alert('sorry bro');
    event.preventDefault();
  }
})

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
