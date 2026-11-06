export const IMG = {
  hero: "https://edgeright.com/images/homepage-refresh/hero.jpg",
  garden: "https://edgeright.com/images/homepage-refresh/garden.webp",
  before: "https://edgeright.com/images/homepage-refresh/before.webp",
  after: "https://edgeright.com/images/homepage-refresh/after.webp",
  planter: "https://edgeright.com/images/homepage-refresh/planter.jpg",
  sign: "https://edgeright.com/images/homepage-refresh/sign.jpg",
  edging4: "https://edgeright.com/images/navbar/edging-4ft.jpeg",
  edging2: "https://edgeright.com/images/navbar/edging-2ft.jpeg",
  shorts: "https://edgeright.com/images/navbar/edging_short_pieces.jpg",
  drain: "https://edgeright.com/images/navbar/edging-drain.jpeg",
  entrance: "https://edgeright.com/images/navbar/edging-entrance.jpeg",
  bridge: "https://edgeright.com/images/navbar/edging-bridge.jpeg",
  raisedBed: "https://edgeright.com/images/navbar/raised-bed-kit.jpeg",
  treeRing: "https://edgeright.com/images/navbar/tree-ring-kit.jpeg",
  hammer: "https://edgeright.com/images/installation/hammer-in.jpeg",
  videoThumb: "https://edgeright.com/images/navbar/installation-video.jpeg",
  faqThumb: "https://edgeright.com/images/navbar/info-faq-thumbnail.jpeg",
  steelThumb: "https://edgeright.com/images/navbar/info-corten-thumbnail.jpeg",
  clips: "https://edge-right.myshopify.com/cdn/shop/files/EndClipEdging.png?v=1757693741",
  clipClose:
    "https://cdn.shopify.com/s/files/1/0272/6517/1553/files/Clip_Camera_1_-_T_connector_-_with_strips_close_1.webp?v=1759768978",
  signAngle:
    "https://cdn.shopify.com/s/files/1/0272/6517/1553/files/Signs_Angled0544.png?v=1746644995",
  raisedSunset:
    "https://cdn.shopify.com/s/files/1/0272/6517/1553/files/Raised_Bed_Kit_Sunset.png?v=1758731717",
  treeRingSquare:
    "https://edge-right.myshopify.com/cdn/shop/files/JanieTRKSquare.jpg?v=1748970883&width=1445",
};

