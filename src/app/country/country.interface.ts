export interface CurrencyI {
  code: string;
  name: string;
  symbol: string;
}

export interface LanguageI {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface TranslationsI {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface RegionalBlocI {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface RootObjectI {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: CurrencyI[];
  languages: LanguageI[];
  translations: TranslationsI;
  flag: string;
  regionalBlocs: RegionalBlocI[];
  cioc: string;
}
