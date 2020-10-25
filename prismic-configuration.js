import Prismic from "prismic-javascript";

const apiEndpoint = process.env.API_ENDPOINT;
const accessToken = process.env.ACCESS_TOKEN;

export const Client = () => Prismic.client(apiEndpoint, { accessToken });
