import {useEffect} from "react";
import "./TypeWritter.css";

/**
 * 
 * @param {Array} data - Array[]: array of stringsto be typed
 * @param {Number} TypeSpeed - Number: speed of typing in milliseconds
 * @param {Number} MsgDelay - Number: delay between each message in milliseconds 
 */

function TypeWritter({data = [], TypeSpeed = 50, MsgDelay = 2000}){
    useEffect(() => {
        let CharacterPos = 0;
        let MsgBuffer = "";
        let MsgIndex = 0;
        let delay;

        function StartTyping(){
            let id = document.getElementById("typing-text");
           
            if(CharacterPos !== data[MsgIndex].length){
                MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharacterPos);
                id.value = MsgBuffer + "_";
                delay = TypeSpeed;
            }else{
                delay = MsgDelay;
                MsgBuffer = "";
                CharacterPos = -1;
                if(MsgIndex !== data.length - 1){
                    MsgIndex++;
                }else{
                    MsgIndex = 0;
                }
            }
            CharacterPos++;
            setTimeout(StartTyping, delay);
        }
        

        StartTyping();  

    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, []);
    
    return(
        <textarea id = "typing-text" readonly> </textarea>
    )
}

export default TypeWritter