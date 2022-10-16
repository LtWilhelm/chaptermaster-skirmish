import { Sockpuppet } from "https://deno.land/x/sockpuppet@Alpha0.5.3/mod.ts";
import { Bson, MongoClient } from 'https://deno.land/x/mongo@v0.31.0/mod.ts';

const client = new MongoClient();
await client.connect('mongodb+srv://cmAdmin:8OxpklTtmBP5so18@cluster0.0walf.mongodb.net/?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1');

const puppet = new Sockpuppet({
  port: 5038
});

puppet.use('.*', (packet) => {
  packet.message = JSON.parse(packet.message);
});

puppet.use('skirmish_', await (packet) => {
  const gameId = packet.to.split('_')[1];
  const db = client.database('ChapterMaster');

  const games = db.collection('games');
  games.findAndModify({_id: new Bson.ObjectId(gameId)}, packet.)
});

puppet.createChannel('chat');