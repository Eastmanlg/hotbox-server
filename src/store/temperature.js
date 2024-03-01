import { defineStore } from 'pinia';
import { socket } from '@/socket';

const updatePeriod = 1000;

export const useTemperatureStore = defineStore('temperature', {
  state: () => ({
    tempData: [], // Store the temperature data
  }),
  actions: {
    // Mutation to update the temperature data
    updateTempData(newTemp) {
      this.tempData.push(newTemp);
    },
    // Method to start polling the sensor
    startListening() {
        socket.on('temperature-updated', (temp) => {
            debugger;
            this.updateTempData(temp);
        });
    },
    // Method to stop polling the sensor
    stopSensorPolling() {
        clearInterval(this.sensorPolling);
    },
    //Method to update the temperature data on socket event
  },
});