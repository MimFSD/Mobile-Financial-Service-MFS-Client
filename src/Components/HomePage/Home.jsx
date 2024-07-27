
import PublicService from "../Extrapart/PublicService";
import UserService from "../UserDashboard/UserService";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>

            {/* Banner section */}
            <div>
                <Banner></Banner>
            </div>

            {/* User Role Service */}
            <div>
                <UserService></UserService>
            </div>

            {/* Public service Section */}
            <div id="public">
                <PublicService></PublicService>
            </div>

        </div>
    );
};

export default Home;