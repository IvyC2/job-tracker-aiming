import { useState } from 'react';
import type { FormEvent } from 'react';
import { STATUSES } from '../types';
import type { Application, Status } from '../types';

interface Props {
  onAdd: (app: Application) => void;
}

const today = () => new Date().toLocaleDateString('en-CA'); // 格式 YYYY-MM-DD

export default function ApplicationForm({ onAdd }: Props) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<Status>('Applied');
  const [dateApplied, setDateApplied] = useState(today());

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!company.trim() || !role.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      company: company.trim(),
      role: role.trim(),
      location: location.trim(),
      status,
      dateApplied,
    });

    setCompany('');
    setRole('');
    setLocation('');
    setStatus('Applied');
    setDateApplied(today());
  }

  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <input
        placeholder="Company *"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        placeholder="Role *"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        placeholder="Location (e.g. Sydney)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
        {STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
      />
      <button type="submit">Add application</button>
    </form>
  );
}