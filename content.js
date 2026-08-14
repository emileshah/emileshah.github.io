/* ============================================================
   CONTENT.JS
   ------------------------------------------------------------
   This is the ONLY file you need to touch to add, remove,
   reorder, or edit a chapter. The shelf, the jar, and the
   opened card are all built automatically from this array.

   TO ADD A NEW CHAPTER:
   1. Make two images (a jar + a leaf) and drop them in
      images/jars/ and images/leaves/
   2. Copy one of the objects below, paste it wherever you
      want it to sit on the shelf (order here = order on the
      page, left to right, top to bottom), and fill in the
      fields.

   TO REORDER: just move an object up or down in this array.
   TO REMOVE: delete an object.
   TO RESTYLE ONE JAR: change its accentColor.
   ============================================================ */

// add a new chapter here
const CHAPTERS = [
  {
    id: "givc-berkeley",
    jarImage: "images/jars/kashmiri-chai-jar.svg",
    leafImage: "images/leaves/kashmiri-chai-leaf.svg",
    title: "givc@berkeley",
    teaType: "kashmiri chai · green · strong brew",
    accentColor: "#E8A3BE", // dusty pink -- kashmiri chai's real color, not "green"
    description:
      "the club where i first learned to build things with other people, not just for a grade.",
    impact:
      "it's where i figured out i like the messy, collaborative part of building something more than the finished product itself.",
    altText: "a small tin of kashmiri chai, dusty rose pink",
  },
  {
    id: "jasc-exec-japan",
    jarImage: "images/jars/hojicha-jar.svg",
    leafImage: "images/leaves/hojicha-leaf.svg",
    title: "jasc — executive committee, japan",
    teaType: "hojicha · green · medium brew",
    accentColor: "#8B5A3C", // roasted brown -- hojicha is a roasted green tea
    description:
      "a year on the executive committee planning the u.s.-japan student conference from the japan side.",
    impact:
      "taught me how much quieter, steadier work it takes to run something well versus just show up to it.",
    altText: "a tin of hojicha, roasted toasty brown",
  },
  {
    id: "magnetar",
    jarImage: "images/jars/earl-grey-jar.svg",
    leafImage: "images/leaves/earl-grey-leaf.svg",
    title: "magnetar internship",
    teaType: "aged earl grey · black · strong brew",
    accentColor: "#4A3226",
    description:
      "my first real desk in finance, figuring out how markets and money actually move day to day.",
    impact:
      "gave me an appetite for hard, technical problems that i didn't know i had before walking in.",
    altText: "a dark amber-black tin of aged earl grey",
  },
  {
    id: "singapore",
    jarImage: "images/jars/oolong-jar.svg",
    leafImage: "images/leaves/oolong-leaf.svg",
    title: "study abroad, singapore",
    teaType: "oolong tea · oolong · medium brew",
    accentColor: "#D9A441",
    description:
      "a semester living in singapore, going to school and exploring southeast asia on the weekends.",
    impact:
      "showed me how much bigger the world gets once you're actually standing in a different part of it.",
    altText: "a golden amber tin of oolong tea",
  },
  {
    id: "jasc-delegate-usa",
    jarImage: "images/jars/matcha-jar.svg",
    leafImage: "images/leaves/matcha-leaf.svg",
    title: "jasc — student delegate, usa",
    teaType: "matcha · green · strong brew",
    accentColor: "#7CB342",
    description:
      "my first year with jasc, sent as a student delegate representing the u.s. side of the exchange.",
    impact:
      "the first time i felt like part of something bigger than my own school or city.",
    altText: "a vibrant green tin of matcha",
  },
  {
    id: "counterpart",
    jarImage: "images/jars/masala-chai-jar.svg",
    leafImage: "images/leaves/masala-chai-leaf.svg",
    title: "counterpart internship",
    teaType: "masala chai · black · strong brew",
    accentColor: "#BF6E3A",
    description:
      "an internship that threw me straight into client work and taught me to think on my feet fast.",
    impact:
      "this is where i stopped being afraid of being the least experienced person in the room.",
    altText: "a warm terracotta-brown tin of masala chai",
  },
];
