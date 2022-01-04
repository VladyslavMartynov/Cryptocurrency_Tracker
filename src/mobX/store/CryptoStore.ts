import { configure, makeAutoObservable } from "mobx";
import {ICryptoCurrency, ICryptoStoreState, ISelectedCryptoCurrency} from "./types/types";
import axios from "axios";
import { API_LINK } from "../../constants/constants";

configure({
    enforceActions: 'never',
})

const defaultApiParams = {
    perPage: 10,
    currentPage: 1
}

class CryptoStore implements ICryptoStoreState{
    isError = '';
    isLoading = false;
    cryptoItems: ICryptoCurrency[] = [];
    apiParams = defaultApiParams;
    isOpened =  false;

    selectedCryptoCurrency = {
        Name: '',
        marketCapRank: 0,
        currentImage: '',
        currentPrice: 0,
    }

    constructor() {
        makeAutoObservable(this)
    }

    setModalVisibility(previousState: boolean): void {
        this.isOpened = previousState
    }

    setCurrentPage(page: number): void {
        this.apiParams.currentPage = page
    }

    setSelectedCryptoCurrency(name: string, rank: number, img: string, price: number): void {
      this.selectedCryptoCurrency = {
          Name: name,
          marketCapRank: rank,
          currentImage: img,
          currentPrice: price
      }
    }

    async fetchCryptoCurrencies (): Promise<void> {
        try {
            this.isLoading = true;
            const fetchData = await axios.get(`${API_LINK}vs_currency=usd&order=market_cap_desc&per_page=${this.apiParams.perPage}&page=${this.apiParams.currentPage}&sparkline=true&price_change_percentage=7d`);
            this.cryptoItems = this.cryptoItems.concat(fetchData.data);
        } catch (e) {
            this.isError = 'Fetching data error!'
        } finally {
            this.isLoading = false;
        }
    }
}


const cryptoStore = new CryptoStore()
export default cryptoStore;