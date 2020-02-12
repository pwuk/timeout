import {
    isSelected,
    venueToUserMatcher,
} from "./helpers";

describe("test helper functions", () => {
    const mockUsers = [
        {
            "name": "John Davis",
            "wont_eat": ["Fish"],
            "drinks": ["Cider", "Rum", "Soft drinks"]
        },
        {
            "name": "Gary Jones",
            "wont_eat": ["Eggs", "Pasta"],
            "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
        }
    ];
    const mockVenues = [
        {
            "name": "El Cantina",
            "food": ["Mexican"],
            "drinks": ["Tequila", "Beer"]
        },
        {
            "name": "Twin Dynasty",
            "food": ["Chinese"],
            "drinks": ["Rum", "Beer", "Whisky", "Cider"]
        },
        {
            "name": "Dead rat kebabs",
            "food": ["kebabs"],
            "drinks": ["pepsi", "fanta", "vimto", "Soft drinks", "Coffee"]
        }
    ];

    it("isSelected", () => {
        let selected = isSelected({name: 'John Davis'}, mockUsers);
        expect(selected).toEqual(true);
        selected = isSelected({name: 'Mr Nobody'}, mockUsers);
        expect(selected).toEqual(false);
    });

    it("venueToUserMatcher", () => {
        let matchStatus = venueToUserMatcher(mockVenues[0], mockUsers);

        expect(matchStatus).toEqual({
            "recommendation": {
                "reasons": [
                    "Nothing to drink for John Davis",
                ],
                "recommend": false
            }
        });

        matchStatus = venueToUserMatcher(mockVenues[1], mockUsers);

        expect(matchStatus).toEqual({
            "recommendation": {
                "reasons": [
                    "Nothing to drink for Gary Jones"
                ],
                "recommend": false
            }
        });

        matchStatus = venueToUserMatcher(mockVenues[2], mockUsers);
        expect(matchStatus).toEqual({
            "recommendation": {
                "reasons": [],
                "recommend": true
            }
        });


    });
});
