import axios from "axios";
import { getAccountUrl, getCustomerUrl, getTransactionUrl } from "../endpoints";

export const getCustomerDetails = (setState, setLoading) => {
  try {
    setLoading(true);
    axios(getCustomerUrl)
      .then((res) => {
        console.log(res.data);
        setState(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch {
    console.log("something went wrong");
    setState([]);
    setLoading(false);
  }
};
export const getTransactionDetails = (setState, setLoading, id) => {
  try {
    setLoading(true);
    axios(`${getTransactionUrl + id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch {
    console.log("something went wrong");
    setState([]);
    setLoading(false);
  }
};
export const getListing = (setState, setLoading,url) => {
  try {
    setLoading(true);
    axios(`${url}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  } catch {
    console.log("something went wrong");
    setState([]);
    setLoading(false);
  }
};
