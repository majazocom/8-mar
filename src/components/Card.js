import { useState, useEffect } from "react";
import ThemedButton from "./ThemedButton";

const Card = (props) => {
    const [localState, setLocalState] = useState(false);

    useEffect(() => {
        props.onClick(localState);
    }, [localState])

    return (
        <>
        <ThemedButton />
        <button onClick={() => setLocalState()}>CLICK ME</button>
            <section>
                <img src={props.data.img} width="200" height="200"></img>
                <h3>{props.data.name}</h3>
            </section>
        </>
    );
}

export default Card;