import { RandomWord } from "../types/typing";

const words = [
    "word",
    "ace",
    "ant",
    "arm",
    "ash",
    "axe",
    "bad",
    "bag",
    "bar",
    "bat",
    "bed",
    "bee",
    "BMW",
    "BMX",
    "bow",
    "box",
    "boy",
    "bus",
    "can",
    "cap",
    "cat",
    "cow",
    "cup",
    "cut",
    "day",
    "dew",
    "die",
    "dig",
    "DNA",
    "dog",
    "ear",
    "eat",
    "eel",
    "egg",
    "emu",
    "end",
    "eye",
    "flu",
    "fly",
    "fog",
    "fox",
    "fur",
    "gas",
    "gem",
    "God",
    "Gru",
    "ham",
    "hat",
    "hen",
    "hop",
    "hot",
    "hug",
    "hut",
    "ice",
    "ivy",
    "jaw",
    "keg",
    "key",
    "KFC",
    "lap",
    "lid",
    "log",
    "low",
    "map",
    "mop",
    "MTV",
    "mud",
    "mug",
    "nun",
    "nut",
    "oar",
    "oil",
    "old",
    "owl",
    "pan",
    "paw",
    "pie",
    "pig",
    "pin",
    "pot",
    "pro",
    "pub",
    "ram",
    "rat",
    "red",
    "rib",
    "rug",
    "run",
    "sad",
    "sea",
    "sew",
    "shy",
    "sit",
    "ski",
    "sky",
    "son",
    "spy",
    "sun",
    "tea",
    "tie",
    "tip",
    "toe",
    "toy",
    "tug",
    "UFO",
    "USB",
    "wax",
    "web",
    "wig",
    "zoo",
    "gru",
    "ivy",
    "ABBA",
    "acid",
    "acne",
    "afro",
    "arch",
    "Asia",
    "atom",
    "Audi",
    "baby",
    "bait",
    "bald",
    "ball",
    "bank",
    "bark",
    "barn",
    "base",
    "beak",
    "bean",
    "bear",
    "beef",
    "beer",
    "beet",
    "bell",
    "belt",
    "bill",
    "bird",
    "bite",
    "blue",
    "boar",
    "boat",
    "boil",
    "bomb",
    "book",
    "bowl",
    "bull",
    "burp",
    "cage",
    "cake",
    "cape",
    "cash",
    "cast",
    "cave",
    "cell",
    "chef",
    "chew",
    "chin",
    "clap",
    "claw",
    "clay",
    "coal",
    "coat",
    "coin",
    "cola",
    "cold",
    "comb",
    "cone",
    "copy",
    "cord",
    "cork",
    "corn",
    "crab",
    "crow",
    "Cuba",
    "cube",
    "cute",
    "dead",
    "deaf",
    "deep",
    "deer",
    "dent",
    "derp",
    "desk",
    "dice",
    "diet",
    "diva",
    "dock",
    "doll",
    "dome",
    "door",
    "Dora",
    "dots",
    "drip",
    "drum",
    "duck",
    "duel",
    "east",
    "echo",
    "Elmo",
    "Elsa",
    "exam",
    "face",
    "fall",
    "farm",
    "fast",
    "fern",
    "Finn",
    "fish",
    "fizz",
    "flag",
    "flea",
    "foil",
    "food",
    "fork",
    "fort",
    "frog",
    "full",
    "gang",
    "gasp",
    "gate",
    "germ",
    "gift",
    "girl",
    "glow",
    "glue",
    "goal",
    "goat",
    "gold",
    "golf",
    "good",
    "grid",
    "grin",
    "hair",
    "half",
    "halo",
    "hand",
    "hard",
    "harp",
    "head",
    "heat",
    "heel",
    "hell",
    "hero",
    "hill",
    "hive",
    "hoof",
    "hook",
    "horn",
    "hose",
    "Hulk",
    "hurt",
    "idea",
    "Ikea",
    "iPad",
    "iron",
    "jail",
    "JayZ",
    "jazz",
    "jeep",
    "king",
    "kiss",
    "kite",
    "kiwi",
    "knee",
    "knot",
    "lady",
    "lake",
    "lamb",
    "lamp",
    "lane",
    "lava",
    "leaf",
    "leak",
    "Lego",
    "legs",
    "lens",
    "lily",
    "lime",
    "line",
    "link",
    "lion",
    "lips",
    "loaf",
    "lock",
    "logo",
    "loot",
    "love",
    "luck",
    "lung",
    "lynx",
    "maid",
    "mall",
    "Mars",
    "mask",
    "maze",
    "meal",
    "meat",
    "melt",
    "meme",
    "milk",
    "mime",
    "mint",
    "mold",
    "mole",
    "monk",
    "moon",
    "moss",
    "moth",
    "nail",
    "Nasa",
    "navy",
    "neck",
    "Nemo",
    "nerd",
    "nest",
    "Nike",
    "noob",
    "nose",
    "nuke",
    "Olaf",
    "open",
    "orca",
    "Oreo",
    "oval",
    "page",
    "pain",
    "palm",
    "park",
    "path",
    "pear",
    "peas",
    "pike",
    "pill",
    "pine",
    "pink",
    "pipe",
    "plow",
    "plug",
    "poke",
    "polo",
    "pond",
    "pony",
    "poop",
    "poor",
    "pope",
    "pray",
    "puma",
    "punk",
    "race",
    "raft",
    "rail",
    "rain",
    "rake",
    "ramp",
    "read",
    "rest",
    "rice",
    "Rick",
    "ring",
    "risk",
    "rock",
    "roll",
    "Rome",
    "roof",
    "room",
    "root",
    "rose",
    "ruby",
    "rune",
    "safe",
    "sale",
    "salt",
    "sand",
    "scar",
    "seal",
    "seed",
    "shoe",
    "shop",
    "sick",
    "silo",
    "sing",
    "sink",
    "skin",
    "slam",
    "slow",
    "snow",
    "soap",
    "soda",
    "soil",
    "soup",
    "spin",
    "spit",
    "stab",
    "star",
    "step",
    "swag",
    "swan",
    "taco",
    "tail",
    "tank",
    "tape",
    "taxi",
    "tear",
    "tent",
    "text",
    "thin",
    "Thor",
    "thug",
    "tiny",
    "tire",
    "toad",
    "tomb",
    "trap",
    "tree",
    "tuba",
    "tuna",
    "turd",
    "twig",
    "type",
    "undo",
    "vein",
    "vent",
    "vine",
    "vise",
    "vote",
    "walk",
    "wall",
    "warm",
    "wart",
    "wasp",
    "wave",
    "weak",
    "well",
    "west",
    "wife",
    "wind",
    "wine",
    "wing",
    "wire",
    "wolf",
    "wool",
    "work",
    "worm",
    "Xbox",
    "yawn",
    "yeti",
    "Yoda",
    "yolk",
    "Zeus",
    "zoom",
    "Zuma",
    "ABBA",
    "acid",
    "bull,4",
    "farm",
    "nose",
    "pain",
    "reed",
    "rice",
    "worm",
    "zuma",
    "abyss",
    "acorn",
    "actor",
    "adult",
    "alarm",
    "alien",
    "alley",
    "angel",
    "angry",
    "anime",
    "anvil",
    "Apple",
    "armor",
    "arrow",
    "attic",
    "bacon",
    "bagel",
    "Bambi",
    "banjo",
    "beach",
    "belly",
    "below",
    "bench",
    "Bible",
    "bingo",
    "birch",
    "black",
    "blimp",
    "blind",
    "blood",
    "blush",
    "board",
    "boots",
    "brain",
    "brand",
    "bread",
    "brick",
    "bride",
    "broom",
    "brush",
    "bulge",
    "bunny",
    "cabin",
    "camel",
    "cello",
    "chain",
    "chair",
    "chalk",
    "cheek",
    "chess",
    "chest",
    "child",
    "chime",
    "China",
    "clean",
    "cliff",
    "climb",
    "cloak",
    "clock",
    "cloth",
    "cloud",
    "clown",
    "coach",
    "coast",
    "cobra",
    "comet",
    "coral",
    "crack",
    "crate",
    "cream",
    "crust",
    "Cupid",
    "curry",
    "daisy",
    "dance",
    "darts",
    "demon",
    "dirty",
    "dizzy",
    "dough",
    "drain",
    "drama",
    "dream",
    "dress",
    "drink",
    "drive",
    "drool",
    "Dumbo",
    "dwarf",
    "eagle",
    "Earth",
    "Egypt",
    "elbow",
    "elder",
    "emoji",
    "error",
    "fairy",
    "Fanta",
    "fence",
    "field",
    "Flash",
    "flask",
    "flock",
    "fluid",
    "flush",
    "flute",
    "frame",
    "fries",
    "frown",
    "fruit",
    "funny",
    "genie",
    "ghost",
    "giant",
    "glass",
    "globe",
    "gloss",
    "glove",
    "gnome",
    "Goofy",
    "goose",
    "graph",
    "grass",
    "grave",
    "greed",
    "grill",
    "groom",
    "gummy",
    "hairy",
    "happy",
    "heart",
    "heist",
    "hippo",
    "honey",
    "horse",
    "hotel",
    "house",
    "hyena",
    "India",
    "Intel",
    "Italy",
    "Japan",
    "jeans",
    "jello",
    "jelly",
    "Jenga",
    "joker",
    "judge",
    "juice",
    "kazoo",
    "kebab",
    "Kirby",
    "kneel",
    "knife",
    "koala",
    "label",
    "laser",
    "lasso",
    "leash",
    "leave",
    "leech",
    "lemon",
    "lemur",
    "limbo",
    "llama",
    "loser",
    "Luigi",
    "macho",
    "mafia",
    "magic",
    "magma",
    "Mario",
    "match",
    "mayor",
    "melon",
    "messy",
    "metal",
    "miner",
    "model",
    "money",
    "moose",
    "Morty",
    "mouse",
    "mouth",
    "movie",
    "Mummy",
    "night",
    "ninja",
    "north",
    "Notch",
    "novel",
    "nurse",
    "ocean",
    "onion",
    "opera",
    "orbit",
    "organ",
    "otter",
    "paint",
    "panda",
    "pants",
    "paper",
    "Paris",
    "party",
    "pasta",
    "patio",
    "pause",
    "peace",
    "peach",
    "pedal",
    "penny",
    "Pepsi",
    "petal",
    "piano",
    "pilot",
    "pinky",
    "pizza",
    "plank",
    "plate",
    "Pluto",
    "point",
    "poppy",
    "porch",
    "pound",
    "prawn",
    "prism",
    "prune",
    "Pumba",
    "purse",
    "queen",
    "queue",
    "quill",
    "quilt",
    "radar",
    "radio",
    "razor",
    "reeds",
    "river",
    "robin",
    "robot",
    "royal",
    "ruler",
    "salad",
    "Santa",
    "sauce",
    "sauna",
    "scarf",
    "scary",
    "scent",
    "scoop",
    "score",
    "screw",
    "scuba",
    "shake",
    "shape",
    "shark",
    "sheep",
    "shelf",
    "shell",
    "shirt",
    "shock",
    "short",
    "shout",
    "Shrek",
    "shrew",
    "shrub",
    "skull",
    "skunk",
    "Skype",
    "sleep",
    "slide",
    "slime",
    "slope",
    "sloth",
    "slump",
    "smell",
    "smile",
    "smoke",
    "snail",
    "snake",
    "socks",
    "Sonic",
    "sound",
    "south",
    "space",
    "spade",
    "Spain",
    "spark",
    "spear",
    "spine",
    "spool",
    "spoon",
    "spore",
    "squid",
    "stage",
    "stamp",
    "stand",
    "Steam",
    "sting",
    "stone",
    "stork",
    "storm",
    "stove",
    "straw",
    "study",
    "sugar",
    "sushi",
    "swamp",
    "swarm",
    "sweat",
    "swing",
    "sword",
    "table",
    "Tails",
    "taser",
    "thief",
    "think",
    "thumb",
    "tiger",
    "tired",
    "toast",
    "tooth",
    "torch",
    "totem",
    "touch",
    "towel",
    "tower",
    "train",
    "trend",
    "T-rex",
    "truck",
    "tumor",
    "udder",
    "uncle",
    "vault",
    "Venus",
    "video",
    "viola",
    "virus",
    "vodka",
    "vomit",
    "waist",
    "watch",
    "water",
    "whale",
    "wheel",
    "whisk",
    "white",
    "witch",
    "W-LAN",
    "world",
    "wound",
    "wrist",
    "Xerox",
    "x-ray",
    "yacht",
    "Yoshi",
    "young",
    "yo-yo",
    "zebra",
    "Zelda",
    "Zorro",
    "nurse",
    "pound",
    "space",
    "squid",
    "trend",
    "action",
    "Adidas",
    "Africa",
    "airbag",
    "almond",
    "alpaca",
    "anchor",
    "Anubis",
    "archer",
    "armpit",
    "baboon",
    "badger",
    "bakery",
    "ballet",
    "bamboo",
    "banana",
    "banker",
    "barber",
    "barrel",
    "basket",
    "Batman",
    "battle",
    "beanie",
    "beaver",
    "beetle",
    "bellow",
    "betray",
    "bleach",
    "booger",
    "border",
    "bottle",
    "bounce",
    "braces",
    "branch",
    "Brazil",
    "breath",
    "bridge",
    "bronze",
    "bruise",
    "bubble",
    "bucket",
    "bullet",
    "bumper",
    "butler",
    "butter",
    "button",
    "cactus",
    "camera",
    "Canada",
    "canary",
    "candle",
    "cannon",
    "canyon",
    "carpet",
    "carrot",
    "casino",
    "caviar",
    "cement",
    "cheeks",
    "cheese",
    "cherry",
    "Chrome",
    "church",
    "cicada",
    "cinema",
    "circle",
    "circus",
    "clover",
    "cocoon",
    "coffee",
    "coffin",
    "collar",
    "comedy",
    "cookie",
    "copper",
    "corner",
    "corpse",
    "cotton",
    "cousin",
    "cowboy",
    "coyote",
    "crayon",
    "credit",
    "cringe",
    "cruise",
    "cuckoo",
    "cyborg",
    "cymbal",
    "dagger",
    "Darwin",
    "desert",
    "Dexter",
    "diaper",
    "dinner",
    "doctor",
    "dollar",
    "donkey",
    "double",
    "dragon",
    "drawer",
    "driver",
    "earwax",
    "Easter",
    "embers",
    "Eminem",
    "engine",
    "eraser",
    "eskimo",
    "Europe",
    "fabric",
    "facade",
    "family",
    "farmer",
    "father",
    "faucet",
    "filter",
    "finger",
    "flower",
    "folder",
    "forest",
    "fossil",
    "France",
    "fridge",
    "galaxy",
    "Gandhi",
    "garage",
    "garden",
    "garlic",
    "gender",
    "gentle",
    "geyser",
    "goatee",
    "goblin",
    "Google",
    "grapes",
    "gravel",
    "Greece",
    "Grinch",
    "grumpy",
    "guitar",
    "hacker",
    "hammer",
    "handle",
    "hanger",
    "harbor",
    "Hawaii",
    "hazard",
    "health",
    "helmet",
    "hermit",
    "hippie",
    "hobbit",
    "hockey",
    "hunger",
    "hunter",
    "hurdle",
    "icicle",
    "impact",
    "insect",
    "inside",
    "iPhone",
    "island",
    "Israel",
    "jacket",
    "jaguar",
    "jester",
    "juggle",
    "jungle",
    "karate",
    "katana",
    "Kermit",
    "kettle",
    "kidney",
    "kitten",
    "knight",
    "kraken",
    "ladder",
    "laptop",
    "lawyer",
    "leader",
    "lizard",
    "London",
    "lotion",
    "lounge",
    "lyrics",
    "magnet",
    "makeup",
    "mantis",
    "marble",
    "market",
    "marmot",
    "mascot",
    "Medusa",
    "Mexico",
    "Minion",
    "minute",
    "mirror",
    "mohawk",
    "Monday",
    "monkey",
    "mother",
    "Mozart",
    "muffin",
    "muscle",
    "museum",
    "musket",
    "nachos",
    "napkin",
    "NASCAR",
    "nature",
    "needle",
    "nickel",
    "noodle",
    "Norway",
    "nugget",
    "nutmeg",
    "Obelix",
    "office",
    "omelet",
    "orange",
    "orchid",
    "oxygen",
    "oyster",
    "paddle",
    "palace",
    "papaya",
    "parade",
    "parrot",
    "pastry",
    "Paypal",
    "peanut",
    "pencil",
    "pepper",
    "person",
    "pickle",
    "picnic",
    "pigeon",
    "pigsty",
    "pillar",
    "pillow",
    "pimple",
    "pirate",
    "pistol",
    "plague",
    "planet",
    "player",
    "pocket",
    "poison",
    "poodle",
    "Popeye",
    "portal",
    "poster",
    "potato",
    "potion",
    "powder",
    "preach",
    "priest",
    "prince",
    "prison",
    "puddle",
    "puffin",
    "puppet",
    "purity",
    "puzzle",
    "quokka",
    "radish",
    "raisin",
    "rapper",
    "record",
    "Reddit",
    "remote",
    "repeat",
    "retail",
    "rewind",
    "ribbon",
    "robber",
    "rocket",
    "rubber",
    "Russia",
    "saddle",
    "safari",
    "saliva",
    "salmon",
    "Saturn",
    "school",
    "scream",
    "screen",
    "scythe",
    "search",
    "season",
    "second",
    "seesaw",
    "Segway",
    "sensei",
    "server",
    "shadow",
    "shovel",
    "shower",
    "silver",
    "skates",
    "skinny",
    "sledge",
    "sleeve",
    "Slinky",
    "sneeze",
    "sniper",
    "soccer",
    "socket",
    "sphinx",
    "spider",
    "spiral",
    "sponge",
    "sports",
    "spring",
    "square",
    "statue",
    "stereo",
    "stoned",
    "street",
    "stress",
    "strong",
    "studio",
    "stylus",
    "subway",
    "Sudoku",
    "summer",
    "switch",
    "tablet",
    "tailor",
    "tampon",
    "target",
    "Tarzan",
    "tattoo",
    "teapot",
    "tennis",
    "Tetris",
    "thirst",
    "throat",
    "throne",
    "ticket",
    "tickle",
    "tissue",
    "toilet",
    "tomato",
    "tongue",
    "toucan",
    "tripod",
    "trophy",
    "tunnel",
    "turkey",
    "turnip",
    "turtle",
    "tuxedo",
    "Tweety",
    "Uranus",
    "vacuum",
    "valley",
    "vanish",
    "victim",
    "violin",
    "vision",
    "volume",
    "voodoo",
    "vortex",
    "waffle",
    "waiter",
    "Wall-e",
    "walnut",
    "walrus",
    "wealth",
    "weapon",
    "weasel",
    "welder",
    "wiggle",
    "willow",
    "window",
    "winner",
    "winter",
    "wizard",
    "wreath",
    "wrench",
    "writer",
    "yellow",
    "yogurt",
    "zigzag",
    "zipper",
    "zombie",
    "Addida",
    "gentle",
    "Grinch",
    "repeat",
    "Tarzan",
    "airport",
    "Aladdin",
    "alcohol",
    "allergy",
    "America",
    "Android",
    "antenna",
    "anthill",
    "apricot",
    "assault",
    "Asterix",
    "athlete",
    "avocado",
    "baklava",
    "balance",
    "balcony",
    "balloon",
    "bandage",
    "bandana",
    "barcode",
    "bathtub",
    "battery",
    "bayonet",
    "bazooka",
    "beatbox",
    "bed bug",
    "bedtime",
    "bicycle",
    "Big Ben",
    "biology",
    "biscuit",
    "Bitcoin",
    "blanket",
    "blender",
    "bobsled",
    "bouncer",
    "bowling",
    "brownie",
    "burglar",
    "burrito",
    "butcher",
    "cabinet",
    "camping",
    "captain",
    "cartoon",
    "catalog",
    "catfish",
    "caveman",
    "ceiling",
    "centaur",
    "charger",
    "cheetah",
    "chicken",
    "chimney",
    "coaster",
    "coconut",
    "compass",
    "concert",
    "console",
    "country",
    "cowbell",
    "Creeper",
    "cricket",
    "Croatia",
    "crowbar",
    "crystal",
    "cupcake",
    "curtain",
    "cushion",
    "defense",
    "dentist",
    "dessert",
    "diagram",
    "diamond",
    "diploma",
    "Discord",
    "disease",
    "dishrag",
    "display",
    "divorce",
    "dolphin",
    "Doritos",
    "Dracula",
    "droplet",
    "drought",
    "earbuds",
    "eclipse",
    "emerald",
    "England",
    "equator",
    "evening",
    "eyebrow",
    "eyelash",
    "factory",
    "failure",
    "feather",
    "fencing",
    "Ferrari",
    "firefly",
    "fireman",
    "Florida",
    "florist",
    "fortune",
    "freezer",
    "funeral",
    "Gandalf",
    "garbage",
    "Germany",
    "giraffe",
    "glasses",
    "glitter",
    "gorilla",
    "gravity",
    "grenade",
    "Gumball",
    "haircut",
    "hammock",
    "hamster",
    "harpoon",
    "hashtag",
    "heading",
    "hexagon",
    "highway",
    "hip hop",
    "holiday",
    "horizon",
    "hot dog",
    "husband",
    "iceberg",
    "Ireland",
    "janitor",
    "jet ski",
    "journey",
    "karaoke",
    "kendama",
    "ketchup",
    "kitchen",
    "knuckle",
    "Kung Fu",
    "ladybug",
    "lantern",
    "Lasagna",
    "laundry",
    "leather",
    "lettuce",
    "library",
    "lighter",
    "lilypad",
    "loading",
    "lobster",
    "lottery",
    "luggage",
    "machine",
    "mailbox",
    "mailman",
    "mammoth",
    "manatee",
    "manhole",
    "mansion",
    "maracas",
    "massage",
    "meerkat",
    "Mercury",
    "mermaid",
    "message",
    "milkman",
    "minivan",
    "missile",
    "monster",
    "morning",
    "Mr Bean",
    "mustard",
    "narwhal",
    "Neptune",
    "network",
    "notepad",
    "nothing",
    "Nutella",
    "octagon",
    "octopus",
    "origami",
    "ostrich",
    "outside",
    "Pac-Man",
    "pajamas",
    "palette",
    "pancake",
    "panther",
    "parents",
    "parking",
    "patient",
    "Patrick",
    "patriot",
    "peacock",
    "peasant",
    "pelican",
    "penguin",
    "perfume",
    "Picasso",
    "pickaxe",
    "Pikachu",
    "pinball",
    "plumber",
    "plunger",
    "Pokemon",
    "popcorn",
    "popular",
    "present",
    "pretzel",
    "printer",
    "protest",
    "provoke",
    "pudding",
    "pumpkin",
    "pyramid",
    "quarter",
    "raccoon",
    "racecar",
    "rainbow",
    "ravioli",
    "reality",
    "referee",
    "reptile",
    "Romania",
    "rooster",
    "Samsung",
    "sandbox",
    "sausage",
    "science",
    "seafood",
    "seagull",
    "seasick",
    "seaweed",
    "shallow",
    "shampoo",
    "shoebox",
    "shotgun",
    "silence",
    "skyline",
    "snowman",
    "soldier",
    "spatula",
    "speaker",
    "spinach",
    "spoiler",
    "stadium",
    "stapler",
    "stomach",
    "student",
    "sunburn",
    "sunrise",
    "surface",
    "surgeon",
    "sweater",
    "tadpole",
    "teacher",
    "thunder",
    "timpani",
    "Titanic",
    "toaster",
    "toenail",
    "toolbox",
    "top hat",
    "tornado",
    "torpedo",
    "tourist",
    "tractor",
    "traffic",
    "trailer",
    "trigger",
    "trumpet",
    "Twitter",
    "Ukraine",
    "ukulele",
    "unibrow",
    "unicorn",
    "uniform",
    "upgrade",
    "vaccine",
    "vampire",
    "vanilla",
    "Vatican",
    "victory",
    "village",
    "villain",
    "vinegar",
    "vitamin",
    "vlogger",
    "volcano",
    "vulture",
    "wake up",
    "weather",
    "website",
    "wedding",
    "western",
    "whisper",
    "whistle",
    "wingnut",
    "witness",
    "wrinkle",
    "Youtube",
    "zipline",
    "mermaid",
    "nothing",
    "pancake",
    "abstract",
    "accident",
    "addition",
    "adorable",
    "aircraft",
    "airplane",
    "anaconda",
    "anteater",
    "antelope",
    "applause",
    "aquarium",
    "assassin",
    "asteroid",
    "Atlantis",
    "audience",
    "backbone",
    "backflip",
    "backpack",
    "bagpipes",
    "baguette",
    "Band-Aid",
    "barbecue",
    "basement",
    "bathroom",
    "bean bag",
    "birthday",
    "blizzard",
    "blowfish",
    "bookmark",
    "bracelet",
    "broccoli",
    "brunette",
    "building",
    "bunk bed",
    "bus stop",
    "calendar",
    "campfire",
    "canister",
    "car wash",
    "carnival",
    "catapult",
    "cauldron",
    "Cerberus",
    "chainsaw",
    "champion",
    "chemical",
    "chestnut",
    "clarinet",
    "cocktail",
    "collapse",
    "comedian",
    "complete",
    "computer",
    "confused",
    "corn dog",
    "crossbow",
    "crucible",
    "cucumber",
    "cupboard",
    "customer",
    "cylinder",
    "dandruff",
    "daughter",
    "Deadpool",
    "delivery",
    "detonate",
    "diagonal",
    "dinosaur",
    "disaster",
    "distance",
    "doghouse",
    "dominoes",
    "doorknob",
    "download",
    "drum kit",
    "dynamite",
    "eggplant",
    "Einstein",
    "election",
    "elephant",
    "elevator",
    "employer",
    "engineer",
    "espresso",
    "exercise",
    "fabulous",
    "Facebook",
    "festival",
    "figurine",
    "fireball",
    "fireside",
    "firework",
    "flagpole",
    "flamingo",
    "forehead",
    "fortress",
    "fountain",
    "freckles",
    "frosting",
    "gangster",
    "gardener",
    "Garfield",
    "gas mask",
    "gasoline",
    "goldfish",
    "graffiti",
    "handicap",
    "hard hat",
    "hay bale",
    "hazelnut",
    "headache",
    "headband",
    "hedgehog",
    "Hercules",
    "homeless",
    "hospital",
    "industry",
    "infinite",
    "insomnia",
    "internet",
    "invasion",
    "Iron Man",
    "jalapeno",
    "kangaroo",
    "keyboard",
    "landlord",
    "language",
    "lemonade",
    "levitate",
    "licorice",
    "lipstick",
    "lollipop",
    "macaroni",
    "magazine",
    "magician",
    "manicure",
    "marathon",
    "marigold",
    "matchbox",
    "mattress",
    "meatball",
    "meatloaf",
    "mechanic",
    "Mercedes",
    "midnight",
    "military",
    "Miniclip",
    "minigolf",
    "minority",
    "Minotaur",
    "mosquito",
    "mothball",
    "mountain",
    "Mr. Bean",
    "murderer",
    "mushroom",
    "mustache",
    "neighbor",
    "nostrils",
    "notebook",
    "nutshell",
    "panpipes",
    "parakeet",
    "password",
    "pavement",
    "pendulum",
    "pet food",
    "pet shop",
    "pinwheel",
    "platypus",
    "ponytail",
    "Popsicle",
    "portrait",
    "Portugal",
    "Poseidon",
    "positive",
    "postcard",
    "pregnant",
    "princess",
    "Pringles",
    "raincoat",
    "raindrop",
    "reindeer",
    "religion",
    "revolver",
    "ringtone",
    "rockstar",
    "sailboat",
    "sandwich",
    "scissors",
    "Scotland",
    "scribble",
    "sea lion",
    "seahorse",
    "seashell",
    "security",
    "shoelace",
    "shopping",
    "shoulder",
    "six pack",
    "skeleton",
    "ski jump",
    "Skittles",
    "Skrillex",
    "slippery",
    "snowball",
    "sombrero",
    "sparkles",
    "squirrel",
    "starfish",
    "stingray",
    "streamer",
    "suitcase",
    "sunshade",
    "Superman",
    "survivor",
    "swimsuit",
    "symphony",
    "tabletop",
    "take off",
    "teaspoon",
    "tentacle",
    "tiramisu",
    "tortoise",
    "trapdoor",
    "traveler",
    "treasure",
    "triangle",
    "tricycle",
    "triplets",
    "trombone",
    "tropical",
    "umbrella",
    "unicycle",
    "universe",
    "vacation",
    "vertical",
    "violence",
    "vuvuzela",
    "werewolf",
    "WhatsApp",
    "windmill",
    "wireless",
    "wrapping",
    "wrestler",
    "yearbook",
    "youtuber",
    "zeppelin",
    "antelope",
    "marathon",
    "accordion",
    "addiction",
    "afterlife",
    "albatross",
    "alligator",
    "ambulance",
    "Amsterdam",
    "animation",
    "antivirus",
    "apartment",
    "apple pie",
    "architect",
    "Argentina",
    "armadillo",
    "astronaut",
    "asymmetry",
    "Australia",
    "autograph",
    "back pain",
    "ballerina",
    "barbarian",
    "bartender",
    "beanstalk",
    "bear trap",
    "bed sheet",
    "Beethoven",
    "billiards",
    "bird bath",
    "blindfold",
    "blueberry",
    "bodyguard",
    "Bomberman",
    "bookshelf",
    "boomerang",
    "brainwash",
    "breakfast",
    "broadcast",
    "Bruce Lee",
    "bulldozer",
    "butterfly",
    "Capricorn",
    "cardboard",
    "carnivore",
    "carpenter",
    "Cat Woman",
    "cathedral",
    "celebrate",
    "celebrity",
    "centipede",
    "chameleon",
    "champagne",
    "Chewbacca",
    "chihuahua",
    "Chinatown",
    "chocolate",
    "Christmas",
    "cigarette",
    "classroom",
    "clickbait",
    "clownfish",
    "cockroach",
    "Colosseum",
    "commander",
    "communism",
    "community",
    "condiment",
    "continent",
    "corkscrew",
    "cornfield",
    "crocodile",
    "croissant",
    "dalmatian",
    "dandelion",
    "dashboard",
    "deodorant",
    "depressed",
    "desperate",
    "detective",
    "dispenser",
    "dollhouse",
    "dragonfly",
    "duct tape",
    "Elon Musk",
    "evaporate",
    "evolution",
    "Excalibur",
    "excavator",
    "explosion",
    "eyeshadow",
    "fast food",
    "filmmaker",
    "fingertip",
    "firehouse",
    "fireplace",
    "fireproof",
    "fish bowl",
    "fisherman",
    "frostbite",
    "full moon",
    "furniture",
    "generator",
    "gentleman",
    "geography",
    "gladiator",
    "glowstick",
    "godfather",
    "golf cart",
    "graveyard",
    "hairbrush",
    "hairspray",
    "hamburger",
    "handshake",
    "harmonica",
    "headboard",
    "hibernate",
    "high five",
    "hilarious",
    "Hollywood",
    "honeycomb",
    "hopscotch",
    "horsewhip",
    "hot sauce",
    "hourglass",
    "Hula Hoop",
    "hypnotize",
    "ice cream",
    "incognito",
    "injection",
    "interview",
    "invention",
    "invisible",
    "jellyfish",
    "John Cena",
    "jump rope",
    "junk food",
    "King Kong",
    "Lady Gaga",
    "landscape",
    "Las Vegas",
    "lava lamp",
    "librarian",
    "lightbulb",
    "lightning",
    "limousine",
    "Lion King",
    "magnifier",
    "mannequin",
    "margarine",
    "marmalade",
    "McDonalds",
    "megaphone",
    "meteorite",
    "Microsoft",
    "microwave",
    "milkshake",
    "Milky Way",
    "Minecraft",
    "Mona Lisa",
    "motorbike",
    "mousetrap",
    "nail file",
    "newspaper",
    "nightclub",
    "nightmare",
    "nose hair",
    "nose ring",
    "nosebleed",
    "orangutan",
    "orchestra",
    "paintball",
    "palm tree",
    "paper bag",
    "parachute",
    "peninsula",
    "pensioner",
    "Peppa Pig",
    "pepperoni",
    "periscope",
    "Photoshop",
    "pine cone",
    "pineapple",
    "Pinocchio",
    "pistachio",
    "pitchfork",
    "poisonous",
    "policeman",
    "pollution",
    "porcupine",
    "Porky Pig",
    "president",
    "price tag",
    "professor",
    "promotion",
    "quicksand",
    "radiation",
    "raspberry",
    "reception",
    "rectangle",
    "recycling",
    "roadblock",
    "saltwater",
    "sandstorm",
    "satellite",
    "saxophone",
    "scarecrow",
    "scientist",
    "sculpture",
    "seat belt",
    "shipwreck",
    "signature",
    "Singapore",
    "skydiving",
    "slingshot",
    "snowboard",
    "snowflake",
    "spaceship",
    "spaghetti",
    "Spartacus",
    "spelunker",
    "Spiderman",
    "SpongeBob",
    "sprinkler",
    "Squidward",
    "Star Wars",
    "starfruit",
    "Stone Age",
    "stop sign",
    "submarine",
    "sunflower",
    "surfboard",
    "swordfish",
    "tangerine",
    "tarantula",
    "telephone",
    "telescope",
    "Teletubby",
    "tombstone",
    "toothpick",
    "tow truck",
    "translate",
    "trash can",
    "treadmill",
    "treehouse",
    "Vault boy",
    "vegetable",
    "wallpaper",
    "warehouse",
    "water gun",
    "waterfall",
    "Wolverine",
    "workplace",
    "wrestling",
    "xylophone",
    "yardstick",
    "shoulders",
    "anglerfish",
    "Antarctica",
    "apocalypse",
    "apple seed",
    "aristocrat",
    "basketball",
    "battleship",
    "Bill Gates",
    "binoculars",
    "black hole",
    "blackberry",
    "blacksmith",
    "bricklayer",
    "broomstick",
    "bubble gum",
    "Bugs Bunny",
    "bus driver",
    "cab driver",
    "can opener",
    "cappuccino",
    "cell phone",
    "chandelier",
    "cheesecake",
    "chest hair",
    "chestplate",
    "chimpanzee",
    "chinchilla",
    "chopsticks",
    "comic book",
    "commercial",
    "controller",
    "cookie jar",
    "coral reef",
    "Daffy Duck",
    "dictionary",
    "diss track",
    "earthquake",
    "face paint",
    "fake teeth",
    "Family Guy",
    "fingernail",
    "fire alarm",
    "fire truck",
    "fist fight",
    "flashlight",
    "floodlight",
    "flying pig",
    "glue stick",
    "gold chain",
    "golden egg",
    "graduation",
    "grapefruit",
    "Great Wall",
    "guillotine",
    "guinea pig",
    "gummy bear",
    "gummy worm",
    "Happy Meal",
    "headphones",
    "helicopter",
    "hieroglyph",
    "high heels",
    "high score",
    "hitchhiker",
    "Home Alone",
    "hovercraft",
    "Iron Giant",
    "jackhammer",
    "James Bond",
    "journalist",
    "Katy Perry",
    "laboratory",
    "lawn mower",
    "leprechaun",
    "lighthouse",
    "lightsaber",
    "litter box",
    "London Eye",
    "lumberjack",
    "Madagascar",
    "magic wand",
    "mayonnaise",
    "microphone",
    "microscope",
    "Mont Blanc",
    "Morse code",
    "motorcycle",
    "nutcracker",
    "overweight",
    "pharmacist",
    "photograph",
    "piggy bank",
    "playground",
    "pogo stick",
    "polar bear",
    "programmer",
    "punishment",
    "rainforest",
    "razorblade",
    "red carpet",
    "reflection",
    "restaurant",
    "rhinoceros",
    "Robin Hood",
    "Scooby Doo",
    "semicircle",
    "silverware",
    "skateboard",
    "skribbl.io",
    "skyscraper",
    "space suit",
    "Steve Jobs",
    "strawberry",
    "Suez Canal",
    "sunglasses",
    "superpower",
    "tablecloth",
    "teddy bear",
    "television",
    "Terminator",
    "tissue box",
    "toothbrush",
    "toothpaste",
    "trick shot",
    "Usain Bolt",
    "vegetarian",
    "video game",
    "Vin Diesel",
    "volleyball",
    "windshield",
    "wine glass",
    "wonderland",
    "woodpecker",
    "mont blanc",
    "Angry Birds",
    "barbed wire",
    "bell pepper",
    "bottle flip",
    "butt cheeks",
    "caterpillar",
    "cauliflower",
    "ceiling fan",
    "cheerleader",
    "coast guard",
    "coffee shop",
    "color-blind",
    "comfortable",
    "crawl space",
    "credit card",
    "Donald Duck",
    "electrician",
    "electricity",
    "firecracker",
    "firefighter",
    "fishing rod",
    "floppy disk",
    "fly swatter",
    "forest fire",
    "grandmother",
    "grasshopper",
    "gravedigger",
    "hair roller",
    "Hello Kitty",
    "hummingbird",
    "imagination",
    "Jackie Chan",
    "Kim Jong-un",
    "magic trick",
    "marshmallow",
    "motherboard",
    "Mr Meeseeks",
    "nail polish",
    "Netherlands",
    "New Zealand",
    "North Korea",
    "observatory",
    "pencil case",
    "photo frame",
    "pirate ship",
    "Playstation",
    "pot of gold",
    "sand castle",
    "spray paint",
    "Stegosaurus",
    "supermarket",
    "talent show",
    "taxi driver",
    "temperature",
    "The Beatles",
    "thermometer",
    "Tooth Fairy",
    "tuning fork",
    "underground",
    "underweight",
    "water cycle",
    "wheelbarrow",
    "spray paint",
    "Barack Obama",
    "Bart Simpson",
    "belly button",
    "Black Friday",
    "broken heart",
    "cheeseburger",
    "Chuck Norris",
    "conversation",
    "cotton candy",
    "Donald Trump",
    "Easter Bunny",
    "Eiffel tower",
    "electric car",
    "fast forward",
    "fire hydrant",
    "flamethrower",
    "Frankenstein",
    "golden apple",
    "Harry Potter",
    "intersection",
    "Jesus Christ",
    "Johnny Bravo",
    "kindergarten",
    "Mickey Mouse",
    "Mr. Meeseeks",
    "neighborhood",
    "notification",
    "photographer",
    "pillow fight",
    "Pink Panther",
    "receptionist",
    "relationship",
    "skateboarder",
    "sledgehammer",
    "social media",
    "Solar System",
    "table tennis",
    "thunderstorm",
    "time machine",
    "Tower Bridge",
    "truck driver",
    "Velociraptor",
    "veterinarian",
    "Wonder Woman",
    "Yin and Yang",
    "advertisement",
    "archaeologist",
    "demonstration",
    "Finn and Jake",
    "Green Lantern",
    "Homer Simpson",
    "hot chocolate",
    "Jimmy Neutron",
    "Mount Everest",
    "Robbie Rotten",
    "shaving cream",
    "shopping cart",
    "snake charmer",
    "swimming pool",
    "tennis racket",
    "Tower of Pisa",
    "traffic light",
    "Angelina Jolie",
    "bungee jumping",
    "cherry blossom",
    "clothes hanger",
    "Cookie Monster",
    "fidget spinner",
    "Jack-o-lantern",
    "Morgan Freeman",
    "Mount Rushmore",
    "sewing machine",
    "snowball fight",
    "Susan Wojcicki",
    "Abraham Lincoln",
    "air conditioner",
    "Captain America",
    "Charlie Chaplin",
    "Crash Bandicoot",
    "electric guitar",
    "fitness trainer",
    "Fred Flintstone",
    "ice cream truck",
    "Mark Zuckerberg",
    "Michael Jackson",
    "Nintendo Switch",
    "Northern Lights",
    "procrastination",
    "Sherlock Holmes",
    "virtual reality",
    "William Wallace",
    "Winnie the Pooh",
    "Darwin Watterson",
    "fashion designer",
    "flight attendant",
    "pencil sharpener",
    "Phineas and Ferb",
    "Leonardo da Vinci",
    "Leonardo DiCaprio",
    "Statue of Liberty",
    "Sydney Opera House",
    "Leonardo Di Caprio",
    "Sydney Opera House",
    "William Shakespeare",
];

export const getRandomWord = (hintThreshold: number = 4): RandomWord => {
    // hintThreshold = 4 :-> for every 4 chars in word there will be a 1 hint char

    const randIndex = Math.floor(Math.random() * words.length - 1);
    const word = words[randIndex].toLowerCase();
    let hint = "";

    if (word.length < hintThreshold) {
        hint = "*".repeat(word.length);
        return { word, hint };
    }

    const hintChars = Math.floor(word.length / hintThreshold);
    const indexs = [];
    for (let i = 0; i < hintChars; i++) {
        let randIndex = Math.floor(Math.random() * word.length - 1);
        let ch = word.charAt(randIndex);
        while (ch === " " || ch === "-" || ch === ".") {
            randIndex = Math.floor(Math.random() * word.length - 1);
            ch = word.charAt(randIndex);
        }
        indexs.push(randIndex);
    }

    indexs.sort();
    let indexsPointer = 0;
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);

        if (indexsPointer < indexs.length && i === indexs[indexsPointer]) {
            hint += ch;
            indexsPointer++;
        } else if (ch === " " || ch === "-" || ch === ".") {
            hint += ch;
        } else {
            hint += "*";
        }
    }

    return { word, hint };
};
