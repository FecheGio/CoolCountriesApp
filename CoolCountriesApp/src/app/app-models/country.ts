export class Country {

    public name: string
    public topLevelDomain: string
    public alpha2Code: string
    public alpha3Code: string
    public callingCodes: number[]
    public capital: string
    public altSpellings: string[]
    public region: string
    public subregion: string
    public population: number
    public latlng: number[]
    public demonym: string
    public area: number
    public gini: any
    public timezones: string[]
    public borders: string[]
    public nativeName: string
    public numericCode: string
    public currencies: Currency[]
    public languages: Language[]
    public flag: string
    public regionalBlocs: RegionalBloc[]
    public cioc: string
    public favorite: boolean
}

interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: any[];
    otherNames: any[];
  }

  interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }

  interface Currency {
    code: string;
    name: string;
    symbol: string;
  }

