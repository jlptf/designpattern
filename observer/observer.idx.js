function Observer(title){
    this.title = title;
    this.subject = []
  
    this.update = function(msg){
      console.log(this.title + " received: " + msg)
    }
  
    this.updateIdx = function(sub, idx){
      this.subject[sub] = idx
    }
  
    this.removeIdx = function(sub){
      this.subject.splice(sub, 1)
    }
  
    this.getSubjectIndex = function(sub){
      return this.subject[sub]
    }
  
  }
  
  function Audio() {
    this.observerList = []
    this.registerObserver = function(observer){
      //generate associated index and save it to observer
      let idx = Date.now() + observer.title
      this.observerList[idx] = observer
      observer.updateIdx(Audio.name, idx)
    }
  
    this.removeObserver = function(observer){
      let idx = observer.getSubjectIndex(Audio.name)
      if (idx){
          delete this.observerList[idx]
      }
      console.log(this.observerList)
    }
  
    this.notifyObserver = function(msg){
      for (let observer in this.observerList){
        this.observerList[observer].update(msg)
      }
    }
  }
  
  (function(){
    let sub = new Audio()
    let james = new Observer("James")
    let jenny = new Observer("Jenny")
    
    sub.registerObserver(james)
    sub.registerObserver(jenny)
    sub.notifyObserver("Msg from Audio")
  
    sub.removeObserver(james)
    sub.notifyObserver("Msg from Audio")
  }())
  
  