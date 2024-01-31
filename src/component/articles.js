import { useDispatch, useSelector } from "react-redux";
import { delete_article } from "../store/actions";

function Articles(){
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles);
    return(
        <div className="row listArticles"> 
            { articles.map((art)=>(
                <div key={art.id} className="bg-dark text-white text-center fs-2 col-xxl rounded m-2">
                    <label>Designation : {art.designation}</label><br/>
                    <label>Famille : {art.famille}</label><br/>
                    <button className="btn btn-primary p-1 m-2" onClick={()=>dispatch(delete_article(art))}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}
export default Articles;