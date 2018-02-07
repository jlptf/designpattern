function Observer(title){
  this.title = title
  this.update = function(msg){
    console.log(this.title + ":" + msg + "\n");
  }
}

function Audio(){
  this.observerList = [];
  this.registerObserver = function(observer){
    this.observerList.push(observer)
  }
  this.removeObserver = function(observer){
    let len = this.observerList.length
    for (let i=0; i<len; i++){
      if (this.observerList[i] === observer){
        this.observerList.splice(i, 1)
      }
    }
  }
  this.notifyObserver = function(msg){
    this.observerList.forEach(function(observer){
      observer.update(msg)
    })
  }
}

(function(){
  let sub = new Audio();
  let james = new Observer("james");
  let jenny = new Observer("jenny");

  sub.registerObserver(james);
  sub.registerObserver(jenny);
  sub.notifyObserver("msg from Audio")

  sub.removeObserver(james);
  sub.notifyObserver("more msg from Audio")
}())