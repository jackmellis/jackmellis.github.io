import { ref, computed } from "vue";
import Modal from "../common/Modal.js";
import ProjectDetail from "./ProjectDetail.js";

export default {
  props: [
    "name",
    "logo",
    "backgroundColor",
    "color",
    "url",
    "description",
    "image",
    "yearsActive",
  ],
  setup(props) {
    const hovered = ref(false);
    const showModal = ref(false);

    const onMouseEnter = () => {
      hovered.value = true;
    };
    const onMouseLeave = () => {
      hovered.value = false;
    };
    const onClick = () => {
      showModal.value = true;
    };
    const onCloseModal = () => {
      showModal.value = false;
    };

    return {
      styles: computed(() => ({
        li: {
          backgroundColor: props.backgroundColor || "white",
          transition: "transform 150ms",
          padding: "1rem",
          boxShadow: "5px 3px 7px rgb(100, 100, 100)",
          borderRadius: "10px",
          position: "relative",
          transform: hovered.value ? "translateY(-10px)" : "",
        },
        logo: {
          width: "100%",
          height: "100%",
          backgroundImage: `url(${props.logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        },
        name: {
          fontSize: "1.5rem",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          width: "100%",
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "opacity 150ms",
          borderRadius: "10px",
          opacity: hovered.value ? 1 : 0,
        },
        button: {
          width: "100%",
          backgroundColor: "transparent",
          display: "block",
          padding: "6px",
        },
      })),
      showModal,
      onMouseEnter,
      onMouseLeave,
      onClick,
      onCloseModal,
    };
  },
  components: { Modal, ProjectDetail },
  template: `
<li
  :style="styles.li"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
>
  <div class="aspect aspect-4-3">
    <button :style="styles.button" @click="onClick">
      <div :style="styles.logo"></div>
      <p :style="styles.name">{{ name }}</p>
    </button>
  </div>
  <Modal v-if="showModal" @close="onCloseModal">
    <ProjectDetail v-bind="$props" />
  </Modal>
</li>`,
};
