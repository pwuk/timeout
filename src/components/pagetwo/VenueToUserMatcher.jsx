import React from "react";
import {venueToUserMatcher} from "./helpers";

const VenueToUserMatcher = ({venues, selectedUsers}) => {
    if (selectedUsers.length === 0) {
        return <h3>Please select at least one user</h3>;
    }

    const mappedVenues = venues.map(venue => ({...venue, ...venueToUserMatcher(venue, selectedUsers)}));
    const placesToGo = mappedVenues.filter(
        venue => venue.recommendation.recommend
    );
    const placesToAvoid = mappedVenues.filter(
        venue => !venue.recommendation.recommend
    );

    return (
        <>
            <div className="venues">
                <h3>For {selectedUsers.length} user(s) we can recommend </h3>
                <ul>
                    {placesToGo.map(venue => (
                        <li key={venue.name} className={"venue"}>
                            <b>{venue.name}</b>
                        </li>
                    ))}
                </ul>
                {placesToGo.length === 0 && (
                    <div>
                        <h4>
                            No where{" "}
                            <span role="img" aria-label="no selection available">😢😢</span>
                        </h4>
                    </div>
                )}
            </div>
            <div className="venues-to-avoid">
                <h3>Places to avoid </h3>
                <ul>
                    {placesToAvoid.map(venue => (
                        <li key={venue.name} className={"venue"}>
                            <b>{venue.name}</b>
                            <ul>
                                {venue.recommendation.reasons.map(reason => (
                                    <li>{reason}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default VenueToUserMatcher;
