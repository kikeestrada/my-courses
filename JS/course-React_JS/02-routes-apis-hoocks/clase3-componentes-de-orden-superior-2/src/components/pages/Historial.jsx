import React from "react"
const Historial = ({match, location, history}) => (
    <>
        <div> { `match:     ${JSON.stringify(match)}`   } </div>
        <div> { `location:  ${JSON.stringify(location)}`} </div>
        <div> { `history:   ${JSON.stringify(history)}` } </div>
    </>
);
export default Historial