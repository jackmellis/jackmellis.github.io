import { onMounted, onUnmounted, unref } from "vue";

export default function useEventListener(target, evtName, callback) {
  onMounted(() => {
    unref(target)?.addEventListener(evtName, callback);
  });
  onUnmounted(() => {
    unref(target)?.removeEventListener(evtName, callback);
  });
}
