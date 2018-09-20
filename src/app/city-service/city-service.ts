export class CityService {
    cities = ['Stockholm', 'London', 'Amsterdam', 'Barcelona'];

    getCities() {
        return this.cities;
    }

    addCities(city: string) {
        this.cities.push(city);
    }
}
