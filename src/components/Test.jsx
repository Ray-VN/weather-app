
export function UseCard({props}) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

function UseCard1({props}) {
    return (
        <>
            <p>City: {props.chilren}</p>
        </>
    );
}



