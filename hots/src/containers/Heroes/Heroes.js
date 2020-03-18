import React, { Component } from "react";
import BlizzardNavBar from "../../components/BlizzardNavBar/BlizzardNavBar";
import NavBar from "../../components/Banner/NavBar/NavBar";
import DownloadHeroes from "../../components/DownloadHeroes/DownloadHeroes";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";
import HeroCard from "./HeroCard/HeroCard";
import FlipMove from "react-flip-move";
import "./Heroes.css";
class ChampionShowcase extends Component {
  state = {
    selectedHero: "Deathwing",
    selectedRoleFilter: "All",
    selectedUniverseFilter: "All",
    champions: [
      {
        name: "Deathwing",
        title: "THE DESTROYER",
        desc:
          "One of the five Dragon Aspects and the leader of the Black Dragonflight, Neltharion the Earth-Warder was once a protector of Azeroth. During the War of the Ancients, he was driven mad by the Old Gods and turned against his former allies. Now known as Deathwing the Destroyer, he has found his way to the Nexus where his limitless rage drives his ultimate goal of widespread destruction and the eventual end of all living things.",
        imgURL: "Deathwing.jpg",
        damage: "70%",
        utility: "70%",
        survivability: "100%",
        complexity: "80%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Qhyra",
        title: "REALMLESS BOUNTY HUNTER",
        desc:
          "A sworn knight and holder of a singularity shard, Qhira's only desire is to seek out others who may have escaped the destruction of her doomed home realm, Iresia. While she searches, she gets by as a bounty hunter – a job she loathes, despite her exceptional skill.",
        imgURL: "Qhyra.jpg",
        damage: "80%",
        utility: "60%",
        survivability: "70%",
        complexity: "60%",
        type: "melee assassin",
        universe: "Nexus",
        secondForm: false
      },
      {
        name: "Anduin",
        title: "KING OF STORMWIND",
        desc:
          "As a young man, Anduin sought peace as a priest of the Holy Light and an envoy of the Alliance. After his father, Varian, fell to the Burning Legion, Anduin took up the crown as High King of the Alliance. He soon learned that peace must be fought for, even in the Nexus.",
        imgURL: "Anduin.jpg",
        damage: "20%",
        utility: "70%",
        survivability: "40%",
        complexity: "40%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Imperius",
        title: "ARCHANGEL OF VALOR",
        desc:
          "Leader of the Angiris Council and Aspect of Valor, Imperius has valiantly led the armies of the High Heavens to innumerous victories over the demons of the Burning Hells. While his methods are exact and severe, there is no greater defender of righteousness in the entirety of creation.",
        imgURL: "Imperius.jpg",
        damage: "60%",
        utility: "60%",
        survivability: "50%",
        complexity: "60%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Orphea",
        title: "HEIR OF RAVEN COURTARCHANGEL OF VALORHEIR OF RAVEN COURT",
        desc:
          "Rejecting the dark power her father had begun to consort with, Orphea tried to run away from the Raven Lord's influence. But after witnessing King's Crest fall to his machinations, she was convinced she needed to stand and fight. She now vows to protect the innocent--as a Hero of the Nexus.",
        imgURL: "Orphea.jpg",
        damage: "90%",
        utility: "50%",
        survivability: "70%",
        complexity: "40%",
        type: "ranged assassin",
        universe: "Nexus",
        secondForm: false
      },
      {
        name: "Malganis",
        title: "NATHREZIM LORD",
        desc:
          "Cunning and intelligent, Mal'Ganis was chosen to bring Arthas Menethil into the Lich King’s service. After manipulating the prince into purging Stratholme of life, he finally fell to Frostmourne as Arthas's first act as the Lich King's champion... yet a demon does not die so easily.",
        imgURL: "Malganis.jpg",
        damage: "50%",
        utility: "30%",
        survivability: "70%",
        complexity: "30%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Mephisto",
        title: "LORD OF HATRED",
        desc:
          "Dul’Mephistos, the Lord of Hatred, is said to be the most cunning among his brethren. Even while imprisoned in a soulstone, his vile influence corrupted the Zakarum and manipulated them into breaking the seal, giving him free reign to reunite the Prime Evils and enslave humanity.",
        imgURL: "Mephisto.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "60%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Whitemane",
        title: "HIGH INQUISITOR",
        desc:
          "As the High Inquisitor of the Scarlet Crusade, Sally Whitemane zealously leads her champions in a neverending war against the undead. Under her guiding Light, all who have been touched by the plague of death will be purged by her cleansing flame... no matter how much they protest.",
        imgURL: "Whitemane.jpg",
        damage: "50%",
        utility: "70%",
        survivability: "50%",
        complexity: "80%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Yrel",
        title: "LIGHT OF HOPE",
        desc:
          "After traveling to an Alternate Draenor, the forces of Azeroth saved the acolyte Yrel from the Iron Horde. With their aid, she rose to the rank of Exarch and fought back the demonic invasion of her world. Now, she finds herself where time, space, and dimensions converge: the Nexus.",
        imgURL: "Yrel.jpg",
        damage: "50%",
        utility: "40%",
        survivability: "100%",
        complexity: "50%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Deckard",
        title: "THE LAST HORADRIM",
        desc:
          "As an avid scholar, Deckard Cain has dedicated his life to the pursuit of knowledge. He has been an advisor, storyteller, and friend to Sanctuary's greatest heroes, guiding them through peril time and again. When Deckard speaks, it's wise to stay awhile and listen.",
        imgURL: "Deckard.jpg",
        damage: "30%",
        utility: "80%",
        survivability: "70%",
        complexity: "50%",
        type: "healer",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Fenix",
        title: "STEWARD OF THE TEMPLAR",
        desc:
          "As one of the greatest heroes in protoss history, Fenix's deeds on the battlefield are legendary. After falling to the zerg during the invasion of Aiur, his body was recovered and implanted into a dragoon so he could continue to fight. Not even death can stop Fenix from achieving glory and valor.",
        imgURL: "Fenix.jpg",
        damage: "90%",
        utility: "40%",
        survivability: "50%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Maiev",
        title: "THE WARDEN",
        desc:
          "Maiev Shadowsong stood watch over the imprisoned Betrayer for ten thousand years, and hunted him relentlessly after he was released. Some say she's determined; others say she's obsessed. Either way, she will stop at nothing to ensure the security of her world.",
        imgURL: "Maiev.jpg",
        damage: "60%",
        utility: "50%",
        survivability: "70%",
        complexity: "70%",
        type: "melee assasin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Blaze",
        title: "VETERAN FIREBAT",
        desc:
          "Cpl. Miles 'Blaze' Lewis has always been drawn to the flame, but it wasn't until he joined up with Raynor's Raiders that he put his pyromania to good use. He's seen his fair share of battles since then, and has never failed to bring the heat.",
        imgURL: "Blaze.jpg",
        damage: "60%",
        utility: "70%",
        survivability: "90%",
        complexity: "70%",
        type: "tank",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Hanzo",
        title: "MASTER ASSASSIN",
        desc:
          "Once heir to the Shimada clan's criminal empire, Hanzo abandoned his birthright after he almost killed his younger brother. He now strives to perfect his skills as a warrior, and sees the Nexus and its endless conflict as the ideal training ground.",
        imgURL: "Hanzo.jpg",
        damage: "80%",
        utility: "50%",
        survivability: "40%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Alexstrasza",
        title: "THE LIFE-BINDER",
        desc:
          "Alexstrasza, the queen of dragons, was empowered by the titans to be the guardian of all life on Azeroth. She has aided mortals time and again, even at great personal cost. Now, she soars across the Nexus, protecting life wherever she finds it.",
        imgURL: "Alexstrasza.jpg",
        damage: "30%",
        utility: "60%",
        survivability: "40%",
        complexity: "60%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Junkrat",
        title: "JUNKER DEMOLITIONIST",
        desc:
          "The destruction of the Australian omnium left the area an irradiated waste and survivors like Jamison Fawkes were greatly affected by radiation. Now as the explosive-obsessed criminal Junkrat, he is renowned for leaving havoc and bedlam in his wake.",
        imgURL: "Junkrat.jpg",
        damage: "70%",
        utility: "80%",
        survivability: "50%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Ana",
        title: "VETERAN SNIPER",
        desc:
          "As a founding member of Overwatch and one of the world's best snipers, Ana Amari uses her skills to protect the innocent. Though she went MIA after losing her eye, Ana's sense of duty and responsibility has brought her back to the fight.",
        imgURL: "Ana.jpg",
        damage: "30%",
        utility: "70%",
        survivability: "30%",
        complexity: "60%",
        type: "healer",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Kel'Thuzad",
        title: "ARCHLICH OF NAXXRAMAS",
        desc:
          "Kel'Thuzad has faithfully served the Lich King both in life and after death. Reanimated as the Archlich of the Scourge and given domain of the Dread Necropolis, Naxxramas, Kel’Thuzad remains Arthas’s most trusted advisor and master of the cold dark.",
        imgURL: "Kel'Thuzad.jpg",
        damage: "80%",
        utility: "70%",
        survivability: "40%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Garrosh",
        title: "SON OF HELLSCREAM",
        desc:
          "As the new warchief of the Horde, Garrosh is a proud and vicious warrior who rules with an iron fist. His hatred for the Alliance burns like wildfire, and he will stop at nothing to destroy them. By his axe, the orcs will reclaim their rightful glory.",
        imgURL: "Garrosh.jpg",
        damage: "30%",
        utility: "70%",
        survivability: "90%",
        complexity: "60%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Stukov",
        title: "INFESTED ADMIRAL",
        desc:
          "Alexei Stukov had a hard life, and an even harder death. He has been betrayed, shot into space, resurrected and infested, almost cured, and then experimented upon as the infestation returned. Now, his infestation spreads within the Nexus...",
        imgURL: "Stukov.jpg",
        damage: "30%",
        utility: "80%",
        survivability: "50%",
        complexity: "70%",
        type: "healer",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Malthael",
        title: "ASPECT OF DEATH",
        desc:
          "Once the Aspect of Wisdom, Malthael abandoned heaven after the Worldstone's destruction. In secret, he had resolved to end the Eternal Conflict by becoming a Reaper of Souls and eliminating everything affected by demonic corruption, including humanity.",
        imgURL: "Malthael.jpg",
        damage: "70%",
        utility: "40%",
        survivability: "60%",
        complexity: "60%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "D.VA",
        title: "MEKA PILOT",
        desc:
          "Hana Song, also known as 'D.Va' is both a world champion professional gamer and a burgeoning global icon. As a member of South Korea’s elite MEKA unit, she fights to protect her homeland from the colossal omnic threat lurking within the East China Sea.",
        imgURL: "D.VA.jpg",
        damage: "40%",
        utility: "80%",
        survivability: "80%",
        complexity: "60%",
        type: "bruiser",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Genji",
        title: "CYBERNETIC NINJA",
        desc:
          "Once the carefree youngest scion of the Shimada clan, Genji was cut down by his own brother for refusing to take part in their illegal ventures. Grafted into a cyborg body by Overwatch, Genji walks his own path as one who fights for what's right.",
        imgURL: "Genji.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "40%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Cassia",
        title: "AMAZON WARMATRON",
        desc:
          "After shattering the Worldstone, the young Amazon Cassia had changed. She had seen hatred, terror, and destruction firsthand. If the Askari were to survive the coming darkness, they needed an army. She would begin their training immediately.",
        imgURL: "Cassia.jpg",
        damage: "70%",
        utility: "50%",
        survivability: "60%",
        complexity: "40%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Probius",
        title: "CURIOUS PROBE",
        desc:
          "Since his activation, Probius has always wanted to prove himself. He may be small, but he made a big difference by warping in a critical pylon during the retaking of Aiur. As the bravest of probes, Probius is eager to fulfill his purpose in the Nexus.",
        imgURL: "Probius.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "40%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Lúcio",
        title: "FREEDOM FIGHTING DJ",
        desc:
          "From the streets of Rio to the clubs on King's Row, Lúcio's beats bring the party to life, and drive the people to action. Now he's on tour in the Nexus, ready to break it down, and to continue fighting for what's right.",
        imgURL: "Lúcio.jpg",
        damage: "30%",
        utility: "80%",
        survivability: "60%",
        complexity: "50%",
        type: "healer",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Valeera",
        title: "SHADOW OF THE UNCROWNED",
        desc:
          "For a time, the gladiator Valeera Sanguinar served dutifully as one of Varian Wrynn's personal bodyguards. Now, her shadowy skills find her a natural fit within the secretive rogue order, the Uncrowned, in their fight against the Legion.",
        imgURL: "Valeera.jpg",
        damage: "50%",
        utility: "80%",
        survivability: "60%",
        complexity: "80%",
        type: "melee assassin",
        universe: "Warcraft",
        secondForm: true
      },
      {
        name: "Zul'Jin",
        title: "WARLORD OF THE AMANI",
        desc:
          "Before the elves and their Alliance, the forests of Lordaeron belonged to the trolls of the Amani empire. As their warlord, Zul'jin has united the tribes into an army that stands ready to take back what is theirs and to slay the elves who stole it from them.",
        imgURL: "Zul'Jin.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "60%",
        complexity: "40%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Ragnaros",
        title: "THE FIRELORD",
        desc:
          "As the lord of Azeroth’s fire elementals, Ragnaros desires nothing more than to burn the world to ash. Banished to the Firelands eons ago, the Firelord now turns his rage toward the Nexus, intent on incinerating everything and everyone within it.",
        imgURL: "Ragnaros.jpg",
        damage: "80%",
        utility: "70%",
        survivability: "80%",
        complexity: "70%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Varian",
        title: "HIGH KING OF THE ALLIANCE",
        desc:
          "Few would have expected that the gladiator known only as Lo'Gosh was in truth the missing ruler of Stormwind, Varian Wrynn. Now the High King of the Alliance, his every action shapes the destiny of Azeroth itself.",
        imgURL: "Varian.jpg",
        damage: "60%",
        utility: "70%",
        survivability: "60%",
        complexity: "60%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Samuro",
        title: "THE BLADEMASTER",
        desc:
          "Samuro, the last remaining blademaster to wear the banner of the Burning Blade, is on a warrior's pilgrimage in search of vengeance and redemption for his fallen clan. It will be a long journey, but he has sworn an oath to restore his clan's honor.",
        imgURL: "Samuro.jpg",
        damage: "60%",
        utility: "30%",
        survivability: "70%",
        complexity: "70%",
        type: "melee assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Zarya",
        title: "DEFENDER OF RUSSIA",
        desc:
          "Aleksandra Zaryanova is one of the world's strongest women and was a promising athlete, but all that changed when the Siberian omnium reawakened. As a soldier in the Russian Defense Force, she now proudly uses her strength to protect the ones she loves.",
        imgURL: "Zarya.jpg",
        damage: "50%",
        utility: "70%",
        survivability: "80%",
        complexity: "70%",
        type: "support",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Alarak",
        title: "HIGHLORD OF THE TAL'DARIM",
        desc:
          "Not all heroes are born of altruism... some, like Alarak, simply desire vengeance. As the new Highlord of the Tal'darim, Alarak leads his people to a destiny free of the corrupt influence of the fallen xel'naga, Amon.",
        imgURL: "Alarak.jpg",
        damage: "70%",
        utility: "70%",
        survivability: "60%",
        complexity: "80%",
        type: "melee assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Auriel",
        title: "ARCHANGEL OF HOPE",
        desc:
          "It is through the archangel Auriel that the power of hope flows into the fabric of creation. Her eternal light illuminates even the darkest souls. Seeking harmony in all things, she is a mediator, a counselor, and when the need arises, a fearless warrior.",
        imgURL: "Auriel.jpg",
        damage: "30%",
        utility: "80%",
        survivability: "40%",
        complexity: "80%",
        type: "healer",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Gul'dan",
        title: "DARKNESS INCARNATE",
        desc:
          "Abandoning the ways of shamanism, Gul'dan entered a pact with the demon lord Kil'jaeden and betrayed his people in exchange for limitless power. With the orcish Horde under his master's thrall, both Draenor and Azeroth nearly fell into his grasp.",
        imgURL: "Gul'dan.jpg",
        damage: "80%",
        utility: "30%",
        survivability: "50%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Medivh",
        title: "THE LAST GUARDIAN",
        desc:
          "Under the demon lord Sargeras's influence, Medivh opened the Dark Portal and unleashed the Horde upon Azeroth. To atone for this sin, he rallied a new generation of heroes to stand against the Burning Legion. Now, he takes his place amongst legends.",
        imgURL: "Medivh.jpg",
        damage: "20%",
        utility: "100%",
        survivability: "60%",
        complexity: "80%",
        type: "support",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Chromie",
        title: "KEEPER OF TIME",
        desc:
          "At first glance, Chromie appears to be an ordinary gnome. In truth, she is Chronormu, Bronze Dragon and a master of time. When it comes to temporal manipulation there's no problem she can't solve... with some help from her future self, of course.",
        imgURL: "Chromie.jpg",
        damage: "90%",
        utility: "40%",
        survivability: "30%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Tracer",
        title: "AGENT OF OVERWATCH",
        desc:
          "Lena Oxton (call sign: 'Tracer'), is both an adventurer and an irrepressible force for good. With the ability to alter her own time at will, she fights the good fight wherever she goes--even the Nexus. Don't worry, loves. The cavalry's finally here. Tracer is FREE to purchasers of Overwatch™: Origins Edition",
        imgURL: "Tracer.jpg",
        damage: "80%",
        utility: "20%",
        survivability: "50%",
        complexity: "80%",
        type: "ranged assassin",
        universe: "Overwatch",
        secondForm: false
      },
      {
        name: "Dehaka",
        title: "PRIMAL PACK LEADER",
        desc:
          "Cunning and wise, Dehaka is one of the last surviving pack leaders of the forgotten world of Zerus. As with all primal zerg, he is driven by a powerful desire to consume the essence of his foes and evolve into newer and more deadly forms.",
        imgURL: "Dehaka.jpg",
        damage: "60%",
        utility: "80%",
        survivability: "90%",
        complexity: "70%",
        type: "bruiser",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Xul",
        title: "CRYPTIC NECROMANCER",
        desc:
          "From the recesses of the eastern jungles comes a man cloaked in mystery. As a member of the secretive Priests of Rathma, or the Necromancers, Xul wields powerful death magic and fights to preserve the delicate balance between order and chaos.",
        imgURL: "Xul.jpg",
        damage: "50%",
        utility: "90%",
        survivability: "70%",
        complexity: "40%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Li-Ming",
        title: "REBELLIOUS WIZARD",
        desc:
          "The derogatory moniker 'wizard' is often given to mages with rebellious attitudes or an obsession with power. Li-Ming displays a little of both and she's hardly ashamed of it. After all, who are they to judge a wielder of limitless arcane magic?",
        imgURL: "Li-Ming.jpg",
        damage: "100%",
        utility: "10%",
        survivability: "30%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Greymane",
        title: "LORD OF THE WORGEN",
        desc:
          "Like most Gilneans, Genn Greymane is afflicted by the worgen curse. Though he feels at fault for his people’s ill fate, he has embraced his inner beast without giving in to its feral nature. Now he leads his pack as both their alpha and their king.",
        imgURL: "Greymane.jpg",
        damage: "90%",
        utility: "30%",
        survivability: "40%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: true
      },
      {
        name: "Lunara",
        title: "FIRST DAUGHTER OF CENARIUS",
        desc:
          "While her younger sisters frolicked in idyllic forests, Lunara watched as mortals exploited nature’s splendor. On Azeroth, her father Cenarius forbade her from retaliating. But this is the Nexus, and it’s time for nature to take its revenge.",
        imgURL: "Lunara.jpg",
        damage: "80%",
        utility: "50%",
        survivability: "40%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Chogall",
        title: "TWILIGHT'S HAMMER CHIEFTAIN",
        desc:
          "Cho’gall is one of the most powerful, intelligent, and insane ogre-magi to have ever lived. As the leader of the Twilight's Hammer the two brothers seek to bring about an age of destruction... whenever they aren’t bickering that is.",
        imgURL: "Chogall.jpg",
        damage: "60%",
        utility: "20%",
        survivability: "100%",
        complexity: "70%",
        type: "tank",
        universe: "Warcraft",
        secondForm: true
      },
      {
        name: "Artanis",
        title: "HIERARCH OF THE DAELAAM",
        desc:
          "Despite his relative youth, Artanis was named Hierarch of the Daelaam after the fall of Aiur. Driven by the promise of a brighter future, he hopes to reclaim the protoss' fallen home world and rebuild their once glorious civilization. Artanis is FREE to purchasers of StarCraft® II: Legacy of the Void™",
        imgURL: "Artanis.jpg",
        damage: "60%",
        utility: "60%",
        survivability: "80%",
        complexity: "50%",
        type: "bruiser",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Lt Morales",
        title: "COMBAT MEDIC",
        desc:
          "To good marines, the only thing more important than the rifle in their hand is the medic at their back. As one of the first officers deployed during the United Earth Directorate's invasion, Lt. Rosa Morales is the best of the best.",
        imgURL: "Lt Morales.jpg",
        damage: "30%",
        utility: "90%",
        survivability: "40%",
        complexity: "50%",
        type: "healer",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Rexxar",
        title: "CHAMPION OF THE HORDE",
        desc:
          "It was a strange twist of fate that led the wandering half-ogre Rexxar to the fledgling city of Orgrimmar. With his aid, Thrall and the Horde were able to secure their homeland and defend it from the invading forces of Lord Admiral Daelin Proudmoore.",
        imgURL: "Rexxar.jpg",
        damage: "50%",
        utility: "80%",
        survivability: "70%",
        complexity: "60%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Kharazim",
        title: "VERADANI MONK",
        desc:
          "To the monks of Ivgorod, the gods are in all things, and their divine will is proclaimed by the Patriarchs. With unshakable faith, Kharazim carries forth the decrees of the thousand and one gods to the ends of Sanctuary and the realms beyond.",
        imgURL: "Kharazim.jpg",
        damage: "40%",
        utility: "90%",
        survivability: "70%",
        complexity: "40%",
        type: "healer",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Leoric",
        title: "THE SKELETON KING",
        desc:
          "Madness. Betrayal. Death. These are the legacy of the Black King Leoric's reign. Driven to madness by the spirit of Diablo, Leoric brought untold suffering on his kingdom. Even after his death there was no release for the Skeleton King.",
        imgURL: "Leoric.jpg",
        damage: "40%",
        utility: "50%",
        survivability: "80%",
        complexity: "60%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "The Butcher",
        title: "FLESH CARVER",
        desc:
          "An unrelenting hacking echoed off the walls of the Cathedral and as Prince Aidan made his way through its depths, the sound only grew louder. There were no screams; just that dreadful sound... over and over.",
        imgURL: "The Butcher.jpg",
        damage: "90%",
        utility: "40%",
        survivability: "50%",
        complexity: "30%",
        type: "melee assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Johanna",
        title: "CRUSADER OF ZAKARUM",
        desc:
          "There have been many women who have borne the name Johanna in service of the crusade, and each has given her life to purify her faith. Johanna carries on their legacy as she searches the kingdom of Khanduras for the fallen star.",
        imgURL: "Johanna.jpg",
        damage: "30%",
        utility: "60%",
        survivability: "100%",
        complexity: "40%",
        type: "tank",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Kaelthas",
        title: "THE SUN KING",
        desc:
          "Like all Blood Elves, Prince Kael'thas was transformed by the fall of Quel'Thalas. Desperate to save his people from being consumed by their magical addiction, he joined forces with the Burning Legion and now lords over Tempest Keep.",
        imgURL: "Kaelthas.jpg",
        damage: "90%",
        utility: "50%",
        survivability: "30%",
        complexity: "70%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },

      {
        name: "Sylvanas",
        title: "THE BANSHEE QUEEN",
        desc:
          "Sylvanas Windrunner was not always the Dark Lady of the Forsaken. In another life, she was the Ranger-General of Silvermoon. But that was before the Death Knight Arthas slew her and her people and raised her as the first Banshee.",
        imgURL: "Sylvanas.jpg",
        damage: "90%",
        utility: "70%",
        survivability: "30%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "The Lost Vikings",
        title: "TRIPLE TROUBLE",
        desc:
          "The Lost Vikings are back! While they briefly considered retirement after defeating the emperor Tomator, there were only so many polar bears they could wrestle before falling into a Nexus portal seemed like a solid life decision.",
        imgURL: "The Lost Vikings.jpg",
        damage: "70%",
        utility: "50%",
        survivability: "60%",
        complexity: "100%",
        type: "support",
        universe: "Nexus",
        secondForm: false
      },
      {
        name: "Thrall",
        title: "WARCHIEF OF THE HORDE",
        desc:
          "As a child, Thrall served the cruel Aedelas Blackmoore as a slave. After gaining his freedom, he guided the liberated orcs to a land of their own and worked to recover their ancient traditions. Now and forever he is the Warchief of the Horde.",
        imgURL: "Thrall.jpg",
        damage: "80%",
        utility: "50%",
        survivability: "70%",
        complexity: "60%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Jaina",
        title: "ARCHMAGE",
        desc:
          "Once the apprentice of the Archmage Antonidas, Jaina Proudmoore led the survivors of Lordaeron to Kalimdor and founded the city of Theramore. Now, she serves the Alliance as a powerful voice fighting for reason and diplomacy.",
        imgURL: "Jaina.jpg",
        damage: "100%",
        utility: "40%",
        survivability: "20%",
        complexity: "40%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Azmodan",
        title: "LORD OF SIN",
        desc:
          "The Lord of Sin rules over a densely populated land of Hell where both the greatest joys and despair, and the deepest depravities can be experienced. But it is never enough for Azmodan, who has set his eyes on the realm of Sanctuary.",
        imgURL: "Azmodan.jpg",
        damage: "30%",
        utility: "60%",
        survivability: "70%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Anub'arak",
        title: "TRAITOR KING",
        desc:
          "Once a proud nerubian king, Anub'arak dared to stand against the Lich King's invasion, but despite his bravery, he too fell to the unrelenting Scourge. Resurrected into undeath, the Traitor King now serves as a towering weapon of destruction.",
        imgURL: "Anub'arak.jpg",
        damage: "40%",
        utility: "60%",
        survivability: "70%",
        complexity: "50%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Chen",
        title: "LEGENDARY BREWMASTER",
        desc:
          "To be a brewmaster is to be an explorer, a lover of nature, and when the need arises; a powerful fighter. For years Chen Stormstout has wandered the world of Azeroth in search of rare ingredients, stirring stories, and of course, good brew.",
        imgURL: "Chen.jpg",
        damage: "50%",
        utility: "50%",
        survivability: "80%",
        complexity: "80%",
        type: "bruiser",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Rehgar",
        title: "SHAMAN OF THE EARTHEN RING",
        desc:
          "Rehgar Earthfury has seen his share of combat, both as a gladiator, and a master of his own team. Now, having put that life aside, he serves as a simple shaman of the Earthen Ring, earning his redemption by healing the lands of Azeroth.",
        imgURL: "Rehgar.jpg",
        damage: "50%",
        utility: "70%",
        survivability: "70%",
        complexity: "60%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Zagara",
        title: "BROODMOTHER OF THE SWARM",
        desc:
          "If Kerrigan is the Queen of the Zerg, then Zagara is the mother of the brood. Cunning and tenacious, she commands her minions on the field of battle. Encounter her brood and beware: Mess with her children, and you answer to mama.",
        imgURL: "Zagara.jpg",
        damage: "60%",
        utility: "80%",
        survivability: "50%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Murky",
        title: "BABY MURLOC",
        desc:
          "Mrgglglbrlg rmrmgllg mrggggm. Mrrglglgy, mgllglgl mgggrrmgl? MRGGGLGLLM! Mrrggllgggllggll mrrglrlg mrrg mrrg mrrrg.",
        imgURL: "Murky.jpg",
        damage: "50%",
        utility: "50%",
        survivability: "10%",
        complexity: "80%",
        type: "melee assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Brightwing",
        title: "FAERIE DRAGON",
        desc:
          "Like many faerie dragons, Brightwing is happiest darting around the forests of Ashenvale, healing friends, and then grabbing a light snack. By the way, did you know a human head only weighs ten pounds? Talk about light!",
        imgURL: "Brightwing.jpg",
        damage: "40%",
        utility: "90%",
        survivability: "50%",
        complexity: "70%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Li Li",
        title: "WORLD WANDERER",
        desc:
          "Born upon Shen-zin Su, the Wandering Isle, Li Li Stormstout led an uneventful life until she began reading her uncle Chen's journals. Soon, nothing would sate her desire for adventure, exploration, and pestering adventurers around Halfhill.",
        imgURL: "Li Li.jpg",
        damage: "30%",
        utility: "80%",
        survivability: "80%",
        complexity: "30%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Tychus",
        title: "NOTORIOUS OUTLAW",
        desc:
          "Tychus Findlay is a big man with a big ego and a bigger gun. Fortunately, his loyalty is easily won. Buy him a drink or three and promise him enough credits, and there's no job in the whole universe too dangerous for this outlaw.",
        imgURL: "Tychus.jpg",
        damage: "80%",
        utility: "10%",
        survivability: "50%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Abathur",
        title: "EVOLUTION MASTER",
        desc:
          "Abathur, the Evolution Master of Kerrigan's Swarm, works ceaselessly to improve the zerg from the genetic level up. His hate for chaos and imperfection almost rivals his hatred of pronouns.",
        imgURL: "Abathur.jpg",
        damage: "30%",
        utility: "70%",
        survivability: "10%",
        complexity: "90%",
        type: "support",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Arthas",
        title: "THE LICH KING",
        desc:
          "Once the crown prince of Lordaeron, and protégé of Uther the Lightbringer, Arthas was corrupted by the cursed blade Frostmourne in a bid to save his people. Now he rules over the damned as the Lich King and all shall know his wrath.",
        imgURL: "Arthas.jpg",
        damage: "60%",
        utility: "50%",
        survivability: "80%",
        complexity: "40%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Diablo",
        title: "LORD OF TERROR",
        desc:
          "Known in the ancient tongue as Al'Diabolos, the Prime Evil of Terror, the Demon Lord Diablo seeks to claim the world of Sanctuary for the Burning Hells. His victims are innumerable, his schemes unknowable, and his gender... malleable.",
        imgURL: "Diablo.jpg",
        damage: "50%",
        utility: "70%",
        survivability: "90%",
        complexity: "50%",
        type: "tank",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Illidan",
        title: "THE BETRAYER",
        desc:
          "Illidan Stormrage, the first demon hunter, betrayed his people and created a new Well of Eternity after the demonic invasion of Azeroth. Now Illidan lords over Outland slaying unsuitably prepared Heroes who venture into his domain.",
        imgURL: "Illidan.jpg",
        damage: "80%",
        utility: "30%",
        survivability: "60%",
        complexity: "80%",
        type: "melee assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Kerrigan",
        title: "QUEEN OF BLADES",
        desc:
          "Once a terran ghost with formidable psionic abilities, Sarah Kerrigan was betrayed by her allies and transformed into the Queen of Blades. Now freed of the dark one's corruption, Kerrigan faces a threat that could destroy the galaxy itself.",
        imgURL: "Kerrigan.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "60%",
        complexity: "60%",
        type: "melee assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Malfurion",
        title: "ARCHDRUID",
        desc:
          "Malfurion Stormrage is the greatest druid on Azeroth, and a student of the demi-god Cenarius. Communing with nature and Cenarius through the Emerald dream, Malfurion protects the wilds from demonic influences.",
        imgURL: "Malfurion.jpg",
        damage: "40%",
        utility: "70%",
        survivability: "50%",
        complexity: "50%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Muradin",
        title: "MOUNTAIN KING",
        desc:
          "Once a mentor to Prince Arthas, Muradin was unable to prevent his corruption. After recovering from a mild case of amnesia, he is now the leader of the Bronzebeard clan after the 'diamond-ization' of his brother King Magni.",
        imgURL: "Muradin.jpg",
        damage: "50%",
        utility: "50%",
        survivability: "90%",
        complexity: "40%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Nazeebo",
        title: "HERETIC WITCH DOCTOR",
        desc:
          "With cabalistic incantations and vestments of feather and bone, the witch doctor Nazeebo calls upon spirits from the Unformed Land to aid him. Few outlanders encounter a witch doctor in the flesh, without losing their own.",
        imgURL: "Nazeebo.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "30%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Nova",
        title: "DOMINION GHOST",
        desc:
          "November 'Nova' Terra is a ghost of the Terran Dominion and one of the most powerful psionic soldiers ever known. Nova is highly focused, determined, and extremely deadly. Even Jim Raynor wouldn't want to be caught in her crosshairs.",
        imgURL: "Nova.jpg",
        damage: "100%",
        utility: "40%",
        survivability: "20%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Raynor",
        title: "RENEGADE COMMANDER",
        desc:
          "Ex-Confederate Marshal James Raynor has stood against whatever the universe can throw at him and survived. He stands as a beacon of hope among enigmatic aliens and monsters, fighting for justice in a cold uncaring universe.",
        imgURL: "Raynor.jpg",
        damage: "90%",
        utility: "10%",
        survivability: "60%",
        complexity: "30%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Sgt. Hammer",
        title: "SIEGE TANK OPERATOR",
        desc:
          "Sergeant Bama 'the Hammer' Kowalski has served some of the toughest tours around the Koprulu sector. The roar of her siege tank's shock cannon strikes fear right into the heart of the toughest of warriors... including some of her allies.",
        imgURL: "Sgt. Hammer.jpg",
        damage: "90%",
        utility: "30%",
        survivability: "30%",
        complexity: "60%",
        type: "ranged assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "Sonya",
        title: "WANDERING BARBARIAN",
        desc:
          "From the frozen Dreadlands of the north come the mighty Barbarian warriors. After surviving the destruction of her home and death of her tribe, Sonya wanders Sanctuary in search of battle and a better life for her people.",
        imgURL: "Sonya.jpg",
        damage: "70%",
        utility: "50%",
        survivability: "60%",
        complexity: "50%",
        type: "bruiser",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Tyrael",
        title: "ARCHANGEL OF JUSTICE",
        desc:
          "Among the angels it is the Archangel of Justice Tyrael who is humanity's greatest defender. Wielding his sword El'druin against the Burning Hells, the Prime Evils would have enslaved humanity long ago if Tyrael had not intervened.",
        imgURL: "Tyrael.jpg",
        damage: "60%",
        utility: "60%",
        survivability: "80%",
        complexity: "50%",
        type: "tank",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Tyrande",
        title: "HIGH PRIESTESS OF ELUNE",
        desc:
          "Tyrande Whisperwind strikes fear into all who wish ill of the Kaldorei. As the highest ranking Sentinel and High Priestess of Elune, she is not only the night elves' most deadly warrior, but also their most cunning leader.",
        imgURL: "Tyrande.jpg",
        damage: "50%",
        utility: "70%",
        survivability: "40%",
        complexity: "70%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Uther",
        title: "THE LIGHTBRINGER",
        desc:
          "The first paladin and founder of the Order of the Silver Hand, Uther the Lightbringer is a faithful servant of the Light. Dispensing justice with the swing of his hammer, Uther is a bastion of truth and an unflinching symbol of the Alliance.",
        imgURL: "Uther.jpg",
        damage: "30%",
        utility: "90%",
        survivability: "70%",
        complexity: "20%",
        type: "healer",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Valla",
        title: "DEMON HUNTER",
        desc:
          "Valla witnessed the ferocity of hellspawn firsthand as the demons ravaged her village and left her for dead. Now, with no people to call her own, her only allegiance is to her cause: to rid Sanctuary of the demonic filth corrupting its lands.",
        imgURL: "Valla.jpg",
        damage: "90%",
        utility: "10%",
        survivability: "40%",
        complexity: "30%",
        type: "ranged assassin",
        universe: "Diablo",
        secondForm: false
      },
      {
        name: "Zeratul",
        title: "DARK PRELATE",
        desc:
          "The enigmatic dark templar Zeratul serves the xel'naga. While he expertly wields the power of the Void, it is his wisdom that earns him the respect of the Koprulu sector's leaders - despite his penchant for dramatic entrances.",
        imgURL: "Zeratul.jpg",
        damage: "80%",
        utility: "60%",
        survivability: "60%",
        complexity: "50%",
        type: "melee assassin",
        universe: "Starcraft",
        secondForm: false
      },
      {
        name: "E.T.C.",
        title: "ROCK GOD",
        desc:
          "The Power of the Horde incarnated by brutal rhythms and blistering guitar riffs into the most elite tauren chieftain to ever headbang across the surface of Azeroth. Don't bother putting on socks. He's just going to rock them off anyways.",
        imgURL: "E.T.C..jpg",
        damage: "40%",
        utility: "60%",
        survivability: "90%",
        complexity: "30%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Falstad",
        title: "WILDHAMMER THANE",
        desc:
          "Falstad is the High Thane of the Wildhammer Clan and a founding member of the Council of Three Hammers that presides over Ironforge. Despite speculation, Falstad has never been dead and anyone who claims such is a liar.",
        imgURL: "Falstad.jpg",
        damage: "80%",
        utility: "40%",
        survivability: "40%",
        complexity: "50%",
        type: "ranged assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Gazlowe",
        title: "BOSS OF RATCHET",
        desc:
          "Few would consider Gazlowe a fighter, but what he lacks in height, he makes up in mechanical know-how. Besides, you don't get to be boss of a 'boom'-town like Ratchet with just a charming personality, if you know what I mean.",
        imgURL: "Gazlowe.jpg",
        damage: "50%",
        utility: "60%",
        survivability: "50%",
        complexity: "60%",
        type: "melee assassin",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Stitches",
        title: "TERROR OF DARKSHIRE",
        desc:
          "Take care when traversing the shadowed trails of Duskwood... Ever since Abercrombie the Embalmer unleashed his vile abomination upon Darkshire, Stitches has wandered the road aimlessly, hungering for the flesh of low level Alliance players.",
        imgURL: "Stitches.jpg",
        damage: "60%",
        utility: "100%",
        survivability: "80%",
        complexity: "40%",
        type: "tank",
        universe: "Warcraft",
        secondForm: false
      },
      {
        name: "Tassador",
        title: "SAVIOR OF THE TEMPLAR",
        desc:
          "An Executor without equal, Tassadar has fought tirelessly to purify the Koprulu sector of zerg infestation. Only now, after learning to wield the power of the void, is Tassadar finally ready to face the Overmind and its all-consuming Swarm.",
        imgURL: "Tassador.jpg",
        damage: "60%",
        utility: "70%",
        survivability: "70%",
        complexity: "40%",
        type: "support",
        universe: "Starcraft",
        secondForm: false
      }
    ]
  };
  selectHeroHandler = (name, e) => {
    e.preventDefault();
    this.setState({ selectedHero: name });
  };

  selectRoleFilterHandler = filter => {
    this.setState({ selectedRoleFilter: filter });
  };

  selectUniverseFilterHandler = universe => {
    this.setState({ selectedUniverseFilter: universe });
  };
  render() {
    let Champs = [...this.state.champions];
    const filterdChamps = Champs.filter(item => {
      if (
        this.state.selectedRoleFilter !== "All" &&
        this.state.selectedUniverseFilter !== "All"
      ) {
        return (
          item.type === this.state.selectedRoleFilter &&
          item.universe === this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter === "All" &&
        this.state.selectedUniverseFilter !== "All"
      ) {
        return (
          item.type !== this.state.selectedRoleFilter &&
          item.universe === this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter !== "All" &&
        this.state.selectedUniverseFilter === "All"
      ) {
        return (
          item.type === this.state.selectedRoleFilter &&
          item.universe !== this.state.selectedUniverseFilter
        );
      } else if (
        this.state.selectedRoleFilter === "All" &&
        this.state.selectedUniverseFilter === "All"
      ) {
        return (
          item.type !== this.state.selectedRoleFilter &&
          item.universe !== this.state.selectedUniverseFilter
        );
      }
    });
    console.log(
      filterdChamps,
      this.state.selectedRoleFilter,
      this.state.selectedUniverseFilter
    );
    const heroes = filterdChamps.map(champ => {
      return (
        <li
          key={champ.name}
          onClick={e => this.selectHeroHandler(champ.name, e)}
        >
          {this.state.selectedHero === champ.name ? (
            <React.Fragment>
              <img
                src={"/images/HeroesProfile/" + champ.name + ".png"}
                style={{
                  border: "solid white 4px",
                  borderRadius: "50%",
                  boxShadow: "0 0 10px white",
                  filter: "brightness(1.2)"
                }}
              />
              <p style={{ fontWeight: "bold" }}>{champ.name}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src={"/images/HeroesProfile/" + champ.name + ".png"} />
              <p style={{ color: "white" }}>{champ.name}</p>
            </React.Fragment>
          )}
        </li>
      );
    });
    const heroCard = this.state.champions.map(card => {
      return (
        <React.Fragment key={card.title}>
          {this.state.selectedHero === card.name ? (
            <HeroCard
              name={card.name}
              title={card.title}
              desc={card.desc}
              imgURL={card.imgURL}
              damage={card.damage}
              utility={card.utility}
              survivability={card.survivability}
              complexity={card.complexity}
              type={card.type}
              universe={card.universe}
              secondForm={card.secondForm}
            />
          ) : null}
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <BlizzardNavBar />
        <div className="wrapper">
          <NavBar />
          <section className="Heroes">
            <div className="HeroesContainer">
              <div className="HeroesFilter">
                <div className="Role">
                  <p style={{ marginRight: "20px" }}>Role: </p>
                  <ul className="Roles">
                    <li
                      style={
                        this.state.selectedRoleFilter === "All"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("All")}
                    >
                      All
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "tank"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("tank")}
                    >
                      Tank
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "bruiser"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("bruiser")}
                    >
                      Bruiser
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "support"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("support")}
                    >
                      Support
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "healer"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectRoleFilterHandler("healer")}
                    >
                      Healer
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "ranged assassin"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectRoleFilterHandler("ranged assassin")
                      }
                    >
                      Ranged Assassin
                    </li>
                    <li
                      style={
                        this.state.selectedRoleFilter === "melee assassin"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectRoleFilterHandler("melee assassin")
                      }
                    >
                      Melee Assassin
                    </li>
                  </ul>
                </div>
                <div className="Role">
                  <p style={{ marginRight: "20px" }}>Universe: </p>
                  <ul className="Universe">
                    <li
                      style={
                        this.state.selectedUniverseFilter === "All"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("All")}
                    >
                      All
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Warcraft"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectUniverseFilterHandler("Warcraft")
                      }
                    >
                      Warcraft
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Starcraft"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() =>
                        this.selectUniverseFilterHandler("Starcraft")
                      }
                    >
                      Starcraft
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Diablo"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("Diablo")}
                    >
                      Diablo
                    </li>
                    <li
                      style={
                        this.state.selectedUniverseFilter === "Nexus"
                          ? { textDecoration: "underline", fontWeight: "bold" }
                          : null
                      }
                      onClick={() => this.selectUniverseFilterHandler("Nexus")}
                    >
                      Nexus
                    </li>
                  </ul>
                </div>
              </div>

              <h1 className="HeroesContainer-title">Heroes</h1>
              <ul>
                <FlipMove
                  className="HeroesList"
                  style={{}}
                  duration={200}
                  easing="linear"
                >
                  {filterdChamps.length > 0 ? (
                    heroes
                  ) : (
                    <p>There are no champions matching your filters!</p>
                  )}
                </FlipMove>
              </ul>
              {heroCard}
            </div>
          </section>
          <DownloadHeroes />
          <Social />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default ChampionShowcase;
