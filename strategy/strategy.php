<?php

interface LogStrategy{
  public function log($data);
}

class LogWithDate implements LogStrategy{
  public function log($data){
    return $data ."：". date("Y-m-d", time());
  }
}

class LogWithDateTime implements LogStrategy{
  public function log($data){
    return $data ."：". date("Y-m-d H:i:s", time());
  }
}

class Log{
  
  private $strategy;

  private function applyStrategy($strategy){
    //LogWithDateTime as default
    $this->strategy = empty($strategy) ? new LogWithDateTime() : $strategy;
  }

  public function __construct($strategy = null){
    date_default_timezone_set("Asia/Taipei");
    $this->applyStrategy($strategy);
  }

  public function changeStrategy($strategy){
    $this->applyStrategy($strategy);
  }

  public function writeLog($data){
    return $this->strategy->log($data);
  }

}


$log = new Log();
echo $log->writeLog("Default Strategy") . "\n";

$logDateTime = new LogWithDateTime();
$log->changeStrategy($logDateTime);
echo $log->writeLog("LogWithDateTime Strategy") . "\n";

$log->changeStrategy(null);
echo $log->writeLog("LogWithDate Strategy") . "\n";
