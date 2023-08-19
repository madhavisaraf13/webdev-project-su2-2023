function SearchBar() {
    return (
    <div className="container justify-content-center">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <form className="d-flex">
              <input
                className="form-control w-75 m-3"
                type="search"
                placeholder="What do you want to cook today...?"
                aria-label="Go"
              />
              <button className="btn btn-outline-light m-3" data-mdb-ripple-color="dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SearchBar;