function Singleton(){
    var instance = this
    this.title    = "I am a singleton"
    this.creation = new Date()
  
    this.getTitle = () => {
      return this.title + ", created at " + this.creation.toTimeString()
    }
    
    /* keys for singleton */
    /*
     * pros: hide 'instance' to prevent modifiction
     * cons: missing adding prototype, ex. Singleton.prototype.addFlag = true
     */
    Singleton = function(){
      return instance
    }
  }
  
  (function(){
  
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
  }())
  
  