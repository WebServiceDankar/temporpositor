import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Phone, Settings, Database, Bot } from "lucide-react";

interface IntegrationConfig {
  whatsappEnabled?: boolean;
  whatsappApiKey?: string;
  whatsappPhoneNumber?: string;
  crmEnabled?: boolean;
  crmApiKey?: string;
  crmDomain?: string;
  aiEnabled?: boolean;
  aiConfidence?: number;
  aiResponseTime?: number;
}

interface IntegrationPanelProps {
  config?: IntegrationConfig;
  onSave?: (config: IntegrationConfig) => void;
}

const defaultConfig: IntegrationConfig = {
  whatsappEnabled: true,
  whatsappApiKey: "whatsapp_api_key_here",
  whatsappPhoneNumber: "+1234567890",
  crmEnabled: true,
  crmApiKey: "hubspot_api_key_here",
  crmDomain: "company.hubspot.com",
  aiEnabled: true,
  aiConfidence: 0.8,
  aiResponseTime: 2000,
};

const IntegrationPanel = ({
  config = defaultConfig,
  onSave = () => {},
}: IntegrationPanelProps) => {
  const [currentConfig, setCurrentConfig] = React.useState(config);

  const handleSave = () => {
    onSave(currentConfig);
  };

  return (
    <Card className="w-full h-full bg-white p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Integration Settings</h1>
        <p className="text-gray-500">
          Configure your integration connections and parameters
        </p>
      </div>

      <Tabs defaultValue="whatsapp" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="whatsapp">
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="crm">
            <Database className="w-4 h-4 mr-2" />
            CRM
          </TabsTrigger>
          <TabsTrigger value="ai">
            <Bot className="w-4 h-4 mr-2" />
            AI Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="whatsapp" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">WhatsApp Business API</h3>
              <p className="text-sm text-gray-500">
                Enable WhatsApp integration for customer communications
              </p>
            </div>
            <Switch
              checked={currentConfig.whatsappEnabled}
              onCheckedChange={(checked) =>
                setCurrentConfig((prev) => ({
                  ...prev,
                  whatsappEnabled: checked,
                }))
              }
            />
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="whatsapp-api-key">API Key</Label>
              <Input
                id="whatsapp-api-key"
                value={currentConfig.whatsappApiKey}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    whatsappApiKey: e.target.value,
                  }))
                }
                placeholder="Enter WhatsApp API Key"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="whatsapp-phone">Business Phone Number</Label>
              <Input
                id="whatsapp-phone"
                value={currentConfig.whatsappPhoneNumber}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    whatsappPhoneNumber: e.target.value,
                  }))
                }
                placeholder="Enter business phone number"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="crm" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">HubSpot CRM Integration</h3>
              <p className="text-sm text-gray-500">
                Connect your HubSpot CRM account
              </p>
            </div>
            <Switch
              checked={currentConfig.crmEnabled}
              onCheckedChange={(checked) =>
                setCurrentConfig((prev) => ({ ...prev, crmEnabled: checked }))
              }
            />
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="crm-api-key">HubSpot API Key</Label>
              <Input
                id="crm-api-key"
                value={currentConfig.crmApiKey}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    crmApiKey: e.target.value,
                  }))
                }
                placeholder="Enter HubSpot API Key"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="crm-domain">HubSpot Domain</Label>
              <Input
                id="crm-domain"
                value={currentConfig.crmDomain}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    crmDomain: e.target.value,
                  }))
                }
                placeholder="Enter HubSpot domain"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">AI Response Settings</h3>
              <p className="text-sm text-gray-500">
                Configure AI behavior and parameters
              </p>
            </div>
            <Switch
              checked={currentConfig.aiEnabled}
              onCheckedChange={(checked) =>
                setCurrentConfig((prev) => ({ ...prev, aiEnabled: checked }))
              }
            />
          </div>
          <Separator />
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="ai-confidence">
                Minimum Confidence Score (0-1)
              </Label>
              <Input
                id="ai-confidence"
                type="number"
                min="0"
                max="1"
                step="0.1"
                value={currentConfig.aiConfidence}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    aiConfidence: parseFloat(e.target.value),
                  }))
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ai-response-time">Response Time Delay (ms)</Label>
              <Input
                id="ai-response-time"
                type="number"
                min="0"
                value={currentConfig.aiResponseTime}
                onChange={(e) =>
                  setCurrentConfig((prev) => ({
                    ...prev,
                    aiResponseTime: parseInt(e.target.value),
                  }))
                }
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button onClick={handleSave}>
          <Settings className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </Card>
  );
};

export default IntegrationPanel;
