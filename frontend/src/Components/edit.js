const React = require('react')

function edit_form ({ data }) {
    return (
        <div>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="image">Place Image</label>
                        <input className="form-control" id="image" name="image" defaultValue={data.place.image} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-4">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={data.place.city} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={data.place.state} />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founding Year</label>
                        <input className="form-control" id="founded" name="founded" defaultValue={data.place.founded} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                </div>
                <input className="btn btn-primary" type="submit" defaultValue="Update Place" />
            </form>
        </div>
    )
}

export default edit_form
