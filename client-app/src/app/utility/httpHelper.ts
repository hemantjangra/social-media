import axios from "axios";

import {IHttpWrapper} from '../models/IHttpWrapper';

const getRequest = (url: string): Promise<IHttpWrapper> => {
  return axios
    .get(url)
    .then((res) => {
      const result: IHttpWrapper = {
        results: res.data,
        status: res.status,
      };
      return result;
    })
    .catch((err) => {
      throw err;
    });
};

const getRequestAsync = async (url: string):Promise<IHttpWrapper> => {
  try {
    const data = await axios.get(url);
    const result: IHttpWrapper = {
      results: data.data,
      status: data.status,
    };
    return result;
  } catch (err) {
    throw err;
  }
};

export default {
  getRequest,
  getRequestAsync
};
