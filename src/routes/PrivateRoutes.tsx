import { useEffect } from "react";
import { STRING } from "../constant/string";
import { getDataFromLocalStorage } from "../utils/helperFunction";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { routePath } from "../constant/routes";

const PrivateRoutes: React.FC = () => {
	const auth = getDataFromLocalStorage(STRING.USERDETAILS);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) {
			navigate(`/login?toRedirect=${location.pathname}`);
		}
	}, [auth, location.pathname, navigate]);

	return auth ? <Outlet /> : <Navigate to={routePath.LOGIN} />;
};

export default PrivateRoutes;
