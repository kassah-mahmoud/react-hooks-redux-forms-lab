import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function onBandSubmit(name) {
    dispatch(bandAdded(name));
  }
  return (
    <div>
      <BandInput onBandSubmit={onBandSubmit} />
      <ul>
        {bands.map?.((band, i) => (
          <li key={i}>{band}</li>
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
