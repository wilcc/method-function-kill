/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = function(firstName,lastName,age,married=false){
  const personinfo = {
    firstName: firstName===undefined?'Anonymous':firstName,
    lastName: lastName===undefined?'Person':lastName,
    age,
    married,
    goingOn:function(){
      return age + 1
    },
    ageUp:function(){
      return this.age += 1
    },
    getFullName: function(){
      return this.firstName + ' ' + this.lastName
    },
    marry: function(second){
      this.married = !married
      second.married = !married
      this.spouseName = second.getFullName()
      second.spouseName = this.getFullName()


    },
    divorce: function(second){
      this.married = married
      second.married = married
      delete this.spouseName
      delete second.spouseName
    }
    
  }

  return personinfo
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
