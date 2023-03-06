const getArtistCode = (name) => {
    switch (name) {
        // FTISLAND
        case '.':
            console.log('Artist: 이홍기'); 
            return ('LHG'); 
        case '너와나의이재지니만만세☠️':
            console.log('Artist: 이재진'); 
            return ('LJJ'); 
        /*
        case '':
            console.log('Artist: 최민환'); 
            return ('CMH'); 
        */

        // CNBLUE
        case 'Yong Hwa':
            console.log('Artist: 정용화'); 
            return ('JYH'); 
        case '강민혁':
            console.log('Artist: 강민혁 Code: KMH');
            return ('KMH'); 
        case '정신오빠':
            console.log('Artist: 이정신');
            return ('LJS'); 

        // N.FLYING
        case '혀비':
            console.log('Artist: 이승협');
            return ('LSH');
        case '고먐미😸':
            console.log('Artist: 차훈');
            return ('CH');
        case '김재똘':
            console.log('Artist: 김재현'); 
            return ('KJH');
        case '유말랑':
            console.log('Artist: 유회승');
            return ('YHS');
        case '서동성 🥳':
            console.log('Artist: 서동성');
            return ('SDS');
        
        // AOA
        case '이여름 그잡채':
            console.log('Artist: 설현');
            return ('SH');

        //SF9
        case '❤️':
            console.log('Artist: 이재윤');
            return ('LJY');

        case '니꼬':
            console.log('Artist: 유태양');
            return ('YTY');
    
        default: return undefined;
    }
};

export default getArtistCode;