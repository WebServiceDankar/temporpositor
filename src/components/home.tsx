import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "./dashboard/Sidebar";
import ChatInterface from "./chat/ChatInterface";
import AnalyticsDashboard from "./analytics/AnalyticsDashboard";
import IntegrationPanel from "./integration/IntegrationPanel";
import LeadManagement from "./leads/LeadManagement";

interface HomeProps {
  activeSection?: string;
  onNavigate?: (href: string) => void;
}

const Home = ({
  activeSection = "/dashboard",
  onNavigate = () => {},
}: HomeProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onNavigate={onNavigate} />

      <main className="flex-1 overflow-auto p-6">
        <Tabs
          defaultValue={activeSection.substring(1)}
          className="w-full h-full"
        >
          <TabsContent value="dashboard" className="h-full">
            <div className="grid grid-cols-1 gap-6">
              <ChatInterface />
            </div>
          </TabsContent>

          <TabsContent value="conversations" className="h-full">
            <ChatInterface />
          </TabsContent>

          <TabsContent value="analytics" className="h-full">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="integrations" className="h-full">
            <IntegrationPanel />
          </TabsContent>

          <TabsContent value="leads" className="h-full">
            <LeadManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Home;
