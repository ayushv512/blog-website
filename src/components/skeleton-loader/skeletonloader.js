import React, { useState, useEffect } from "react";
import { SkeletonHolderWrapper } from "./style";
import LoadingComponent from "../loading-component/loading-component";

const SkeletonLoader = props => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    if (props.whichPage === "posts") {
      setBars(new Array(20).fill("0"));
    } else if (props.whichPage === "post-details") {
      setBars(new Array(1).fill("0"));
    }
  }, [props.whichPage]);

  return (
    <SkeletonHolderWrapper>
      <div>
        {props.whichPage === "post-details" ? <LoadingComponent /> : null}
      </div>
      <div
        className={
          props.whichPage === "posts" ? "posts-loader" : "post-details-loader"
        }
      >
        {bars.length > 0
          ? bars.map((item, index) => {
              return (
                <div className="bars" key={index}>
                  <div className="bar bar1 loading" />
                  <div className="bar bar2 loading" />
                  <div className="bar bar3 loading" />
                  <div className="bar bar4 loading" />
                </div>
              );
            })
          : null}
      </div>
    </SkeletonHolderWrapper>
  );
};

export default SkeletonLoader;
