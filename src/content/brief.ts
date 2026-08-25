export type Section = {
  id: string;
  number: string;
  title: string;
  kicker?: string;
};

export const sections: Section[] = [
  { id: "overview", number: "01", title: "Business Overview" },
  { id: "customers", number: "02", title: "Target Customers" },
  { id: "products", number: "03", title: "Products & Services" },
  { id: "model", number: "04", title: "Business Model" },
  { id: "marketing", number: "05", title: "Marketing Strategy" },
  { id: "operations", number: "06", title: "Daily Operations" },
  { id: "ai", number: "07", title: "AI Productivity Assistant" },
  { id: "prompts", number: "08", title: "Prompt Engineering" },
  { id: "responsible", number: "09", title: "Responsible AI" },
  { id: "swot", number: "10", title: "SWOT Analysis" },
  { id: "plan", number: "11", title: "Five-Day Plan" },
  { id: "final", number: "12", title: "Final Output" },
];

export const overview = {
  name: "Third Space Coffee",
  tagline: "A neighbourhood café in Pretoria East, run with an AI back office.",
  concept:
    "A 40-seat specialty coffee shop and remote-work lounge in a mixed-use precinct in Pretoria East. Locally roasted single-origin and blend coffee, an affordable breakfast and light-meal menu, fast takeaway for commuters, and reliable Wi-Fi with power points for remote workers and students. A small AI assistant runs behind the counter — not on the menu — handling planning, ordering and marketing admin that would otherwise eat into the manager's day.",
  mission:
    "To serve excellent, honestly priced coffee in a welcoming space, while using practical AI tools so our small team spends its time on customers instead of paperwork.",
  vision:
    "To become the default weekday meeting spot in our precinct, and to show that a small South African café can run a lean, AI-supported back office without losing its human character.",
  objectives: [
    "Open with a team of 6 and a menu of no more than 30 items to keep operations simple and consistent.",
    "Reduce manager admin time (task planning, stock ordering, marketing content) using the AI assistant — target reduction to be measured in a two-week baseline vs. two-week AI-assisted comparison.",
    "Keep monthly stock waste on perishables under a target set from the first three months of actual data.",
    "Enrol a meaningful share of repeat customers into the loyalty programme within the first six months.",
    "Achieve consistent drink quality via documented recipes and weekly calibration checks.",
  ],
  usp: [
    "Coffee-shop quality with remote-work infrastructure: fast Wi-Fi, load-shedding backup power, and quiet booths.",
    "An AI-supported back office that keeps stock accurate and prices stable, so savings are passed to customers.",
    "Transparent sourcing: roaster, farm and roast date shown on the bar.",
    "A pay-it-forward coffee board supporting community members and staff of neighbouring businesses.",
  ],
  problem: [
    "Remote workers and students struggle to find affordable venues with reliable power, Wi-Fi and a place to sit for a few hours.",
    "Independent cafés lose margin to over-ordering, waste and stockouts because ordering is done from memory.",
    "Owner-managers spend hours each week on task lists, supplier orders and social media instead of trading.",
    "Customer feedback is scattered across Google reviews, WhatsApp and word of mouth, and rarely gets acted on.",
  ],
};

export const customers = {
  primary:
    "Remote workers, freelancers and postgraduate students in Pretoria East who need a productive space for two to five hours, plus weekday commuters buying takeaway coffee.",
  demographics: [
    "Age 22–45, with a secondary segment of 45+ weekday meeting customers.",
    "Mostly employed professionals, self-employed consultants, and tertiary students.",
    "Live or work within roughly a 5 km radius; multilingual (English, Afrikaans, Setswana, isiZulu).",
    "Smartphone-first, use WhatsApp and Instagram daily, pay predominantly by card or tap.",
  ],
  needs: [
    "Reliable power and internet during load-shedding.",
    "Fast service when time-pressed; no queue anxiety on the morning run.",
    "Affordable, filling food that isn't only pastries.",
    "Somewhere quiet enough for a call, and a table that isn't rushed.",
    "Consistency — the same flat white every time.",
  ],
  behaviour: [
    "Weekday mornings (07:00–09:30): high-volume takeaway, low average spend.",
    "Mid-morning to afternoon: fewer customers, longer stays, higher spend per visit (coffee plus food).",
    "Weekends: family and social visits, larger groups, later start.",
    "Repeat visits are habit-driven; loyalty rewards and staff recognising a regular's order both matter.",
  ],
  whyUs: [
    "Predictable quality and predictable prices.",
    "Infrastructure that lets them actually work.",
    "Staff who know their name and their order.",
    "Fair pricing supported by tighter stock control rather than cheaper ingredients.",
  ],
};

