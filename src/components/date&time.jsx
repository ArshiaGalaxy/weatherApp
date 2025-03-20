import moment from "moment-jalaali";
import { useEffect, useState } from "react";

function DateTime(){
    const [today, setToday] = useState();
    useEffect(()=>{
        const now = moment();
        setToday(now.format('jYYYY jMMMM jDD HH:mm '));
    },[]);
    return(
        <span className="mx-center font-bold text-gray-800 text-3xl drop-shadow-md font-mono">{today}</span>
    )
}

export default DateTime;