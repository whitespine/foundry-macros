const HERITAGES = `Akorosi, Akorosi, Akorosi, Akorosi, Akorosi, Akorosi, Skovlander, Skovlander, Iruvian, Dagger Islander, Severosi, Tycherosi, `;
const STYLES = `Tricorn Hat, Long Coat, Hood & Veil, Short Cloak, Knit Cap, Slim Jacket, Hooded Coat, Tall Boots, Work Boots, Mask & Robes, Suit & Vest, Collared Shirt, Suspenders, Rough Tunic, Skirt & Blouse, Wide Belt, Fitted Dress, Heavy Cloak, Thick Greatcoat, Soft Boots, Loose Silks, Sharp Trousers, Waxed Coat, Long Scarf, Leathers, Eelskin Bodysuit, Hide & Furs, Uniform, Tatters, Fitted Leggings, Apron, Heavy Gloves, Face Mask, Tool Belt, Crutches, Cane, Wheelchair, `;
const GENDER = `MAN, MAN, WOMAN, WOMAN, UNCLEAR, `;
const LOOKS = `Large, Lovely, Weathered, Chiseled, Handsome, Athletic, Slim, Dark, Fair, Stout, Delicate, Scarred, Bony, Worn, Rough, Plump, Wiry, Striking, Short, Tall, Sexy, Wild, Elegant, Stooped, Cute, Plain, Old, Young, Stylish, Strange, Disfigured/Maimed, Glasses/Monocle, Prosthetic/Crippled, Long Hair/Beard/Wig, Shorn/Bald, Tattooed, `;
const GOALS = `Wealth, Power, Authority, Prestige, Fame, Control, Knowledge, Pleasure, Revenge, Freedom, Achievement, Happiness, Infamy, Fear, Respect, Love, Change, Chaos, Destruction, Justice, Cooperation, `;
const METHODS = `Violence, Threats, Negotiation, Study, Manipulation, Strategy, Theft, Arcane, Commerce, Hard Work, Law, Politics, Sabotage, Subterfuge, Alchemy, Blackmail, Teamwork, Espionage, Chaos, `;
const COMMON_PROFESSIONS = `Baker, Barber, Blacksmith, Brewer, Butcher, Carpenter, Cartwright, Chandler, Clerk, Cobbler, Cooper, Cultivator, Driver, Dyer, Embroiderer, Fishmonger, Gondolier, Guard, Leatherworker, Mason, Merchant, Roofer, Ropemaker, Rug Maker, Servant, Shipwright, Criminal, Tailor, Tanner, Tinkerer, Vendor, Weaver, Woodworker, Goat Herd, Messenger, Sailor, `;
const RARE_PROFESSIONS = `Advocate, Architect, Artist, Author, Bailiff, Apiarist, Banker, Bounty Hunter, Clockmaker, Courtesan, Furrier, Glass Blower, Diplomat, Jailer, Jeweler, Leech, Locksmith, Magistrate, Musician, Physicker, Plumber, Printer, Scholar, Scribe, Sparkwright, Tax Collector, Treasurer, Whisper, Composer, Steward, Captain, Spirit Warden, Journalist, Explorer, Rail Jack, Soldier, `;
const FIRST_NAMES = `Adric , Aldo, Amosen, Andrel, Arden, Arlyn, Arquo, Arvus, Ashlyn, Branon, Brace, Brance, Brena, Bricks, Candra, Carissa, Carro, Casslyn, Cavelle, Clave, Corille, Cross, Crowl, Cyrene, Daphnia, Drav, Edlun, Emeline, Grine, Helles, Hix, Holtz, Kamelin, Kelyr, Kobb, Kristov, Laudius, Lauria, Lenia, Lizete, Lorette, Lucella, Lynthia, Mara, Milos, Morlan, Myre, Narcus, Naria, Noggs, Odrienne, Orlan, Phin, Polonia, Quess, Remira, Ring, Roethe, Sesereth, Sethla, Skannon, Stavrul, Stev, Syra, Talitha, Tesslyn, Thena, Timoth, Tocker, Una, Vaurin, Veleris, Veretta, Vestine, Vey, Volette, Vond, Weaver, Wester, Zamira, `;
const FAMILY_NAMES = `Ankhayat, Arran, Athanoch, Basran, Boden, Booker, Bowman, Breakiron, Brogan, Clelland, Clermont, Coleburn, Comber, Daava, Dalmore, Danfield, Dunvil, Farros, Grine, Haig, Helker, Helles, Hellyers, Jayan, Jeduin, Kardera, Karstas, Keel, Kessarin, Kinclaith, Lomond, Maroden, Michter, Morriston, Penderyn, Prichard, Rowan, Sevoy, Skelkallan, Skora, Slane, Strangford, Strathmill, Templeton, Tyrconnell, Vale, Walund, Welker, `;
const ALIASES = `Bell, Birch, Bricks, Bug, Chime, Coil, Cricket, Cross, Crow, Echo, Flint, Frog, Frost, Grip, Gunner, Hammer, Hook, Junker, Mist, Moon, Nail, Needle, Ogre, Pool, Ring, Ruby, Silver, Skinner, Song, Spur, Tackle, Thistle, Thorn, Tick-Tock, Twelves, Vixen, Whip, Wicker. `;