export const products = {
  groups: [
    {
      title: "Coffee & hot beverages",
      items: [
        "Espresso, americano, cortado, flat white, cappuccino, latte, mocha",
        "Filter / pour-over single origin (rotating)",
        "Hot chocolate, chai latte, rooibos and herbal teas",
        "Plant-milk options (oat, almond, soy)",
      ],
    },
    {
      title: "Cold beverages",
      items: [
        "Iced latte, iced americano, cold brew",
        "Iced rooibos and fruit coolers",
        "Milkshakes and coffee frappé",
        "Bottled water, still and sparkling; local craft sodas",
      ],
    },
    {
      title: "Breakfast & light meals",
      items: [
        "Breakfast wrap, scrambled eggs on sourdough, avo toast",
        "Overnight oats and yoghurt-granola cups",
        "Toasted sandwiches, chicken mayo and haloumi options",
        "Two rotating salads and a soup of the day (winter)",
      ],
    },
    {
      title: "Snacks & pastries",
      items: [
        "Croissants, cinnamon buns, muffins (baked off-site by a local partner bakery)",
        "Koeksisters and milk tart slices",
        "Banting and gluten-free options (limited daily quantity)",
        "Biscotti and rusks for takeaway coffee",
      ],
    },
    {
      title: "Takeaway & retail",
      items: [
        "Full menu available for takeaway in recyclable packaging",
        "Reusable cup discount",
        "WhatsApp pre-order for collection during peak",
        "Retail beans (250 g / 1 kg), branded cups, filter kit",
      ],
    },
    {
      title: "Loyalty & unique services",
      items: [
        "Digital loyalty card (buy 9, 10th coffee free) tied to phone number, no app download needed",
        "'Desk Pass': discounted bundled coffee + snack for a booked 3-hour work slot in the quiet room",
        "Pay-it-forward coffee board",
        "Monthly cupping / brew-at-home class (paid, small groups)",
        "Meeting corner bookable free for two hours with a minimum spend",
      ],
    },
  ],
};

export const model = {
  revenue: [
    "Beverage sales — expected to be the largest share of turnover, driven by weekday takeaway volume.",
    "Food sales — breakfast and light meals, highest during mid-morning and weekends.",
    "Retail beans and merchandise.",
    "Desk Pass bundles and paid classes.",
  ],
  pricing:
    "Mid-market pricing: below chain café pricing on filter and americano, on par for milk-based drinks, with food priced for value rather than premium. Prices are set from an ingredient-cost sheet per recipe and reviewed quarterly. All figures shown anywhere in this document are estimates and planning assumptions, not results.",
  patterns: [
    "Two clear peaks: morning takeaway and lunch; a long, low-volume afternoon that Desk Passes and study traffic are designed to fill.",
    "Average spend rises sharply when a customer sits down, so food attachment is the main lever on ticket size.",
    "Repeat customers are expected to make up the majority of weekday transactions once the loyalty programme matures.",
  ],
  additional: [
    "Corporate coffee catering for nearby offices (pre-ordered urns and boxed pastries).",
    "Subscription: monthly bean delivery for home users.",
    "Evening venue hire for small workshops and book clubs.",
    "Selling shelf space to complementary local brands (granola, honey, chocolate) on consignment.",
  ],
  profitability: [
    "Keep the menu short so stock turns quickly and waste stays low.",
    "Use the AI Inventory Assistant to flag over-ordering and slow movers, with the manager approving every order.",
    "Staff to trade rhythm — fewer staff hours in the quiet afternoon, more during peaks.",
    "Grow high-margin lines (filter coffee, retail beans, Desk Pass) rather than discounting core drinks.",
    "Track cost of sales weekly against a target percentage set in the first quarter of trading.",
  ],
};

export const marketing = {
  positioning:
    "The precinct's dependable workday café: serious coffee, honest prices, and a space that actually works. Warm and local in tone — never luxury, never gimmicky.",
  social: [
    "Instagram as the primary channel: bar-side reels, roast-date posts, staff picks, three to four posts a week plus daily stories.",
    "WhatsApp Business for the daily menu, pre-orders and loyalty updates — the highest-intent channel locally.",
    "Facebook for the older weekday meeting segment and event listings.",
    "Google Business Profile kept current: hours, load-shedding status, photos, and replies to every review.",
    "Content produced with the AI Marketing Assistant, then edited and approved by the owner before posting.",
  ],
  launch: [
    "Two-week soft launch: invite-only mornings for neighbouring businesses to calibrate speed and recipes.",
    "Launch week: free filter coffee tasting daily at 10:00; loyalty sign-up at the till.",
    "Partner drop: a discount code shared through three neighbouring businesses' staff groups.",
    "Local press and community Facebook groups; a simple opening reel series counting down the week.",
  ],
  promotions: [
    "Early Bird: discounted americano before 08:00.",
    "Afternoon Slump: coffee + pastry bundle 14:00–16:00 to fill the quiet block.",
    "Reusable-cup discount, permanent.",
    "Student weekday special with a valid student card.",
    "Refer-a-regular: both parties earn a loyalty stamp.",
  ],
  loyalty: [
    "Phone-number-based digital stamp card, no app required.",
    "Surprise rewards for high-frequency customers (a free upgrade rather than a discount).",
    "Birthday coffee.",
    "Named regulars' board for the top supporters each month, with consent.",
  ],
  partnerships: [
    "A local roaster as coffee partner with staff training included.",
    "A neighbourhood bakery supplying pastries daily.",
    "Co-working space and gym cross-vouchers.",
    "Nearby offices for catering accounts.",
    "A local artist wall, rotated quarterly.",
  ],
  retention: [
    "Recipe cards and weekly calibration so quality never drifts.",
    "Staff trained to greet regulars by name and remember standing orders.",
    "Monthly review of feedback themes using the AI Feedback Summarizer, with one visible fix communicated to customers each month.",
    "Respond to every online review within 48 hours.",
  ],
};

