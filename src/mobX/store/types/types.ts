export interface ICryptoPriceDuringWeek {
    price: number[]
}

export interface ICryptoCurrency {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
    sparkline_in_7d: ICryptoPriceDuringWeek
    price_change_percentage_7d_in_currency: number;
}

export interface ISelectedCryptoCurrency {
    Name: string;
    marketCapRank: number;
    currentImage: string;
    currentPrice: number;
}

export interface ApiParams {
    perPage: number,
    currentPage: number
}

export interface IModalState {
    isOpened: boolean
}

export interface ICryptoStoreState {
    isError: string;
    isLoading: boolean;
    cryptoItems: ICryptoCurrency [];
    apiParams: ApiParams;
    isOpened: boolean
    selectedCryptoCurrency: ISelectedCryptoCurrency;
}