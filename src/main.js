import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BadgeList from "./components/BadgeList.vue";
import BaseCard from "./components/BaseCard.vue";
import CourseGoal from "./components/CourseGoal.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("badge-list", BadgeList);
app.component("base-card", BaseCard);
app.component("course-goal", CourseGoal);
// app.component("active-goals", ActiveGoals);
// app.component("manage-goals", ManageGoals);

app.mount("#app");