export const operations = {
  roles: [
    "Owner / Manager: cash-up, ordering approval, staff scheduling, marketing approval, supplier relationships.",
    "Head Barista: bar quality, calibration, training, opening shift.",
    "Barista (x2): drinks, till, customer service.",
    "Kitchen Assistant: food prep, plating, kitchen hygiene.",
    "Front-of-house / Floor: table service, clearing, dishwashing support, closing shift.",
  ],
  opening: [
    "Arrive 06:00: unlock, lights, alarm off, check backup power state.",
    "Switch on machine and grinder; 20-minute warm-up; calibrate espresso dose and yield; record on the log.",
    "Check fridge temperatures and record; check overnight deliveries against the order list.",
    "Set up pastry display, prep station, till float, card machine test.",
    "Read the AI-generated task list for the day; manager confirms priorities before service.",
  ],
  closing: [
    "Last orders and floor reset; backflush machine and clean grinder.",
    "Log waste by item; count perishables for the stock sheet.",
    "Cash-up, card reconciliation, safe drop.",
    "Kitchen deep-clean checklist; bins out; temperature log signed.",
    "Enter closing counts so tomorrow's AI task list and reorder suggestions are based on real numbers.",
  ],
  ordering: [
    "Customer queues at a single till point; order taken and repeated back.",
    "Order rung up on the POS; loyalty number captured if the customer has one.",
    "Payment (card, tap or cash); receipt offered digitally.",
    "Barista call-out by name for takeaway; table number for sit-down.",
    "WhatsApp pre-orders enter the same queue with a collection time.",
  ],
  inventory: [
    "Daily count of high-movement perishables (milk, pastries, bread, avo).",
    "Weekly full count of dry goods, beans, packaging.",
    "Waste logged at close by item and reason.",
    "AI Inventory Assistant reviews counts, sales and waste to suggest a reorder list; the manager edits and approves it.",
    "Par levels reviewed monthly against actual usage.",
  ],
  suppliers: [
    "Roaster: twice-weekly bean delivery, fixed order day.",
    "Bakery: daily early delivery, quantities confirmed the previous evening.",
    "Dairy and fresh produce: three deliveries a week.",
    "Dry goods and packaging: monthly bulk order.",
    "Every supplier has a named contact, agreed lead time and a documented substitute.",
  ],
  daily: [
    "Morning huddle (5 minutes): priorities from the AI task list, specials, staffing gaps.",
    "Shift checklists signed off on a clipboard or tablet.",
    "Manager reviews sales, waste and outstanding tasks at close.",
    "Weekly 30-minute team meeting using AI-summarised feedback and sales notes.",
  ],
  service: [
    "Greet within 10 seconds of a customer reaching the counter.",
    "Target service time under 4 minutes for a standard milk drink at peak.",
    "Any complaint resolved at the table by the shift lead: acknowledge, replace or refund, log it.",
    "All complaints and compliments logged into one feedback sheet for the monthly AI summary.",
  ],
};

export type AiFeature = {
  name: string;
  problem: string;
  solution: string;
  input: string;
  prompt: string;
  response: string;
  benefit: string;
  validation: string;
};

