import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const csvPath = path.join(root, "output", "data", "australian_postcodes_20250415.csv");
const outPath = path.join(root, "src", "data", "suburbs80km.ts");

if (!fs.existsSync(csvPath)) {
  throw new Error(`Missing postcode CSV at ${csvPath}`);
}

const rows = fs.readFileSync(csvPath, "utf8").trim().split(/\r?\n/);
const header = rows[0].split(",");
const index = Object.fromEntries(header.map((name, columnIndex) => [name, columnIndex]));

const postalCentrePattern =
  /\b(DC|MC|BC|LPO|CPA|GPO|PO BOXES|DELIVERY CENTRE|BUSINESS CENTRE|PARCEL|DEPOT|MAIL CENTRE)\b/i;

function parseLine(line) {
  // The source file is simple comma-separated data for the columns we use.
  return line.split(",");
}

function toTitleCase(value) {
  return value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const curatedServiceAreaSlugs = new Set([
  "albion-park",
  "calderwood",
  "dapto",
  "kiama",
  "picton",
  "shell-cove",
  "shellharbour",
  "wilton",
  "wollongong",
  "austinmere",
  "barrack-heights",
  "black-butt",
  "blackbutt",
  "balgownie",
  "brooks-reach",
  "horsley",
  "kanahooka",
  "kiama-downs",
  "koonawarra",
  "lake-heights",
  "lake-illawarra",
  "minnamurra",
  "mount-warrigal",
  "oak-flats",
  "port-kembla",
  "thirroul",
  "tullimbar",
  "warilla",
  "vista-park",
  "alfords-point",
  "bangor",
  "barden-ridge",
  "bonnet-bay",
  "bundeena",
  "burraneer",
  "caringbah",
  "caringbah-south",
  "como",
  "cronulla",
  "dolans-bay",
  "engadine",
  "grays-point",
  "greenhills-beach",
  "gymea",
  "gymea-bay",
  "heathcote",
  "illawong",
  "jannali",
  "kangaroo-point",
  "kareela",
  "kirrawee",
  "kurnell",
  "lilli-pilli",
  "loftus",
  "lucas-heights",
  "maianbar",
  "menai",
  "miranda",
  "oyster-bay",
  "port-hacking",
  "sandy-point",
  "sutherland",
  "sylvania",
  "sylvania-waters",
  "taren-point",
  "waterfall",
  "woolooware",
  "woronora",
  "woronora-heights",
  "yarrawarrah",
  "yowie-bay",
]);

function distanceKm(fromLat, fromLon, toLat, toLon) {
  const earthRadiusKm = 6371;
  const toRad = (value) => (value * Math.PI) / 180;
  const deltaLat = toRad(toLat - fromLat);
  const deltaLon = toRad(toLon - fromLon);
  const latA = toRad(fromLat);
  const latB = toRad(toLat);
  const haversine =
    Math.sin(deltaLat / 2) ** 2 + Math.cos(latA) * Math.cos(latB) * Math.sin(deltaLon / 2) ** 2;
  return 2 * earthRadiusKm * Math.asin(Math.sqrt(haversine));
}

function marketZone(record) {
  const name = record.name.toLowerCase();
  const lga = record.lga.toLowerCase();
  const sa4 = record.sa4.toLowerCase();
  if (record.distanceKm <= 12) return "Oak Flats local";
  if (/cronulla|burraneer|woolooware|port hacking|lilli pilli|yowie bay|sylvania waters/.test(name)) {
    return "coastal Shire";
  }
  if (/sutherland|georges river|st george/.test(lga) || /st george/.test(sa4)) return "St George and Shire";
  if (/wollongong|shellharbour|kiama|shoalhaven|illawarra/.test(lga + " " + sa4)) return "Illawarra";
  if (/campbelltown|camden|wollondilly|south western/.test(lga + " " + sa4)) return "South West Sydney";
  if (/inner west|canterbury|bankstown/.test(lga + " " + sa4)) return "Inner South West";
  if (/eastern|randwick|waverley|woollahra|bayside/.test(lga + " " + sa4)) return "Eastern Sydney";
  if (/north shore|northern beaches|hornsby|ku-ring-gai|central coast/.test(lga + " " + sa4)) return "Northern corridor";
  if (/blue mountains|hawkesbury|penrith/.test(lga + " " + sa4)) return "Outer western edge";
  return record.distanceKm <= 35 ? "Greater southern Sydney" : "Extended Sydney radius";
}

const deliveryAreas = [];
for (const line of rows.slice(1)) {
  const columns = parseLine(line);
  if (columns[index.state_code] !== "NSW") continue;
  if ((columns[index.type] || "").trim().toLowerCase() !== "delivery area") continue;

  const locality = (columns[index.locality] || "").trim();
  const lat = Number(columns[index.Lat_precise] || columns[index.lat] || columns[index.latitude]);
  const lon = Number(columns[index.Long_precise] || columns[index.long] || columns[index.longitude]);
  if (!locality || !Number.isFinite(lat) || !Number.isFinite(lon)) continue;

  deliveryAreas.push({
    name: toTitleCase(locality),
    postcode: (columns[index.postcode] || "").trim(),
    lat,
    lon,
    lga: (columns[index.lgaregion] || "").trim(),
    sa3: (columns[index.sa3name] || columns[index.SA3_NAME_2021] || "").trim(),
    sa4: (columns[index.sa4name] || columns[index.SA4_NAME_2021] || "").trim(),
  });
}

const origin = deliveryAreas.find((record) => record.name === "Oak Flats");
if (!origin) {
  throw new Error("Could not find Oak Flats in postcode dataset");
}

const rawMap = new Map();
for (const record of deliveryAreas) {
  const dist = distanceKm(origin.lat, origin.lon, record.lat, record.lon);
  if (dist > 80) continue;
  const key = record.name.toLowerCase();
  const existing = rawMap.get(key);
  if (!existing || dist < existing.distanceKm) {
    rawMap.set(key, {
      ...record,
      slug: slugify(record.name),
      distanceKm: Number(dist.toFixed(1)),
    });
  }
}

const rawSuburbs = [...rawMap.values()].sort((a, b) => a.distanceKm - b.distanceKm || a.name.localeCompare(b.name));
const publishableSuburbs = rawSuburbs
  .filter((record) => !postalCentrePattern.test(record.name))
  .filter((record) => curatedServiceAreaSlugs.has(record.slug))
  .map((record) => ({ ...record, marketZone: marketZone(record) }));

const source = `export type SuburbRecord = {
  name: string;
  slug: string;
  postcode: string;
  lat: number;
  lon: number;
  distanceKm: number;
  lga: string;
  sa3: string;
  sa4: string;
  marketZone: string;
};

export const suburbRadiusStats = {
  origin: "Oak Flats, NSW",
  radiusKm: 80,
  selection: "Kim's Blinds public service areas plus requested Sutherland Shire expansion",
  rawDeliveryLocalities: ${rawSuburbs.length},
  publishableSuburbs: ${publishableSuburbs.length},
  source: "Australian postcodes geocoded locality dataset, 2025-04-15",
} as const;

export const suburbs80km: SuburbRecord[] = ${JSON.stringify(publishableSuburbs, null, 2)};
`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, source);
console.log(
  `Generated ${publishableSuburbs.length} publishable suburbs from ${rawSuburbs.length} raw 80km delivery localities.`,
);
