// Portfolio Data - UPDATE THIS SECTION TO ADD/EDIT PROJECTS
const projects = [
    {
        title: "Enterprise Healthcare Management System",
        description: "A comprehensive, modular Hospital Information Management System (HIMS).",
        details: `
            <ul>
                <li><strong>Architecture:</strong> Designed a modular Node.js/Express backend for scalable Admin, Lab, and Pharmacy workflows.</li>
                <li><strong>Lab Operations:</strong> Built a full LIS tracking sample collection to result generation.</li>
                <li><strong>Inventory Control:</strong> Implemented FIFO logic for pharmacy tracking to reduce waste.</li>
                <li><strong>Security:</strong> Enforced RBAC and JWT authentication for secure access.</li>
            </ul>
        `,
        tech: ["Node.js", "Express", "MySQL", "Sequelize", "AWS S3"],
        image: "assets/hims-dashboard.png",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Coffee Shop SaaS",
        description: "A full-featured ecosystem bridging coffee enthusiasts and local cafes.",
        details: `
            <ul>
                <li><strong>Complex Logic:</strong> Designed a schema for deeply nested menu configurations (sizes, milks, addons).</li>
                <li><strong>Payments:</strong> Implemented split-payment architecture for multi-vendor payouts.</li>
                <li><strong>Analytics:</strong> Developed a dashboard for 'Average Order Value' and 'Peak Hours' insights.</li>
            </ul>
        `,
        tech: ["TypeScript", "Node.js", "PostgreSQL", "Google Maps API", "Docker"],
        image: "assets/brewfind-app.png",
        githubLink: "#",
        liveLink: "#"
    },
    {
        title: "Social Media Analytics Dashboard",
        description: "Admin dashboard for analytics visualization.",
        details: `
            <ul>
                <li><strong>Data Aggregation:</strong> Unified data from multiple social platforms into a single view.</li>
                <li><strong>Visualization:</strong> Implemented Chart.js for interactive graphs and trends.</li>
                <li><strong>Database:</strong> Optimized SQL queries for complex data aggregations and reporting.</li>
            </ul>
        `,
        tech: ["JavaScript", "Sequelize", "MySQL", "Chart.js"],
        image: "assets/project3.png",
        githubLink: "#",
        liveLink: "#"
    }
];

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initScrollAnimations();
    initHamburgerMenu();
    initTypingEffect();
    initCounters();
    initParticles();
    initTilt();
    initTimelineAnimation();
    initScrollTop();
});

// Function to load projects into the grid
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';

        projectCard.innerHTML = `
            <div class="project-image">
                 <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'project-image-placeholder\'><i class=\'fa-solid fa-code\'></i></div>'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-details">
                    ${project.details}
                </div>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" class="link-btn">
                        <i class="fa-brands fa-github"></i> Source
                    </a>
                    <a href="${project.liveLink}" target="_blank" class="link-btn">
                        <i class="fa-solid fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Timeline Scroll Animation
function initTimelineAnimation() {
    const timeline = document.querySelector('.timeline');
    const progressBar = document.querySelector('.timeline-progress');
    if (!timeline || !progressBar) return;

    window.addEventListener('scroll', () => {
        const rect = timeline.getBoundingClientRect();
        const height = rect.height;
        const top = rect.top;
        const windowHeight = window.innerHeight;

        let percentage = 0;
        if (top < windowHeight / 2) {
            const travelled = (windowHeight / 2) - top;
            percentage = (travelled / height) * 100;
        }
        percentage = Math.max(0, Math.min(100, percentage));
        progressBar.style.height = `${percentage}%`;
    });
}

// 3D Tilt Effect
function initTilt() {
    const cards = document.querySelectorAll('.card.glass, .project-card, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Particle Network Animation
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseDistance = 200;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(${Math.random() > 0.5 ? '112, 66, 248' : '0, 198, 255'}, ${Math.random() * 0.5 + 0.1})`;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 1.5;
                    const directionY = forceDirectionY * force * 1.5;
                    this.vx -= directionX * 0.05;
                    this.vy -= directionY * 0.05;
                }
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 100, 255, ${1 - distance / connectionDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Counter Animation
function initCounters() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(statsSection);
}

// Scroll To Top Logic
function initScrollTop() {
    const scrollBtn = document.createElement('div');
    scrollBtn.className = 'scroll-top';
    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    document.querySelectorAll('.card').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// Mobile Menu Toggle
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('active')
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none';
            spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('active')
                ? 'rotate(-45deg) translate(7px, -6px)'
                : 'none';
        });
    }
}

// Simple Typing Effect (Placeholder for future)
function initTypingEffect() {
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<span>Message Sent!</span> <i class="fa-solid fa-check"></i>';
            btn.style.background = 'linear-gradient(90deg, #00c6ff, #0072ff)';
            contactForm.reset();
            setTimeout(() => {
                btn.innerHTML = originalContent;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }, 2000);
    });
}
