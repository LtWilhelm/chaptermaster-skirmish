import { Sockpuppet } from "https://deno.land/x/sockpuppet@Alpha0.5.2/mod.ts";

const puppet = new Sockpuppet({
  port: 5038
});

puppet.createChannel('chat');