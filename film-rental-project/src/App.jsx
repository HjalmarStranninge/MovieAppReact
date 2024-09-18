import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css'
import MovieList from './components/MovieList'
import MovieCreate from './components/MovieCreate'

function App() {

  function handlePageRefresh() {
    window.location.reload()
  }
  return (
    <>
      <div className='main-container'>
        <MovieList />
      </div>
      <div className='main-container'>
        <MovieCreate refresh={handlePageRefresh} />
      </div>

    </>
  )
}

export default App