export const aiFeatures: AiFeature[] = [
  {
    name: "AI Daily Task Planner",
    problem:
      "The manager plans the day from memory and a scribbled list. Tasks like calibration, temperature logs, and supplier follow-ups get dropped on busy days, and nobody notices until something goes wrong.",
    solution:
      "The assistant takes yesterday's completed and outstanding tasks, today's staffing and expected trade, and produces a prioritised daily task list per role, plus a weekly view. It flags overdue items and proposes a realistic sequence around the two service peaks.",
    input:
      "Staff on shift and their hours, list of standing daily/weekly tasks, yesterday's incomplete items, expected busy periods, any special events or deliveries.",
    prompt:
      "You are the operations coordinator for Third Space Coffee, a 40-seat café in Pretoria East. Using the staffing list, the standing task list, and yesterday's outstanding items below, produce today's task plan. Group tasks by role, place them in time blocks, and keep non-essential tasks out of the 07:00–09:30 and 12:00–14:00 peaks. Mark anything overdue as URGENT with the number of days overdue. Do not invent tasks that are not in the inputs. Output a markdown table with columns: Time block | Role | Task | Priority (Urgent/High/Normal) | Est. minutes. End with a 'Needs manager decision' list of at most 3 items.",
    response:
      "Table showing 06:00–07:00 Head Barista: machine warm-up and calibration (High, 25 min); 06:15 Kitchen Assistant: prep egg mix and salad base (High, 40 min); 09:45 Barista 2: URGENT (2 days overdue) grinder deep clean (20 min); 14:00 Floor: pastry cabinet restock and waste count (Normal, 15 min). Needs manager decision: confirm bakery quantities for tomorrow; approve dairy order; decide cover for Saturday 14:00–18:00 gap.",
    benefit:
      "Replaces roughly 20–30 minutes of daily planning with a two-minute review, and makes overdue tasks visible instead of forgotten. The exact saving is to be measured against a two-week manual baseline.",
    validation:
      "The manager reviews the plan in the morning huddle before it is issued, adjusts sequencing for actual staffing, and signs off the 'Needs manager decision' items personally. Nothing in the plan is executed without that sign-off.",
  },
  {
    name: "AI Inventory Assistant",
    problem:
      "Ordering is done from memory. Over-ordering milk and pastries creates waste; under-ordering causes stockouts on the busiest mornings. Nobody has time to analyse the stock sheet.",
    solution:
      "The assistant reads current counts, recent usage, waste logs, supplier lead times and par levels, then produces a per-supplier draft order with reasoning, highlights likely waste risks and slow movers, and suggests par-level changes.",
    input:
      "Current stock counts, usage over the last 7–14 days, waste log by item, par levels, supplier lead times and minimum order quantities, expected trade for the coming days.",
    prompt:
      "You are the inventory controller for Third Space Coffee. Using the stock counts, 14-day usage, waste log, par levels and supplier lead times below, draft the reorder list for each supplier. Base every quantity only on the data provided; if data is missing or inconsistent, say so instead of estimating. For each line give: item, current stock, average daily usage, cover in days, suggested order quantity, and a one-line reason. Then list up to 5 waste risks (items with high waste relative to usage) and up to 3 suggested par-level changes. Flag any suggestion where your confidence is low. Output: one markdown table per supplier, followed by 'Waste risks' and 'Par-level suggestions' sections. Add the line: 'Draft only — requires manager approval before ordering.'",
    response:
      "Dairy table: Full cream 2L — stock 6, avg usage 11/day, cover 0.5 days, order 40 (covers 3 days to next delivery, +10% for Friday). Oat milk — stock 14, avg usage 3/day, order 0 (4.6 days cover, above par). Waste risks: gluten-free muffins (38% of units wasted over 14 days — suggest halving daily quantity); avocado (waste spikes on Mondays). Par-level suggestions: raise full cream par from 30 to 36; lower gluten-free muffin par from 12 to 6. Ends with the approval disclaimer.",
    benefit:
      "Turns a weekly ordering session into a review-and-approve step, and surfaces waste patterns that would otherwise stay invisible in the stock sheet.",
    validation:
      "The manager compares each suggested quantity against physical stock and the delivery calendar, edits quantities, and sends the order manually. Suggested par-level changes are only adopted after a month of supporting data.",
  },
  {
    name: "AI Marketing Assistant",
    problem:
      "Social media is done in stolen minutes, inconsistently. The café has good stories — roast dates, new specials, staff — but no capacity to write and schedule content.",
    solution:
      "The assistant generates a weekly content calendar and drafts posts, captions, WhatsApp broadcasts and promotional copy from real inputs (this week's specials, roast, events), adapted per channel and per audience segment.",
    input:
      "This week's specials and prices, current single origin and roast date, events, target audience for each post, brand tone rules, channel list.",
    prompt:
      "You are the social media manager for Third Space Coffee, a neighbourhood café in Pretoria East. Brand tone: warm, plain-spoken, locally rooted; no hype words ('best', 'ultimate'), no emojis beyond two per post, South African English. Using this week's specials, the current single origin and the events below, build a 7-day content calendar. For each day give: channel (Instagram / WhatsApp broadcast / Facebook), audience segment (remote workers, commuters, weekend families, students), post type, caption (max 45 words), and one image or video idea we can shoot in-store with a phone. Use only prices and facts provided; never invent a claim, statistic or award. Output a markdown table, then three alternative captions for the strongest post. Mark anything that needs a factual check with [VERIFY].",
    response:
      "Calendar row example — Tuesday, Instagram, remote workers, reel: 'The 2pm wall is real. Coffee and a cinnamon bun for R55 between 2 and 4, plus a plug point that actually works.' Image idea: slow pan over the quiet room, laptop and cup in frame. Wednesday, WhatsApp broadcast, commuters: 'New single origin on filter from today — Ethiopian, roasted Monday. R38 a cup. [VERIFY roast date]'. Followed by three alternative captions for the Tuesday reel.",
    benefit:
      "Compresses weekly content planning and writing from a few hours to a review pass, and keeps posting consistent through busy trading weeks.",
    validation:
      "The owner checks every price and factual claim (especially [VERIFY] tags), edits tone, and approves before anything is posted. No AI-written promotional claim goes live unverified, and no discount is published without the manager confirming margin.",
  },
  {
    name: "AI Customer Feedback Summarizer",
    problem:
      "Feedback sits in Google reviews, a WhatsApp number and a paper log. Nobody has time to read it all, so the same complaint recurs for months.",
    solution:
      "Monthly, the assistant clusters all feedback into themes, counts mentions per theme, separates service from product from environment issues, and proposes the three highest-impact fixes.",
    input: "Exported reviews, WhatsApp messages, and the paper complaint log for the period.",
    prompt:
      "You are a customer experience analyst for Third Space Coffee. Cluster the feedback below into themes. For each theme give: theme name, number of mentions, representative quote (verbatim, anonymised), category (service / product / environment / price), and sentiment. Do not infer causes that are not stated. Then recommend the 3 highest-impact fixes, each with the evidence it rests on and the effort involved (low/medium/high). Output: themes table, then 'Recommended fixes'. State explicitly how many feedback items you processed and any you could not classify.",
    response:
      "Themes: 'Wait time at 08:00' — 14 mentions, service, negative; 'Quiet room noise' — 9 mentions, environment, mixed; 'Portion size on breakfast wrap' — 6 mentions, product, negative. Recommended fixes: add a second till during 07:30–09:00 (evidence: 14 mentions, medium effort); noise rules signage for the quiet room (low effort); review wrap spec and cost (medium).",
    benefit:
      "Makes recurring problems visible and prioritised, so team meetings act on evidence rather than the loudest anecdote.",
    validation:
      "The manager reads the representative quotes against the source log to confirm the clustering is accurate, and discusses fixes with staff before implementing anything.",
  },
  {
    name: "AI Sales Insights Assistant",
    problem:
      "POS reports are exported and never read. Trends in slow items, quiet hours and food attachment go unnoticed.",
    solution:
      "The assistant reads weekly POS exports and produces a plain-language summary: movers and non-movers, hourly patterns, attachment rate, and questions worth investigating — framed as observations, never as forecasts.",
    input: "Weekly POS export (item, quantity, revenue, hour), previous period export, staffing hours.",
    prompt:
      "You are a retail analyst for Third Space Coffee. Compare this week's POS export with last week's. Report only what the data shows: top 5 and bottom 5 items by units, the three quietest and busiest hours, food-attachment rate on beverage transactions, and any change greater than 15% week on week. Do not forecast, do not attribute causes, and do not recommend price changes. End with up to 5 questions the manager should investigate. Output: 'What changed', 'What stayed the same', 'Questions to investigate'.",
    response:
      "What changed: filter coffee units up 22% (49 → 60); gluten-free muffins down 30%; 14:00–15:00 remains the quietest hour at 11 transactions. Attachment rate 31% vs 28%. Questions: was the filter increase linked to the new origin or to staff recommending it? Should the 14:00 bundle be promoted more heavily?",
    benefit: "Gives the manager a five-minute read of the week instead of an unopened spreadsheet.",
    validation:
      "Numbers are spot-checked against the POS report before they are used in any decision; the assistant is explicitly barred from recommending pricing.",
  },
  {
    name: "AI Staff Schedule Assistant",
    problem:
      "Building a fair weekly roster around availability, peaks and labour-hour limits takes the manager over an hour and still causes conflicts.",
    solution:
      "The assistant drafts a roster from stated availability, required cover per hour and total hour targets, and flags conflicts, understaffed peaks and anyone scheduled beyond agreed hours.",
    input: "Staff availability, contracted hours, required cover per time block, leave requests, expected trade.",
    prompt:
      "You are a scheduling assistant for Third Space Coffee. Draft next week's roster using only the availability, contracted hours and required cover below. Never schedule anyone outside their stated availability or beyond their contracted hours. Ensure at least two staff on bar during 07:00–09:30 and 12:00–14:00. Output a day-by-hour table plus a 'Conflicts and gaps' list. If the requirements cannot be met with the available staff, state exactly which blocks are short instead of filling them. Add: 'Draft roster — requires manager approval and staff confirmation.'",
    response:
      "Roster table for Mon–Sun with names per block; Conflicts and gaps: Saturday 14:00–18:00 short by one floor staff member; Thabo would exceed contracted hours if given the Friday close — not scheduled.",
    benefit: "Cuts roster building to a review task and prevents accidental overtime and uncovered peaks.",
    validation:
      "The manager checks the draft against leave requests and labour agreements, then confirms with each staff member before publishing. The AI never publishes a roster.",
  },
  {
    name: "AI Customer Service Chatbot",
    problem:
      "The same questions arrive all day on WhatsApp and Instagram — hours, Wi-Fi, parking, load-shedding, whether there's space — pulling staff off the floor.",
    solution:
      "A scoped chatbot answers only from an approved information sheet (hours, menu, prices, facilities, policies) and hands over to a human for anything else, including complaints and bookings.",
    input: "Approved FAQ and menu sheet, current trading hours, load-shedding schedule, booking policy.",
    prompt:
      "You are the customer assistant for Third Space Coffee. Answer only using the approved information sheet provided. If the answer is not in the sheet, reply: 'Let me get a team member to help with that' and stop. Never quote a price, promise availability, accept a booking, or respond to a complaint yourself. Keep replies under 40 words, friendly and in the customer's language where you can. Never ask for or store personal information beyond a first name.",
    response:
      "'We're open 06:30–17:00 on weekdays and 07:30–15:00 on Saturdays. Wi-Fi is free and we stay on during load-shedding. Free street parking outside.' For a complaint: 'Let me get a team member to help with that.'",
    benefit:
      "Removes routine enquiry handling from staff during service while keeping every judgement call with a human.",
    validation:
      "The information sheet is owner-approved and version-dated; escalated conversations are answered by staff; a weekly sample of chat logs is reviewed for wrong or out-of-scope answers.",
  },
];

