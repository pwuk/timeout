import React, { useState } from "react";
import UserSelector from "./UserSelector";
import VenueToUserMatcher from "./VenueToUserMatcher";
import { useFetch } from "./hooks";
import { isSelected } from "./helpers";

const PageTwo = () => {
  const [selectedUsers, setSetSelectedUsers] = useState([]);

  const allTheUsers = useFetch("users");
  const allTheVenues = useFetch("venues");

  const handleUserSelection = user => {
    let newState = null;
    if (isSelected(user, selectedUsers)) {
      newState = [
        ...selectedUsers.filter(selectedUser => selectedUser.name !== user.name)
      ];
    } else {
      newState = [...selectedUsers, user];
    }
    setSetSelectedUsers(newState);
  };

  return (
    <div className={"task"}>
      <h2>Peter's Resplendent Repository of Restaurant Recommendations</h2>

      <UserSelector
        users={allTheUsers}
        selectedUsers={selectedUsers}
        handleUserSelection={handleUserSelection}
      />
      <VenueToUserMatcher selectedUsers={selectedUsers} venues={allTheVenues} />
    </div>
  );
};

export default PageTwo;
