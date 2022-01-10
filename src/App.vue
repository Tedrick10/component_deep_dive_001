<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
  <course-goal>
    <template #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <!-- <h2>{{ slotProps["item"] }}</h2> -->
    </template>
  </course-goal>
</template>

<script>
import CourseGoal from './components/CourseGoal.vue';
import TheHeader from "./components/TheHeader.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components: {
    "the-header": TheHeader,
    "user-info": UserInfo,
    CourseGoal,
    // TheHeader: TheHeader,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>