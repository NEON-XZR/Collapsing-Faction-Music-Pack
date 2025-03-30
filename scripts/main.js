let mod = Vars.mods.locateMod("cfmp");
mod.meta.displayName = Core.bundle.get("mod.name");
mod.meta.description = Core.bundle.get("mod.description");
// special thanks to meep for the help!!


//music import
let boss2v2 = Vars.tree.loadMusic("boss2v2");
let despair = Vars.tree.loadMusic("despair");

Events.on(ClientLoadEvent, e => {
  Vars.control.sound.darkMusic.add(boss2v2);
  Vars.control.sound.ambientMusic.add(despair);
});
