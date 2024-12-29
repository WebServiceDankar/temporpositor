import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  MoreHorizontal,
  Phone,
  MessageCircle,
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: "whatsapp" | "website";
  status: "new" | "contacted" | "qualified" | "converted";
  lastContact: string;
  value: string;
}

interface LeadManagementProps {
  leads?: Lead[];
  onLeadSelect?: (id: string) => void;
}

const defaultLeads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    source: "whatsapp",
    status: "new",
    lastContact: "2024-01-15",
    value: "$1,200",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1987654321",
    source: "website",
    status: "contacted",
    lastContact: "2024-01-14",
    value: "$2,500",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1122334455",
    source: "whatsapp",
    status: "qualified",
    lastContact: "2024-01-13",
    value: "$3,800",
  },
];

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  converted: "bg-purple-100 text-purple-800",
};

const LeadManagement = ({
  leads = defaultLeads,
  onLeadSelect = () => {},
}: LeadManagementProps) => {
  return (
    <Card className="w-full h-full bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Lead Management</h1>
        <Button>Add New Lead</Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input className="pl-10" placeholder="Search leads..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex gap-2">
            <Filter size={20} />
            More Filters
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Contact</TableHead>
              <TableHead>Value</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow
                key={lead.id}
                onClick={() => onLeadSelect(lead.id)}
                className="cursor-pointer"
              >
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{lead.email}</div>
                    <div className="text-gray-500">{lead.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      lead.source === "whatsapp"
                        ? "text-green-600"
                        : "text-blue-600"
                    }
                  >
                    {lead.source === "whatsapp" ? (
                      <Phone className="w-3 h-3 mr-1" />
                    ) : (
                      <MessageCircle className="w-3 h-3 mr-1" />
                    )}
                    {lead.source}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={statusColors[lead.status]}>
                    {lead.status}
                  </Badge>
                </TableCell>
                <TableCell>{lead.lastContact}</TableCell>
                <TableCell>{lead.value}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default LeadManagement;
