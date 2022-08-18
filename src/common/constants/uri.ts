enum URI {
    BASE = 'https://swapi.dev/api/',
    PEOPLE = 'https://swapi.dev/api/people',
    STARSHIP = 'https://swapi.dev/api/starships',
    PLANET = 'https://swapi.dev/api/planets',
    FILMS = 'https://swapi.dev/api/films',
    SPECIES = 'https://swapi.dev/api/species',
    VEHICLES = 'https://swapi.dev/api/vehicles',
}

enum ROUTES {
    DEFAULT = "",
    BASE = "/",
    HOME = "/home",
    PEOPLE = "/people",
    PLANETS = "/planets",
    STARSHIP = "/starship",
    FILMS = "/films",
    VEHICLES = "/vehicles",
    SPECIES = "/species"
}

enum VIEW {
    DEFAULT = "",
    HOME = "home",
    PEOPLE = "people",
    PLANETS = "planets",
    STARSHIP = "starship",
    FILMS = "films",
    VEHICLES = "vehicles",
    SPECIES = "species"
}

export { URI, ROUTES, VIEW }