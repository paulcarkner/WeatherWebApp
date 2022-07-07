const apiKey = "f4bcb6a805ca765f7df85383dc7fdbab";

export async function fetchForecast(lat, lon, exclude) {
    return {
        "lat": 43.967,
        "lon": -78.167,
        "timezone": "America/Toronto",
        "timezone_offset": -14400,
        "current": {
            "dt": 1657049111,
            "sunrise": 1657013762,
            "sunset": 1657069087,
            "temp": 292.08,
            "feels_like": 292.48,
            "pressure": 1009,
            "humidity": 94,
            "dew_point": 291.09,
            "uvi": 0.77,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 2.06,
            "wind_deg": 120,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        "hourly": [
            {
                "dt": 1657047600,
                "temp": 292.08,
                "feels_like": 292.48,
                "pressure": 1009,
                "humidity": 94,
                "dew_point": 291.09,
                "uvi": 0.77,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.82,
                "wind_deg": 151,
                "wind_gust": 8.29,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "pop": 0.87,
                "rain": {
                    "1h": 0.7
                }
            },
            {
                "dt": 1657051200,
                "temp": 291.96,
                "feels_like": 292.38,
                "pressure": 1009,
                "humidity": 95,
                "dew_point": 291.14,
                "uvi": 0.57,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 5.22,
                "wind_deg": 151,
                "wind_gust": 7.33,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 1
            },
            {
                "dt": 1657054800,
                "temp": 291.8,
                "feels_like": 292.23,
                "pressure": 1009,
                "humidity": 96,
                "dew_point": 291.15,
                "uvi": 0.36,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.09,
                "wind_deg": 158,
                "wind_gust": 6.18,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.83
            },
            {
                "dt": 1657058400,
                "temp": 291.92,
                "feels_like": 292.36,
                "pressure": 1008,
                "humidity": 96,
                "dew_point": 291.27,
                "uvi": 0.84,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.61,
                "wind_deg": 167,
                "wind_gust": 3.78,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.84
            },
            {
                "dt": 1657062000,
                "temp": 292.48,
                "feels_like": 292.98,
                "pressure": 1007,
                "humidity": 96,
                "dew_point": 291.83,
                "uvi": 0.33,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 1.43,
                "wind_deg": 233,
                "wind_gust": 2.63,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.8
            },
            {
                "dt": 1657065600,
                "temp": 293.04,
                "feels_like": 293.59,
                "pressure": 1007,
                "humidity": 96,
                "dew_point": 292.15,
                "uvi": 0.08,
                "clouds": 96,
                "visibility": 10000,
                "wind_speed": 1.91,
                "wind_deg": 307,
                "wind_gust": 4.76,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0.8
            },
            {
                "dt": 1657069200,
                "temp": 292.84,
                "feels_like": 293.4,
                "pressure": 1008,
                "humidity": 97,
                "dew_point": 292.09,
                "uvi": 0,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 2.8,
                "wind_deg": 320,
                "wind_gust": 6.57,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.11
            },
            {
                "dt": 1657072800,
                "temp": 292.62,
                "feels_like": 293.1,
                "pressure": 1009,
                "humidity": 95,
                "dew_point": 291.58,
                "uvi": 0,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 4.87,
                "wind_deg": 330,
                "wind_gust": 10.32,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.11
            },
            {
                "dt": 1657076400,
                "temp": 291.94,
                "feels_like": 292.33,
                "pressure": 1009,
                "humidity": 94,
                "dew_point": 290.8,
                "uvi": 0,
                "clouds": 97,
                "visibility": 10000,
                "wind_speed": 5.35,
                "wind_deg": 337,
                "wind_gust": 10.45,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.06
            },
            {
                "dt": 1657080000,
                "temp": 290.88,
                "feels_like": 291.22,
                "pressure": 1010,
                "humidity": 96,
                "dew_point": 289.96,
                "uvi": 0,
                "clouds": 80,
                "visibility": 10000,
                "wind_speed": 4.81,
                "wind_deg": 338,
                "wind_gust": 9.68,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.06
            },
            {
                "dt": 1657083600,
                "temp": 290.52,
                "feels_like": 290.79,
                "pressure": 1010,
                "humidity": 95,
                "dew_point": 289.47,
                "uvi": 0,
                "clouds": 69,
                "visibility": 10000,
                "wind_speed": 4.89,
                "wind_deg": 329,
                "wind_gust": 9.3,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.02
            },
            {
                "dt": 1657087200,
                "temp": 290.77,
                "feels_like": 290.96,
                "pressure": 1011,
                "humidity": 91,
                "dew_point": 289.06,
                "uvi": 0,
                "clouds": 70,
                "visibility": 10000,
                "wind_speed": 5.4,
                "wind_deg": 330,
                "wind_gust": 8.93,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0.02
            },
            {
                "dt": 1657090800,
                "temp": 290.56,
                "feels_like": 290.73,
                "pressure": 1011,
                "humidity": 91,
                "dew_point": 288.84,
                "uvi": 0,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 3.4,
                "wind_deg": 324,
                "wind_gust": 7.3,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657094400,
                "temp": 290.47,
                "feels_like": 290.66,
                "pressure": 1012,
                "humidity": 92,
                "dew_point": 288.92,
                "uvi": 0,
                "clouds": 97,
                "visibility": 10000,
                "wind_speed": 3.39,
                "wind_deg": 317,
                "wind_gust": 7.47,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657098000,
                "temp": 289.77,
                "feels_like": 289.94,
                "pressure": 1012,
                "humidity": 94,
                "dew_point": 288.56,
                "uvi": 0,
                "clouds": 86,
                "visibility": 10000,
                "wind_speed": 4.59,
                "wind_deg": 336,
                "wind_gust": 8.64,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657101600,
                "temp": 289.46,
                "feels_like": 289.5,
                "pressure": 1013,
                "humidity": 90,
                "dew_point": 287.57,
                "uvi": 0,
                "clouds": 77,
                "visibility": 10000,
                "wind_speed": 4.87,
                "wind_deg": 357,
                "wind_gust": 8.63,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657105200,
                "temp": 289.76,
                "feels_like": 289.77,
                "pressure": 1014,
                "humidity": 88,
                "dew_point": 287.59,
                "uvi": 0.28,
                "clouds": 78,
                "visibility": 10000,
                "wind_speed": 4.79,
                "wind_deg": 359,
                "wind_gust": 8.68,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657108800,
                "temp": 290.53,
                "feels_like": 290.52,
                "pressure": 1015,
                "humidity": 84,
                "dew_point": 287.52,
                "uvi": 0.85,
                "clouds": 81,
                "visibility": 10000,
                "wind_speed": 5.56,
                "wind_deg": 7,
                "wind_gust": 8.55,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657112400,
                "temp": 291.32,
                "feels_like": 291.23,
                "pressure": 1016,
                "humidity": 78,
                "dew_point": 287.19,
                "uvi": 2.04,
                "clouds": 31,
                "visibility": 10000,
                "wind_speed": 5.89,
                "wind_deg": 13,
                "wind_gust": 7.57,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657116000,
                "temp": 292.41,
                "feels_like": 292.3,
                "pressure": 1016,
                "humidity": 73,
                "dew_point": 287.37,
                "uvi": 3.55,
                "clouds": 32,
                "visibility": 10000,
                "wind_speed": 5.08,
                "wind_deg": 24,
                "wind_gust": 6.2,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657119600,
                "temp": 293.27,
                "feels_like": 293.17,
                "pressure": 1016,
                "humidity": 70,
                "dew_point": 287.36,
                "uvi": 5.18,
                "clouds": 32,
                "visibility": 10000,
                "wind_speed": 4.28,
                "wind_deg": 32,
                "wind_gust": 5.14,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657123200,
                "temp": 294.16,
                "feels_like": 294.04,
                "pressure": 1016,
                "humidity": 66,
                "dew_point": 287.33,
                "uvi": 7.48,
                "clouds": 31,
                "visibility": 10000,
                "wind_speed": 3.32,
                "wind_deg": 40,
                "wind_gust": 4.44,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657126800,
                "temp": 295.08,
                "feels_like": 294.97,
                "pressure": 1016,
                "humidity": 63,
                "dew_point": 287.4,
                "uvi": 8.2,
                "clouds": 41,
                "visibility": 10000,
                "wind_speed": 1.86,
                "wind_deg": 69,
                "wind_gust": 3.13,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657130400,
                "temp": 295.61,
                "feels_like": 295.53,
                "pressure": 1016,
                "humidity": 62,
                "dew_point": 287.72,
                "uvi": 7.93,
                "clouds": 49,
                "visibility": 10000,
                "wind_speed": 1.43,
                "wind_deg": 141,
                "wind_gust": 2.95,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657134000,
                "temp": 295.65,
                "feels_like": 295.57,
                "pressure": 1017,
                "humidity": 62,
                "dew_point": 287.67,
                "uvi": 6.74,
                "clouds": 29,
                "visibility": 10000,
                "wind_speed": 2.42,
                "wind_deg": 185,
                "wind_gust": 3.66,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657137600,
                "temp": 294.61,
                "feels_like": 294.59,
                "pressure": 1016,
                "humidity": 68,
                "dew_point": 288.14,
                "uvi": 4.98,
                "clouds": 64,
                "visibility": 10000,
                "wind_speed": 3.69,
                "wind_deg": 189,
                "wind_gust": 2.6,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657141200,
                "temp": 293.91,
                "feels_like": 293.92,
                "pressure": 1016,
                "humidity": 72,
                "dew_point": 288.47,
                "uvi": 3.12,
                "clouds": 76,
                "visibility": 10000,
                "wind_speed": 4.07,
                "wind_deg": 200,
                "wind_gust": 3.42,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657144800,
                "temp": 292.94,
                "feels_like": 292.99,
                "pressure": 1015,
                "humidity": 77,
                "dew_point": 288.59,
                "uvi": 1.58,
                "clouds": 82,
                "visibility": 10000,
                "wind_speed": 3.81,
                "wind_deg": 207,
                "wind_gust": 3.99,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657148400,
                "temp": 292.82,
                "feels_like": 292.88,
                "pressure": 1016,
                "humidity": 78,
                "dew_point": 288.74,
                "uvi": 0.61,
                "clouds": 86,
                "visibility": 10000,
                "wind_speed": 3.25,
                "wind_deg": 228,
                "wind_gust": 4.32,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657152000,
                "temp": 292.2,
                "feels_like": 292.33,
                "pressure": 1016,
                "humidity": 83,
                "dew_point": 288.98,
                "uvi": 0.15,
                "clouds": 81,
                "visibility": 10000,
                "wind_speed": 2.71,
                "wind_deg": 237,
                "wind_gust": 4.62,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657155600,
                "temp": 290.49,
                "feels_like": 290.58,
                "pressure": 1016,
                "humidity": 88,
                "dew_point": 288.19,
                "uvi": 0,
                "clouds": 69,
                "visibility": 10000,
                "wind_speed": 2.21,
                "wind_deg": 260,
                "wind_gust": 2.47,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657159200,
                "temp": 290.06,
                "feels_like": 290.08,
                "pressure": 1016,
                "humidity": 87,
                "dew_point": 287.76,
                "uvi": 0,
                "clouds": 84,
                "visibility": 10000,
                "wind_speed": 2.3,
                "wind_deg": 282,
                "wind_gust": 2.51,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657162800,
                "temp": 289.79,
                "feels_like": 289.81,
                "pressure": 1016,
                "humidity": 88,
                "dew_point": 287.5,
                "uvi": 0,
                "clouds": 70,
                "visibility": 10000,
                "wind_speed": 2.29,
                "wind_deg": 292,
                "wind_gust": 2.49,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657166400,
                "temp": 289.69,
                "feels_like": 289.7,
                "pressure": 1016,
                "humidity": 88,
                "dew_point": 287.57,
                "uvi": 0,
                "clouds": 78,
                "visibility": 10000,
                "wind_speed": 2.18,
                "wind_deg": 300,
                "wind_gust": 2.23,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657170000,
                "temp": 289.58,
                "feels_like": 289.55,
                "pressure": 1016,
                "humidity": 87,
                "dew_point": 287.16,
                "uvi": 0,
                "clouds": 82,
                "visibility": 10000,
                "wind_speed": 1.62,
                "wind_deg": 321,
                "wind_gust": 1.72,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657173600,
                "temp": 289.41,
                "feels_like": 289.34,
                "pressure": 1016,
                "humidity": 86,
                "dew_point": 286.93,
                "uvi": 0,
                "clouds": 85,
                "visibility": 10000,
                "wind_speed": 1.25,
                "wind_deg": 86,
                "wind_gust": 1.38,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657177200,
                "temp": 289.52,
                "feels_like": 289.48,
                "pressure": 1016,
                "humidity": 87,
                "dew_point": 287.09,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.07,
                "wind_deg": 111,
                "wind_gust": 1.23,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657180800,
                "temp": 289.95,
                "feels_like": 289.96,
                "pressure": 1016,
                "humidity": 87,
                "dew_point": 287.45,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 1.29,
                "wind_deg": 138,
                "wind_gust": 1.43,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657184400,
                "temp": 290.18,
                "feels_like": 290.18,
                "pressure": 1016,
                "humidity": 86,
                "dew_point": 287.67,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 0.9,
                "wind_deg": 146,
                "wind_gust": 1.06,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657188000,
                "temp": 290.2,
                "feels_like": 290.21,
                "pressure": 1016,
                "humidity": 86,
                "dew_point": 287.69,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 0.44,
                "wind_deg": 91,
                "wind_gust": 0.96,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657191600,
                "temp": 291.2,
                "feels_like": 291.25,
                "pressure": 1017,
                "humidity": 84,
                "dew_point": 288.25,
                "uvi": 0.34,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 1.22,
                "wind_deg": 120,
                "wind_gust": 1.34,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657195200,
                "temp": 292.53,
                "feels_like": 292.56,
                "pressure": 1016,
                "humidity": 78,
                "dew_point": 288.34,
                "uvi": 1.05,
                "clouds": 99,
                "visibility": 10000,
                "wind_speed": 2.34,
                "wind_deg": 113,
                "wind_gust": 3.16,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657198800,
                "temp": 293.41,
                "feels_like": 293.37,
                "pressure": 1017,
                "humidity": 72,
                "dew_point": 288.05,
                "uvi": 2.42,
                "clouds": 57,
                "visibility": 10000,
                "wind_speed": 2.69,
                "wind_deg": 115,
                "wind_gust": 3.35,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657202400,
                "temp": 294.04,
                "feels_like": 293.99,
                "pressure": 1016,
                "humidity": 69,
                "dew_point": 287.88,
                "uvi": 4.23,
                "clouds": 37,
                "visibility": 10000,
                "wind_speed": 3.21,
                "wind_deg": 119,
                "wind_gust": 3.75,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657206000,
                "temp": 294.62,
                "feels_like": 294.55,
                "pressure": 1016,
                "humidity": 66,
                "dew_point": 287.78,
                "uvi": 6.17,
                "clouds": 28,
                "visibility": 10000,
                "wind_speed": 3.63,
                "wind_deg": 112,
                "wind_gust": 3.95,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657209600,
                "temp": 295.04,
                "feels_like": 294.93,
                "pressure": 1016,
                "humidity": 63,
                "dew_point": 287.35,
                "uvi": 7.75,
                "clouds": 22,
                "visibility": 10000,
                "wind_speed": 3.57,
                "wind_deg": 127,
                "wind_gust": 3.61,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657213200,
                "temp": 295.08,
                "feels_like": 294.95,
                "pressure": 1016,
                "humidity": 62,
                "dew_point": 287.13,
                "uvi": 8.5,
                "clouds": 17,
                "visibility": 10000,
                "wind_speed": 3.81,
                "wind_deg": 129,
                "wind_gust": 3.84,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1657216800,
                "temp": 295.22,
                "feels_like": 295.05,
                "pressure": 1015,
                "humidity": 60,
                "dew_point": 286.79,
                "uvi": 8.22,
                "clouds": 15,
                "visibility": 10000,
                "wind_speed": 3.44,
                "wind_deg": 123,
                "wind_gust": 3.68,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1657040400,
                "sunrise": 1657013762,
                "sunset": 1657069087,
                "moonrise": 1657036380,
                "moonset": 1656994920,
                "moon_phase": 0.2,
                "temp": {
                    "day": 292.09,
                    "min": 289.7,
                    "max": 293.04,
                    "night": 291.94,
                    "eve": 292.48,
                    "morn": 289.7
                },
                "feels_like": {
                    "day": 292.44,
                    "night": 292.33,
                    "eve": 292.98,
                    "morn": 289.73
                },
                "pressure": 1010,
                "humidity": 92,
                "dew_point": 290.76,
                "wind_speed": 5.35,
                "wind_deg": 337,
                "wind_gust": 10.45,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 100,
                "pop": 0.95,
                "rain": 2.46,
                "uvi": 1.29
            },
            {
                "dt": 1657126800,
                "sunrise": 1657100202,
                "sunset": 1657155467,
                "moonrise": 1657126800,
                "moonset": 1657082520,
                "moon_phase": 0.25,
                "temp": {
                    "day": 295.08,
                    "min": 289.46,
                    "max": 295.65,
                    "night": 289.79,
                    "eve": 292.82,
                    "morn": 289.76
                },
                "feels_like": {
                    "day": 294.97,
                    "night": 289.81,
                    "eve": 292.88,
                    "morn": 289.77
                },
                "pressure": 1016,
                "humidity": 63,
                "dew_point": 287.4,
                "wind_speed": 5.89,
                "wind_deg": 13,
                "wind_gust": 9.68,
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": 41,
                "pop": 0.06,
                "uvi": 8.2
            },
            {
                "dt": 1657213200,
                "sunrise": 1657186643,
                "sunset": 1657241844,
                "moonrise": 1657217340,
                "moonset": 1657170120,
                "moon_phase": 0.27,
                "temp": {
                    "day": 295.08,
                    "min": 289.41,
                    "max": 296.13,
                    "night": 292.11,
                    "eve": 295.63,
                    "morn": 291.2
                },
                "feels_like": {
                    "day": 294.95,
                    "night": 291.78,
                    "eve": 295.58,
                    "morn": 291.25
                },
                "pressure": 1016,
                "humidity": 62,
                "dew_point": 287.13,
                "wind_speed": 3.81,
                "wind_deg": 129,
                "wind_gust": 3.95,
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": 17,
                "pop": 0,
                "uvi": 8.5
            },
            {
                "dt": 1657299600,
                "sunrise": 1657273086,
                "sunset": 1657328220,
                "moonrise": 1657308180,
                "moonset": 1657257840,
                "moon_phase": 0.3,
                "temp": {
                    "day": 298.29,
                    "min": 289.86,
                    "max": 299.24,
                    "night": 290.38,
                    "eve": 294.8,
                    "morn": 290.3
                },
                "feels_like": {
                    "day": 298.32,
                    "night": 289.62,
                    "eve": 294.54,
                    "morn": 289.92
                },
                "pressure": 1015,
                "humidity": 56,
                "dew_point": 288.77,
                "wind_speed": 5.23,
                "wind_deg": 21,
                "wind_gust": 12.31,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 86,
                "pop": 0,
                "uvi": 7.81
            },
            {
                "dt": 1657386000,
                "sunrise": 1657359530,
                "sunset": 1657414593,
                "moonrise": 1657399200,
                "moonset": 1657345740,
                "moon_phase": 0.34,
                "temp": {
                    "day": 294.74,
                    "min": 284.91,
                    "max": 294.74,
                    "night": 287.52,
                    "eve": 290.6,
                    "morn": 287.38
                },
                "feels_like": {
                    "day": 294.03,
                    "night": 286.94,
                    "eve": 290.18,
                    "morn": 286.37
                },
                "pressure": 1020,
                "humidity": 41,
                "dew_point": 280.68,
                "wind_speed": 5.38,
                "wind_deg": 27,
                "wind_gust": 11.66,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 0,
                "pop": 0,
                "uvi": 7.98
            },
            {
                "dt": 1657472400,
                "sunrise": 1657445975,
                "sunset": 1657500964,
                "moonrise": 1657490460,
                "moonset": 1657433940,
                "moon_phase": 0.38,
                "temp": {
                    "day": 293.36,
                    "min": 285.6,
                    "max": 293.66,
                    "night": 288.98,
                    "eve": 291.21,
                    "morn": 288.88
                },
                "feels_like": {
                    "day": 292.79,
                    "night": 288.19,
                    "eve": 290.72,
                    "morn": 287.97
                },
                "pressure": 1019,
                "humidity": 52,
                "dew_point": 282.85,
                "wind_speed": 3.13,
                "wind_deg": 171,
                "wind_gust": 2.42,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 9,
                "pop": 0,
                "uvi": 1.02
            },
            {
                "dt": 1657558800,
                "sunrise": 1657532422,
                "sunset": 1657587333,
                "moonrise": 1657581600,
                "moonset": 1657522800,
                "moon_phase": 0.42,
                "temp": {
                    "day": 295.75,
                    "min": 288.11,
                    "max": 297.1,
                    "night": 291.4,
                    "eve": 293.36,
                    "morn": 291.25
                },
                "feels_like": {
                    "day": 295.42,
                    "night": 291.81,
                    "eve": 293.34,
                    "morn": 291.02
                },
                "pressure": 1011,
                "humidity": 52,
                "dew_point": 285.16,
                "wind_speed": 3.26,
                "wind_deg": 176,
                "wind_gust": 4.95,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 38,
                "pop": 0.98,
                "rain": 2.36,
                "uvi": 2
            },
            {
                "dt": 1657645200,
                "sunrise": 1657618871,
                "sunset": 1657673700,
                "moonrise": 1657672260,
                "moonset": 1657612320,
                "moon_phase": 0.46,
                "temp": {
                    "day": 299.08,
                    "min": 291.83,
                    "max": 299.08,
                    "night": 291.83,
                    "eve": 294.96,
                    "morn": 293.83
                },
                "feels_like": {
                    "day": 299.19,
                    "night": 292,
                    "eve": 295.13,
                    "morn": 294.43
                },
                "pressure": 1002,
                "humidity": 56,
                "dew_point": 289.43,
                "wind_speed": 8.19,
                "wind_deg": 232,
                "wind_gust": 16.02,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": 41,
                "pop": 1,
                "rain": 4.09,
                "uvi": 2
            }
        ]
    };
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

//function convertUNIXtoString(unix) {
//    var hours = date.getHours();
//    var minutes = "0" + date.getMinutes();
//    var seconds = "0" + date.getSeconds();
//    return (hours + ':' + minutes.substr(-2));
//}
