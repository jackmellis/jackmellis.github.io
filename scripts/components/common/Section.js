import { computed } from "vue";

export default {
  props: {
    fullHeight: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const styles = computed(() => {
      return {
        section: {
          minHeight: props.fullHeight ? "100vh" : "50vh",
          margin: "auto",
          paddingTop: "4rem",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: "2rem",
        },
        container: {
          maxWidth: "1200px",
          margin: "auto",
        },
      };
    });

    return {
      styles,
    };
  },
  template: `
<section :style="styles.section">
  <div :style="styles.container">
    <slot/>
  </div>
</section>`,
};
