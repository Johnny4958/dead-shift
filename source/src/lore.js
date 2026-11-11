// Story logs: journals (read) and tapes (played aloud + shown). Ordered backstory, placed at fixed spots.
// x/z are world meters; each is nudged to open ground at load.
export const LOGS = [
  { id: 1, x: 26, z: 24, kind: 'journal', who: 'Ray Dunn, motel night manager',
    text: 'Oct 15. Two guys from the Hollis farm checked into 6 and 7. Both coughing, both with bandaged hands. Said a tank cracked in the lab. Told me not to call anybody. I called my sister in Ashford instead. If you are reading this in my garage, the spare key to the office is under the Coke machine. Lock the door behind you.' },
  { id: 2, x: 58, z: 44, kind: 'tape', who: 'CB radio recording, gas station',
    text: 'Breaker one-nine, this is Big Lou southbound on Route 9. There is a roadblock at the Hollis turnoff, army trucks, guys in white suits. They waved everybody through except a school bus. They kept the bus. Anybody know why they kept the bus? ... Somebody answer me.' },
  { id: 3, x: 96, z: 106, kind: 'journal', who: 'Dana Pruitt, Hollis Ag lab tech',
    text: 'We called it LAZARUS. A soil bacterium that brought dead crops back from drought. Dr. Hollis wanted to try it on animals. The first pig died on a Tuesday and stood up on Wednesday. It did not eat feed. It went after the sound of the gate. I quit that night. I should have told someone.' },
  { id: 4, x: 152, z: 54, kind: 'tape', who: 'Voicemail, chop shop answering machine',
    text: 'Dale, it is Mikey. I took the Mustang like you said. Roads are jammed toward the fort so I am going around by the carnival. If I do not make it, the keys are in it. Do not come looking for me. They follow the engine. They follow the engine, Dale.' },
  { id: 5, x: 173, z: 136, kind: 'journal', who: 'Carla Voss, carnival ride operator',
    text: 'The army parked forty families at the fairground for the night. A kid asked me to run the Widowmaker one last time, so I fired up the generator. The whole thing lit up and the clatter carried for miles. By the second lap we could see them coming out of the corn. Hundreds. I did that. Keep the rides dark.' },
  { id: 6, x: 52, z: 166, kind: 'tape', who: 'Sgt. Amos Reyes, field recording, graveyard',
    text: 'Reyes, log entry. The old graves are quiet. It is only the fresh dead that get up, so the graveyard is the safest road to Fort Calder, as long as nobody new gets buried. Corporal Diaz got bit at the gate an hour ago. We are going to have to... hold on. Diaz? Diaz, sit down.' },
  { id: 7, x: 71, z: 196, kind: 'tape', who: 'Lt. June Park, helicopter pilot',
    text: 'Park, flight log. Command ordered the last bird out at 0400 and I said no. There are still people down there. I topped it off and left it on the pad. It flies itself if you let it: pull up, push forward, let go to hover. Whoever finds it, go get them.' },
  { id: 8, x: 31, z: 202, kind: 'journal', who: 'Col. R. Whitaker, Fort Calder',
    text: 'ORDER 14-C: Lockwood and Ashford are lost. Seal the fort. Mine the south fence. Destroy the Route 9 bridge at dawn. No civilians past the graveyard gate. God forgive me, I have signed it. If the boss things in the cages ever get out, burn the fort with them inside.' },
  { id: 9, x: 1312, z: 88, kind: 'tape', who: 'Dr. Martin Hollis',
    text: 'This is Martin Hollis. It was never a spill. The company sold LAZARUS to the army as a battlefield medic. Bring the fallen back. They tested it on the county water at the Lockwood reservoir. I helped them. There is a cure sample in the Fort Calder lab, locker nine. I do not have the courage to go back for it.' },
  { id: 10, x: 1634, z: 28, kind: 'journal', who: 'Pastor Elias Hale, last sermon notes',
    text: 'Fourth night in the church. Quiet saves lives: no bells, no engines, no fires. I hear my wife outside every night, calling my name in her own voice. Mary has been dead nine days. Whatever is calling, it is not her. Do not answer the voices, children. Do not answer the voices.' },
];
// Ghostly echoes: a pale figure replays a moment at a place where something happened. Seen once per game.
export const ECHOES = [
  { x: 24, z: 30, line: '"...the truck is leaving! Get in, get in!"' },
  { x: 1636, z: 34, line: '"Elias? Elias, open the door. It\'s cold out here..."' },
  { x: 46, z: 160, line: '"Diaz, sit down. Diaz! Don\'t make me do this..."' },
  { x: 168, z: 128, line: '"One more lap! Please, one more!" (children laughing)' },
  { x: 92, z: 100, line: '"Mom? Mom, where did everybody go?"' },
];
// What the voices say during a hallucination
export const WHISPERS = ['...behind you...', '...they can hear you...', '...why did you leave us...', '...the truck never came...', '...stay... stay with us...', '...it\'s so cold down here...', '...you\'re bleeding...'];
