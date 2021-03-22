
let forge = game.actors.getName("Forge");
let spell = forge.items.getName("Breath of the Drake");
let ki = forge.items.getName("Ki");

let ki_max = ki.data.data.uses.max;
let ki_curr = ki.data.data.uses.value;
let spell_max = spell.data.data.uses.max;
let spell_curr = spell.data.data.uses.value;

console.log(spell.data.data.uses);
console.log(ki.data.data.uses);

if(spell_curr == 0 && ki_curr > 0) {
    ki.update({
        data: {
            uses: {
                value: ki_curr - 1
            }
        }
    });
    spell.update({
        data: {
            uses: {
                value: spell_curr + 1
            }
        }
    });

    ChatMessage.create({
        "user": "OTNiNDcyYjFiMTZh",
        "speaker": {
            "scene": "lZh9evDDib4cjA5r",
            "token": "7jNsvBVQpgTQE8RT",
            "actor": "73OhddiCO3s2sBq8",
            "alias": "Forge"
        },
        "content": "<i>Forge taps his reserves to refuel his primal breath...</i>",
        "type": 2
    });
} else if (spell_curr > 0) {
    ChatMessage.create({
        "user": "OTNiNDcyYjFiMTZh",
        "speaker": {
            "scene": "lZh9evDDib4cjA5r",
            "token": "7jNsvBVQpgTQE8RT",
            "actor": "73OhddiCO3s2sBq8",
            "alias": "Forge"
        },
        "content": "<i>Forge considers redirecting reserves towards his primal breath, but realizes that that is currently unnecessaray.</i>",
        "type": 2
    });
} else {
    ChatMessage.create({
        "user": "OTNiNDcyYjFiMTZh",
        "speaker": {
            "scene": "lZh9evDDib4cjA5r",
            "token": "7jNsvBVQpgTQE8RT",
            "actor": "73OhddiCO3s2sBq8",
            "alias": "Forge"
        },
        "content": "<i>Forge attempts to tap his reserves, but comes up dry. Better luck next time</i>",
        "type": 2
    });
}