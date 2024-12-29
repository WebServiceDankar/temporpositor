import React from "react";
import { Card } from "@/components/ui/card";
import {
  ArrowUp,
  ArrowDown,
  Clock,
  ThumbsUp,
  Brain,
  MessageCircle,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  change = "0%",
  trend = "neutral",
  icon,
}: MetricCardProps) => {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
        {trend && (
          <div
            className={`flex items-center ${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500"}`}
          >
            {trend === "up" ? (
              <ArrowUp size={16} />
            ) : trend === "down" ? (
              <ArrowDown size={16} />
            ) : null}
            <span className="ml-1 text-sm">{change}</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-2 text-2xl font-semibold">{value}</p>
      </div>
    </Card>
  );
};

interface MetricsGridProps {
  metrics?: Array<MetricCardProps>;
}

const MetricsGrid = ({
  metrics = [
    {
      title: "Average Response Time",
      value: "2.5 mins",
      change: "12%",
      trend: "down",
      icon: <Clock className="text-blue-500" size={24} />,
    },
    {
      title: "Customer Satisfaction",
      value: "94%",
      change: "3%",
      trend: "up",
      icon: <ThumbsUp className="text-green-500" size={24} />,
    },
    {
      title: "AI Accuracy Rate",
      value: "89%",
      change: "5%",
      trend: "up",
      icon: <Brain className="text-purple-500" size={24} />,
    },
    {
      title: "Total Conversations",
      value: "1,234",
      change: "8%",
      trend: "up",
      icon: <MessageCircle className="text-orange-500" size={24} />,
    },
  ],
}: MetricsGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
