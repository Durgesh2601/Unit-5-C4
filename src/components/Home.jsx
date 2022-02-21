import { Link } from "react-router-dom"
export const Home = () => {
    return <>
    <div className="container mt-5">
        <Link to="/search"><img id="logo1" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="google" /></Link>
        <input type="text" className="form-control search-box mt-3" placeholder="Search google" aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>
    </>
}