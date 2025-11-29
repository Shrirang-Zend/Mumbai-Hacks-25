// Normalized truthStatus:
//  - "verified"   -> status === "True" or "Resolved"
//  - "unverified" -> status === "Unverified"
//  - "rumour"     -> status === "Rumour"

export const communityPosts = [
  {
    id: 1,
    author: 'City Disaster Management',
    handle: '@CityDMO',
    avatar: 'CD',
    time: 'Today · 4:42 PM',
    text:
      'No confirmed reports of explosions near Central Station. Police and fire teams are on site and monitoring.',
    summary:
      'Visual evidence confirms a significant smoke plume near the canyon; emergency services are already notified and responding.',
    truthStatus: 'verified',
  },
  {
    id: 2,
    author: 'Aviation Watch',
    handle: '@AeroMonitor',
    avatar: 'AW',
    time: 'Yesterday · 1:30 PM',
    text:
      'Airbus issues precautionary notice for some A320 Family jets after finding intense solar radiation can affect flight control data.',
    summary:
      'Manufacturer bulletin confirms a temporary grounding and software checks; regulators treating this as a verified safety action.',
    truthStatus: 'verified',
  },
  {
    id: 3,
    author: 'Global Alerts',
    handle: '@CrisisWire',
    avatar: 'GA',
    time: '2 days ago · 2:00 PM',
    text:
      'Flash floods and a magnitude 6.6 offshore quake hit North Sumatra on the same day, overwhelming first responders.',
    summary:
      'Disaster agencies confirm dozens of fatalities and significant damage; the dual‑event narrative is accurate.',
    truthStatus: 'verified',
  },
  {
    id: 4,
    author: 'Thai News Desk',
    handle: '@ThaiUpdate',
    avatar: 'TD',
    time: '3 days ago · 9:15 AM',
    text:
      'Record rainfall in Hat Yai has snapped power lines and phone service, with helicopters evacuating critical patients.',
    summary:
      'Local authorities confirm severe flooding but report that restoration work is underway and evacuations are ongoing.',
    truthStatus: 'verified',
  },
  {
    id: 5,
    author: 'Cyclone Tracker',
    handle: '@StormWatch_IN',
    avatar: 'CT',
    time: 'Yesterday · 5:30 PM',
    text:
      'Cyclone Ditwah is on track for landfall near the Andhra Pradesh coast by November 30, bringing heavy rain and strong winds.',
    summary:
      'Meteorological agencies agree on the storm path and have issued formal heavy rainfall and coastal impact warnings.',
    truthStatus: 'verified',
  },
  {
    id: 6,
    author: 'Election Rumor Mill',
    handle: '@VoteLeaks2026',
    avatar: 'ER',
    time: 'Yesterday · 10:00 AM',
    text:
      'Posts claim early voting machines were hacked in the 2026 primaries and results are being “pre‑loaded”.',
    summary:
      'Election officials and independent monitors state there is no evidence of tampering; these claims repeat previously debunked narratives.',
    truthStatus: 'rumour',
  },
  {
    id: 7,
    author: 'Conflict Monitor',
    handle: '@HornOfAfricaWatch',
    avatar: 'CM',
    time: '4 days ago · 8:00 AM',
    text:
      'Renewed clashes in Khartoum between SAF and RSF are shattering fragile ceasefires and worsening the humanitarian crisis.',
    summary:
      'Multiple humanitarian agencies confirm intensified fighting and large‑scale displacement in and around the capital.',
    truthStatus: 'verified',
  },
  {
    id: 8,
    author: 'Ukraine Grid Watch',
    handle: '@EnergyFrontline',
    avatar: 'UG',
    time: '2 days ago · 3:45 AM',
    text:
      'Another wave of drones targeted power infrastructure around Kyiv overnight, causing rolling blackouts across several regions.',
    summary:
      'Regional authorities report confirmed strikes on energy sites, with controlled outages scheduled while repairs proceed.',
    truthStatus: 'verified',
  },
  {
    id: 9,
    author: 'Dhaka Street Voices',
    handle: '@DhakaGround',
    avatar: 'DS',
    time: 'Yesterday · 3:20 PM',
    text:
      'Crowds are forming near the university district to demand rapid implementation of the “July Charter” election reforms.',
    summary:
      'Local media confirm demonstrations but note inconsistent crowd estimates; protester demands match earlier reform petitions.',
    truthStatus: 'unverified',
  },
  {
    id: 10,
    author: 'Crisis Fact‑Check',
    handle: '@MetropolisVerify',
    avatar: 'CF',
    time: 'Today · 11:00 AM',
    text:
      'A hyper‑realistic video shows the Golden Gate Bridge collapsing into the bay and cars plunging into the water.',
    summary:
      'Officials and live traffic cameras confirm the bridge is intact and open; the clip is AI‑generated misinfo.',
    truthStatus: 'rumour',
  },
  {
    id: 11,
    author: 'DRC Humanitarian Watch',
    handle: '@CongoRelief',
    avatar: 'DR',
    time: '9 days ago · 12:00 PM',
    text:
      'Displacement in North Kivu has hit 7 million people as conflict continues to uproot families.',
    summary:
      'UN‑aligned agencies verify that internally displaced person counts have reached record highs, overwhelming camps.',
    truthStatus: 'verified',
  },
  {
    id: 12,
    author: 'London Water Updates',
    handle: '@EastEndFlow',
    avatar: 'LW',
    time: 'Today · 8:30 AM',
    text:
      'Residents in East London report chemical‑tasting tap water and share warnings not to drink from the mains.',
    summary:
      'Utility tests show water within safety limits; unusual odor traced to routine pipe maintenance and the advisory has been lifted.',
    truthStatus: 'verified',
  },
  {
    id: 13,
    author: 'Tehran Watch',
    handle: '@TehranSignals',
    avatar: 'TW',
    time: 'Yesterday · 10:15 PM',
    text:
      'ATM failures across Tehran are being blamed on a massive coordinated cyberattack on the banking sector.',
    summary:
      'Users report outages but, so far, officials have issued no confirmation; technical fault vs. attack remains unverified.',
    truthStatus: 'unverified',
  },
  {
    id: 14,
    author: 'Mumbai Rumor Radar',
    handle: '@MumbaiFactCheck',
    avatar: 'MR',
    time: 'Today · 2:45 PM',
    text:
      'Forwards warn of an imminent terror attack at CST station and tell people to avoid trains “for 48 hours”.',
    summary:
      'Police trace the wording to an old 2023 hoax; there is no current threat advisory for the station.',
    truthStatus: 'rumour',
  },
  {
    id: 15,
    author: 'Central Vietnam Desk',
    handle: '@MekongFloods',
    avatar: 'VF',
    time: '6 days ago · 4:00 PM',
    text:
      'Weeks of flooding in central Vietnam have destroyed homes and wiped out coffee harvests across multiple provinces.',
    summary:
      'Disaster assessments confirm large‑scale crop damage and hundreds of thousands of flooded homes.',
    truthStatus: 'verified',
  },
  {
    id: 16,
    author: 'Seoul Live',
    handle: '@SeoulPulse',
    avatar: 'SL',
    time: 'Today · 9:00 AM',
    text:
      'Gwanghwamun Square is packed with demonstrators after the parliament voted to impeach the president.',
    summary:
      'Crowd footage and local press confirm sustained protests, though estimates of turnout vary by source.',
    truthStatus: 'verified',
  },
  {
    id: 17,
    author: 'Volcano Watch MX',
    handle: '@PopocatepetlMx',
    avatar: 'VW',
    time: 'Today · 6:30 AM',
    text:
      'Increased ash emissions from Popocatépetl are dusting southern Mexico City and could delay some flights.',
    summary:
      'Aviation advisories and official bulletins confirm ashfall and warn of possible schedule disruptions.',
    truthStatus: 'verified',
  },
  {
    id: 18,
    author: 'Lagos Metro Feed',
    handle: '@LagosNow',
    avatar: 'LM',
    time: 'Yesterday · 7:00 PM',
    text:
      'Fights reportedly broke out at several Lagos fuel stations after rumors of a new shortage.',
    summary:
      'Police report minor scuffles earlier in the day but say deliveries have resumed and the situation is stable.',
    truthStatus: 'verified',
  },
  {
    id: 19,
    author: 'Sydney Surf Watch',
    handle: '@BondiGuard',
    avatar: 'SS',
    time: 'Today · 1:15 PM',
    text:
      'TikToks claim a “massive shark attack” happened at Bondi this morning and beaches are secretly closed.',
    summary:
      'Surf Life Saving Australia confirms there were no shark incidents today and flags are flying as normal.',
    truthStatus: 'rumour',
  },
  {
    id: 20,
    author: 'Paris Commute',
    handle: '@MetroLinesFR',
    avatar: 'PC',
    time: 'Today · 7:00 AM',
    text:
      'A sudden strike has heavily disrupted service on Paris Metro Lines 1, 4 and 14 during the morning rush.',
    summary:
      'Transport operators confirm an unannounced walkout with reduced trains while negotiations continue.',
    truthStatus: 'verified',
  },
];
