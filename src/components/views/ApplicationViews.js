import "./ApplicationViews.css" 
import { Link, useNavigate } from "react-router-dom"





export const ApplicationViews = () => {
	const navigate = useNavigate()

	return <>
		<div className="home--main">
		<h1 className="title--main">StopSchedule</h1>
		<div><a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inquirer.com%2Ftransportation%2Fa%2Fsepta-suicide-trespassing-engineers-subway-regional-rail-20191119.html&psig=AOvVaw0zQ_uEl0JYeOzgzpMATw_A&ust=1671031829523000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjX_Ob09vsCFQAAAAAdAAAAABAE" target="blank">Help Guide</a></div>
		<div>
			<Link className="link" to="/createstop">
			<button className="home--button">Create Stop Event</button>
			</Link>
			<Link className="link" to="/stopschedule">
			<button className="home--button">StopSchedule</button>
			</Link>
			<Link className="link" to="/trainlocations">
			<button className="home--button">TrainLocations</button>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			</Link>
			<Link className="allstopshidden" to="/allstops">
			<button className="hiddenbutton">ALLSTOPS</button>
			</Link>
		</div>
		</div>
	</>
}

