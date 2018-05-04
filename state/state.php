<?php
/*
 * light bulb has three states
 * a. Open
 * b. Close
 * c. Malfunction
 */

interface LightBulbState{
  public function open();
  public function close();
  public function malFunction();
  public function showState();
}

abstract class AbstractLightBulbState implements LightBulbState{
  public function open(){
    throw new Exception();
  }
  public function close(){
    throw new Exception();
  }
  public function malFunction(){
    return new MalFunctionState();
  }
  public function showState(){
    throw new Exception();
  }
}

class OpenState extends AbstractLightBulbState{
  public function close(){
    return new CloseState();
  }
  public function showState(){
    return "Light bulb is opened \n";
  }
}

class CloseState extends AbstractLightBulbState{
  public function open(){
    return new OpenState();
  }
  public function showState(){
    return "Light bulb is closed \n";
  }
}

class MalFunctionState extends AbstractLightBulbState{
  public function showState(){
    return "Light bulb is malfunction \n";
  }
}

class LightBulb{
  private $state;

  public function __construct($state){
    $this->state = $state;
  }

  public function open(){
    $this->setState($this->state->open());
  }

  public function close(){
    $this->setState($this->state->close());
  }

  public function malFunction(){
    $this->setState($this->state->malFunction());
  }

  public function showState(){
    echo $this->state->showState();
  }

  public function setState($state){
    $this->state = $state;
    echo "State Changed:" . $this->state->showState();
  }
}


$light = new LightBulb(new OpenState());
$light->showState();
$light->close();
$light->showState();
// cause exception
// $light->close();
$light->open();
$light->showState();
$light->malFunction();
$light->showState();