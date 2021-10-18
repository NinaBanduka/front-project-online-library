const Prikaz = ({ book, single }) => {

    return (
        single ?
            <>


            </>
            :
            <>  <p id="title">{book.title}</p>
                <img src={book.picture} />
                <p>Genre: {book.genre}</p>
                <p>Author: {book.author}</p>

            </>


    )


}

export default Prikaz