export type Product = {
  id: string;
  name: string;
  pack: string;
  price: number;
  category: "edging" | "tree-rings" | "raised-beds" | "signs" | "accessories";
  blurb: string;
  detail: string;
  image: string;
  badge?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "edging-4ft",
    name: "4 ft Edging Strip",
    pack: "Pack of 4",
    price: 98,
    category: "edging",
    blurb: "Sixteen feet of straight, solid steel for beds and walkways.",
    detail:
      "The workhorse. Four strips of 16 gauge weathering steel with connector clips included, covering sixteen feet in one run. Hammer them in along a bed, a path, or a driveway and the line stays where you put it. Two to three inches of steel stays above grade, which is just enough to stop mulch and runners without catching a mower blade.",
    image: IMG.edging4,
    badge: "Best seller",
  },
  {
    id: "edging-2ft",
    name: "2 ft Edging Strip",
    pack: "Pack of 6",
    price: 86,
    category: "edging",
    blurb: "Shorter strips that bend into tight curves by hand.",
    detail:
      "Six two foot strips, twelve feet per pack. The extra joints let the run curve around a fire pit, a mailbox, or an island bed without kinking. Every pair of strips joins through a hidden clip, so the curve reads as one continuous line of steel.",
    image: IMG.edging2,
  },
  {
    id: "edging-shorts",
    name: "1 ft Short Strip",
    pack: "Pack of 8",
    price: 54,
    category: "edging",
    blurb: "Finish any run to exact length without cutting a thing.",
    detail:
      "Eight one foot pieces for the last few feet of a run where a full strip would overlap the fence or the walk. They join through the same clips and take the same mallet. Every landscaper who buys the 4 ft pack ends up wanting these.",
    image: IMG.shorts,
  },
  {
    id: "edging-drain",
    name: "2 ft Drainage Strip",
    pack: "Pack of 4",
    price: 92,
    category: "edging",
    blurb: "Slotted to let water pass while the line stays put.",
    detail:
      "Same 16 gauge steel, with drainage slots cut near the base. Made for the low side of a yard where storm water pools and plain edging turns into a dam. Water goes through, soil and mulch stay behind.",
    image: IMG.drain,
  },
  {
    id: "edging-entrance",
    name: "Start and Finish Strip",
    pack: "Pack of 2",
    price: 44,
    category: "edging",
    blurb: "Slanted ends that tuck the ends of a run into the grade.",
    detail:
      "One slanted strip for where the edging begins and one for where it ends, so the steel eases into the soil instead of stopping with a blunt edge at the sidewalk. It is the detail that makes a self installed job look like a crew did it.",
    image: IMG.entrance,
  },
  {
    id: "edging-bridge",
    name: "2 ft Bridge Strip",
    pack: "Pack of 2",
    price: 58,
    category: "edging",
    blurb: "Arched strips that hop over walkways and drainage swales.",
    detail:
      "A gentle arch rolled into the strip lets the line cross a dry creek bed, a drain trench, or a paver transition without breaking the run. Water flows under, the edge keeps going over.",
    image: IMG.bridge,
  },
  {
    id: "tree-ring",
    name: "Tree Ring Kit",
    pack: "6 ft circle",
    price: 120,
    category: "tree-rings",
    blurb: "A clean steel circle around the trunk in one afternoon.",
    detail:
      "Curved strips and clips that form a six foot ring around a tree. It kills the string trimmer blight on the bark, holds mulch where it belongs, and turns the sad circle of dirt under every tree into the best looking part of the yard.",
    image: IMG.treeRing,
    badge: "Yard favorite",
  },
  {
    id: "raised-bed",
    name: "Raised Bed Kit",
    pack: "4 ft by 8 ft",
    price: 148,
    category: "raised-beds",
    blurb: "Four steel panels and clips. A bed in about twenty minutes.",
    detail:
      "Everything needed for a four by eight raised bed: four panels, corner clips, and a stake edge that takes a mallet. No tools beyond what is already in the garage. The steel weathering to rust looks like it has been part of the garden for years by the second season.",
    image: IMG.raisedSunset,
  },
  {
    id: "address-sign",
    name: "Address Sign",
    pack: "One size",
    price: 145,
    category: "signs",
    blurb: "Your numbers cut from a solid plate of weathering steel.",
    detail:
      "Up to five characters, plasma cut from a single plate and finished in the same patina as the edging. Mounts to a stake in the yard or straight to the house. Delivery drivers stop texting the wrong house. Ships in about a week because each one is cut to order.",
    image: IMG.signAngle,
  },
  {
    id: "clips",
    name: "Connector Clips",
    pack: "Pack of 20",
    price: 16,
    category: "accessories",
    blurb: "The hidden hardware that keeps seams tight and lines clean.",
    detail:
      "Twenty galvanized clips that slide into the slots of any Rustline strip. One per joint, so a twenty pack covers a couple hundred feet. Keep a handful in the truck, because the one time a clip goes missing is the day the soil heaves.",
    image: IMG.clips,
  },
];

export const CATEGORIES = [
  { id: "all", label: "Everything" },
  { id: "edging", label: "Edging Strips" },
  { id: "tree-rings", label: "Tree Rings" },
  { id: "raised-beds", label: "Raised Beds" },
  { id: "signs", label: "Signs" },
  { id: "accessories", label: "Accessories" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I replaced forty feet of heaved up plastic in one Saturday. The line came out so straight my neighbor asked who did the work.",
    name: "Dana R.",
    place: "Chattanooga, TN",
  },
  {
    quote:
      "Two winters in and the steel has that deep cinnamon color. Zero upkeep so far, which is more than I can say for my fence.",
    name: "Marcus T.",
    place: "Columbus, OH",
  },
  {
    quote:
      "The tree ring kit took twenty minutes and looks like stonework. I have bought a lot of things for this yard and this is the first one that still looks new.",
    name: "Priya S.",
    place: "Raleigh, NC",
  },
];

