import { computed } from "vue";
import Skills from "../../../data/skills.js";
import ProjectSkill from "./ProjectSkill.js";

export default {
  props: ["skills"],
  setup(props) {
    const styles = computed(() => ({
      root: {
        display: "flex",
        gap: "0.5rem",
        marginTop: "1rem",
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
