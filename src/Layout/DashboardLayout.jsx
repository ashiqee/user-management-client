
import { Outlet } from 'react-router-dom';
import DefaultSidebar from '../Components/Shared/SideBar';

const DashboardLayout = () => {
    return (
        <div>
            <DefaultSidebar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;