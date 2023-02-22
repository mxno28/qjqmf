const timeNotation = (temp) => {
    var time;
/*
    switch(temp[5]){
        case 'P': time='오후 '; break;
        default: time='오전 ';
    }
    switch(temp[0]){
        case '0': time += temp.slice(1, 5); break;
        default: time += temp.slice(0, 5)
    }
*/

    if (temp.length > 5){
        switch(temp[5]){
            case 'P': time='오후 '; break;
            default: time='오전 ';
        }
        switch(temp[0]){
            case '0': time += temp.slice(1, 5); break;
            default: time += temp.slice(0, 5)
        }
    }
    else 
    {
        var hh = Number(temp.slice(0, 2));
        var mm = temp.slice(2);
        if ( hh > 12 ) {
            time = '오후 '+(hh-12)+mm;
        }
        else if ( hh == 12 ){ 
            time = '오후 12'+mm;
        }
        else if ( hh > 0) {
            time = '오전 '+hh+mm;
        }
        else {
            time = '오전 12'+mm;
        }
    }

    return time;
    
};

export default timeNotation;