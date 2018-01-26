function LogWithDate(){
    this.writeLog = data => {
      let d = new Date()
      return data +"："+ d.toDateString()
    }
  }
    
  function LogWithDateTime(){
    this.writeLog = data => {
      let d = new Date()
      return data +"："+ d.toUTCString()
    }
  }
    
  /* IIFE (Immediately Invoked Function Expression) */
  var StrategyLog
  (function(){
    StrategyLog = function StrategyLog(){
      //LogWithDate as default
      this.strategy = new LogWithDate()
  
      //change log strategy
      this.changeStrategy = strategy =>{
        this.strategy = !strategy ? this.strategy : strategy
      }
  
      //write log
      this.writeLog = data => this.strategy.writeLog(data)
    }
  }())
  
  
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
  