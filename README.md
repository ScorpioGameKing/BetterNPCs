# BetterNPCs
Isolated world for working on a NPC module. Should be independent of system, just using 3.5e as pf1 is currently broken as of VTT 11.

The module shouldn't be focused on implementing anything concrete, rather it should instead focus on plug and play functionality. Use a standard set of rules and allow the GM to set "Routines" or "Packages" of commands that can automate actions such as NPC/Actor movement, dialogue, attacks, etc.

For example, the GM has setup a Kobold's movement and attack routines then placed them within their dungeon. As the game progress in rounds or at the GM's discretion they can choose to run the Kobold's Routines. The movement routine could it move an amount around a set patrol path and if a player is spotted within it's sight it'll home in. If it rushes a player and attacks it would run the attack routine, choosing from any attacks, feats, etc. the GM has provided and roll accordingly.

Where that's a rather intense use case a much simpler one could be in town in the market district. The party could enter a shop and ask about wares, rumors and buying/selling goods. Using dialogue and movement routines the shopkeeper can wander in back for a time, coming back with the requested goods. They could do automatic haggling, bluffing, or let the party in on an interesting rumor.

The first goal of all of this is to make a framework for creating and using these routines. All the user should have to do is to set what actions in a series should happen upon triggering an event, whether that be typed by a player or forced by the GM.

The second and ultimate goal would be to then implement ChatGPT functionality to replace the need to manually set those actions. Instead the GM would only have to provide what actions are available to GPT and it will simulate the NPC's "Turn" itself. The largest difference between the GM only version would be the dialogue routines where the true power of GPT should come through. To ensure that all NPC's don't "sound" the same a core part of this step will be to add NPC profiles.

A profile can be as simple as an NPC's attitude or more complex including backstories, interests, alignment and so on. By creating a profile for the NPC's the GM can be as strict or loose with an NPC's story and let GPT go from there. Continuing from that all you'd need to do is store conversations and allow them to be referenced by later prompts allowing for NPC's to have memories.

Now then enough with the fluff talk and ideal situations now I need to actually try and code the thing.