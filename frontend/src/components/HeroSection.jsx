import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(setSearchedQuery(query.trim()));
            navigate('/browse');
        }
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-8 px-4">
            <div className="mb-4">
                <span className="bg-white text-blue-600 font-semibold py-1 px-4 rounded-full shadow-lg">Top Job Finder</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                Discover Your <span className="text-yellow-400">Dream Job</span> Today
            </h1>
            <p className="text-md mb-4">
                Explore thousands of job opportunities and take the next step in your career with ease.
            </p>
            <div className="relative w-full max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="What job are you looking for?"
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg shadow-md text-gray-800 placeholder-gray-400"
                />
                <Button
                    onClick={handleSearch}
                    className="absolute inset-y-0 right-0 flex items-center px-4 bg-yellow-400 rounded-r-lg hover:bg-yellow-500"
                >
                    <Search className="h-6 w-6 text-gray-800" />
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
