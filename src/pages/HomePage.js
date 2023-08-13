import {Link} from "react-router-dom";
import BeerImg from "../assets/beers.png";
import RandomImg from "../assets/random-beer.png";
import NewImg from "../assets/new-beer.png";
 
function HomePage () {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to ="/beers">
                    <img src={BeerImg} alt="View Beers" /> All Beers</Link></li>
                    <li><Link to ="/random-beer">
                    <img src={RandomImg} alt="Random Beers" />Random Beers</Link></li>
                    <li><Link to ="/new-beer">
                    <img src={NewImg} alt="New Beers" />New Beer</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HomePage;
