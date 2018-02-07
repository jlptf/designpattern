var Observer
(function(){
  Observer = function Observer(title){
    this.title = title;
    this.update = function(msg){
      console.log(this.title + " received: " + msg)
    }
  }
}());

var Audio
(function(){
  Audio = function Audio(){
    this.observerList = []
    this.registerObserver = function(observer){
      this.observerList.push(observer)
    }

    this.removeObserver = function(observer){
      for (let i=0; i<this.observerList.length; i++){
        if (this.observerList[i] == observer){
          this.observerList.splice(i, 1);
          break;
        }
      }
    }

    this.notifyObserver = function(msg){
      this.observerList.forEach(function(observer){
        observer.update(msg)
      })
    }
  }
}());

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