// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')


// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')
    console.log(users)
//if(firstNameUI.value.length == 0) {
    //document.getElementById('resultSpan').innertext = 'Please provide username & password'
   // return false
//}