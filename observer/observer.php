<?php

/*
 * as a observer, it must provide cb when message received from subject
 */
abstract class Observer{
  abstract function update($msg);
}

/*
 * as a subject, it should be able to 
 * register observers in order to send message
 * remove observers if subscription is unnecessary
 * notify message to observers
 */
abstract class Subject{
  abstract function registerObserver($observer);
  abstract function removeObserver($observer);
  abstract function notifyObserver($msg);
}

class Audio extends Subject{
  private $observerList = [];
  function registerObserver($observer){
    $this->observerList[] = $observer;
  }

  function removeObserver($observer){
    foreach ($this->observerList as $key => $value){
      if ($value == $observer){
        unset($this->observerList[$key]);
        break;
      }
    }
  }

  function notifyObserver($msg){
    foreach ($this->observerList as $observer){
      $observer->update($msg);
    }
  }
}

class Audience extends Observer{

  private $title;
  function __construct($title){
    $this->title = $title;
  }

  function update($msg){
    echo $this->title . ":" .$msg . "\n";
  }
}

$sub = new Audio();
$james = new Audience("James");
$jenny = new Audience("Jenny");

$sub->registerObserver($james);
$sub->registerObserver($jenny);
$sub->notifyObserver("msg from Audio");

$sub->removeObserver($james);
$sub->notifyObserver("more msg from Audio");