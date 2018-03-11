export interface IAppReducer {
    isFetch: boolean;
    city: string[];
    chosenCity: string;
    forecasts: any[];
}

export interface IAppMapState {
    cities: string[];
    chosenCity: string;
    forecast: any[];
}

export interface IAppMapDispatch {
    getCity: (city: string, country: string) =>void;
    chooseCity: (city: string) => void;
    delCity: (city: string) => void;
}