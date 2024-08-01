import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import icons from '../untils/icons';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Clear search term when navigating away from the search page
    if (!location.pathname.includes('tim-kiem')) {
      setSearchTerm('');
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Fetch and set suggestions based on e.target.value
    // setSuggestions(fetchedSuggestions);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchTerm.trim()) {
        navigate(`/tim-kiem/tat-ca?q=${encodeURIComponent(searchTerm)}`);
      }
    }
  };

  return (
    <form className='relative flex items-center justify-center gap-2 bg-slate-200 w-2/3 1300:w-1/2 px-5 rounded-full'>
      <span>{<icons.TfiSearch size={20} className='text-main-600' />}</span>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Tìm kiếm bài hát, nghệ sỹ, lời bài hát"
        className="p-2 outline-none bg-transparent text-sm w-full placeholder:text-main-700 text-main-600"
      />
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg max-h-60 overflow-y-auto">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default Search;
