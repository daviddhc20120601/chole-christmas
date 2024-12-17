import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';

export const Header: React.FC = () => {
    useEffect(() => {
        document.title = 'Merry Christmas, Chole!';
    }, []);

    return (
        <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-red-100 animate-fade-in">
                Merry Christmas, Chloe!
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-8">
                <Heart className="text-red-400 animate-pulse" />
                <p className="text-xl md:text-2xl text-red-100">From David, with love</p>
                <Heart className="text-red-400 animate-pulse" />
            </div>
        </div>
    );
};