import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricsGrid from "./MetricsGrid";
import { LineChart, BarChart, PieChart } from "lucide-react";

interface ChartCardProps {
  title: string;
  children?: React.ReactNode;
}

const ChartCard = ({ title, children }: ChartCardProps) => (
  <Card className="p-6 bg-white">
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
      {children || "Chart Placeholder"}
    </div>
  </Card>
);

interface AnalyticsDashboardProps {
  period?: "day" | "week" | "month" | "year";
}

const AnalyticsDashboard = ({ period = "week" }: AnalyticsDashboardProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        <Tabs defaultValue={period} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Response Time Trends">
          <div className="flex items-center justify-center text-gray-400">
            <LineChart size={48} />
          </div>
        </ChartCard>

        <ChartCard title="Channel Distribution">
          <div className="flex items-center justify-center text-gray-400">
            <PieChart size={48} />
          </div>
        </ChartCard>

        <ChartCard title="AI Accuracy by Category">
          <div className="flex items-center justify-center text-gray-400">
            <BarChart size={48} />
          </div>
        </ChartCard>

        <ChartCard title="Customer Satisfaction Trends">
          <div className="flex items-center justify-center text-gray-400">
            <LineChart size={48} />
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
