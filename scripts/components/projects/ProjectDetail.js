import { computed } from "vue";
import ExternalLinkIcon from "../common/ExternalLinkIcon.js";
import { useBreakpoints } from "../../hooks/breakpoints.js";
import Skills from "../../../data/skills.js";
import ProjectSkills from "./ProjectSkills.js";

export default {
  props: [
    "name",
    "logo",
    "url",
    "image",
    "description",
    "yearsActive",
    "backgroundColor",
    "skills",
  ],
  setup(props) {
    const bp = useBreakpoints();

    const styles = computed(() => ({
      root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingBottom: "4rem",
      },
      header: {
        fontSize: "3rem",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      },
      logoWrapperWrapper: {
        backgroundColor: props.backgroundColor,
        padding: "1rem",
        borderRadius: "10px",
      },
      logoWrapper: {
        width: "6rem",
      },
      logo: {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${props.logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      },
      subheader: {
        fontWeight: 500,
        fontSize: "1.5rem",
        borderBottom: "1px solid #ccc",
        paddingBottom: "1rem",
      },
      content: {
        display: "flex",
        gap: "2rem",
        flexDirection: bp.lg ? "row" : "column",
      },
      imageWrapper: {
        margin: "auto",
        width: bp.md ? "50%" : "100%",
        flexShrink: 0,
        borderRadius: "10px",
        overflow: "hidden",
      },
      image: {
        backgroundImage: "url(" + props.image + ")",
        backgroundSize: "cover",
      },
      description: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        marginTop: "0.5rem",
        lineHeight: "1.5",
        fontSize: "1.25rem",
      },
      yearsActive: {
        fontWeight: 300,
        fontSize: "0.9rem",
      },
    }));

    const allLines = computed(() => {
      return props.description.split("\n");
    });
    const subheader = computed(() => {
      return allLines.value[0];
    });
    const lines = computed(() => {
      return allLines.value.slice(1);
    });

    return { styles, subheader, lines };
  },
  components: { ExternalLinkIcon, ProjectSkills },
  template: `
<div :style="styles.root">
  <h2 :style="styles.header">
    <div :style="styles.logoWrapperWrapper">
      <div class="aspect aspect-4-3" :style="styles.logoWrapper">
        <div :style="styles.logo"></div>
      </div>
    </div>
    <span>{{ name }}</span>
    <a :href="url" target="_blank" rel="noopener">
      <ExternalLinkIcon />
    </a>
  </h2>
  <h3 :style="styles.subheader">{{ subheader }}</h3>
  <div :style="styles.content">
      <div class="aspect aspect-4-3" :style="styles.imageWrapper">
        <div :style="styles.image"></div>
      </div>
    <div :style="styles.description">
      <p :style="styles.yearsActive">{{yearsActive}}</p>
      <p v-for="line in lines">{{ line }}</p>
    </div>
  </div>
  <ProjectSkills :skills="skills"></ProjectSkills>
</div>`,
};
