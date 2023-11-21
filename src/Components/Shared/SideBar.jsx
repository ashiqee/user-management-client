import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,

    InboxIcon,
    PowerIcon,
    HomeIcon,
    ArrowLeftIcon,


} from "@heroicons/react/24/solid";

import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { NavLink } from "react-router-dom"
import { useState } from "react";


const DefaultSidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div>

            {
                isOpen ? <> <Card className="h-[calc(100vh-2rem)] ease-in-out  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 p-4">
                        <Typography variant="h5" color="blue-gray">
                            <div className="flex gap-0">
                                <h2>User Management System</h2>
                                <button onClick={() => setIsOpen(!isOpen)} >    <RiMenuFoldFill className="h-5 w-5" /></button>

                            </div>
                        </Typography>
                    </div>
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            User List
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Inbox
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <NavLink to='/' >
                            <ListItem>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Home
                            </ListItem>
                        </NavLink>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                </Card></>
                    :
                    <>
                        <button className="p-5 text-2xl " onClick={() => setIsOpen(!isOpen)} >    <RiMenuUnfoldFill /></button>
                    </>
            }
        </div>
    );
};

export default DefaultSidebar;