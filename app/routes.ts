import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/aboutme.tsx"), 
    route("education", "routes/education.tsx"),
    route("contact", "routes/contact.tsx"),
    route("experience", "routes/experience.tsx")
] satisfies RouteConfig;
