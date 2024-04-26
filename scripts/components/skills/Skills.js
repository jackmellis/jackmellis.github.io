import { computed } from "vue";
import Skill from "./Skill.js";
import Section from "../common/Section.js";
import SectionHeader from "../common/SectionHeader.js";
import skills from "../../../data/skills.js";
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

    const styles = computed(() => ({
      root: {
        backgroundColor: "#78D5FA",
      },
      list: {
        display: "grid",
        gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
        gap: "24px",
      },
    }));

    return { styles, skills };
  },
  components: { Skill, Section, SectionHeader },
  template: `
<Section :style="styles.root">
  <SectionHeader id="skills">Technologies & Skills</SectionHeader>
  <ul :style="styles.list">
    <Skill v-for="skill in skills" v-bind="skill" />
  </ul>
</Section>`,
};
