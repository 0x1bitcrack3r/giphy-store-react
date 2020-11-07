import { ApolloServer } from "apollo-server";
import { GifsSearchAPI } from "./gifs/search/search.datasource";
import { GifsTrendingAPI } from "./gifs/trending/trending.datasource";
import { GifsTypeDefs } from "./gifs/index";
import { GifResolvers } from "./gifs/index";
import merge from "lodash.merge";

require("dotenv").config();

const typeDefs = [...GifsTypeDefs];
const resolvers = merge({}, GifResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    GifsSearchAPI: new GifsSearchAPI(),
    GifsTrendingAPI: new GifsTrendingAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
