import { createClient } from "contentful";

const client = createClient({
  space: "SPACE-ID",
  accessToken: "Content Delivery - access token",
});

export default client;
