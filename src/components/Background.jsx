import { motion } from "framer-motion";

const GeometricShape = ({ delay, duration, initialX, initialY, type }) => {
    // Randomize shape type if not provided
    const shapeType = type || (Math.random() > 0.5 ? "square" : "cross");

    return (
        <motion.div
            className="absolute border border-blue-500/20 opacity-20"
            style={{
                left: `${initialX}%`,
                top: `${initialY}%`,
                width: shapeType === "square" ? 40 : 20,
                height: shapeType === "square" ? 40 : 20,
                borderRadius: shapeType === "square" ? 4 : 0,
                borderWidth: 1
            }}
            animate={{
                y: [0, -200],
                rotate: [0, 180],
                opacity: [0, 0.4, 0],
                scale: [0.8, 1.2]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "linear",
            }}
        >
            {shapeType === "cross" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-blue-500/30" />
            )}
            {shapeType === "cross" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[140%] w-[1px] bg-blue-500/30" />
            )}
        </motion.div>
    );
};

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-background overflow-hidden perspective-1000">
            {/* 1. Velocity Grid (The Flight Deck) */}
            <div className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(86, 156, 214, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(86, 156, 214, 0.2) 1px, transparent 1px)
                     `,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(0) scale(2)',
                    transformOrigin: '50% 100%',
                }}
            >
                {/* Grid Animation Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
                    animate={{
                        translateY: [0, 80]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: 'inherit',
                        backgroundSize: 'inherit'
                    }}
                />
            </div>

            {/* 2. The Void Vignette (Focus on Center) */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background opacity-80" />

            {/* 3. Floating Geometric Debris (Zero-G Elements) */}
            {Array.from({ length: 15 }).map((_, i) => (
                <GeometricShape
                    key={i}
                    delay={Math.random() * 5}
                    duration={Math.random() * 10 + 15}
                    initialX={Math.random() * 100}
                    initialY={100 + Math.random() * 20}
                />
            ))}

            {/* 4. Deep Space Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
};

export default Background;
