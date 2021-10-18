import Content from "./Content"
import { useHistory } from "react-router"
import StyledBook from "./StyledBook"
import { useState } from "react"




const Book = ({ book, loggedIn, setBooks }) => {
    const [showContent, setShowContent] = useState(false)
    const history = useHistory()



    console.log(loggedIn)
    return (
        <StyledBook>

            {/* <Prikaz single={single} book= {book}/> */}

            <p id="title">{book.title}</p>
            <img src={book.picture} />
            <p>Genre: {book.genre}</p>
            <p>Author: {book.author}</p>

            {/* <Link to={`/categories/${book.id}`}>READ</Link> */}


            <button onClick={() => {
                if (loggedIn) {


                    history.push(`/categories/${book.id}`)


                }
                else { history.push("/login") }



            }}>READ</button>

            {showContent ? <Content book={book} /> : null}

        </StyledBook>

    )

}

export default Book