export type PromptSpec = {
  title: string;
  feature: string;
  role: string;
  context: string;
  task: string;
  instructions: string[];
  constraints: string[];
  format: string;
  why: string;
  improve: string;
};

export const prompts: PromptSpec[] = [
  {
    title: "Prompt 1 — Daily operations plan",
    feature: "AI Daily Task Planner",
    role: "Operations coordinator for a 40-seat independent café with six staff.",
    context:
      "Third Space Coffee, Pretoria East. Two service peaks (07:00–09:30, 12:00–14:00). Inputs supplied: staffing list with hours, standing daily and weekly task list, yesterday's outstanding items, today's deliveries and events.",
    task: "Produce today's prioritised task plan, grouped by role and placed into time blocks.",
    instructions: [
      "Use only tasks present in the supplied standing list or the outstanding items.",
      "Keep non-essential tasks out of both peak windows.",
      "Label overdue tasks URGENT and state days overdue.",
      "Estimate minutes per task and keep each role's total within their shift hours.",
      "Finish with a maximum of three items that need a manager decision.",
    ],
    constraints: [
      "Do not invent tasks, staff or deliveries.",
      "Do not assign anyone beyond their listed shift.",
      "If inputs conflict, say so rather than resolving it silently.",
    ],
    format:
      "Markdown table: Time block | Role | Task | Priority | Est. minutes. Then a 'Needs manager decision' bullet list.",
    why: "It fixes the role, the operating context and the exact inputs, forbids invention, and specifies a machine-checkable output shape — so the result can be pasted straight into the morning huddle.",
    improve:
      "After testing, add a worked example of one correct table row (few-shot) and a rule for what to do when a role is absent, because early tests over-loaded the Head Barista on short-staffed days.",
  },
  {
    title: "Prompt 2 — Supplier reorder draft",
    feature: "AI Inventory Assistant",
    role: "Inventory controller for a small café with tight cash flow and short-shelf-life stock.",
    context:
      "Supplied: current stock counts, 14-day usage per item, waste log, par levels, supplier lead times and minimum order quantities, expected trade for the next four days.",
    task: "Draft a per-supplier reorder list with reasoning, plus waste risks and par-level suggestions.",
    instructions: [
      "Compute average daily usage and days of cover for every item.",
      "Only order items whose cover is below the next delivery window.",
      "Respect minimum order quantities and round to supplier units.",
      "List up to five waste risks using waste as a share of usage.",
      "Flag low-confidence suggestions explicitly.",
    ],
    constraints: [
      "Never estimate a missing number — name the gap instead.",
      "No pricing or supplier-switching advice.",
      "Every output must carry the line: 'Draft only — requires manager approval before ordering.'",
    ],
    format:
      "One markdown table per supplier (item, stock, avg daily usage, days cover, suggested qty, reason), then 'Waste risks' and 'Par-level suggestions'.",
    why: "It forces the model to show its arithmetic per line, so a human can verify a quantity in seconds, and the mandatory disclaimer keeps the output a draft rather than an instruction.",
    improve:
      "Add day-of-week weighting for perishables and a rule to treat any item with fewer than seven days of history as insufficient data — early tests over-ordered milk before public holidays.",
  },
  {
    title: "Prompt 3 — Weekly marketing calendar",
    feature: "AI Marketing Assistant",
    role: "Social media manager for a neighbourhood café, writing in South African English.",
    context:
      "Third Space Coffee. Audiences: remote workers, commuters, weekend families, students. Channels: Instagram, WhatsApp Business broadcast, Facebook. Supplied: this week's specials with prices, current single origin and roast date, events.",
    task: "Build a 7-day content calendar with a caption and a phone-shootable visual idea per post.",
    instructions: [
      "Match each post to one audience segment and one channel.",
      "Cap captions at 45 words.",
      "Use only the prices and facts supplied.",
      "Provide three alternative captions for the strongest post.",
      "Tag anything needing a factual check with [VERIFY].",
    ],
    constraints: [
      "Tone: warm, plain-spoken, local. No hype words, maximum two emojis per post.",
      "No invented statistics, awards, health claims or customer testimonials.",
      "No discount not present in the supplied specials.",
    ],
    format: "Markdown table: Day | Channel | Audience | Post type | Caption | Visual idea. Then 'Alternative captions'.",
    why: "Tone rules and a hard word limit make the output publishable with light editing, while [VERIFY] tagging builds the human fact-check into the artefact itself.",
    improve:
      "Add two approved past captions as style examples and a banned-words list, since early tests drifted into generic advertising language.",
  },
  {
    title: "Prompt 4 — Monthly feedback synthesis",
    feature: "AI Customer Feedback Summarizer",
    role: "Customer experience analyst reporting to an owner-manager.",
    context:
      "Supplied: one month of Google reviews, WhatsApp messages and paper complaint-log entries, mixed languages, some duplicates.",
    task: "Cluster the feedback into themes and recommend the three highest-impact fixes.",
    instructions: [
      "Report the number of items processed and any that could not be classified.",
      "Give each theme a mention count, category, sentiment and one verbatim anonymised quote.",
      "De-duplicate repeated submissions from the same source.",
      "Tie each recommended fix to the evidence supporting it and rate effort low/medium/high.",
    ],
    constraints: [
      "Remove names, phone numbers and any personal identifiers from quotes.",
      "Do not infer causes that are not stated in the feedback.",
      "Do not rank staff members or attribute complaints to individuals.",
    ],
    format: "Themes table, then 'Recommended fixes', then 'Processing notes' with counts.",
    why: "Requiring counts, verbatim quotes and processing notes makes the summary auditable against the source data, and the anonymisation and no-staff-ranking constraints handle the privacy and bias risks directly.",
    improve:
      "Add a fixed theme taxonomy after the first two months so month-on-month comparison is possible, and a minimum mention threshold before something becomes a recommended fix.",
  },
  {
    title: "Prompt 5 — Weekly sales read-out",
    feature: "AI Sales Insights Assistant",
    role: "Retail analyst producing a five-minute weekly read for a café manager.",
    context: "Supplied: this week's and last week's POS exports (item, quantity, revenue, hour) and staffing hours.",
    task: "Report what changed week on week and list questions worth investigating.",
    instructions: [
      "Report top and bottom five items by units, busiest and quietest hours, and food-attachment rate.",
      "Highlight only changes greater than 15%.",
      "Quote actual figures for every claim.",
      "End with up to five investigation questions for the manager.",
    ],
    constraints: [
      "No forecasting, no causal claims, no pricing recommendations.",
      "Do not blend the two weeks into a single average.",
      "State it clearly if a week is incomplete.",
    ],
    format: "Three sections: 'What changed', 'What stayed the same', 'Questions to investigate'.",
    why: "Banning causation and forecasting keeps the model inside what the data supports, and the questions section hands interpretation back to the human where it belongs.",
    improve:
      "Add public-holiday and weather context fields, and a rule to compare like-for-like trading days, since early tests flagged a short week as a decline.",
  },
  {
    title: "Prompt 6 — Scoped customer chatbot",
    feature: "AI Customer Service Chatbot",
    role: "Front-of-house customer assistant on WhatsApp and Instagram DMs.",
    context: "An owner-approved, version-dated information sheet: hours, menu, prices, facilities, parking, policies.",
    task: "Answer routine customer enquiries and escalate everything else to a human.",
    instructions: [
      "Answer strictly from the approved sheet.",
      "Reply in the customer's language where possible.",
      "Keep replies under 40 words.",
      "Escalate with a fixed phrase when the answer is not in the sheet.",
    ],
    constraints: [
      "Never accept a booking, promise availability, quote an unlisted price, or handle a complaint.",
      "Never request or store personal information beyond a first name.",
      "Never claim to be a human staff member.",
    ],
    format: "Plain conversational reply, one paragraph, optionally one follow-up question.",
    why: "A closed knowledge source plus a fixed escalation phrase keeps hallucination risk low and makes failure safe: the worst case is a handover to a person.",
    improve:
      "Log every escalation and feed recurring questions back into the sheet monthly; add a confidence check that escalates when the enquiry mentions a complaint, allergy or refund.",
  },
];

