import { useState } from "react";
import { getAllBooks } from "../Service";
import Books from "./Books";



const Categories = ({ user, setBooks, books, loggedIn }) => {
  const [kategorija, setKategorija] = useState(false)
  return (
    <>
      <div style={{ background: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")', backgroundSize: 'cover', overflow: 'hidden', backgroundRepeat: 'no-repeat', height: '100vh', width: '100%', display: 'inline-block', justifyContent: 'space-between', backgroundColor: '#be9686', color: '#ffffff', margin: '5px', fontSize: '20px', padding: '5px' }}>
        <div style={{ background: '#c5a395', width: '200px', padding: '30px', justifyContent: 'center', margin: '10px', alignContent: 'center', marginLeft: '30px', borderRadius: '20px' }}>

          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('drama')))
              setKategorija(true)
            })

          }} >Drama</p><br />

          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('comedy')))
              setKategorija(true)
            })

          }} >Comedy</p><br />

          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('adventure')))
              setKategorija(true)
            })

          }} >Adventure</p><br />

          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('children')))
              setKategorija(true)
            })

          }} >Children</p><br />

          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('romance')))
              setKategorija(true)
            })

          }}>Romance</p><br />
          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('horror') || book.genre.toLowerCase().includes('thriller')))
              setKategorija(true)
            })

          }}>Horror & Thriller</p> <br />
          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('fantasy') || book.genre.toLowerCase().includes('sci-fi')))
              setKategorija(true)
            })

          }}>Fantasy & Sci-Fi</p><br />
          <p style={{ height: '10px', color: 'black', textDecoration: 'none', fontSize: '20px' }} onClick={() => {


            getAllBooks().then(res => {
              console.log(res.data)
              setBooks(res.data.filter(book => book.genre.toLowerCase().includes('crime') || book.genre.toLowerCase().includes('mystery')))
              setKategorija(true)
            })

          }} >Crime & Mystery</p><br />
        </div>
      </div>

      <div style={{ backgroundColor: '#c5a395' }}>

        <Books books={kategorija ? books : []} loggedIn={loggedIn} setBooks={setBooks} />

      </div>

    </>
  )
}

export default Categories