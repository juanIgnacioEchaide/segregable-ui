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

enum VIEW {
    DEFAULT = "",
    PEOPLE = "people",
    PLANETS = "planets",
    STARSHIP = "starship"
}

export { URI, ROUTES, VIEW }