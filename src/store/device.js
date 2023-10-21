import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";


export const useDeviceStore = defineStore('device', {
    state: () => ({
        count: useLocalStorage('count', 0),
        totalCount: useLocalStorage('totalCount', 0)
    }),

    actions: {
        increment(amount) {
            let extra =  this.count ** amount;
            this.count += extra;
            this.totalCount += extra;
        },

        reset() {
            this.count = 1;
        }
    },
    getters: {
        
    }
})