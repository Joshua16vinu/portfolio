import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = window.innerWidth < 768 ? 30 : 60; // Fewer particles on mobile
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedY: Math.random() * 0.5 + 0.2, // Anti-gravity float
                    speedX: (Math.random() - 0.5) * 0.2, // Slight drift
                    opacity: Math.random() * 0.5 + 0.1,
                    type: Math.random() > 0.8 ? 'square' : 'circle' // Mixed geometry
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach(p => {
                // Anti-gravity movement (upwards)
                p.y -= p.speedY;
                p.x += p.speedX;

                // Mouse interaction (gentle repulsion)
                const dx = p.x - mousePosition.x;
                const dy = p.y - mousePosition.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const repulsionX = dx / distance * force * 1.5;
                    const repulsionY = dy / distance * force * 1.5;
                    p.x += repulsionX;
                    p.y += repulsionY;
                }

                // Reset positions if out of bounds (looping)
                if (p.y < -10) {
                    p.y = canvas.height + 10;
                    p.x = Math.random() * canvas.width;
                }
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;

                // Draw
                ctx.fillStyle = `rgba(86, 156, 214, ${p.opacity})`; // VSCode Blue-ish
                ctx.beginPath();
                if (p.type === 'square') {
                    ctx.rect(p.x, p.y, p.size * 2, p.size * 2);
                } else {
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                }
                ctx.fill();
            });

            // Draw subtle connecting lines for nearby particles (Constellation effect)
            ctx.strokeStyle = `rgba(86, 156, 214, 0.05)`;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Init
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        createParticles();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePosition]); // Re-run effect isn't strictly necessary for mousePosition if we use a ref for it, but this is simple enough for <100 particles

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] bg-[#09090b] overflow-hidden perspective-1000">
            {/* 1. Deep Space Noise Texture (Static) - Improves perceived quality */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

            {/* 2. Velocity Grid (The Floor) */}
            <div className="absolute inset-x-0 bottom-0 h-[60vh] opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(86, 156, 214, 0.2) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(86, 156, 214, 0.2) 1px, transparent 1px)
                     `,
                    backgroundSize: '60px 60px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(0) scale(2)',
                    transformOrigin: '50% 100%',
                    maskImage: 'linear-gradient(to top, black, transparent)'
                }}
            >
                <motion.div
                    className="absolute inset-0"
                    animate={{ translateY: [0, 60] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundImage: 'inherit', backgroundSize: 'inherit' }}
                />
            </div>

            {/* 3. The Canvas Particle System (Mid-Layer) */}
            <ParticleCanvas />

            {/* 4. Vignette & Glow (Post-Processing) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/50 pointer-events-none" />
            <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-vscode-purple/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-vscode-blue/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
    );
};

export default Background;