export const responsible = [
  {
    risk: "Incorrect AI recommendations",
    detail:
      "The assistant may produce a confident task list, order or summary that is simply wrong, especially with thin or messy input data.",
    safeguard:
      "Every AI output is a draft. Prompts require the model to show the figures behind each recommendation and to name missing data instead of estimating. The manager verifies against the source sheet before acting, and each output carries a visible 'draft — requires approval' line.",
  },
  {
    risk: "Customer privacy",
    detail:
      "Feedback, reviews and loyalty data may contain names, phone numbers and other personal details that should not be pasted into an AI tool.",
    safeguard:
      "Personal identifiers are stripped before feedback goes to the assistant; loyalty data is never used in prompts. The chatbot is barred from collecting anything beyond a first name. Customers are told plainly that AI helps with admin and content, and a POPIA-aligned privacy note is displayed at the till and online.",
  },
  {
    risk: "Bias",
    detail:
      "AI could produce marketing copy that speaks to only one demographic, or scheduling and feedback outputs that disadvantage particular staff members.",
    safeguard:
      "Marketing prompts require content across four defined audience segments and plain South African English. Feedback prompts forbid ranking or naming staff. Rosters are drafted only from stated availability and contracted hours, and the manager reviews each roster for fairness before publishing.",
  },
  {
    risk: "Incorrect inventory or financial recommendations",
    detail: "An over- or under-stated order quantity costs real money, and bad pricing advice can erode margin.",
    safeguard:
      "The assistant is explicitly barred from pricing decisions and from placing orders. Inventory suggestions show stock, usage and days of cover per line so they can be checked in seconds; the manager edits quantities and sends every order manually. Par-level changes need a month of supporting data.",
  },
  {
    risk: "Over-reliance on AI",
    detail: "Staff may stop counting stock or thinking about the day because 'the system said so'.",
    safeguard:
      "Manual counts, calibration logs and temperature logs remain mandatory and are the assistant's only inputs — if the counts stop, the tool visibly stops working. Staff are trained to run a full day without AI, and one week each quarter is run manually as a check.",
  },
  {
    risk: "AI limitations and disclaimers",
    detail:
      "The assistant has no live view of the till, the fridge or the roster, and it can be out of date or plainly mistaken.",
    safeguard:
      "Every screen states that outputs are AI-generated suggestions based on manually entered data, may contain errors, and are not financial advice. Version-dated source sheets back the chatbot and the FAQ.",
  },
];

