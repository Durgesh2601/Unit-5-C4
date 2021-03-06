import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"


export const DataDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get(`https://fast-reef-22226.herokuapp.com/data/${id}`).then((res) => {
            setData(res);
        })
    }
    console.log(data);
    return (
        <div id="detailed-result">
            <div className="title"><h5>{data.data.title}</h5></div>
            
        </div>
    )
}