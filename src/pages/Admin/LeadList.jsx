import React, { useEffect, useState } from 'react';
import { getLeads, deleteLead } from '../../services/leadAPI';
import { useAdmin } from '../../context/AdminContext';
import Loader from '../../components/Loader';

const LeadList = () => {
  const { isAuthenticated } = useAdmin();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isAuthenticated) fetchLeads();
  }, [isAuthenticated]);

  const fetchLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response?.data || []);
    } catch (error) {
      alert('❌ Failed to fetch leads.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await deleteLead(id);
      setLeads((prev) => prev.filter((lead) => lead._id !== id));
    } catch (err) {
      alert('❌ Failed to delete lead.');
    }
  };

  const downloadCSV = () => {
    if (leads.length === 0) return alert('No leads to export.');
    const header = ['Name', 'Email', 'Message', 'Date'];
    const rows = leads.map((l) => [
      l.name, l.email, `"${l.message}"`, new Date(l.createdAt).toLocaleString()
    ]);
    const csvContent = [header, ...rows].map((e) => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `user-leads-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase())
  );

  if (!isAuthenticated) return <p className="text-center py-10">🚫 Access Denied</p>;
  if (loading) return <Loader />;

  return (
    <div className="p-6 bg-background text-foreground min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Leads</h1>

      <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="px-4 py-2 rounded border border-border w-full sm:w-1/2 bg-card"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={downloadCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto border border-border rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-muted">
            <tr className="text-left text-sm">
              <th className="p-3 border border-border">Name</th>
              <th className="p-3 border border-border">Email</th>
              <th className="p-3 border border-border">Message</th>
              <th className="p-3 border border-border">Date</th>
              <th className="p-3 border border-border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id} className="hover:bg-accent">
                <td className="p-3 border border-border">{lead.name}</td>
                <td className="p-3 border border-border">{lead.email}</td>
                <td className="p-3 border border-border">{lead.message}</td>
                <td className="p-3 border border-border">{new Date(lead.createdAt).toLocaleString()}</td>
                <td className="p-3 border border-border text-center">
                  <button
                    onClick={() => handleDelete(lead._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredLeads.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-muted-foreground">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadList;
       