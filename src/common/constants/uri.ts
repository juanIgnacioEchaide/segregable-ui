enum URI {
    BASE = 'https://swapi.dev/api/',
    PEOPLE = 'https://swapi.dev/api/people/',
    STARSHIP = 'https://swapi.dev/api/starships/',
    PLANET = 'https://swapi.dev/api/planets/',
}

enum ROUTES {
    DEFAULT = "",
    BASE = "/",
    HOME = "/home",
    PEOPLE = "/people",
    PLANETS = "/planets",
    STARSHIP = "/people"
}

export { URI, ROUTES }