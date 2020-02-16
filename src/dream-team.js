module.exports = function createDreamTeam(members) {
    if ((toString.call(members).slice(8, -1) !== 'Array') || members.length === 0) {
        return false;
    } else {
        members = members.filter((elem) => typeof(elem) === 'string');
        if (members.length === 0) return false;
        members = members.map((elem) => elem.trim().toUpperCase()
                .split('')
                .slice(0, 1)
                .join(''))
            .sort()
            .join('');
        return members;
    }

};