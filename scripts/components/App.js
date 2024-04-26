import { provideBreakpoints } from "../hooks/breakpoints.js";
import Intro from "./Intro.js";
import Projects from "./projects/Projects.js";
import Skills from "./skills/Skills.js";

export default {
  setup() {
    provideBreakpoints();
  },
  components: { Intro, Projects, Skills },
  template: `
  <div>
    <Intro />
    <main>
      <Projects />
      <Skills />
    </main>
  </div>`,
};
