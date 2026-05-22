// Portfolio Data - UPDATE THIS SECTION TO ADD/EDIT PROJECTS
const projects = [
    {
        title: "MediaWall – Digital Signage Management Platform",
        description: "A scalable backend system for managing multi-screen digital signage displays across organizations.",
        details: `
            <ul>
                <li><strong>REST APIs:</strong> Developed scalable APIs for managing multi-screen digital signage systems.</li>
                <li><strong>Real-time Sync:</strong> Implemented real-time communication for live updates and synchronization using Socket.IO.</li>
                <li><strong>Architecture:</strong> Designed multi-tenant database architecture ensuring scalability and data isolation.</li>
                <li><strong>Security:</strong> Built JWT-based authentication and RBAC for secure multi-organization access.</li>
            </ul>
        `,
        tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
        image: "http://mediawall.in/wp-content/uploads/2024/01/MW_Full_Logo.png",
        githubLink: "#",
        liveLink: "http://mediawall.in/"
    },
    {
        title: "Coffee Shop Discovery & Management Platform",
        description: "A multi-tenant SaaS ecosystem for vendors and customers to discover and manage coffee orders.",
        details: `
            <ul>
                <li><strong>Architecture:</strong> Designed backend architecture supporting vendors and customers seamlessly.</li>
                <li><strong>Order System:</strong> Built complex menu and order management system with deep customization logic.</li>
                <li><strong>Data Processing:</strong> Developed bulk data import system for processing large datasets with validation.</li>
                <li><strong>Payments & Invoicing:</strong> Integrated payment gateway with secure transaction handling and automated invoicing.</li>
                <li><strong>Data Mining:</strong> Engineered Google Maps scraping system to onboard 150+ businesses with structured data.</li>
            </ul>
        `,
        tech: ["Node.js", "TypeScript", "PostgreSQL"],
        image: "assets/coffeenity-logo.png",
        githubLink: "#",
        liveLink: "https://coffee-shop-rho-nine.vercel.app/"
    },
    {
        title: "Enterprise Healthcare Management System (HIMS)",
        description: "A comprehensive healthcare platform encompassing EMR, lab tracking, and pharmacy workflows.",
        details: `
            <ul>
                <li><strong>Core Modules:</strong> Developed scalable healthcare system with modules for EMR, lab management, and pharmacy.</li>
                <li><strong>Security:</strong> Implemented secure role-based access for doctors, patients, and administrators.</li>
                <li><strong>Dashboards:</strong> Built real-time dashboards and patient record management system.</li>
                <li><strong>Storage:</strong> Integrated AWS S3 for secure storage of medical files and reports.</li>
                <li><strong>Notifications:</strong> Automated patient notifications using WhatsApp integration.</li>
            </ul>
        `,
        tech: ["Node.js", "Express.js", "MySQL", "AWS S3"],
        image: "https://health-care-one-lake.vercel.app/hospital.svg",
        githubLink: "#",
        liveLink: "https://health-care-one-lake.vercel.app/"
    },
    {
        title: "Music Booking Platform (Tanboura)",
        description: "Payment system enhancements for a music booking and e-commerce application.",
        details: `
            <ul>
                <li><strong>Split Payments:</strong> Implemented a split payment system (booking fee + final payment) to reduce cancellation risks.</li>
                <li><strong>Database Schema:</strong> Updated workflows to support two-stage transactions with accurate tracking across modules.</li>
                <li><strong>State Management:</strong> Built automated booking state transitions (tentative → confirmed → canceled) based on payment status.</li>
                <li><strong>Automations:</strong> Developed backend logic for payment due dates, automated reminders, and booking expiration.</li>
                <li><strong>Edge Cases:</strong> Handled complex refund/cancellation scenarios and manual final payment flows with admin intervention.</li>
            </ul>
        `,
        tech: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "MySQL"],
        image: "assets/tanboura_logo.png",
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
    initActiveNav();
    initMarquee();
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

// Typing Effect for developer roles
function initTypingEffect() {
    // Typing effect removed in favor of static text
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

// Active Navigation Link Logic
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Marquee Dynamic Content Logic
function initMarquee() {
    const marqueeContent = document.getElementById('marquee-content');
    if (!marqueeContent) return;

    const marqueeTechs = [
        { icon: "fa-brands fa-node", name: "Node.js" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-python", name: "Python" },
        { icon: "fa-solid fa-leaf", name: "MongoDB" },
        { icon: "fa-solid fa-database", name: "PostgreSQL" },
        { icon: "fa-solid fa-database", name: "MySQL" },
        { icon: "fa-brands fa-git-alt", name: "Git" },
        { icon: "fa-solid fa-server", name: "Express" },
        { icon: "fa-brands fa-vuejs", name: "Vue.js" },
        { icon: "fa-brands fa-react", name: "React.js" }
    ];

    const createItems = () => {
        return marqueeTechs.map(tech => `<span><i class="${tech.icon}"></i> ${tech.name}</span>`).join('');
    };

    // Populate twice for seamless looping
    marqueeContent.innerHTML = createItems() + createItems();
}
