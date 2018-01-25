function Singleton(){

    /* keys for singleton */
    /*
     * pros: simple
     * cons: property 'instance' might be modified
     */
    if (typeof Singleton.instance === 'object'){
      return Singleton.instance
    }
  
    Singleton.instance    = this
    /* keys for singleton */
  
  
    this.title            = "I am a singleton"
    this.creation         = new Date() 
  
    this.getTitle = () => {
      return this.title + ", created at " + this.creation.toTimeString()
    }
  }
  
  (function(){
    let singleton = new Singleton()
    console.log(singleton.getTitle())
  
    setTimeout(() => {
      let second = new Singleton()
      console.log(second.getTitle())
      console.log(singleton == second)
    }, 1000)
    
    //cons
    //Singleton.instance = null
    //let three = new Singleton()
    //console.log(singleton === three) ==> false
  }())

  