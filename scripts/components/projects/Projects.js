import { computed } from "vue";
import Section from "../common/Section.js";
import SectionHeader from "../common/SectionHeader.js";
import Project from "./Project.js";
import projects from "../../../data/projects.js";
import { useBreakpoints } from "../../hooks/breakpoints.js";

export default {
  setup() {
    const bp = useBreakpoints();

    const columns = computed(() => {
      if (bp.xl) return 5;
      if (bp.lg) return 4;
      if (bp.md) return 3;
      return 2;
    });

    return {
      projects,
      styles: computed(() => ({
        root: {
          backgroundColor: "#78D5FA",
        },
        list: {
          display: "grid",
          gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
          gap: "24px",
        },
      })),
    };
  },
  components: {
    Section,
    SectionHeader,
    Project,
  },
  template: `
<Section :style="styles.root" :full-height="false">
  <SectionHeader id="projects">Projects & Experience</SectionHeader>
  <ul :style="styles.list">
    <Project v-for="p in projects" v-bind="p"></Project>
  </ul>
</Section>`,
};
