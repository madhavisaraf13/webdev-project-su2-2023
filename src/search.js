function Search() {
    return (
        
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <form className="d-flex">
              <input
                className="form-control w-75"
                type="search"
                placeholder="Search for food recipes.."
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
 
    
    );
}

export default Search;