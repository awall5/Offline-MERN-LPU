import { Link } from "react-router";


const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>

    <Link to="/View">_View_</Link>
    <Link to="/search">_Search_</Link>
    </div>
  )
}

export {HomePage};