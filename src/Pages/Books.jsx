import Books from "../Components/Books";
import Form from "../Components/Form";
import UniqueId from '../Components/UniqueId';

const BooksPage = () =>{
  return(
  <div className="books-page">
    <Books/>
    <Form/>
    <UniqueId />
  </div>)
}

export default BooksPage;