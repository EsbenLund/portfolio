import React, { Component } from "react";
//1 
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPercent: 0,
      isLoadingDone: false,
    };
  }
//2 
  componentDidMount() {
    this.simulateLoading();
  }
  simulateLoading = () => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;

      this.setState({ loadingPercent: percent });
//3
      if (percent ===120) {
        clearInterval(interval);
        this.setState({ isLoadingDone: true });
      }
    }, 200);
  };

  render() {
    const { isLoadingDone, loadingPercent } = this.state;

    return (
      <main>
        {isLoadingDone ? (
        
          this.props.children
        ) : (
          
          <div className="loadingBox">
            <h1>Indlæser Portfolio</h1>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${loadingPercent}%` }}
              ></div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Loading;