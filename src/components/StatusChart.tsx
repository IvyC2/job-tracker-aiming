import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { STATUSES } from '../types';
import type { Application, Status } from '../types';

interface Props {
  applications: Application[];
}

const STATUS_COLORS: Record<Status, string> = {
  Applied: '#778BD0',
  Interviewing: '#E8C468',
  Offer: '#6FA287',
  Rejected: '#B59A85',
};

export default function StatusChart({ applications }: Props) {
  const data = STATUSES.map((s) => ({
    status: s,
    count: applications.filter((item) => item.status === s).length,
  })); 

  if (applications.length === 0) return null;

  return (
    <section className="chart-card" aria-label="Applications by status">
      <h3>Applications by status</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data}>
          <XAxis dataKey="status" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.status} fill={STATUS_COLORS[entry.status]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}