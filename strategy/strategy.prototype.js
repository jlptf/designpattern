var LogWithDate = function(){
    this.writeLog = function(data){
      let d = new Date()
      return data +"："+ d.toDateString()
    }
  }
  
  var LogWithDateTime = function(){
    this.writeLog = function(data){
      let d = new Date()
      return data +"："+ d.toUTCString()
    }
  }
  
  var StrategyLog = function(){
    //LogWithDate as default
    this.strategy = new LogWithDate()
  }
  
  StrategyLog.prototype = {
    changeStrategy: function(strategy){
      this.strategy = !strategy ? this.strategy : strategy    
    },
    writeLog: function(data){
      return this.strategy.writeLog(data)
    }
  }
  
  
  let logDate       = new LogWithDate()
  let logDateTime   = new LogWithDateTime()
  
  let log           = new StrategyLog()
  
  console.log(log.writeLog("Default Strategy"))
  
  log.changeStrategy(logDateTime)
  console.log(log.writeLog("LogWithDateTime Strategy"))
  
  log.changeStrategy(logDate)
  console.log(log.writeLog("LogWithDate Strategy"))
  
  log.changeStrategy(null)
  console.log(log.writeLog("Set NULL Strategy"))
  
  
  
  