import React from 'react';

const Loader = ({ text = "Loading your interview plan..." }) => {
    return (
        <main className='flex flex-col items-center justify-center min-h-screen w-full bg-page relative overflow-hidden'>
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative flex items-center justify-center w-32 h-32 mb-6">
                {/* Spinning rings */}
                <div className="absolute inset-0 border-[3px] border-accent/10 rounded-full"></div>
                <div className="absolute inset-0 border-[3px] border-accent border-t-transparent border-r-transparent rounded-full animate-[spin_1.5s_linear_infinite]"></div>
                <div className="absolute inset-3 border-[3px] border-accent/60 border-b-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                <div className="absolute inset-6 border-[2px] border-accent/40 border-t-transparent rounded-full animate-[spin_3s_linear_infinite]"></div>
                
                {/* Center icon */}
                <div className="relative z-10 w-12 h-12 bg-card border border-border-dark rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 relative z-10">
                <h1 className="text-[1.15rem] font-semibold text-text-primary m-0 flex items-center gap-2">
                    {text}
                    <span className="flex gap-1 ml-1">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></span>
                    </span>
                </h1>
                <p className="text-[0.85rem] text-text-muted m-0 max-w-[300px] text-center leading-[1.6]">
                    Our AI is analyzing your profile to build a winning strategy. This might take a few moments...
                </p>
            </div>
        </main>
    )
}

export default Loader;
