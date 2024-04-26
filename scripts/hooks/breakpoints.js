import { inject, provide, reactive } from "vue";
import useEventListener from "./useEventListener.js";

const BREAKPOINTS = [
  ["xs", 0],
  ["sm", 576],
  ["md", 768],
  ["lg", 992],
  ["xl", 1200],
];

const KEY = Symbol("breakpoints");

const getBreakpoints = () => {
  const x = BREAKPOINTS.reduce((acc, [key, threshold]) => {
    const mql = window.matchMedia(`(min-width: ${threshold}px)`);

    return {
      ...acc,
      [key]: mql.matches,
    };
  }, {});

  console.log(x);

  return x;
};

export const provideBreakpoints = () => {
  const matches = reactive(getBreakpoints());

  const updateBreakpoints = () => {
    const updated = getBreakpoints();
    Object.entries(updated).forEach(([key, value]) => {
      matches[key] = value;
    });
  };

  useEventListener(window, "resize", updateBreakpoints);

  provide(KEY, matches);
};

export const useBreakpoints = () => {
  const value = inject(KEY);
  if (!value) {
    throw new Error("useBreakpoints must be used within BreakpointsProvider");
  }
  return value;
};
