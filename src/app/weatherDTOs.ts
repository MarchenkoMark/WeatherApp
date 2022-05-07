export class LocationResponse {
    title: string;
    location_type: string;
    latt_long: string; //floats, comma separated i.e. "51.506321,-0.12714"
    woeid: number; //Where On Earth ID
    distance: number; // ?
}

export class WeatherResponse {
    title: string; //Name of the location
    location_type: string; //(City|Region / State / Province|Country|Continent)
    latt_long: string; //floats, comma separated
    time: string; //Time in location
    sun_rise: string;
    sun_set: string;
    timezone_name: string //Name of the timezone that the location is in

    parent: Parent;
    consolidated_weather: ConsolidatedWeather[];
    sources: Sources;
}

export class Parent {
    title:	string; //Name of the parent location
    location_type: string; //(City|Region / State / Province|Country|Continent)
    latt_long: string; //floats, comma separated
    woeid: number; //Where On Earth ID

}

export class ConsolidatedWeather {
    id:	number; //Internal identifier for the forecast
    applicable_date: string; //Date that the forecast or observation pertains to
    weather_state_name:	string; //Text description of the weather state
    weather_state_abbr:	string;	//One or two letter abbreviation of the weather state
    wind_speed: number; //mph
    wind_direction: number; //degrees
    wind_direction_compass:	string	//compass point	Compass point of the wind direction (SW SSW NNW)
    min_temp: number;
    max_temp: number;
    the_temp: number;
    air_pressure: number; //mbar
    humidity: number; //percentage
    visibility: number;	//miles
    predictability: number; //percentage	Our interpretation of the level to which the forecasters agree with each other - 100% being a complete consensus.
}

export class Sources {
    title: string; //Name of the source
    url: string; //URL of the source
}