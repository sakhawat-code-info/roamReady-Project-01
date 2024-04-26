import PropTypes from 'prop-types';
import UseAuth from '../AuthProvider/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {

    const { user, loader } = UseAuth();
    const locationTracking = useLocation();

    if (loader) {
        return <>
            <div className='flex items-center justify-center'>
                <span className="loading loading-dots loading-xs"></span>
                <span className="loading loading-dots loading-sm"></span>
                <span className="loading loading-dots loading-md"></span>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/loginPage'} state={locationTracking?.pathname ? locationTracking.pathname : '/'}></Navigate>;
};

ProtectedRoutes.propTypes = {
    children: PropTypes.node
};
export default ProtectedRoutes;