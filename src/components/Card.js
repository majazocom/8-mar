import { useState, useEffect } from "react";

const Card = (props) => {
    const [localState, setLocalState] = useState(false);

    useEffect(() => {
        props.onClick(localState);
    }, [localState])

    return (
        <>
        <button onClick={() => setLocalState()}>CLICK ME</button>
            <section>
                <h3>{props.data.name}</h3>
            </section>
        </>
    );
}

export default Card;