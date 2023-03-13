import { Link, Navigate } from "react-router-dom";
import WorkWithMe from "../workWithMe/WorkWithMe";
import "./home.css"

//import NavBar from '../navBar/NavBar'

import Contacto from '../contacto/Contacto'
import Cv from '../cv/Cv'
import Services from '../services/Services'


const Home = () => {
  return (
    <div className="divHome">
      <div className="divHomePortada">
        <div>
          <h2>Memorable sites</h2>
        </div>

        <h3>
          In a world that increasingly turns to virtuality, it is important to
          have an impressive virtual presence. I can help you turn your site
          into a site that customers will remember.
        </h3>
      </div>

      <div className="divButtonHome">
        <Link to="/Pages/WorkWithMe" element={<WorkWithMe />}>
          <button>WORK WITH ME</button>
        </Link>

        <Link to="/Pages/Services" element={<Services />}>
          <button>SERVICES</button>
        </Link>

        <Link to="/Pages/Contacto" element={<Contacto />}>
          <button>CONTACT</button>
        </Link>

        <Link to="/Pages/Cv" element={<Cv />}>
          <button>RESUME</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
