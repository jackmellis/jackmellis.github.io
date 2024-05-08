import { ref, computed, onMounted } from "vue";

export default {
  emits: ["close"],
  setup(_, { emit }) {
    const show = ref(false);
    const fadeDuration = 500;

    const onClickModal = (e) => {
      e.stopPropagation();
    };
    const onClickAway = () => {
      show.value = false;
      setTimeout(() => {
        emit("close");
      }, fadeDuration);
    };

    onMounted(() => {
      setTimeout(() => {
        show.value = true;
      }, 0);
    });

    const styles = computed(() => ({
      root: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 100,
        left: 0,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        opacity: show.value ? 1 : 0,
        transition: `opacity ${fadeDuration}ms`,
      },
      modal: {
        position: "relative",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        width: "1280px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflowY: "auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
      },
      button: {
        position: "absolute",
        right: "0.5rem",
        top: "0",
        fontSize: "1.25rem",
        backgroundColor: "transparent",
        padding: "1rem",
      },
    }));

    return { styles, onClickModal, onClickAway };
  },
  template: `
<Teleport to="#modal">
  <div :style="styles.root" @click="onClickAway">
    <div :style="styles.modal" @click="onClickModal">
      <button :style="styles.button" @click="onClickAway">x</button>
      <slot />
    </div>
  </div>
</Teleport>`,
};
