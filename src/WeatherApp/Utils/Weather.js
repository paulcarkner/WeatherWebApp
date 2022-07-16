const apiKey = "f4bcb6a805ca765f7df85383dc7fdbab"; //todo: hide in env, for demonstration only

export async function fetchForecast(lat, lon, exclude) {
    return await fetch(`https://api.openweathermap.org/data/3.0/onecall?exclude=${exclude}&lat=${lat}&lon=${lon}&appid=${apiKey}`).then(res => res.json());
}

export function processTemp(temp, decimals) {
    return (temp - 273.15).toFixed(decimals);
}

export function UNIXtoDateTime(unix, offset) {
    return new Date((unix + offset) * 1000);
}

export function getUTCTime(d) {
    return d.getUTCHours() + ":" + ("0" + d.getUTCMinutes()).substr(-2);
}

export function getUTCDay(d) {
    return daysOfWeek[d.getUTCDay(d)];
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function getWeatherStyle(time, sunrise, sunset, cloud) {
    let isDaylight = time > sunrise && time < sunset;
    let sunPercent = isDaylight ?
        (time - sunrise) / (sunset - sunrise) :
        time < sunrise ?
            (time - new Date(sunset - 24 * 60 * 60 * 1000)) / (sunrise - new Date(sunset - 24 * 60 * 60 * 1000)) :
            (time - sunset) / (new Date(sunrise + 24 * 60 * 60 * 1000) - sunset);
    sunPercent = Math.floor(sunPercent * 10);
    return {
        sun: {
            isDaylight: isDaylight,
            x: [85, 90, 90, 80, 65, 35, 20, 10, 10, 15][sunPercent],
            y: [50, 35, 25, 15, 10, 10, 15, 25, 35, 50][sunPercent],
            halo: {
                hue: isDaylight ? 60 : 210,
                sat: 100,
                lum: isDaylight? 50 : 70
            },
            opacity: 100 - cloud
        },
        gradient: {
            start: {
                hue: (isDaylight ?
                    [277, 227, 217, 217, 217, 217, 217, 217, 220, 306] :
                    [213, 213, 213, 213, 213, 213, 213, 213, 213, 213]
                )[sunPercent],
                sat: (isDaylight ?
                    [76, 99, 82, 82, 82, 82, 82, 82, 73, 63] :
                    [58, 58, 58, 58, 58, 58, 58, 58, 58, 58]
                )[sunPercent] * (1 - cloud / 100 * 0.8),
                lum: (isDaylight ?
                    [7, 67, 60, 60, 72, 72, 60, 60, 64, 47] :
                    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
                )[sunPercent] * (1 - cloud / 100 * 0.5)
            },
            end: {
                hue: (isDaylight ?
                    [3, 38, 217, 217, 217, 217, 217, 217, 230, 355] :
                    [202, 202, 202, 202, 202, 202, 202, 202, 202, 202]
                )[sunPercent],
                sat: (isDaylight ?
                    [65, 75, 82, 82, 82, 82, 82, 82, 87, 93] :
                    [19, 19, 19, 19, 19, 19, 19, 19, 19, 19]
                )[sunPercent] * (1 - cloud / 100 * 0.8),
                lum: (isDaylight ?
                    [80, 90, 50, 50, 72, 72, 50, 50, 70, 89] :
                    [86, 70, 60, 50, 40, 40, 50, 60, 70, 86]
                )[sunPercent] * (1 - cloud / 100 * 0.5)
            },
        },
        cloud: {
            count: cloud,
            opacity: cloud * 0.5
        }
    };
}

//function convertUNIXtoString(unix) {
//    var hours = date.getHours();
//    var minutes = "0" + date.getMinutes();
//    var seconds = "0" + date.getSeconds();
//    return (hours + ':' + minutes.substr(-2));
//}