export const humanRule =
  "Human-in-the-loop rule: no AI output is acted on until a named person approves it. Supplier orders, prices, rosters, promotions, public posts and any customer-facing communication require the owner-manager's explicit approval, recorded with a date and their initials. The AI drafts; a human decides.";

export const swot = {
  strengths: [
    "Short, well-costed menu that is easy to execute consistently.",
    "Remote-work infrastructure (backup power, Wi-Fi, quiet room) that most local cafés lack.",
    "AI-supported back office reducing admin load and stock waste for a small team.",
    "Local roaster and bakery partnerships keeping quality high and logistics simple.",
    "Owner on site, with clear approval control over every AI-assisted decision.",
  ],
  weaknesses: [
    "Small team means low resilience to absence during peaks.",
    "AI usefulness depends entirely on staff entering counts and logs accurately.",
    "Limited marketing budget at launch.",
    "Single location — no buying power with suppliers.",
    "Long, low-revenue afternoon block to fill.",
  ],
  opportunities: [
    "Corporate catering accounts with nearby offices.",
    "Growth in remote and hybrid work driving demand for paid workspace-style visits.",
    "Retail bean and subscription sales at higher margin.",
    "Evening venue hire and paid brew classes.",
    "Packaging the AI assistant workflow as a template for other small independents.",
  ],
  threats: [
    "Chain café or franchise opening nearby with deeper pockets.",
    "Input cost volatility on coffee, dairy and electricity.",
    "Load-shedding raising running costs beyond the backup budget.",
    "Pressure on discretionary consumer spending.",
    "Reputational risk if an unchecked AI-generated post or order goes out wrong.",
  ],
};

