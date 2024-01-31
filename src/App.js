import Articles from "./component/articles";
import AddArticle from "./component/addArticle";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return(
    <div className="container">
      <AddArticle />
      <Articles />
    </div>
  )
}

export default App;