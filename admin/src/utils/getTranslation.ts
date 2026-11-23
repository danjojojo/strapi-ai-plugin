import { PLUGIN } from "../constants";

const getTranslation = (id: string) => `${PLUGIN.ID}.${id}`;

export { getTranslation };