import { makeAutoObservable, runInAction } from "mobx";

export default class WordsStore {
    massWords = [];
    isLoading = false;
    error = false;
  
    constructor() {
      makeAutoObservable(this);
      this.loadData()
    }
    
    loadData =  () => {
      this.isLoading = true;
      this.error = false; 
      fetch("/api/words")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong ...");
          }
        })
        .then(response => {
          this.massWords = response;
          this.isLoading = false;
        })
        .catch(() => {
          this.error = true;
          this.isLoading = false;
        });
      };
}