import { STATUSES } from '../types';
import type { Application, Status} from '../types';

interface Props {
  applications: Application[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Status) => void;
  emptyMessage: string;
}

export default function ApplicationList({ applications, emptyMessage, onDelete, onStatusChange }: Props) {
  if (applications.length === 0) {
    return <p className="empty">{emptyMessage}</p>;
  }

  return (
    <div className="table-wrap">
      <table className="app-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Location</th>
            <th>Date applied</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>{app.location || 'Location N/A'}</td>
              <td>{app.dateApplied}</td>
              <td>
                <select className={`badge badge-${app.status.toLowerCase()}`} 
                  value={app.status} 
                  onChange={(e) => onStatusChange(app.id, e.target.value as Status)}
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button type="button" onClick={() => onDelete(app.id)} className="btn-delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}