export default {
  setup() {
    return {
      styles: {
        section: {
          minHeight: "100vh",
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
      },
    };
  },
  template: `
<section :style="styles.section">
  <div :style="styles.container">
    <slot/>
  </div>
</section>`,
};
