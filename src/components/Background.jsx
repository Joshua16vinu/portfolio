const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#f2f0ea] pointer-events-none">
            {/* Very subtle warm ambient lighting */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-white/60 via-[#f2f0ea]/40 to-[#f2f0ea] opacity-80" />
            
            {/* Delicate micro-dot grid for subtle architectural precision */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `radial-gradient(#18181b 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />
        </div>
    );
};

export default Background;