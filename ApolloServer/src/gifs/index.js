import { gifSearchTypeDefs } from "./search/search.typeDefs";
import { gifSearchResolvers } from "./search/search.resolvers";
import { gifTrendingTypeDefs } from "./trending/trending.typeDefs";
import { gifTrendingResolvers } from "./trending/trending.resolvers";
import merge from "lodash.merge";

export const GifsTypeDefs = [gifSearchTypeDefs, gifTrendingTypeDefs];

export const GifResolvers = merge({}, gifSearchResolvers, gifTrendingResolvers);
