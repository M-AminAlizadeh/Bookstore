const Form = ()=>{
  return (
    <form>
      <header>ADD NEW BOOK</header>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Book author" required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;