import gql from "graphql-tag";

export const TRENDING_GIFS = gql`
  query TrendingGifs($limit: Int, $offset: Int, $rating: String) {
    trendingGifs(limit: $limit, offset: $offset, rating: $rating) {
      gifsData {
        images {
          fixed_width_downsampled {
            url
            width
            height
          }
        }
        title
      }
      pagination {
        total_count
        count
        offset
      }
      meta {
        status
      }
    }
  }
`;

export const SEARCH_GIF_BY_QUERY = gql`
  query SearchGifs(
    $query: String!
    $limit: Int
    $offset: Int
    $rating: String
    $lang: String
  ) {
    gifs(
      query: $query
      limit: $limit
      offset: $offset
      rating: $rating
      lang: $lang
    ) {
      gifsData {
        images {
          fixed_width_downsampled {
            url
            width
            height
          }
        }
        title
      }
      pagination {
        total_count
        count
        offset
      }
      meta {
        status
      }
    }
  }
`;
