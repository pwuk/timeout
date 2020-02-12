import React from "react";
import {isSelected} from "./helpers";

const UserSelector = ({users, handleUserSelection, selectedUsers}) => (
    <div className="userSelector">
        <ul>
            {users.map(user => {
                return (
                    <li key={user.name}>
                        <input
                            checked={isSelected(user, selectedUsers)}
                            onChange={e => handleUserSelection(user)}
                            type="checkbox"
                        />
                        {user.name}
                    </li>
                );
            })}
        </ul>
    </div>
);

export default UserSelector;
