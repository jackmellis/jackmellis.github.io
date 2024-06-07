import { computed } from "vue";
import Skills from "../../../data/skills.js";
import ProjectSkill from "./ProjectSkill.js";
import { useBreakpoints } from "../../hooks/breakpoints.js";

export default {
  props: ["skills"],
  setup(props) {
    const bp = useBreakpoints();

    const columns = computed(() => {
      if (bp.xl) {
        return 18;
      }
      if (bp.lg) {
        return 14;
      }
      if (bp.md) {
        return 10;
      }
      if (bp.sm) {
        return 8;
      }
      return 6;
    });

    const styles = computed(() => ({
      root: {
        display: "grid",
        gridTemplateColumns: `repeat(${columns.value}, 1fr)`,
        gap: "0.5rem",
        marginTop: "2rem",
      },
    }));

    const skills = computed(() => {
      return (props.skills || [])
        .map((id) => {
          return Skills.find((skill) => skill.id === id);
        })
        .filter(Boolean);
    });

    return { styles, skills };
  },
  components: { ProjectSkill },
  template: `
<ul :style="styles.root">
  <ProjectSkill v-for="skill in skills" :key="skill.id" v-bind="skill"></ProjectSkill>
</ul>`,
};
