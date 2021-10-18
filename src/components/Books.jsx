import Book from "./Book"


const Books = ({ books, loggedIn, setBooks, user }) => {

    return (
        <div style={{ display: "inline-flex", flexWrap: "wrap" }}>
            {books.map(book => <Book key={book.id} book={book} loggedIn={loggedIn} user={user} />)
            }
        </div>



    )


}

export default Books