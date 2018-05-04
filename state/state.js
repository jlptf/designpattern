function LightBulb(state){
  this.state = state
  this.open = function(){
    this.setState(this.state.open())
  }
  this.close = function(){
    this.setState(this.state.close())
  }
  this.malFunction = function(){
    this.setState(this.state.malFunction())
  }
  this.showState = function(){
    console.log(this.state.showState())
  }
  this.setState = function(state){
    this.state = state
    console.log("State Changed:" + this.state.showState())
  }
}

function OpenState(){
  this.close = function(){
    return new CloseState()
  }
  this.malFunction = function(){
    return new MalFunction()
  }
  this.showState = function(){
    return "Light bulb is opened \n"
  }
}

function CloseState(){
  this.open = function(){
    return new OpenState()
  }
  this.malFunction = function(){
    return new MalFunction()
  }
  this.showState = function(){
    return "Light bulb is closed \n"
  }
}

function MalFunction(){
  this.malFunction = function(){
    return new MalFunction();
  }
  this.showState = function(){
    return "Light bulb is malfunction \n"
  }
}

(function(){
  let bulb = new LightBulb(new OpenState())
  bulb.showState()
  bulb.close()
  bulb.showState()
  bulb.malFunction()
  bulb.showState()
}())