const { Deta } = require("deta"); // import Deta
import { orderBy, filter } from "lodash";

const deta = Deta(process.env.DETA_KEY);

const db = deta.Base("shipments");

export default async function login(req, res) {
  /*await db.put({
    name: "Blank",
    streetLineOne: "Blank",
    streetLineTwo: "Blank",
    streetLineOne: "Blank",
    city: "Blank",
    state: "Blank",
    country: "Blank",
    postCode: "Blank",
    phoneNumber: "Blank",
    packageType: "Blank",
    dateRequested: new Date(),
    dateShipped: "Blank",
    dateArrived: "Blank",
    shipped: false,
    arrived: false,
    comment: "Blank",
  }); */
  const items = (await db.fetch({ shipped: false }).next()).value;
  let item;
  if (items.length > 0) {
    item = orderBy(items, "dateRequested", "asc")[0];
  } else {
    item = { unavailable: true };
  }
  console.log(item);
  res.json(item);
}
