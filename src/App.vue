<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <!-- <active-goals v-show="selectedComponent==='active-goals'"></active-goals>
    <manage-goals v-show="selectedComponent==='manage-goals'"></manage-goals> -->
  </div>
  <!-- <course-goal>
    <template #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
    </template>
  </course-goal> -->
</template>

<script>
// import CourseGoal from './components/CourseGoal.vue';
import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    // "user-info": UserInfo,
    // "course-goal": CourseGoal,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
    // TheHeader: TheHeader,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
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