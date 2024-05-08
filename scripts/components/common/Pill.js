export default {
  setup() {
    const styles = {
      root: {
        fontSize: "1.5rem",
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        borderRadius: "10px",
        padding: "0.25rem",
      },
    };

    return {
      styles,
    };
  },
  template: `
<p :style="styles.root">
  <slot/>
</p>`,
};
