const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();
    people.forEach((person) => {
        person.yearOfDeath = person.yearOfDeath || currentYear;
    })    
    people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;