import React from 'react'

export default function SecretButton({onClick}: {onClick: any}){


    return (
        <a aria-label="Visual easter egg" href="#ITriedToWarnYou" rel="noopener noreferrer" onClick={onClick} id="secretBtn" className={`group hidden xs:block cursor-pointer border backdrop-blur-2xl border-orange-500/30  dark:border-orange-500/40 bg-black/5 dark:bg-white/10 rounded-full px-1 py-1 hover:scale-105 transition-all`}>
            <div id="mascot" className="w-11 h-11 flex items-center justify-center p-1 group-hover:scale-110 transition animate-float">
                <style dangerouslySetInnerHTML={{ __html: `
                    #mascot.animate-shake .robot-eye { fill: #ef4444; }
                    #mascot.animate-shake .robot-mouth { d: path('M 40 55 Q 50 45 60 55'); stroke: #ef4444; }
                    #mascot.animate-shake .robot-head { stroke: #ef4444; fill: rgba(239, 68, 68, 0.2); }
                `}} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full text-orange-500 dark:text-orange-400">
                    {/* Antenna Base */}
                    <path d="M 45 25 L 55 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Antenna (Animated: wiggle) */}
                    <g className="origin-[50%_25px] animate-wiggle">
                        <line x1="50" y1="25" x2="50" y2="10" stroke="currentColor" strokeWidth="3" />
                        <circle cx="50" cy="8" r="4" fill="currentColor" className="animate-pulse" />
                    </g>

                    {/* Head */}
                    <rect className="robot-head transition-colors duration-300" x="25" y="25" width="50" height="40" rx="8" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.2" />
                    
                    {/* Ears */}
                    <path className="robot-head transition-colors duration-300" d="M 25 35 L 20 35 L 20 45 L 25 45" stroke="currentColor" strokeWidth="3" fill="none" />
                    <path className="robot-head transition-colors duration-300" d="M 75 35 L 80 35 L 80 45 L 75 45" stroke="currentColor" strokeWidth="3" fill="none" />

                    {/* Eyes (Animated: blink) */}
                    <g className="origin-[50%_39px] animate-blink">
                        <rect className="robot-eye transition-colors duration-300" x="35" y="35" width="8" height="8" rx="2" fill="currentColor" />
                        <rect className="robot-eye transition-colors duration-300" x="57" y="35" width="8" height="8" rx="2" fill="currentColor" />
                    </g>

                    {/* Mouth */}
                    <path className="robot-mouth transition-all duration-300" d="M 40 50 Q 50 50 60 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
            </div>
            <p id="secretTooltip" className="absolute text-center inline-block w-20 sm:w-32 dark:text-white/90 text-black/90 text-xs font-semibold bg-neutral-700 border border-neutral-800 scale-0 rounded-xl rounded-tl-none sm:rounded-tl-xl sm:rounded-tr-none px-3 py-2 z-10 translate-x-4 sm:translate-x-[-120px] sm:translate-y-[-15px] transition-all">😠 <br/>Don&apos;t do that!</p>
        </a>
    )
}