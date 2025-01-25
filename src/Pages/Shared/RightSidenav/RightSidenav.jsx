import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png"
import qZone2 from "../../../assets/class.png"
import qZone3 from "../../../assets/playground.png"

const RightSidenav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg" href=""><FaFacebook className="mr-3" /> Facebook</a>
                <a className="p-4 flex items-center text-lg border-x" href=""><FaTwitter className="mr-3" /> Twitter</a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg" href=""><FaInstagramSquare className="mr-3" /> Instagram</a>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSidenav;