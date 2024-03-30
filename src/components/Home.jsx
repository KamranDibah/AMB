import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home container">
            <h2>
               <span>Willkommen</span><br /> bei <br /> der Personalvermittlungsagentur AMB
            </h2>
            <Link to="/base">
                <button>
                    start jetz
                </button>
            </Link>
        </div>
    );
}
