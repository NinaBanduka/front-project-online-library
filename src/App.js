import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Categories from "./components/Categories";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getAllBooks } from "./Service";
import Content from "./components/Content";




function App() {
  const [user, setUser] = useState(false)     //null
  const [books, setBooks] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  // const [users, setUsers] = useState([])

  useEffect(() => {

    getAllBooks().then(res =>
      setBooks(res.data)
    )
  }, [])


  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#be9686', color: '#F4F3EA', margin: '5px', fontSize: '20px', padding: '20px' }}>
        <Link style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to="/">Home</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to="/categories">Categories</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to="/login">Login</Link>
        <Link style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to="/register">Register</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home books={books} loggedIn={user} setBooks={setBooks} user={user} />

          {/* loggedIn={user} */}

        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/register">
          <Register setUser={setUser} />
        </Route>
        <Route exact path="/categories">
          <Categories loggedIn={user} setBooks={setBooks} books={books} />
        </Route>
        <Route exact path="/categories/:bookId">
          <Content loggedIn={user} />
        </Route>

      </Switch>
    </Router>
  );
}



export default App;
