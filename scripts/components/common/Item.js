import { ref, computed } from "vue";
import Pill from "./Pill.js";

export default {
  props: {
    backgroundColor: {
      type: String,
      default: "white",
    },
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  emit: ["click"],
  setup(props) {
    const hovered = ref(false);

    const onMouseEnter = () => {
      hovered.value = true;
    };
    const onMouseLeave = () => {
      hovered.value = false;
    };

    const styles = computed(() => {
      return {
        li: {
          backgroundColor: props.backgroundColor,
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
        button: {
          width: "100%",
          backgroundColor: "transparent",
          display: "block",
          padding: "6px",
        },
        name: {
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "opacity 150ms",
          opacity: hovered.value ? 1 : 0,
        },
      };
    });

    return { styles, onMouseEnter, onMouseLeave };
  },
  components: {
    Pill,
  },
  template: `
<li :style="styles.li" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
  <div class="aspect aspect-4-3">
    <button :style="styles.button" @click="() => $emit('click')">
      <div :style="styles.logo"></div>
      <slot></slot>
      <Pill :style="styles.name">{{name}}</Pill>
    </button>
  </div>
</li>`,
};
