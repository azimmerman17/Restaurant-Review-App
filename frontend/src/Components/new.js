import Stack from "react-bootstrap/esm/Stack"

function New_form (data) {
    let message = ''
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <div>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <form className='border bg-white m-1 p-2 shadow rounded' method="POST" action="http://localhost:8080/places">
              <Stack gap={1}>
                <div className="row">
                  <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="founded">Founded Year</label>
                    <input type="number" className="form-control" id="founded" name="founded" defaultValue={new Date().getFullYear()} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cuisines">Cuisines</label>
                  <input className="form-control" id="cuisines" name="cuisines" />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
              </Stack>
            </form>
          </main>
        </div>
    )
}

export default New_form
