import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataLoading, getDataSuccess } from "../redux/action";
export const Navbar = () => {
    const {loading, result, error } = useSelector((store) => store.data);
    const [text, setText] = useState("");
    const [res, setRes] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getData();
    },[])
    const getData = () => {
        dispatch(getDataLoading());
        axios.get("https://fast-reef-22226.herokuapp.com/data").then(({data}) => {
        dispatch(getDataSuccess(data));  
    });}
    const getRes = () => {
        axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`).then(({data}) => {
        setRes(data);
        })
    }
    return loading ? ("Loading...") : 
        <><div id="navbar">
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img id="logo2" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google" />
            <input className="form-control inp2" onChange={(e) => setText(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success search" type="button" onClick={() => {
                getRes();
            }}>Search</button>
        </div>
      </nav>
    </div>
    <div id="search-result" style={{visibility : res.length > 0 ? "visible" : "hidden"}}>Showing Results.. <br />
        {res.map((e, i) => {
            return (
                <div key={i} className="result shadow ms-3">
                    <p>{e.url}</p>
                    <Link to={`/data/${e.id}`}><h4>{e.title} | <b style={{color: "black"}}>{e.author}</b></h4></Link>
                    <b>{e.description}</b>
                    <h6>Creation Date : {(e.creation_date)}</h6>
                    <h6>Explicit : {e.explicit ? "Yes" : "No"}</h6>
                    <h6>Quality : {e.quality}%</h6>
                </div>
            )
        })}

    </div>
    
    
    </>
}