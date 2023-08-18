import Book from "./Book";

const Books = ()=> {
  const books = [{
    name:"The Hunger Games",
    author:"Suzanne Collins",
  },{
    name:"Dune",
    author:"Frank Herbert",
  },{
    name:"Capital in the Twenty-First Century",
    author:"Suzanne Collins",
  }];

  return (<div className="books">
    {books.map((book)=>{
      return <Book key={book.name} name={book.name} author={book.author}/>
    })}
  </div>);
}

export default Books;