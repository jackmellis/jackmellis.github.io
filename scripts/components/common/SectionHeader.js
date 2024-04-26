export default {
  props: ["id"],
  setup() {
    return {
      styles: {
        header: {
          fontSize: "3rem",
          marginBottom: "3rem",
        },
      },
    };
  },
  template: `
<h2 :style="styles.header" :id="id">
  <slot/>
</h2>`,
};
