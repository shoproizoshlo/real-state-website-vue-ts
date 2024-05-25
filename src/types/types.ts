import { PropType } from "vue";

export type ShowAlertFunction = (payload: MouseEvent) => void;

export const showAlertPropType: PropType<ShowAlertFunction> =
  Function as PropType<ShowAlertFunction>;
