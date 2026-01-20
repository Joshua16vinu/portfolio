import { motion } from "framer-motion";

const FloatingElement = ({ children, className = "", delay = 0, floatingAmplitude = 15, duration = 6 }) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -floatingAmplitude, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            whileHover={{
                scale: 1.02,
                y: -floatingAmplitude - 5,
                transition: { duration: 0.3 }
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingElement;
