import { useState } from "react";         
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddBeers (){
    const [name, SetName] = useState("");
    const [tagline, SetTagline] = useState("")
    const [description, SetDescription] =useState("")
    const [firstBrewed, SetFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] =useState(0);
    const [contributedBy, setContributedBy] =useState("")
    const navigate = useNavigate();    

    const handleSubmit = (e) => {          // <== HANDLER FUNCTION
        // Prevent page reload on submit
        e.preventDefault();
        // Create the body for the POST request
        const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy };

        axios.post("https://ih-beers-api2.herokuapp.com/beers", body)
        .then((response) => {
            SetName("")
            SetTagline("")
            SetDescription("")
            SetFirstBrewed("")
            setBrewersTips("")
            setAttenuationLevel(0)
            setContributedBy("")
            navigate('/');    
        })
}

return(
    <div className="NewBeer">
        <h3>Add New Beer</h3>

        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
          type="text"
          name="name"
          onChange={(e) => SetName(e.target.value)}
          value={name}
        />

            <label>Tagline</label>
            <input
          type="text"
          name="name"
          onChange={(e) => SetTagline(e.target.value)}
          value={tagline}
        />
        <label>Description</label>
            <input
          type="text"
          name="name"
          onChange={(e) => SetDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
            <input
          type="text"
          name="name"
          onChange={(e) => SetFirstBrewed(e.target.value)}
          value={firstBrewed}
        />

        <label>Brewers Tips</label>
            <input
          type="text"
          name="name"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />

        <label>Attenuation Level</label>
            <input
          type="number"
          name="name"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />

        <label>Contributed By</label>
            <input
          type="text"
          name="name"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />

        <button type="submit">Add New Beer!</button>

        </form>

    </div>
)}

export default AddBeers;