'use client';
import { useEffect, useState } from 'react';
import { supabase, EventRegistration } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<EventRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    } else {
      setEmail(session.user.email || '');
      fetchRegistrations();
    }
  };

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('event_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }
      if (data) {
        setRegistrations(data as EventRegistration[]);
      }
    } catch (error: any) {
      toast.error('Failed to load registrations: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string | undefined, newStatus: string) => {
    if (!id) return;
    
    // Optimistic UI update
    setRegistrations(prev => prev.map(reg => 
      reg.id === id ? { ...reg, payment_status: newStatus as any } : reg
    ));

    try {
      const { error } = await supabase
        .from('event_registrations')
        .update({ payment_status: newStatus })
        .eq('id', id);

      if (error) throw error;
      toast.success(`Status updated to ${newStatus}`);
    } catch (error: any) {
      toast.error('Failed to update: ' + error.message);
      // Revert optimism on failure
      fetchRegistrations();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
        <div className="text-[#0D1B2A] tracking-[0.2em] uppercase text-xs">Loading Architecture Data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#0D1B2A] selection:bg-[#C9A84C] selection:text-[#0D1B2A]">
      <style>{`
        @media (max-width: 767px) {
          .admin-header { padding: 1rem 1.5rem !important; }
          .admin-header h1 { font-size: 0.85rem !important; }
          .admin-header p { font-size: 8px !important; margin-left: 0.5rem !important; }
          .admin-main { padding: 2rem 1rem !important; }
          .admin-table th, .admin-table td { padding: 0.75rem !important; font-size: 0.8rem !important; }
          .admin-table .truncate { max-width: 100px !important; }
        }
      `}</style>
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0D1B2A',
            color: '#F5F0E8',
            borderRadius: '0px',
            fontSize: '14px',
            border: '1px solid rgba(201, 168, 76, 0.3)'
          }
        }} 
      />

      {/* Admin Header */}
      <header className="admin-header bg-white border-b border-[#0D1B2A]/5 py-6 px-8 flex justify-between items-center sticky top-0 z-50">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#C9A84C]" />
            <h1 className="text-sm font-bold uppercase tracking-widest text-[#0D1B2A]">ZekiUbor Core</h1>
          </div>
          <p className="text-[10px] text-[#0D1B2A]/40 uppercase tracking-widest mt-1 ml-9">Admin Session: {email}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-[10px] uppercase tracking-widest text-[#0D1B2A]/60 hover:text-[#C9A84C] transition-colors border border-[#0D1B2A]/10 px-4 py-2 hover:border-[#C9A84C]/50"
        >
          End Session
        </button>
      </header>

      <main className="admin-main container mx-auto px-4 sm:px-8 py-12 lg:py-20 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-4 text-[#0D1B2A]">Event Registrations</h2>
            <p className="text-[#0D1B2A]/60 font-light text-lg">Manage members and architects entering your ecosystem.</p>
          </div>

          <div className="bg-white shadow-2xl border border-[#0D1B2A]/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0D1B2A] text-white uppercase text-[10px] tracking-widest">
                    <th className="p-5 font-bold">Attendee</th>
                    <th className="p-5 font-bold">Event Type</th>
                    <th className="p-5 font-bold">Contact</th>
                    <th className="p-5 font-bold">Location</th>
                    <th className="p-5 font-bold">Payment</th>
                    <th className="p-5 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-[#0D1B2A]/80 divide-y divide-[#0D1B2A]/5">
                  {registrations.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-10 text-center text-[#0D1B2A]/40 italic">
                        No registrations found in the structural database.
                      </td>
                    </tr>
                  ) : (
                    registrations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-[#F5F0E8]/50 transition-colors group">
                        <td className="p-5">
                          <div className="font-medium text-[#0D1B2A] truncate max-w-[150px]" title={`${reg.first_name} ${reg.last_name}`}>
                            {reg.first_name} {reg.last_name}
                          </div>
                          <div className="text-xs text-[#0D1B2A]/40 mt-1 uppercase tracking-wider">{new Date(reg.created_at || '').toLocaleDateString()}</div>
                        </td>
                        <td className="p-5">
                          <span className={`px-3 py-1 text-[10px] uppercase tracking-widest ${reg.event_type === 'MASTERCLASS' ? 'bg-[#0D1B2A]/5 text-[#0D1B2A]' : 'bg-[#C9A84C]/10 text-[#C9A84C] font-bold'}`}>
                            {reg.event_type}
                          </span>
                        </td>
                        <td className="p-5">
                          <div className="truncate max-w-[180px]" title={reg.email}>{reg.email}</div>
                          <div className="text-xs text-[#0D1B2A]/40 mt-1">{reg.phone}</div>
                        </td>
                        <td className="p-5">
                          <div>{reg.city}, {reg.country}</div>
                        </td>
                        <td className="p-5 uppercase tracking-wider text-xs">
                          {reg.payment_method}
                        </td>
                        <td className="p-5">
                          <select
                            value={reg.payment_status}
                            onChange={(e) => handleStatusChange(reg.id, e.target.value)}
                            className={`px-3 py-1 text-xs uppercase tracking-widest font-bold focus:outline-none cursor-pointer border transition-colors ${
                              reg.payment_status === 'verified' 
                                ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]' 
                                : reg.payment_status === 'cancelled'
                                ? 'bg-red-50 text-red-900 border-red-200'
                                : 'bg-[#C9A84C]/20 text-[#0D1B2A] border-transparent hover:border-[#C9A84C]'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="verified">Verified</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
