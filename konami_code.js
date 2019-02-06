const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
// variable to remember the position the user has reached so far in the array
  let index = 0;
// add keydown event listener on the whole body
  document.body.addEventListener('keydown', function(e) {
// get the integer values by using parseInt
    let key = parseInt(e.detail || e.which);
// get the value of the required key from the code array  at the current index
    let requiredKey = code[index];
// compare the key witht the required key at the current index in the array
    if (key == requiredKey){
      //increase the array index by 1
      index++;
      // if the last key is reached in the array
      if (index == code.length){
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
