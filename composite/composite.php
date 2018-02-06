<?php

abstract class Book{
  abstract function getBookInfo($idx);
  abstract function addBook($book);
  abstract function removeBook($book);
  abstract function getHierarchyIdx();
  abstract function setHierarchyIdx($idx);
  abstract function dumpBook();
}

//single book
class SingleBook extends Book{
    private $title;
    private $author;
    private $idx = null;

    function __construct($title, $author){
      $this->title  = $title;
      $this->author = $author;
    }

    function getBookInfo($idx){
      return $this->title . "：" . $this->author;
    }

    function addBook($book){
      return false;
    }

    function removeBook($book){
      return false;
    }

    function getHierarchyIdx(){
      return $this->idx;
    }

    function setHierarchyIdx($idx){
      $this->idx = $idx;
    }

    function dumpBook(){
      return $this->getBookInfo(true);
    }
}

//base category
class CategoryBook extends Book{
  protected $books = array();
  protected $bookCount;
  protected $idx;
  private $title;

  function __construct($title){
    $this->title = $title;
    $this->setBookCount(0);
  }

  private function setBookCount($newCount){
    $this->bookCount = 0 > $newCount ? 0 : $newCount;
  }

  function getBookCount(){
    return $this->bookCount;
  }

  public function getBookInfo($idx){
    if ($idx <= $this->bookCount){
      return $this->books[$idx]->getBookInfo(true);
    }
  }

  public function addBook($book){
    $this->setBookCount($this->getBookCount() + 1);
    $this->books[$this->getBookCount()] = $book;
    $book->setHierarchyIdx($this->getBookCount());
    return $this->getBookCount();
  }

  public function removeBook($book){
    $idx = $book->getHierarchyIdx();
    if (!empty($this->books[$idx])){
      if ($this->books[$idx]->getBookInfo(true) === $book->getBookInfo(true)){
        for ($i=$idx; $i<$this->getBookCount; $i++){
          $this->books[$i] = $this->books[i+1];
          $this->book[$i]->setHierarchyIdx($i);
        }
        $this->setBookCount($this->getBookCount() - 1);
      }
    }
    return $this->getBookCount();
  }

  public function getHierarchyIdx(){
    return $this->idx;
  }

  public function setHierarchyIdx($idx){
    $this->idx = $idx;
  }

  //dump books in category
  public function dumpBook(){
    echo $this->title . "\n";
    for ($i=1; $i<=$this->getBookCount(); $i++){
      echo $this->books[$i]->getHierarchyIdx() . "：". $this->books[$i]->getBookInfo(true) . "\n";
    }
  }

}


//book for comic
$aBook = new SingleBook("小叮噹", "藤子不二雄");
$bBook = new SingleBook("火影忍者", "岸本齊史");

//comic category
$comic = new CategoryBook("Comic");

$comic->addBook($aBook);
$comic->addBook($bBook);

//book for history
$cBook = new SingleBook("三國志", "羅貫中");
$dBook = new SingleBook("水滸傳", "施耐庵");

//history category
$history = new CategoryBook("History");

$history->addBook($cBook);
$history->addBook($dBook);

//enumerate category books
echo ("Comic book count > " . $comic->getBookCount() . "\n");
for ($i=1; $i<=$comic->getBookCount(); $i++){
    echo("Book Info > " . $comic->getBookInfo($i) . "\n");
}

//dump category book
$comic->dumpBook();
$history->dumpBook();

