import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./main.css";
import axios from "axios";
import Loading from "./Loading";

interface ShowResProps {
}

const ShowRes: FunctionComponent<ShowResProps> = ({ }) => {
    let { mainId } = useParams();
    let [getinfo, setallinfo] = useState<any>();
    let [loding, setloging] = useState<boolean>(false);
    useEffect(() => {
        axios.get(`https://mugbalim.boi.org.il/api/umbraco/api/IframeSearchById/he/${mainId}`).then((res1) => {
            setallinfo(res1.data); setloging(true)
        })
    }, []);
    useEffect(() => {

    }, []);
    return (<>
        {console.log(getinfo)}
        {loding ? (<><div className="screen un" style={getinfo.isRestricted == false ? { backgroundColor: "#5AE9BA" } : { backgroundColor: "#e9725a" }}>
            <div className="border-top">
                <h3>יש לנו מידע על {mainId}</h3>
            </div>
            <h1 className="card"><i className="fa-solid fa-id-card" id="topIcon"></i></h1>
            <p>{getinfo.response}</p>
        </div>
            {/* <button id="btnClick">CONTINUE</button>
        <button id="btnClick">CONTINUE</button> */}
        </>) : <Loading />}
    </>);
}

export default ShowRes;