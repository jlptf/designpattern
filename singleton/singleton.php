<?php 

class Singleton {
  private $title = "I am a singleton";
  private $creation = NULL;

  /* keys for singleton */
  private static $instance = NULL;

  //declare private constructor to prevent creating new object
  private function __construct(){
    $this->creation = time();
  }

  static function getInstance(){
    if (NULL == self::$instance){
      self::$instance = new Singleton();
    }

    return self::$instance;
  }
  /* keys for singleton */

  public function getTitle(){
    date_default_timezone_set("Asia/Taipei");
    return $this->title . ", created at " . date("Y-m-d H:i:s", $this->creation);
  }
}

$singleton = Singleton::getInstance();
echo $singleton->getTitle() . "\n";

$second = Singleton::getInstance();
echo $second->getTitle() . "\n";

$three = Singleton::getInstance();
echo $three->getTitle() . "\n";