export const FAQS = [
  {
    q: "Why does the steel rust on purpose?",
    a: "Weathering steel is bred to rust. The patina that forms over the first few months tightens into a shell that protects the steel underneath it. That shell is why it outlives painted steel, which rusts from the inside out the moment the paint chips.",
  },
  {
    q: "Will it stain my driveway or patio?",
    a: "The patina can bleed a little during the first few heavy rains. Keep the strips a couple of inches off concrete while they weather, or rinse the seam after a storm. Once the color settles in, the bleeding stops.",
  },
  {
    q: "How deep should the strips go?",
    a: "Leave two to three inches above grade and hammer the rest down. In soft soil that takes minutes. If you hit hard clay, wet the line the night before and thank yourself in the morning.",
  },
  {
    q: "Can I make curves?",
    a: "That is the fun part. The 2 ft strips bend to tight curves by hand and the 4 ft strips hold long sweeping arcs. Lay a garden hose on the ground first, then follow it.",
  },
  {
    q: "How long does it actually last?",
    a: "Decades. Weathering steel has held bridges and guardrails together for over fifty years because the patina renews itself. In a normal yard the edging will outlast the sprinklers, the fence, and probably the truck that delivered it.",
  },
  {
    q: "Can I cut or drill the strips?",
    a: "Yes. A hacksaw or an angle grinder with a cutoff wheel goes through 16 gauge steel easily. Most people never bother, because the short strips fill the odd lengths without any cutting at all.",
  },
  {
    q: "How fast is shipping?",
    a: "Orders leave the Chattanooga warehouse within two business days and land anywhere in the lower 48 in 2 to 5 days. Shipping is free on every order. No code, no minimum.",
  },
  {
    q: "What if I change my mind?",
    a: "Send it back within 60 days for a full refund. If a strip arrives bent or a clip bag comes up short, we ship a replacement and do not ask for anything back.",
  },
];

export const INSTALL_STEPS = [
  {
    title: "Stake the line",
    body: "Lay a garden hose or a string along the shape you want. Curves count. Step back and check it twice, because the steel will remember whatever the hose did.",
  },
  {
    title: "Set the first strip",
    body: "Stand a strip on the line with two to three inches showing above grade and hold it plumb. The connector slots should face the direction you are heading.",
  },
  {
    title: "Hammer it down",
    body: "Drive the strip with a rubber mallet until the top sits at your mark. A scrap of wood between the mallet and the steel keeps the edge pretty.",
  },
  {
    title: "Clip and continue",
    body: "Slide a connector clip into the slots, stack the next strip on, and keep going. The clip hides the seam and stops roots from prying the joint open.",
  },
  {
    title: "Backfill and stand back",
    body: "Push soil against both sides of the line, water it in, and mulch up to the steel. That is it. The yard is edged for the next few decades.",
  },
];

export const HEIGHT_GUIDE = [
  {
    height: "4 inch",
    use: "Lawn and bed lines, paths, mulch containment",
    note: "The everyday choice for most yards.",
  },
  {
    height: "6 inch",
    use: "Gravel, stone, and aggressive grasses",
    note: "Extra depth when bermuda keeps testing the line.",
  },
  {
    height: "8 inch",
    use: "Slopes, erosion control, sunken beds",
    note: "A deep hold wherever water moves.",
  },
];

export const TOOLS = [
  "Rubber mallet",
  "String and stakes, or a garden hose",
  "Work gloves",
  "A 4 ft level for long runs",
  "Knee pads, if you are sensible",
];
