/* Vintage Reselling: findings from the source reviews of 19/11/2026
   (Consumer Rights Act 2015 cra-2015, Consumer Contracts Regulations 2013 ccr-2013,
   HMRC badges of trade bim-badges, Defra ivory guidance ivory-gov, Furniture Fire Regulations ffr-1988).
   Findings are taught inside the topic lessons.
   node courses/vintage-reselling/build/source_review_2026-11-19.js */
const P = require("../../../_template/course_patch.js");
const C = "vintage-reselling";
const p = x => ({ t: "p", x });
const check = (q, o, a, w, kind) => Object.assign({ t: "check", q, o, a, w }, kind ? { kind } : {});
function setP(m, lid, needle, x) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== "p") throw new Error("not a paragraph: " + needle);
  L.blocks[i].x = x;
}
function setW(m, lid, needle, w) {
  const { L, i } = P.find(m, lid, needle);
  if (L.blocks[i].t !== "check") throw new Error("not a check: " + needle);
  L.blocks[i].w = w;
}

/* ---------- Module 1: trader status ---------- */
let m = P.load(C, "vintage-reselling-1");
setP(m, "l2", "HMRC's manual lists badges of trade",
  "HMRC's Business Income Manual lists nine badges of trade: a profit-seeking motive, the number of transactions, the nature of the asset, similar trading interests, changes made to the asset, the way it was sold, how it was financed, the time between buying and selling, and how it was acquired. No single badge decides it; the courts look at the overall impression. {{bim-summary}}");
setP(m, "l2", "A summary by accountants gives them",
  "Repetition matters most for a reseller. One purchase and sale does not usually make a trader, but systematic repetition does: ten deals a year look more like trading than two, and a run of related deals at short intervals looks like habitual activity. {{bim-repeat}}");
P.insertAfter(m, "l2", "Repetition matters most for a reseller", [
  p("Vintage has a special wrinkle. Antiques, paintings and works of art are often bought for the pleasure of owning them, so a hope that they will rise in value does not by itself make a sale a trade. {{bim-pride}} But HMRC's manual notes that a one-off purchase of silver cutlery by a general dealer is far more likely to be trade than the same purchase by a retired colonel. {{bim-connect}}"),
  p("Work you do points the same way. Repairing or adapting an item to make it more saleable is typical of trading. {{bim-modify}} So is splitting a large lot into smaller ones. {{bim-lots}} Ordinary maintenance that any owner would do, such as fixing a fault, carries little weight. {{bim-upkeep}} An organised sales effort, such as advertising, also points to trade. {{bim-sales}}"),
  p("Inherited or gifted items are less likely to be trade, but if you later set out to sell them as a venture, with work done on them or a selling operation, a trade can start part-way through. {{bim-acquire}}")
]);
P.insertAfter(m, "l2", "Inherited or gifted items are less likely to be trade", [
  check("Jo inherits a house of furniture, has the chairs re-upholstered, splits the china into single lots and lists them weekly online. Which badges of trade does this add to the picture?",
    ["None, because inherited items can never become trading stock",
     "Changes to the asset and the way the sale was carried out",
     "Only the method of finance, since no money was borrowed",
     "The nature of the asset alone, which settles it as investment",
     "Only the time between buying and selling, which is zero"],
    1, "Re-upholstering and splitting lots are changes to make the items saleable, and regular organised listing is a trading way of selling; inheritance makes trade less likely but a supervening trade can begin. {{bim-modify}}", "application")
]);
setP(m, "l2", "Buying twenty pairs of trainers to flip",
  "A plain illustration (our example): buying twenty pairs of trainers to flip is trading, while selling twenty pairs of your own old trainers is a clear-out.");
P.save(m);

/* ---------- Module 4: ivory, furniture, buyer duties ---------- */
m = P.load(C, "vintage-reselling-4");
setP(m, "l1", "Dealing without an exemption is a criminal offence",
  "Dealing without an exemption, or making it possible for someone else to, is an offence; Defra's guidance gives the maximum as a fine of £250,000 or up to 5 years' imprisonment. {{ivory-dealing}}");
P.insertAfter(m, "l1", "The pre-1918 exemption is narrow", [
  p("The standard exemptions are the ones a reseller meets: a musical instrument made before 1975 with less than 20% ivory by volume; an item made before 3 March 1947 with less than 10% ivory by volume where all the ivory is integral; a portrait miniature made before 1918 no larger than 320 square centimetres; or a sale to a qualifying museum. Registration costs £20. A certificate for a rare pre-1918 piece costs £250, takes about 3 months, and you cannot sell until it arrives. {{ivory-exempt}}"),
  p("Two traps for a reseller. A buyer must check an item is registered or certified before taking ownership. {{ivory-when}} And an item registered by a previous owner must be registered again before you sell it, because a registration does not carry over. {{ivory-exempt}}"),
  p("Registration needs evidence of age, such as a dated receipt or catalogue, a date mark, or written verification by an antiques specialist, and of how much ivory there is: by eye when it is clearly small, such as a keyhole escutcheon on a large chest, or by measurement. {{ivory-evidence}} This is the dating-from-evidence method from Module 3 with legal consequences.")
]);
P.insertAfter(m, "l1", "Registration needs evidence of age", [
  check("You bought a 1920s walnut writing box with a small ivory keyhole escutcheon. It was registered by the last owner. What must happen before you list it?",
    ["Nothing, because the last owner's registration covers the item for life",
     "Register it again under the pre-1947 under-10% exemption",
     "Apply for a £250 exemption certificate, which every item needs",
     "List it as 'bone' so the ivory rules do not apply to it",
     "Remove the escutcheon and sell it as a separate small item"],
    1, "A registration is no longer valid once the item is sold, so a reseller re-registers it; a small integral escutcheon on a pre-1947 item fits the under-10% standard exemption. {{ivory-exempt}}", "application")
]);
setP(m, "l2", "The regulations were amended in October 2025",
  "The current text of the regulations, revised to 30/10/2025, defines furniture as items for private use in a home or caravan, including beds, headboards, sofa-beds, cushions, mattresses and pillows. It now excludes bedding, floor coverings and a list of baby and child products such as cots, Moses baskets, prams, highchairs and car seats, which fall under general product safety law instead. {{ffr-regs}}");
