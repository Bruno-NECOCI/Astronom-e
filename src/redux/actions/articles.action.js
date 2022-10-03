import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { legacy_createStore } from "redux";
import { db } from "../../Firebase/firebase-config";

export const GET_ARTICLES =  "GET_ARTICLES";

export const getArticles = () => {
    return (dispatch) => {
        return getDocs(collection(db, "Articles"))
            .then((res) => {
                dispatch({
                    type: GET_ARTICLES,
                    payload: res.docs.map(doc => ({...doc.data(), Id: doc.id}))
                })
            })
            .catch(err => console.log(err))
    }
}

export const GET_ARTICLE_DETAILS =  "GET_ARTICLE_DETAILS";

export const getArticleDetails = (id) => {
    return (dispatch) => {
        return getDoc(doc(db, "Articles", id))
            .then((res) => {
                dispatch({
                    type: GET_ARTICLE_DETAILS,
                    payload: res.data()
                })
            })
            .catch(err => console.log(err))
    }
}

export const ADD_ARTICLE =  "ADD_ARTICLE";

export const addArticle = (data) => {
    return(dispatch) => {
        return addDoc(collection(db, "Articles"), data )
            .then(() => {
                dispatch({ 
                    type: ADD_ARTICLE,
                    payload: data
                })
            })
            .catch(err => console.log(err))
    }
}
export const EDIT_ARTICLE =  "EDIT_ARTICLE";

export const editArticle = (data) => {
    return(dispatch) => {
        return updateDoc(doc(db, "Articles", data.id), {Titre: data.Titre, Contenu: data.Contenu, Date: data.Date})
            .then(() => {
                dispatch({
                    type: EDIT_ARTICLE,
                    payload: {...data}
                })
            })
            .catch(err => console.log(err))
    }
}
export const DELETE_ARTICLE =  "DELETE_ARTICLE";

export const deleteArticle = (idArticle) => {
    return(dispatch) => {
        return deleteDoc(doc(db, "Articles", idArticle))
            .then(() => {
                dispatch({
                    type: DELETE_ARTICLE,
                    payload: ""
                })
            })
            .catch(err => console.log(err))
    }
}