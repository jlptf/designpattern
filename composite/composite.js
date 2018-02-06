  function SingleBook(title, author){    
    this.title = title
    this.author = author
  
    this.getBookInfo = idx => {
      return this.title + "：" + this.author
    }
    this.getHierarchyIdx = () => {
      return this.idx
    }
  
    this.setHierarchyIdx = idx => {
      this.idx = idx
    }
  }
  
  function CatetoryBook(title){
    this.idx      = 0     // internal Index
    this.title    = title // category title
    this.books    = []    // book list
    this.avlIdx   = []    // available index
  
    //private function
    var setBookCount = newCount => {
      this.bookCount = 0 > newCount ? 0 : newCount
    }
  
    setBookCount(0)
  
    this.getBookCount = () => {
      return this.bookCount
    }
  
    this.getBookInfo = idx => {
      return this.books[idx].getBookInfo()
    }
  
    this.addBook = book => {
      setBookCount(this.getBookCount() + 1)
      let av = this.avlIdx.pop()
      let assign = null == av ? this.getBookCount() : av
      this.books[assign] = book
      book.setHierarchyIdx(assign)
      return this.getBookCount()
    }
  
    this.removeBook = book => {
      let idx = book.getHierarchyIdx()
      if (idx && this.getBookInfo(idx) == book.getBookInfo()){
        this.books[idx] = null
        this.avlIdx.push(idx)
        setBookCount(this.getBookCount() - 1)
        return this.getBookCount()
      }
    }
  
    this.dump = () => {
      let info = this.books.map((book, idx) => {
          return book ? book.getHierarchyIdx() + "：" + book.getBookInfo() : null
      })
  
      return info.filter( book => book != null)
    }
  }
  
  (function(){
    //book for comic
    let aBook = new SingleBook("小叮噹", "藤子不二雄")
    let bBook = new SingleBook("火影忍者", "岸本齊史")
  
    //book for history
    let cBook = new SingleBook("三國志", "羅貫中")
    let dBook = new SingleBook("水滸傳", "施耐庵")
  
    //comic category
    let comic = new CatetoryBook("Comic")
    comic.addBook(aBook)
    comic.addBook(bBook)
  
    //dump category book
    console.log(comic.dump() + "\n Current Book：" + comic.getBookCount() + "\n")
  
    console.log("REMOVE BOOK")
    comic.removeBook(aBook)
    console.log(comic.dump() + "\n Current Book：" + comic.getBookCount() + "\n")
  
    console.log("ADD BOOK AGAIN")
    comic.addBook(aBook)
    console.log(comic.dump() + "\n Current Book：" + comic.getBookCount() + "\n")
  
    //history category
    let history = new CatetoryBook("History")
    history.addBook(cBook)
    history.addBook(dBook)
  
    //dump category book
    console.log(history.dump())
  })()
  