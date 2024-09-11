import "./Movie.css";





const Movie=(props,{handleAdd})=>{
  const user = props.user;

    return (
        <div>
           {
            user.map((data)=>{
              return <div className="d-inline-flex m-3"> <div class="card" style={{width: "18rem"}}>
              <img src={data.profile_path} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <a href="#" class="btn btn-primary">{data.movie_id}</a>

                <button onClick={handleAdd}>click</button>
                <span>{data.character}</span>
              </div>
            </div>
            </div>
            })
           }
        </div>
    )
}
export default Movie;