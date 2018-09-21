import { CityService } from './city-service';

describe('Cities Test', () => {
    let cityService: CityService;

    beforeEach(() => {
        cityService = new CityService();
    });

    it('Should check if specified cities are present in the list', () => {
        const cities = cityService.getCities();

        expect(cities).toContain('Stockholm');

        expect(cities).toContain('London');
    });

    it('Should check if the city is added to the array', () => {
        const newCity = 'Oslo';

        cityService.addCities(newCity);

        expect(cityService.cities).toContain(newCity);

    });
});
