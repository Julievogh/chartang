"use client";

import React, { Component } from "react";
import { PropagateLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../page.module.css";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="sweet-loading">
          <PropagateLoader
            cssOverride={override}
            size={15}
            color={"#69e3fc"}
            loading={this.state.loading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}

export default AwesomeComponent;
