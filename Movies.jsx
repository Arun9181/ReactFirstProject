import React from "react";

const Movies=(props)=>{
    console.log(props);

    return(
        <>
        <div className="parentBlock">
        <div className="mainBlock">
        <h4><img src={props.data[0].movieImage} alt="" /></h4>
        <h1>{props.data[0].movieName}</h1>
        <h3>{props.data[0].actors}</h3>
        <h4>{props.data[0].collection}</h4>
        <h4>{props.data[0].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[1].movieImage} alt="" /></h4>
        <h1>{props.data[1].movieName}</h1>
        <h3>{props.data[1].actors}</h3>
        <h4>{props.data[1].collection}</h4>
        <h4>{props.data[1].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[2].movieImage} alt="" /></h4>
        <h1>{props.data[2].movieName}</h1>
        <h3>{props.data[2].actors}</h3>
        <h4>{props.data[2].collection}</h4>
        <h4>{props.data[2].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[3].movieImage} alt="" /></h4>
        <h1>{props.data[3].movieName}</h1>
        <h3>{props.data[3].actors}</h3>
        <h4>{props.data[3].collection}</h4>
        <h4>{props.data[3].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[4].movieImage} alt="" /></h4>
        <h1>{props.data[4].movieName}</h1>
        <h3>{props.data[4].actors}</h3>
        <h4>{props.data[4].collection}</h4>
        <h4>{props.data[4].yearofRelease}</h4>
        </div>

        </div>
       
       </>
    )
}
export default Movies;