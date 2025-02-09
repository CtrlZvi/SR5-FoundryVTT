import {shadowrunRulesModifiers} from "./sr5.Modifiers.spec";
import {shadowrunSR5Item} from "./sr5.SR5Item.spec";
import {shadowrunMatrix} from "./sr5.Matrix.spec";

/**
 * Register FoundryVTT Quench test batches...
 *
 * https://github.com/schultzcole/FVTT-Quench
 *
 * NOTE: Unfortunately FVTT-Quench has no working FoundryVTT 0.8 support and will cause bugs within Foundry.
 */
export const quenchRegister = quench => {
    quench.registerBatch("shadowrun5e.rules.matrix", shadowrunMatrix);
    quench.registerBatch("shadowrun5e.rules.modifiers", shadowrunRulesModifiers);
    quench.registerBatch("shadowrun5e.entities.items", shadowrunSR5Item);
};
