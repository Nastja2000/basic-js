module.exports = function getSeason(date) {
    if (!arguments.length) {
        return 'Unable to determine the time of year!';
    } else {
        if (toString.call(date).slice(8, -1) !== 'Date') {
            throw new Error();
        } else {
            let month = date.getMonth();
            let season = '';
            if (month === 0 || month === 1 || month === 11) {
                season = 'winter';
            } else {
                if (month >= 2 && month < 5) {
                    season = 'spring';
                } else {
                    if (month >= 5 && month < 8) {
                        season = 'summer';
                    } else {
                        if (month >= 8 && month < 11) {
                            season = 'autumn';
                        }
                    }
                }
            }
            return season;
        }
    }
};