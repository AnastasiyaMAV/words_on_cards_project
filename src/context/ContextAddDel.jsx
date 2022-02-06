import React from "react";

export const DataContextAddDell = React.createContext({});

export default class DataContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      dataWords: []
    };
  }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
      this.setState({
        loading: true,
        error: false
      });
        (async function fetchData() {
            try {
              const fetchedData = await fetch(
                "/api/words"
              );
              const data = await fetchedData.json();
              this.setState({
                loading: false,
                dataWords: data
              });
            } catch (error) {
              console.log("error", error);
              this.setState({
                loading: false,
                error: true
              });
            }
          })();
    }

    render() {
      return (
        <DataContextAddDell.Provider value={{...this.state}}>
          {this.props.children}
        </DataContextAddDell.Provider>
      )
    }
}