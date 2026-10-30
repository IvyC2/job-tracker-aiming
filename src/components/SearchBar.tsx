interface Props {
  value: string;
  onChange: (value: string) => void;   
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search company or role..."
      aria-label="Search company or role"
      value={value}                         
      onChange={(e) => onChange(e.target.value)}               // ③ 打字时调用什么、传什么？
    />
  );
}