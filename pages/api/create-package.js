const { Deta } = require("deta"); // import Deta
import { orderBy, filter } from "lodash";

const deta = Deta(process.env.DETA_KEY);

const db = deta.Base("packages");

export default async function login(req, res) {
  await db.put({
    name: "Sam",
    items: [{"item": "Cough medicine", "quantity": 2}]
  });
  res.send('Sam');
}
