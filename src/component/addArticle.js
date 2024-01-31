import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_article } from "../store/actions";
function AddArticle(){
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();
    const [ design, setDesign ] = useState("");
    const [ famille, setFamille ] = useState("");
    // add function add_article
    const addArticle = () => {
        if(design && famille){
            const article = {
                id : articles[articles.length-1].id + 1,
                designation : design,
                famille : famille
            }
            dispatch(add_article(article))
            setDesign("")
            setFamille("")
        }else{
            alert("Entre a valid Champs!")
        }
    }
    // handle Function
    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle();
    }
    
    return (
        <div className="form bg-secondary p-3 mt-3 rounded addArticle">
            <form onSubmit={handleSubmit}>
            <label>Designation</label>
            <input
            type="text"
            className="form-control"
            onChange={e => setDesign(e.target.value)}
            value={design}
            />
            <label>Famille</label>
            <input 
            type="text"
            className="form-control"
            value={famille}
            onChange={e => setFamille(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-2">Ajouter</button>
            </form>
        </div>
    )
}

export default AddArticle;