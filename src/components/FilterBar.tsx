import { STATUSES } from '../types';
import type { Status } from '../types';

type Filter = Status | 'All';

interface Props {
  value: Filter;
  onChange: (filter: Filter) => void;
}

const OPTIONS: Filter[] = ['All', ...STATUSES];

export default function FilterBar({ value, onChange }: Props) {
  return (
    <div className="filter-bar">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={option === value ? 'filter-btn active' : 'filter-btn'}
          aria-pressed={option === value}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}