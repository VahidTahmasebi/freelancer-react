import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./context/DarkModeContext";

import ProtectedRoute from "./ui/ProtectedRoute";

import Auth from "./pages/Auth";
import CompleteProfile from "./pages/CompleteProfile";
import OwnerLayout from "./features/owner/OwnerLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />

        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects " element={<SubmittedProjects />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
