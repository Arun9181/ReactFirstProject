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
        <div className="mainBlock">
        <h4><img src={props.data[5].movieImage} alt="" /></h4>
        <h1>{props.data[5].movieName}</h1>
        <h3>{props.data[5].actors}</h3>
        <h4>{props.data[5].collection}</h4>
        <h4>{props.data[5].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[6].movieImage} alt="" /></h4>
        <h1>{props.data[6].movieName}</h1>
        <h3>{props.data[6].actors}</h3>
        <h4>{props.data[6].collection}</h4>
        <h4>{props.data[6].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[7].movieImage} alt="" /></h4>
        <h1>{props.data[7].movieName}</h1>
        <h3>{props.data[7].actors}</h3>
        <h4>{props.data[7].collection}</h4>
        <h4>{props.data[7].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[8].movieImage} alt="" /></h4>
        <h1>{props.data[8].movieName}</h1>
        <h3>{props.data[8].actors}</h3>
        <h4>{props.data[8].collection}</h4>
        <h4>{props.data[8].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[9].movieImage} alt="" /></h4>
        <h1>{props.data[9].movieName}</h1>
        <h3>{props.data[9].actors}</h3>
        <h4>{props.data[9].collection}</h4>
        <h4>{props.data[9].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[10].movieImage} alt="" /></h4>
        <h1>{props.data[10].movieName}</h1>
        <h3>{props.data[10].actors}</h3>
        <h4>{props.data[10].collection}</h4>
        <h4>{props.data[10].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[11].movieImage} alt="" /></h4>
        <h1>{props.data[11].movieName}</h1>
        <h3>{props.data[11].actors}</h3>
        <h4>{props.data[11].collection}</h4>
        <h4>{props.data[11].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[12].movieImage} alt="" /></h4>
        <h1>{props.data[12].movieName}</h1>
        <h3>{props.data[12].actors}</h3>
        <h4>{props.data[12].collection}</h4>
        <h4>{props.data[12].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[13].movieImage} alt="" /></h4>
        <h1>{props.data[13].movieName}</h1>
        <h3>{props.data[13].actors}</h3>
        <h4>{props.data[13].collection}</h4>
        <h4>{props.data[13].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[14].movieImage} alt="" /></h4>
        <h1>{props.data[14].movieName}</h1>
        <h3>{props.data[14].actors}</h3>
        <h4>{props.data[14].collection}</h4>
        <h4>{props.data[14].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[15].movieImage} alt="" /></h4>
        <h1>{props.data[15].movieName}</h1>
        <h3>{props.data[15].actors}</h3>
        <h4>{props.data[15].collection}</h4>
        <h4>{props.data[15].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[16].movieImage} alt="" /></h4>
        <h1>{props.data[16].movieName}</h1>
        <h3>{props.data[16].actors}</h3>
        <h4>{props.data[16].collection}</h4>
        <h4>{props.data[16].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[17].movieImage} alt="" /></h4>
        <h1>{props.data[17].movieName}</h1>
        <h3>{props.data[17].actors}</h3>
        <h4>{props.data[17].collection}</h4>
        <h4>{props.data[17].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[18].movieImage} alt="" /></h4>
        <h1>{props.data[18].movieName}</h1>
        <h3>{props.data[18].actors}</h3>
        <h4>{props.data[18].collection}</h4>
        <h4>{props.data[18].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[19].movieImage} alt="" /></h4>
        <h1>{props.data[19].movieName}</h1>
        <h3>{props.data[19].actors}</h3>
        <h4>{props.data[19].collection}</h4>
        <h4>{props.data[19].yearofRelease}</h4>
        </div>
        <div className="mainBlock">
        <h4><img src={props.data[20].movieImage} alt="" /></h4>
        <h1>{props.data[20].movieName}</h1>
        <h3>{props.data[20].actors}</h3>
        <h4>{props.data[20].collection}</h4>
        <h4>{props.data[20].yearofRelease}</h4>
        </div>

        </div>
       
       </>
    )
}
export default Movies;