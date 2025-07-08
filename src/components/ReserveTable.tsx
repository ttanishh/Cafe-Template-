import { useState } from 'react';
import floorPlan from '@/assets/floor-plan.jpg';

interface Table {
  id: number;
  x: number;
  y: number;
  seats: number;
  status: 'available' | 'occupied' | 'reserved';
  type: 'round' | 'square';
}

interface ReserveTableProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReserveTable = ({ isOpen, onClose }: ReserveTableProps) => {
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });

  const tables: Table[] = [
    { id: 1, x: 20, y: 25, seats: 2, status: 'available', type: 'round' },
    { id: 2, x: 50, y: 20, seats: 4, status: 'occupied', type: 'square' },
    { id: 3, x: 80, y: 30, seats: 2, status: 'available', type: 'round' },
    { id: 4, x: 25, y: 60, seats: 6, status: 'available', type: 'square' },
    { id: 5, x: 60, y: 65, seats: 4, status: 'reserved', type: 'square' },
    { id: 6, x: 85, y: 70, seats: 2, status: 'available', type: 'round' },
    { id: 7, x: 15, y: 85, seats: 2, status: 'available', type: 'round' },
    { id: 8, x: 45, y: 85, seats: 4, status: 'available', type: 'square' },
  ];

  const handleReservation = () => {
    if (selectedTable && reservationData.name && reservationData.email) {
      alert(`Table ${selectedTable} reserved for ${reservationData.name} on ${reservationData.date} at ${reservationData.time}`);
      onClose();
    }
  };

  const getTableColor = (status: Table['status'], isSelected: boolean) => {
    if (isSelected) return 'bg-accent border-accent-foreground';
    switch (status) {
      case 'available': return 'bg-green-500 border-green-600 hover:bg-green-400';
      case 'occupied': return 'bg-red-500 border-red-600 cursor-not-allowed';
      case 'reserved': return 'bg-yellow-500 border-yellow-600 cursor-not-allowed';
      default: return 'bg-gray-500';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] min-h-[600px] flex overflow-hidden border border-accent/20 my-8">
        
        {/* Floor Plan */}
        <div className="flex-1 p-6">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Select Your Table</h2>
          
          <div className="relative w-full h-[400px] border-2 border-border rounded-xl overflow-hidden">
            {/* Background */}
            <img 
              src={floorPlan} 
              alt="Floor plan" 
              className="w-full h-full object-cover opacity-30"
            />
            
            {/* Tables */}
            {tables.map((table) => (
              <button
                key={table.id}
                onClick={() => table.status === 'available' ? setSelectedTable(table.id) : null}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 border-2 transition-all duration-200 ${
                  table.type === 'round' ? 'rounded-full w-12 h-12' : 'rounded-lg w-14 h-10'
                } ${getTableColor(table.status, selectedTable === table.id)}`}
                style={{ left: `${table.x}%`, top: `${table.y}%` }}
                disabled={table.status !== 'available'}
              >
                <span className="text-white text-xs font-bold">{table.id}</span>
              </button>
            ))}
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Reserved</span>
              </div>
            </div>
          </div>
          
          {/* Table Info */}
          {selectedTable && (
            <div className="mt-4 p-4 bg-secondary rounded-lg">
              <h3 className="font-semibold text-primary">Table {selectedTable}</h3>
              <p className="text-sm text-muted-foreground">
                Seats up to {tables.find(t => t.id === selectedTable)?.seats} guests
              </p>
            </div>
          )}
        </div>
        
        {/* Reservation Form */}
        <div className="w-80 p-6 bg-secondary border-l border-border overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl font-bold text-primary">Reserve</h2>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors text-xl"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                value={reservationData.name}
                onChange={(e) => setReservationData({...reservationData, name: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={reservationData.email}
                onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Date</label>
              <input
                type="date"
                value={reservationData.date}
                onChange={(e) => setReservationData({...reservationData, date: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Time</label>
              <select
                value={reservationData.time}
                onChange={(e) => setReservationData({...reservationData, time: e.target.value})}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              >
                <option value="">Select time</option>
                <option value="08:00">8:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Guests</label>
              <select
                value={reservationData.guests}
                onChange={(e) => setReservationData({...reservationData, guests: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background"
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button 
            onClick={handleReservation}
            disabled={!selectedTable || !reservationData.name || !reservationData.email || !reservationData.date || !reservationData.time}
            className="w-full btn-coffee mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reserve Table
          </button>
          
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Real-time availability • No booking fees
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;