const TRAITS = `Charming, Cold, Cavalier, Brash, Suspicious, Obsessive, Shrewd, Quiet, Moody, Fierce, Careless, Secretive, Ruthless, Calculating,  Defiant, Gracious, Insightful, Dishonest, Patient, Vicious, Sophisticated, Paranoid, Enthusiastic, Elitist, Savage, Cooperative, Arrogant, Confident, Vain, Daring, Volatile, Candid, Subtle, Melancholy, Enigmatic, Calm`;
const INTERESTS = `
Fine whiskey, wine, beer,
Fine food, restaurants,
Fine clothes, jewelry, furs,
Fine arts, opera, theater,
Painting, drawing, sculpture 
History, legends,
Architecture, furnishings,
Poetry, novels, writing,
Pit-fighting, duels,
Forgotten gods,
Chruch of Ecstasy,
Path of Echoes,
Weeping Lady, charity,
Antiques, artifacts, curios 
Horses, riding,
Gadgets, new technology,
Weapons collector,
Music, instruments, dance 
Hunting, shooting,
Cooking, gardening
Gambling, cards, dice
Natural philosophy
Drugs, essences, tobacco
Lovers, romance, trysts,
Parties, social events,
Exploration, adventure,
Pets (birds, dogs, cats),
Craft (leatherwork, etc.),
Ships, boating,
Politics, journalism,
Arcane books, rituals,
Spectrology, electroplasm
Alchemy, medicine
Essences, alchemy,
Demon lore, legends
Pre-cataclysm legends`;

const WEIRDNESS = `
Superstitious. Believes in signs, magic numbers.
Devoted to their family.
Married into important / powerful family.
Holds their position to spy for another faction.
Reclusive. Prefers to interact via messengers.
Massive debts (to banks / criminals / family)
Blind to flaws in friends, allies, family, etc.
Once hollowed, then restored. Immune to spirits.
Has chronic illness that requires frequent care.
Secretly (openly?) controlled by possessing spirit.
Serves a demon’s agenda (knowingly or not).
Proud of heritage, traditions, native language.
Concerned with appearances, gossip, peers.
Drug / alcohol abuser. Often impaired by their vice.
Holds their position due to blackmail.
Relies on council to make decisions.
Involved with war crimes from the Unity War.
Leads a double life using cover identity.
Black sheep / outcast from family or organization.
In prison or under noble’s house arrest.
Well-traveled. Connections outside Doskvol.
Revolutionary. Plots against the Imperium.
Inherited their position. May not deserve / want it.
Celebrity. Popularized in print / song / theater.
Scandalous reputation (deserved or not).
Surrounded by sycophants, supplicants, toadies.
Spotless reputation. Highly regarded.
Bigoted against culture / belief / social class.
Visionary. Holds radical views for future.
Cursed, haunted, harassed by spirits or demon.
Intense, unreasonable phobia or loathing.
Extensive education on every scholarly subject.
Keeps detailed journals, notes, records, ledgers.
Is blindly faithful to an ideal, group, or tradition.
Deeply traditional. Opposed to new ideas.
A fraud. Some important aspect is fabricated.
`;

const LOYALTIES = "Average, Average, Average, Ambitious, Mutinous/Inflitrator, Fresh, Die-hard, Mouldering, External Affiliate";
const FACTIONS = ""

// Pick an item from one of the above lists
function pick_list(_l, splitter=",") {
    let items = _l.split(splitter).map(s => s.trim()).filter(s => s);
    let roll = Math.floor(Math.random() * items.length);
    return items[roll];
}

// Do these separate for title
const first_name = pick_list(FIRST_NAMES);
const last_name = pick_list(FAMILY_NAMES);
const alias = pick_list(ALIASES);

JournalEntry.create({
    name: `${alias} (${first_name} ${last_name})`,
    content: `
    <h2>IDENTITY</h2>
    <b>ALIAS:</b> ${alias} <br>
    <b>NAME:</b> ${first_name} ${last_name} <br>
 <br>
    <hs>
 <br>
    <h2>APPEARANCE</h2>
    <b>GENDER:</b> ${pick_list(GENDER)} <br>
    <b>LOOK:</b> ${pick_list(LOOKS)} <br>
    <b>STYLE:</b> ${pick_list(STYLES)} <br>
    <b>RACE:</b> ${pick_list(HERITAGES)} <br>
 <br>
    <hs>
 <br>
    <h2>PERSONALITY</h2>
    <b>GOAL:</b>${pick_list(GOALS)} <br>
    <b>METHOD:</b>${pick_list(METHODS)} <br>
    <b>DEMEANOR:</b>${pick_list(TRAITS)} <br>
    <b>INTEREST:</b>${pick_list(INTERESTS, "\n")} <br>
    <b>WEIRDNESS:</b>${pick_list(WEIRDNESS, "\n")} <br>
 <br>
    <hs>
 <br>
    <h2>TIES</h2>
    <b>AFFILIATION:</b> N/A <br>
    <b>OCCUPATION:</b> ${pick_list(COMMON_PROFESSIONS)} <br>
    <b>RARE OCCUPATION:</b> ${pick_list(RARE_PROFESSIONS)} <br>
    <b>LOYALTY:</b> ${pick_list(LOYALTIES)} <br>`
}, {
    renderSheet: true 
}
);