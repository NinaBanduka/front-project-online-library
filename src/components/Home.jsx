import Books from "./Books"


const Home = ({ books, loggedIn, setBooks, user }) => {
    return (
        <div style={{ backgroundColor: '#c5a395' }}>

            <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=628&q=80")', height: '300px', width: '100%' }}>

                <p style={{ display: 'flex', color: '#333D51', margin: '5px', fontSize: '30px', padding: '20px', color: 'white' }} >Welcome!</p>


            </div>
            <p style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', color: '#333D51', margin: '5px', fontSize: '20px', padding: '20px', color: 'white' }} >TRENDING THIS WEEK:</p>
            <Books books={(books.sort(() => 0.5 - Math.random())).slice(0, 12)} loggedIn={loggedIn} setBooks={setBooks} user={user} />
        </div>
    )

}

export default Home