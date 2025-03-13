import { createContext, useState } from "react";
import run from '../config/gemini'

export const Context = createContext();





const ContextProvider = (props) =>
{
    const [input, setinput] = useState("");
const [recentprompt, setrecentprompt] = useState("");
const [prevprompt, setprevprompt] = useState([]);
const [showresult, setshowresult] = useState(false);
const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");


    const delaydata = (index, nextword) => {
        setTimeout(function () {
            setresultdata(prev=>prev+nextword)
        },75*index)
        
    }

    const newchat = () => {
        setloading(false)
        setshowresult(false)
        
    }
    
    const onSent = async (prompt) =>
    {

        setresultdata("")
        setloading(true)
        setshowresult(true)
        let response1;
        if (prompt !== undefined) {
            response1 = await run(prompt);
            setrecentprompt(prompt)
            
        } else {
            setprevprompt(prev => [...prev, input])
            setrecentprompt(input)
            response1 = await run(input);
        }
       
         

        const response = await run(input)
        let responsearray = response.split("**");
        let newResponse="";
        for (let i = 0; i < responsearray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responsearray[i];
            } else {
                 newResponse +="<b>" + responsearray[i] + "</b>";
            }
        }

        let newResponse1 = newResponse.split("*").join("</br");
        let newResponseArray = newResponse1.split(" ");
        for (let i = 0; i < newResponseArray.length; i++){
            const nextword = newResponseArray[i];
            delaydata(i, nextword + " ");
        }
        setloading(false)
        setinput("")

    }
    const contextvalue = {
        prevprompt,setprevprompt,onSent,setrecentprompt,recentprompt,showresult,loading,resultdata,input,setinput,newchat
    }

   
    return (
        <Context.Provider value={contextvalue}>
            {props.children}
            </Context.Provider>
    )
}
export default ContextProvider;