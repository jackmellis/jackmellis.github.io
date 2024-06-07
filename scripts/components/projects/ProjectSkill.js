import { computed } from "vue";

export default {
  props: ["logo", "name"],
  setup(props) {
    const styles = computed(() => ({
      root: {
        // width: "4rem",
      },
      logo: {
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundImage: `url(${props.logo})`,
      },
    }));

    return { styles };
  },
  template: `
<li :style="styles.root" :title="name">
  <div class="aspect aspect-4-3">
    <div :style="styles.logo"></div>
  </div>
</li>`,
};
