import { useReducer } from "react";
import dataFetchReducer from "../reducers/dataFetchReducer";
import { TRENDING_GIFS, SEARCH_GIF_BY_QUERY } from "../ApolloClient/quries";
import { useApolloClient } from "react-apollo-hooks";

const useApi = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: false,
    data: [],
    lastPage: false,
  });
  const client = useApolloClient();

  const fetchImages = (offset, isMore, queryString) => {
    if (isMore) {
      dispatch({ type: "FETCH_MORE_INIT" });
    } else {
      dispatch({ type: "FETCH_INIT" });
    }
    if (!queryString) {
      client
        .query({
          query: TRENDING_GIFS,
          fetchPolicy: "no-cache",
          variables: { limit: 100, offset: Number(offset), rating: "g" },
        })
        .then((_data) => {
          const { data } = _data;
          console.log("here in gql----->", data.trendingGifs.gifsData);
          if (isMore) {
            dispatch({
              type: "FETCH_MORE_SUCCESS",
              payload: data.trendingGifs.gifsData,
              pagination: data.trendingGifs.pagination,
            });
          } else {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: data.trendingGifs.gifsData,
              pagination: data.trendingGifs.pagination,
            });
          }
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAILURE" });
        });
    } else {
      client
        .query({
          query: SEARCH_GIF_BY_QUERY,
          fetchPolicy: "no-cache",
          variables: {
            query: queryString,
            limit: 100,
            offset: Number(offset),
            rating: "g",
            lang: "en",
          },
        })
        .then((_data) => {
          const { data } = _data;
          if (isMore) {
            dispatch({
              type: "FETCH_MORE_SUCCESS",
              payload: data.gifs.gifsData,
              pagination: data.gifs.pagination,
            });
          } else {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: data.gifs.gifsData,
              pagination: data.gifs.pagination,
            });
          }
        })
        .catch(() => {
          dispatch({ type: "FETCH_FAILURE" });
        });
    }
  };

  return [state, fetchImages];
};

export default useApi;
