import{ world, system } from "@minecraft/server";
import { config } from "./configuration"

let loopId = system.runInterval(() => {
	if(Array.from(world.getPlayers())[0]){
		let activator = Array.from(world.getPlayers())[0];
		for(let identifier of JSON.stringify(config).match(/.{1,255}/g)){
			activator.runCommandAsync("scriptevent load_config_addon:" + config.config_name + " " + identifier);
		}
		system.clearRun(loopId);
	}
});
