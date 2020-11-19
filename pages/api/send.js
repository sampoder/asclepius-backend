const { Deta } = require("deta"); // import Deta
import { orderBy, filter } from "lodash";

const deta = Deta(process.env.DETA_KEY);

const db = deta.Base("shipments");

const packageDB = deta.Base("packages");

const Easypost = require("@easypost/api");

const api = new Easypost(process.env.EASYPOST_KEY);

export default async function login(req, res) {
  const items = (await db.fetch({ shipped: false }).next()).value;
  let item;
  if (items.length > 0) {
    item = orderBy(items, "dateRequested", "asc")[0];
  } else {
    item = { unavailable: true };
  }
  const packageToSend = (await packageDB.fetch({ name: item.packageType }).next())
    .value[0];
  const fromAddress = await new api.Address({
    company: "Example",
    street1: "417 Montgomery Street",
    street2: "5th Floor",
    city: "San Francisco",
    state: "CA",
    zip: "94104",
    phone: "415-528-7555",
  });

  await fromAddress.save();

  const toAddress = await new api.Address({
    name: item.name,
    street1: item.streetLineOne,
    street2: item.streetLineTwo ? item.streetLineTwo : "",
    city: item.city,
    state: item.state,
    zip: item.postCode,
    country: item.country,
  });

  await toAddress.save();

  const parcel = await new api.Parcel({
    length: 9,
    width: 6,
    height: 2,
    weight: 10,
  });

  await parcel.save();

  const shipment = await new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
  });

  // await shipment.save().then(console.log);

  // await shipment
  //  .buy(shipment.lowestRate(["USPS"], ["First"]))
  // .then(console.log);
  console.log(packageToSend);

  res.json({ item: item, package: packageToSend, packageLabelURL: "hi" });
}
