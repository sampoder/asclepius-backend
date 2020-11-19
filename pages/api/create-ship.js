const { Deta } = require("deta"); // import Deta
import { orderBy, filter } from "lodash";

const deta = Deta(process.env.DETA_KEY);

const db = deta.Base("shipments");

export default async function login(req, res) {
  await db.put({
    name: "Sam Poder",
    streetLineOne: "30 Queens Road",
    streetLineTwo: " ",
    city: "Singapore",
    state: "Singapore",
    country: "SG",
    postCode: "266747",
    phoneNumber: "+65 8793 3672",
    packageType: "Blank",
    dateRequested: new Date(),
    dateShipped: "Blank",
    dateArrived: "Blank",
    shipped: false,
    arrived: false,
    comment: "Blank",
  });
  res.send("Sam");
}