P.insertAfter(m, "l2", "The current text of the regulations, revised to 30/10/2025", [
  p("Second-hand furniture must pass the same cigarette, filling and match tests as new, and 'supply' includes offering or displaying for sale, so a listing alone can be an offence. {{ffr-regs}}"),
  p("The permanent label you are looking for is durable, securely attached and starts with the words 'CARELESSNESS CAUSES FIRE', followed by details such as the first UK supplier, batch number, date and materials. Each piece of a suite should carry one. {{ffr-labels}}")
]);
setP(m, "l3", "For second-hand goods, a reasonable buyer expects less",
  "Quality is judged by what a reasonable person would consider satisfactory, taking account of the description, the price and the other circumstances; it includes appearance and finish, freedom from minor defects, safety and durability. A defect you specifically drew to the buyer's attention before the sale is not covered by the quality term. {{cra-goods-a}} That is why a full flaw list protects you as well as the buyer.");
P.insertAfter(m, "l3", "Quality is judged by what a reasonable person would consider satisfactory", [
  p("The listing is part of the contract: the description and other required information you give become terms, and cannot be changed later unless the buyer expressly agrees. You must also have the right to sell the item. {{cra-goods-a}} No term can exclude these duties, so 'sold as seen' wording does not work against a consumer. {{cra-goods-b}}"),
  p("One exception matters to vintage: second-hand goods sold at a public auction that people can attend in person fall outside most of these duties. {{cra-goods-a}}")
]);
setP(m, "l3", "You must tell them about this right",
  "You must tell them about this right before the sale. If you do not, the period runs on until 12 months after the normal 14 days would have ended, or until 14 days after you finally give the information, if that comes first. {{ccr-regs}}");
setP(m, "l3", "The guidance lists exceptions to the distance-selling rules",
  "The exceptions are narrow: goods made to the buyer's specification or clearly personalised, goods that perish quickly, sealed hygiene goods once unsealed, and sales at public auction. There is no exception for second-hand or vintage goods. {{ccr-regs}}");
P.insertAfter(m, "l3", "The exceptions are narrow", [
  p("Before a distance sale you must give the item's main characteristics, your trading name and geographical address, the total price including delivery, delivery arrangements, the cancellation conditions with a model form, and who pays return postage. If there is a dispute, it is for you to prove you did. {{ccr-regs}}")
]);
setW(m, "l3", "has not been told about cancellation",
  "If the trader did not give the cancellation information, the period ends 12 months after the normal 14-day period would have ended. {{ccr-regs}}");
P.save(m);

/* ---------- Module 6: shipping, returns ---------- */
m = P.load(C, "vintage-reselling-6");
setP(m, "l1", "For sales to consumers, the Consumer Rights Act has a section on when risk",
  "For sales to consumers, the goods stay at your risk until the buyer, or someone they name, physically has them, unless the buyer chose a carrier you did not offer. You must also deliver within 30 days unless you agreed another time. {{cra-goods-b}} So a breakage in the post is your loss, which is the real reason to pack well and insure.");
setP(m, "l2", "For a consumer who cancels a distance sale in time",
  "For a consumer who cancels a distance sale in time, the 14-day right applies. You must refund the price plus the cheapest standard delivery within 14 days of getting the item back, or of proof it was sent, by the same payment method and without a fee. The buyer pays return postage only if you told them so before the sale. You may deduct for loss of value only if they handled it more than a shop would allow. {{ccr-regs}}");
setP(m, "l2", "If the item was not as described, the Consumer Rights Act",
  "If the item was faulty or not as described, the buyer has a short-term right to reject within 30 days of delivery, with a full refund within 14 days and your paying reasonable return costs. A fault that appears within six months of delivery is presumed to have been there at delivery unless you show otherwise. {{cra-goods-a}} After that comes one repair or replacement at your cost, then a price reduction or final rejection. {{cra-goods-b}}");
P.insertAfter(m, "l2", "If the item was faulty or not as described", [
  check("A buyer bought a vintage lamp from your shop. Four months later the switch fails, and your listing said nothing about the switch. What applies?",
    ["Nothing, because the 14-day cancellation period has ended",
     "The fault is presumed present at delivery unless you can show otherwise",
     "The buyer must prove the fault existed on the day it was delivered",
     "Second-hand items carry no rights once 30 days have passed",
     "You can refuse, since your policy says 'no returns after 14 days'"],
    1, "Within six months of delivery a lack of conformity is presumed to have existed at delivery, and a 'no returns' term cannot exclude the quality duties. {{cra-goods-a}}", "application")
]);
P.save(m);
console.log("done");
