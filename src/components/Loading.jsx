import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingPercent: 0,
      isLoadingDone: false,
    };
  }

  componentDidMount() {
    this.simulateLoading();
  }

  simulateLoading = () => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;

      this.setState({ loadingPercent: percent });

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
          // Vis det rigtige indhold, når indlæsningen er færdig.
          this.props.children
        ) : (
          // Vis loading-effekten, når isLoadingComplete er falsk.
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