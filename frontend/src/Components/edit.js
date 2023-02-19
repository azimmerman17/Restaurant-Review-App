import { useParams } from 'react-router-dom'
import Stack from "react-bootstrap/esm/Stack"

function Edit_form ({ data, setLink }) {
    const { id } = useParams()
    setLink(`/${id}/edit`)

    const { city, cuisines, founded, name, pic, state } = data

    return (
        <div>
            <h1>Edit Place</h1>
            <form className='border bg-white m-1 p-2 shadow rounded' method="POST" action={`http://localhost:8080/places/${id}?_method=PUT`}>
                <Stack gap={2}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={name} required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="image">Place Image</label>
                            <input className="form-control" id="image" name="image" defaultValue={pic} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={city} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={state} />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founding Year</label>
                            <input className="form-control" id="founded" name="founded" defaultValue={founded} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" defaultValue="Update Place" />
                </Stack>
            </form>
        </div>
    )
}

export default Edit_form