export const plan = [
  {
    day: "Day 1",
    title: "Research & Planning",
    items: [
      "Define the use case: back-office productivity for an independent café, not a customer-facing gimmick.",
      "Identify users: owner-manager (primary), head barista and shift leads (secondary), customers (chatbot only).",
      "Select the AI feature set and cut anything that cannot be demonstrated in five days.",
      "Map the user journey: opening shift → task list → service → stock count and waste log → close → weekly review.",
      "Collect realistic sample data (stock sheet, task list, POS-style export, feedback set) for prompt testing.",
    ],
  },
  {
    day: "Day 2",
    title: "Development Phase 1",
    items: [
      "Select tools: a hosted LLM via a single gateway, with all prompts kept server-side.",
      "Write the first version of the five core prompts with role, context, task, instructions, constraints and output format.",
      "Design the interface: one dashboard with a card per assistant, an input panel and an output panel.",
      "Define the output contracts (tables, sections) so responses can be rendered predictably.",
    ],
  },
  {
    day: "Day 3",
    title: "Development Phase 2",
    items: [
      "Wire the prompts to the interface and render AI responses as formatted output.",
      "Build the main workflows: daily plan, reorder draft, weekly marketing calendar.",
      "Add copy-to-clipboard and 'save as draft' so outputs move into real use.",
      "Test each feature against the sample data and record failures with the input that caused them.",
    ],
  },
  {
    day: "Day 4",
    title: "Optimisation & Responsible AI",
    items: [
      "Revise prompts based on the failure log: add examples, tighten constraints, ban invention.",
      "Test accuracy: re-run each feature on the same inputs and check arithmetic and factual claims by hand.",
      "Improve UX: loading states, clear errors, editable inputs, obvious output ownership.",
      "Add safeguards: draft disclaimers on every output, an explicit approval step, identifier stripping before feedback analysis, and chatbot scope limits.",
    ],
  },
  {
    day: "Day 5",
    title: "Finalisation & Presentation",
    items: [
      "End-to-end test of the full solution on a realistic day of data.",
      "Prepare the demo script: one manager's morning, from task list to approved supplier order to a scheduled post.",
      "Document the prompt strategy, including before-and-after versions of two prompts.",
      "Build the presentation around problem, solution, features, prompts, productivity gain, responsible AI and impact.",
    ],
  },
];

export const finalOutput = {
  problem:
    "Independent café owner-managers lose hours every week to task planning, stock ordering, marketing content and unread feedback — admin that directly costs them trading time, cash through waste and stockouts, and customer goodwill.",
  solution:
    "Third Space Coffee runs a prompt-engineered AI back-office assistant that drafts the daily task plan, the supplier reorder list, the weekly marketing calendar, the monthly feedback summary, the weekly sales read-out and the staff roster — with a mandatory human approval step on every output.",
  users: [
    "Owner-manager — primary user, approves everything.",
    "Head barista and shift leads — receive and execute task plans.",
    "Kitchen and floor staff — provide the counts and logs the assistant runs on.",
    "Customers — interact only with the scoped FAQ chatbot.",
  ],
  features: [
    "AI Daily Task Planner",
    "AI Inventory Assistant",
    "AI Marketing Assistant",
    "AI Customer Feedback Summarizer",
    "AI Sales Insights Assistant",
    "AI Staff Schedule Assistant",
    "AI Customer Service Chatbot",
  ],
  keyPrompts: [
    "Daily operations plan — role, peaks, no invented tasks, table output, manager-decision list.",
    "Supplier reorder draft — per-line arithmetic shown, no estimating missing data, mandatory approval disclaimer.",
    "Weekly marketing calendar — audience per post, tone rules, [VERIFY] tagging, no invented claims.",
    "Monthly feedback synthesis — anonymised verbatim quotes, mention counts, no staff ranking.",
    "Weekly sales read-out — figures only, no forecasting or causal claims, ends in questions.",
    "Scoped customer chatbot — closed knowledge source, fixed escalation phrase, no bookings or complaints.",
  ],
  productivity: [
    "Planning, ordering and content admin move from doing to reviewing.",
    "Overdue tasks and waste patterns become visible instead of forgotten.",
    "Consistent marketing output through busy trading weeks.",
    "Feedback and sales data actually get read, monthly and weekly.",
    "All time savings to be measured against a two-week manual baseline before and after — no gains are claimed in advance.",
  ],
  responsible: [
    "Every output is a draft; a named human approves before action.",
    "Personal identifiers stripped before any feedback analysis; POPIA-aligned privacy notice.",
    "AI barred from pricing, ordering, publishing and complaint handling.",
    "Manual counts and logs stay mandatory to prevent over-reliance.",
    "Visible disclaimers on limitations and possible errors.",
  ],
  impact: [
    "Manager time returned to the floor and to customers.",
    "Lower perishable waste and fewer peak-hour stockouts.",
    "More consistent brand presence and faster response to feedback.",
    "Better-informed weekly decisions from data that was previously unread.",
    "A repeatable, low-cost model other small independents could adopt.",
  ],
  demo: [
    "A single-screen manager dashboard with three live features (Task Planner, Inventory Assistant, Marketing Assistant), each with an editable input panel, a generated draft, and an explicit Approve / Edit / Reject control that records who approved it.",
    "Pre-loaded realistic sample data so the demo runs the same way every time.",
    "A visible prompt viewer per feature, showing the engineered prompt behind the output.",
    "A disclaimer banner and an approval log to demonstrate the responsible-AI story on screen.",
  ],
};
