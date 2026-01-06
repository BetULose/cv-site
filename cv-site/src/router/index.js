import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import StyleGuideView from "../views/StyleGuideView.vue";
import AboutView from "../views/AboutView.vue";


const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/cv", name: "cv", component: ExperienceView },
  { path: "/projekt", name: "projects", component: ProjectsView },
  { path: "/styles", name: "styles", component: StyleGuideView },
  { path: "/kontakt", name: "contact", component: ContactView },
  { path: "/:pathMatch(.*)*", name: "notFound", component: NotFoundView },
  { path: "/om", name: "about", component: AboutView },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});