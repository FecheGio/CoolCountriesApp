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
    //public currencies: Currency[]
    //public languages: Language[]
    //public translations: Translation[]
    public flag: string
    //public regionalBlocs: RegionalBloc[]
    public cioc: string
 
    constructor(data?: any){
        if (data){
            this.name = data.name
            this.topLevelDomain = data.topLevelDomain
            this.alpha2Code = data.alpha2Code
            this.alpha3Code = data.alpha2Code
            this.callingCodes = data.callingCodes
            this.capital = data.capital 
            this.altSpellings = data.alpha2Code
            this.region = data.region
            this.subregion = data.subregion
            this.population = data.population
            this.latlng = data.latlng
            this.demonym = data.demonym
            this.area = data.are
            this.gini = data.gini
            this.timezones = data.timezones
            this.borders = data.borders
            this.nativeName = data.nativeName
            this.numericCode = data.numericCode
            //public currencies: Currency[]
            //public languages: Language[]
            //public translations: Translation[]
            this.flag = data.flag
            //public regionalBlocs: RegionalBloc[]
            this.cioc = data.cioc
        }
    }
}

