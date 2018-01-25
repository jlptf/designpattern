
/* IIFE (Immediately Invoked Function Expression) */
var Singleton
(function(){

  /* private instance under IIFE */
  let instance = null
  Singleton = function Singleton(){
    if (instance){
      return instance
    }
    instance        = this
    this.title      = "I am a singleton"
    this.creation   = new Date()

    this.getTitle = () => {
      return this.title + ", created at " + this.creation.toTimeString()
    }
  }

}())

let singleton = new Singleton()
console.log(singleton.getTitle())

setTimeout(() =>{
    let second = new Singleton()
    console.log(second.getTitle())
    console.log(singleton === second)
}, 1000)


setTimeout(() =>{
    let three = new Singleton()
    console.log(three.getTitle())
    console.log(singleton === three)
}, 2000)

