import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <Search className="absolute left-[18px] top-1/2 -translate-y-1/2 w-4 h-4 text-[#333333]" strokeWidth={1.5} />
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-[46px] pr-[18px] py-[10px] w-[406px] h-[42px] border border-gray-200 rounded-[97px] focus:outline-none focus:ring-2 focus:ring-teal-400/50 bg-[#F8F8F8] text-black placeholder:text-black text-[14px] placeholder:font-normal leading-[22px]"
        style={{ fontFamily: 'Poppins' }}
      />
    </div>
  );
}