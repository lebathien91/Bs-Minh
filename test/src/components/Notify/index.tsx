import React, { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import Loading from "../Loading";

const Notify = () => {
  const { state } = useContext(GlobalContext);
  const { notify } = state;

  return <>{notify.loading && <Loading />}</>;
};

export default Notify;
