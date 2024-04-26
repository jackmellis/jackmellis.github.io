import { computed, ref } from "vue";

export default {
  props: ["name", "logo", "url"],
  setup(props) {
    const hovered = ref(false);
    const onMouseEnter = () => {
      hovered.value = true;
    };
    const onMouseLeave = () => {
      hovered.value = false;
    };
    const styles = computed(() => ({
      li: {
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        boxShadow: "5px 3px 7px rgb(100, 100, 100)",
        borderRadius: "10px",
        transition: "transform 150ms",
        backgroundColor: "#fff",
        position: "relative",
        transform: hovered.value ? "translateY(-10px)" : "",
      },
      link: {
        display: "block",
        width: "100%",
        padding: "6px",
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
    }));

    return { onMouseEnter, onMouseLeave, styles };
  },
  template: `
<li
  :style="styles.li"
  @mouseenter="onMouseEnter"
  @mouseleave="onMouseLeave"
>
  <div class="aspect aspect-4-3" style="width: 100%">
    <a :href="url" :style="styles.link" target="_blank">
      <div :style="styles.logo"></div>
      <p :style="styles.name">{{ name }}</p>
    </a>
  </div>
</li>`,
};
