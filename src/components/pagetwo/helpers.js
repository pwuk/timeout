const isSelected = (user, selectedUsers) =>
    !!selectedUsers.find(selectedUser => selectedUser.name === user.name);

const venueToUserMatcher = (venue, selectedUsers) => {
    const {food, drinks: drinksOnOffer} = venue;

    const selectThisVenue = {recommendation: {recommend: true, reasons: []}};
    selectedUsers.forEach(user => {
        const {wont_eat, drinks, name} = user;
        const userToFood = food.filter(item => wont_eat.includes(item));

        if (userToFood.length) {
            selectThisVenue.recommendation.recommend = false;
            selectThisVenue.recommendation.reasons.push(`Nothing to eat for ${name}`);
        }

        const userToDrinks = drinksOnOffer.filter(item => drinks.includes(item));
        if (userToDrinks.length === 0) {
            selectThisVenue.recommendation.recommend = false;
            selectThisVenue.recommendation.reasons.push(
                `Nothing to drink for ${name}`
            );
        }
    });

    return selectThisVenue;
};

export {isSelected, venueToUserMatcher};
