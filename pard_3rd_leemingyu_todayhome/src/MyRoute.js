import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import Layout from "./Pages/Layout";
import Profile from "./Pages/ProfilePage/Profile";
import Edit from "./Pages/EditPage/EditProfile";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route element={<Layout />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit" element={<Edit />} />
            </Route>
        </Routes>
    );
}

export default MyRoutes;