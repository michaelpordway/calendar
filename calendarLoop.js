module.exports = {
    calendar : function() {
        for(var i = 0; i < 48; i++) {
            console.log("<tr id=" + convertToMilitaryTime(i) + "h'>\n");
            for(var j = 1; j <= 7 ; j++) {
                console.log("<td id=d" + Number.toString(j) + convertToMilitaryTime(i) + "d'></td>\n");
            }
            console.log("</tr>");
                       }
    },

    convertToMilitaryTime : function(n) {
        if ((n % 48) % 2 === 0)
            return padString(Number.toString(n * 50));
        else
            return padString(Number.toString(n * 50 - 20));
    },

    padString : function(s) {
        if (s.length === 4)
            return s;
        else if (s.length === 3)
            return "0" + s;
        else if (s.length === 2)
            return "00" + s;
        else if (s.length === 1)
            return "000" + s;
        else
            return "something went wrong";
    }
    
}
