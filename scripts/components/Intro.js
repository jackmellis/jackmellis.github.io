import { computed, watchEffect } from "vue";
import { useBreakpoints } from "../hooks/breakpoints.js";

export default {
  setup() {
    const bp = useBreakpoints();

    const styles = computed(() => ({
      root: {
        width: "100%",
        display: "flex",
        flexDirection: bp.lg ? "row" : "column",
        height: "95vh",
        alignItems: "center",
      },
      divider: {
        width: "100%",
        borderBottom: "1px solid rgb(225, 225, 225)",
        paddingBottom: "0.5rem",
        marginBottom: "0.5rem",
      },
      header: {
        width: bp.lg ? "50%" : "100%",
        height: bp.lg ? "100%" : "50%",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      },
      headerBg: {
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundImage: 'url("assets/bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "right",
        filter: "blur(7px) brightness(0.5)",
      },
      h1: {
        fontSize: "4rem",
        color: "rgb(240, 240, 240)",
      },
      h2: {
        fontSize: "0.75rem",
        color: "rgb(220, 220, 220)",
        textAlign: "center",
      },
      subheader: {
        flexGrow: "1",
        backgroundColor: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        maxWidth: "600px",
        margin: "auto",
      },
      description: {
        fontSize: "1.5rem",
        textAlign: "center",
        marginBottom: "2rem",
      },
      links: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        gap: "2rem",
      },
    }));

    return { styles };
  },
  template: `
<header :style="styles.root">
  <section :style="styles.header">
    <div :style="styles.headerBg"></div>
    <div style="position: relative">
      <h1 :style="styles.h1">Hi I'm Jack</h1>
      <div :style="styles.divider"></div>
      <h2 :style="styles.h2">Jackieboi Ltd</h2>
    </div>
  </section>
  <section :style="styles.subheader">
    <p :style="styles.description">
      I'm a software engineer with over 10 years' experience working
      in various industries
    </p>
    <div :style="styles.links">
      <a href="#projects" class="button">Projects</a>
      <a href="#skills" class="button">Technologies</a>
      <a href="mailto:jack@jackieboi.org">
        <img src="assets/icons/email.svg" alt="Email" style="width: 30px" />
      </a>
      <a href="https://www.linkedin.com/in/jack-ellis-9a258b1b8" target="_blank">
        <img src="assets/icons/In-Blue-40.png" alt="LinkedIn" style="width: 30px" />
      </a>
    </div>
  </section>
</header>`,
};
