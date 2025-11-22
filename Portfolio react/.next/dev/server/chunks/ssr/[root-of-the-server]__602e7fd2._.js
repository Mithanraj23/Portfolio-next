module.exports = [
"[project]/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Close mobile menu on navigation or resize to larger screens
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        function onResize() {
            if (window.innerWidth >= 768 && mobileMenuOpen) setMobileMenuOpen(false);
        }
        window.addEventListener('resize', onResize);
        return ()=>window.removeEventListener('resize', onResize);
    }, [
        mobileMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // --- DOM references ---
        const bgLayer = undefined;
        const midLayer = undefined;
        const scrollToTopBtn = undefined;
        const navLinks = undefined;
        const sections = undefined;
        const mainHeader = undefined;
        const bgSpeed = undefined;
        const midSpeed = undefined;
        let lastScrollY;
        let ticking;
        function updateParallax(currentScrollY) {
            const bgTranslateY = currentScrollY * bgSpeed;
            const midTranslateY = currentScrollY * midSpeed;
            if (bgLayer) bgLayer.style.transform = `translate3d(0, ${bgTranslateY}px, 0)`;
            if (midLayer) midLayer.style.transform = `translate3d(0, ${midTranslateY}px, 0)`;
            ticking = false;
        }
        function checkScrollAnimations() {
            let currentActiveSection = '';
            sections.forEach((section)=>{
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight - rect.height * 0.2 && rect.bottom >= rect.height * 0.2;
                if (isVisible) {
                    section.classList.add('scroll-visible');
                    currentActiveSection = section.id;
                    const sectionChildren = section.querySelectorAll('h2, h3, p, .glass-card, .interest-card');
                    sectionChildren.forEach((child, index)=>{
                        setTimeout(()=>{
                            if (index % 2 === 0) {
                                child.classList.add('animate-fade-in-left');
                            } else {
                                child.classList.add('animate-fade-in-right');
                            }
                        }, index * 100);
                    });
                } else {
                    section.classList.remove('scroll-visible');
                }
            });
            navLinks.forEach((link)=>{
                link.classList.remove('active');
                if (window.scrollY < 300) {
                    if (link.getAttribute('href') === '#hero') {
                        link.classList.add('active');
                    }
                    return;
                }
                if (link.getAttribute('href').substring(1) === currentActiveSection) {
                    link.classList.add('active');
                }
            });
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        }
        function handleScroll() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(()=>{
                    updateParallax(lastScrollY);
                    checkScrollAnimations();
                });
                ticking = true;
            }
        }
        // Enhanced header scroll effect
        let lastScroll;
        const headerScrollHandler = undefined;
        // --- Skills & Stacks logic ---
        const skillCenterToggle = undefined;
        const skillStacksList = undefined;
        const skillIconsNodeList = undefined;
        const skillIcons = undefined;
        let isExpanded;
        const detailedTechStacks = undefined;
        function populateStacks() {
            for(const id in detailedTechStacks){
                const container = document.getElementById(id);
                if (container) {
                    container.innerHTML = '';
                    const innerContainer = document.createElement('div');
                    innerContainer.className = 'flex flex-wrap justify-start gap-4 p-4 bg-gray-900/40 rounded-lg';
                    detailedTechStacks[id].forEach((stack)=>{
                        const isVercel = stack.name === 'Vercel';
                        const iconHtml = `
              <div class="tech-icon-item">
                <i class="${stack.icon} ${stack.color} text-3xl mb-1 ${isVercel ? 'fa-vercel' : ''}"></i>
                <span class="text-xs text-gray-400">${stack.name}</span>
              </div>
            `;
                        innerContainer.insertAdjacentHTML('beforeend', iconHtml);
                    });
                    container.appendChild(innerContainer);
                }
            }
        }
        function setRadialPositions() {
            const container = document.getElementById('skill-diagram');
            if (!container) return;
            const radius = 155;
            const center = 200;
            const icons = [
                'skill-mobile',
                'skill-react',
                'skill-uiux',
                'skill-innovation',
                'skill-tools',
                'skill-backend'
            ];
            const totalIcons = icons.length;
            const angleStep = 360 / totalIcons;
            icons.forEach((id, index)=>{
                const element = document.getElementById(id);
                if (element) {
                    const angle = angleStep * index - 90;
                    const angleRad = angle * (Math.PI / 180);
                    const x = center + radius * Math.cos(angleRad) - 40;
                    const y = center + radius * Math.sin(angleRad) - 40;
                    element.style.left = `${x}px`;
                    element.style.top = `${y}px`;
                }
            });
        }
        function toggleSkillIcons() {
            const isVisible = skillIcons[0]?.classList.contains('visible');
            skillIcons.forEach((icon)=>{
                if (isVisible) icon.classList.remove('visible');
                else icon.classList.add('visible');
            });
        }
        function toggleSingleStack(cardId, shouldOpen) {
            const contentId = `stack-content-${cardId.split('-').pop()}`;
            const contentContainer = document.getElementById(contentId);
            const card = document.getElementById(cardId);
            skillStacksList.querySelectorAll('.tech-stack-container').forEach((c)=>c.classList.remove('expanded'));
            skillStacksList.querySelectorAll('.glass-card').forEach((c)=>{
                c.classList.remove('border-accent-blue', 'border-2');
                c.style.transform = 'scale(1)';
            });
            if (contentContainer && card && shouldOpen) {
                contentContainer.classList.add('expanded');
                card.classList.add('border-accent-blue', 'border-2');
                card.style.transform = 'scale(1.02)';
                isExpanded = true;
            } else {
                isExpanded = false;
            }
        }
        const stackCards = undefined;
        // --- Portfolio rendering and project data ---
        const PROJECT_DATA = undefined;
        function renderProjects(filter = 'all') {
            const portfolioGrid = document.getElementById('portfolio-grid');
            if (!portfolioGrid) return;
            portfolioGrid.innerHTML = '';
            const filteredProjects = filter === 'all' ? PROJECT_DATA : PROJECT_DATA.filter((p)=>p.category === filter);
            filteredProjects.forEach((project)=>{
                const tagsHtml = project.tags.map((tag)=>`<span class="text-xs font-medium bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600">${tag}</span>`).join('');
                const projectHtml = `
                    <div class="glass-card p-6 rounded-xl transition-all duration-500 transform hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden"
                         style="box-shadow: 0 4px 20px rgba(0,0,0,0.3); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);"
                         onmouseover="this.style.boxShadow='0 20px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(138, 43, 226, 0.2)'"
                         onmouseout="this.style.boxShadow='0 4px 20px rgba(0,0,0,0.3)'">
                        
                        <!-- Gradient overlay on hover -->
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-xl"></div>
                        
                        <div class="h-48 bg-gray-900/50 rounded-lg flex items-center justify-center mb-4 border border-${project.color}-400/30 overflow-hidden relative group-hover:border-${project.color}-400/60 transition-all duration-500">
                            <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-${project.color}-900/50 to-${project.color}-800/30 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="absolute inset-0 bg-gradient-to-t from-${project.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <i class="fas fa-project-diagram text-5xl text-${project.color}-400/70 group-hover:text-${project.color}-300 z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" 
                               style="filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));"></i>
                            <span class="absolute bottom-3 right-3 text-xs font-bold text-white/80 z-10 px-3 py-1 bg-${project.color}-500/30 rounded-full backdrop-blur-sm border border-${project.color}-400/40">${project.category.toUpperCase()}</span>
                        </div>
                        
                        <div class="relative z-10">
                            <h3 class="text-2xl font-bold gradient-text mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">${project.title}</h3>
                            <p class="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">${project.description}</p>
                            
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${tagsHtml}
                            </div>

                            <a href="${project.link}" target="_blank" class="inline-flex items-center gap-2 text-accent-blue hover:text-neon-blue text-sm font-semibold group/link transition-all duration-300">
                                <span class="relative">
                                    View ${project.category === 'creative' ? 'Live Demo' : 'Project'}
                                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/link:w-full transition-all duration-300"></span>
                                </span>
                                <i class="fas fa-arrow-right transition-transform group-hover/link:translate-x-2 duration-300"></i>
                            </a>
                        </div>
                    </div>
                `;
                portfolioGrid.insertAdjacentHTML('beforeend', projectHtml);
            });
            updateFilterButtons(filter);
        }
        function updateFilterButtons(activeFilter) {
            const buttons = document.querySelectorAll('#portfolio-filters button');
            buttons.forEach((button)=>{
                button.classList.remove('bg-accent-blue', 'text-white', 'border-accent-blue', 'hover:bg-blue-600');
                button.classList.add('bg-gray-800/50', 'text-gray-400', 'border-gray-700/50', 'hover:bg-gray-700/50');
                if (button.getAttribute('data-filter') === activeFilter) {
                    button.classList.remove('bg-gray-800/50', 'text-gray-400', 'border-gray-700/50');
                    button.classList.add('bg-accent-blue', 'text-white', 'border-accent-blue', 'hover:bg-blue-600');
                }
            });
        }
        // --- Contact form simulation ---
        const form = undefined;
        const formMessage = undefined;
        function formSubmitHandler(e) {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.textContent = 'Sending...';
            btn.disabled = true;
            setTimeout(()=>{
                form.reset();
                formMessage.classList.remove('hidden');
                btn.textContent = 'Send Message';
                btn.disabled = false;
                setTimeout(()=>{
                    formMessage.classList.add('hidden');
                }, 5000);
            }, 1500);
        }
        function createBackgroundParticles() {
            const colors = [
                'rgba(59, 130, 246, 0.3)',
                'rgba(138, 43, 226, 0.3)',
                'rgba(0, 191, 255, 0.3)',
                'rgba(236, 72, 153, 0.3)'
            ];
            for(let i = 0; i < 20; i++){
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s infinite ease-in-out`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                document.body.appendChild(particle);
            }
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Mithan's Folio - Creative Developer"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Mithan's Portfolio - Creative Web & Full-Stack Developer specializing in modern web applications"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.svg",
                        type: "image/svg+xml"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/apple-touch-icon.png"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#3B82F6"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                        src: "https://cdn.tailwindcss.com"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
                        crossOrigin: "anonymous",
                        referrerPolicy: "no-referrer"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "antialiased min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        id: "main-header",
                        className: "fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-dark-bg/90 border-b border-gray-700/50 transition-all duration-500 shadow-lg shadow-black/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                className: "container mx-auto flex justify-between items-center max-w-7xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-extrabold text-white flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "fas fa-cube text-xl mr-2 text-accent-blue"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this),
                                            "Mithan ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "gradient-text ml-1",
                                                children: "Folio"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 514,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex space-x-2 md:space-x-4 text-sm font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#hero",
                                                className: "nav-link active",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#about",
                                                className: "nav-link",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 520,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#skills",
                                                className: "nav-link",
                                                children: "Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 521,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#portfolio",
                                                className: "nav-link",
                                                children: "Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 522,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                className: "nav-link",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "md:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            "aria-label": "Open menu",
                                            "aria-expanded": mobileMenuOpen,
                                            onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                            className: "p-2 rounded-md bg-gray-800/40 hover:bg-gray-800/60",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "text-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                    d: "M3 6h18M3 12h18M3 18h18",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.jsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: `fixed inset-0 z-60 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: `fixed inset-0 bg-gradient-to-br from-blue-900/70 via-purple-800/60 to-pink-800/50 transition-opacity ${mobileMenuOpen ? 'opacity-90' : 'opacity-0'}`
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                                        className: `fixed top-0 left-0 h-full w-64 transform bg-dark-bg backdrop-blur-md border-r border-gray-700/40 transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`,
                                        style: {
                                            zIndex: 70
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "p-6 flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-white",
                                                            children: [
                                                                "Mithan ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "gradient-text",
                                                                    children: "Folio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 72
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 544,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            "aria-label": "Close menu",
                                                            className: "p-2 rounded-md bg-gray-800/30 hover:bg-gray-800/50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                width: "20",
                                                                height: "20",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "text-gray-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                    d: "M6 18L18 6M6 6l12 12",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 546,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 545,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                                    className: "flex flex-col gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#hero",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            className: "nav-link",
                                                            children: "Home"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 553,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#about",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            className: "nav-link",
                                                            children: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 554,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#skills",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            className: "nav-link",
                                                            children: "Skills"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 555,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#portfolio",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            className: "nav-link",
                                                            children: "Portfolio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 556,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                            href: "#contact",
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            className: "nav-link",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 557,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://github.com/Mithanraj23",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-gray-300 hover:text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-github"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 138
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 562,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://linkedin.com/in/mithanraj",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-gray-300 hover:text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-linkedin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 141
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 563,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 561,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 542,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.jsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "hero",
                        className: "parallax-container h-[120vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                id: "layer-bg",
                                "data-speed": "0.05",
                                className: "parallax-layer layer-bg"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.jsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                id: "layer-mid",
                                "data-speed": "0.15",
                                className: "parallax-layer layer-mid"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.jsx",
                                lineNumber: 573,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "layer-fg z-40 p-4 pt-20 flex items-center justify-center h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "container mx-auto px-6 max-w-7xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row items-center gap-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "lg:w-1/2 text-left space-y-6 hero-content-animate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                        className: "text-5xl md:text-6xl lg:text-7xl font-black tracking-tight",
                                                        children: [
                                                            "I'M ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "gradient-text",
                                                                children: "MITHAN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 580,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 579,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: " text-gray-400 mb-16 text-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--neon-blue)'
                                                                },
                                                                children: "WEB"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 583,
                                                                columnNumber: 21
                                                            }, this),
                                                            " & ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--neon-purple)'
                                                                },
                                                                children: "FULL-STACK"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 583,
                                                                columnNumber: 78
                                                            }, this),
                                                            " DEVELOPER"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 582,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-lg leading-relaxed max-w-lg",
                                                        children: "I'm passionate about crafting beautiful, responsive web applications with cutting-edge technology. With expertise in both frontend and backend development, I transform ideas into scalable, user-centric digital experiences."
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 586,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-4 mt-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#portfolio",
                                                                className: "px-8 py-3 bg-accent-blue text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1",
                                                                children: "View My Works"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 592,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#contact",
                                                                className: "btn-talk",
                                                                children: "Let's Talk"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 595,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "social-links flex gap-6 mt-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://www.facebook.com/share/1DANjki2gL/",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-2xl text-gray-400 hover:text-blue-600 transition-colors duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-facebook"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 193
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 601,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://github.com/Mithanraj23",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-2xl text-gray-400 hover:text-white transition-colors duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-github"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 178
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 602,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://linkedin.com/in/mithanraj",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-linkedin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 603,
                                                                    columnNumber: 184
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 603,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "https://www.instagram.com/itz_mithan_23/",
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fab fa-instagram"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 191
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 604,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 600,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "lg:w-1/2 flex items-center justify-center relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "relative w-96 h-96",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gray-900/80 rounded-2xl border-2 border-blue-500/30 overflow-hidden shadow-2xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-red-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 612,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-yellow-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "w-3 h-3 rounded-full bg-green-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 614,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "ml-4 text-gray-400 text-sm",
                                                                            children: "index.jsx"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 615,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "p-4 font-mono text-sm leading-relaxed",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "import"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 619,
                                                                                    columnNumber: 52
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-300",
                                                                                    children: "React"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 619,
                                                                                    columnNumber: 100
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "from"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 619,
                                                                                    columnNumber: 145
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "'react'"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 619,
                                                                                    columnNumber: 191
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 619,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "import"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 52
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-300",
                                                                                    children: "{ useState }"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 100
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "from"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 162
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "'react'"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 208
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line mt-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 621,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "const"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 622,
                                                                                    columnNumber: 52
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-yellow-300",
                                                                                    children: "Portfolio"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 622,
                                                                                    columnNumber: 99
                                                                                }, this),
                                                                                " = () ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "="
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 622,
                                                                                    columnNumber: 155
                                                                                }, this),
                                                                                " {"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "const"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 623,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                " [",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-300",
                                                                                    children: "skills"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 623,
                                                                                    columnNumber: 105
                                                                                }, this),
                                                                                "] = ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-yellow-300",
                                                                                    children: "useState"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 623,
                                                                                    columnNumber: 154
                                                                                }, this),
                                                                                "(["
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 623,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "'React'"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 624,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                ","
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "'Node.js'"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 625,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                ","
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 625,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "'MongoDB'"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 626,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                ","
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 626,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-4",
                                                                            children: "])"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 627,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line mt-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 628,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-purple-400",
                                                                                    children: "return"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 629,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                " ("
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: "<"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-400",
                                                                                    children: "div"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 100
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-cyan-300",
                                                                                    children: "className"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 143
                                                                                }, this),
                                                                                "=",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: '"portfolio"'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 192
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: ">"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 243
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 630,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-12",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: "<"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 58
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-400",
                                                                                    children: "h1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 101
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: ">"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 142
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-white",
                                                                                    children: "Creative Dev"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 185
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "cursor-blink",
                                                                                    children: "|"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 631,
                                                                                    columnNumber: 233
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 631,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-8",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: "</"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 57
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-blue-400",
                                                                                    children: "div"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 101
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-500",
                                                                                    children: ">"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/index.jsx",
                                                                                    lineNumber: 632,
                                                                                    columnNumber: 143
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 632,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line ml-4",
                                                                            children: ")"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            className: "code-line",
                                                                            children: "}"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 610,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute -top-8 -right-8 text-4xl text-blue-500/40 animate-float",
                                                            style: {
                                                                animationDelay: '0s'
                                                            },
                                                            children: "</>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 638,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute -bottom-8 -left-8 text-3xl text-purple-500/40 animate-float",
                                                            style: {
                                                                animationDelay: '1s'
                                                            },
                                                            children: "{ }"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/4 -left-12 text-2xl text-cyan-500/40 animate-float",
                                                            style: {
                                                                animationDelay: '2s'
                                                            },
                                                            children: "<div>"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 640,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-1/4 -right-12 text-2xl text-pink-500/40 animate-float",
                                                            style: {
                                                                animationDelay: '1.5s'
                                                            },
                                                            children: "( )"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 641,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 643,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-20 left-10 w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse",
                                                            style: {
                                                                animationDelay: '0.5s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 644,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 right-5 w-1 h-1 rounded-full bg-cyan-500 animate-pulse",
                                                            style: {
                                                                animationDelay: '1s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 645,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 609,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.jsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "py-24 md:py-32 bg-gradient-to-b from-transparent to-mid-dark-bg min-h-screen scroll-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "container mx-auto max-w-7xl px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white",
                                    children: [
                                        "ABOUT ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "ME"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 656,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 655,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-400 mb-16 text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--neon-blue)'
                                            },
                                            children: "WEB"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, this),
                                        " & ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'var(--neon-purple)'
                                            },
                                            children: "FULL-STACK"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 659,
                                            columnNumber: 72
                                        }, this),
                                        " DEVELOPER"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 658,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row justify-between items-start gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/2 space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-gray-300 border-l-4 border-accent-blue pl-4 italic",
                                                    children: "I am a dedicated Web and Full-Stack Developer with a strong passion for building dynamic, user-friendly, and high-performance web applications. My expertise spans from crafting engaging frontend interfaces to designing robust backend systems."
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 664,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 leading-relaxed",
                                                    children: "My journey in development is driven by a desire to solve complex problems and create meaningful digital experiences. I thrive on continuous learning and adapting to new technologies to deliver innovative solutions that meet and exceed client expectations. I believe in writing clean, efficient, and scalable code that stands the test of time."
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 667,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-card p-6 rounded-xl transition duration-300 hover:shadow-2xl hover:shadow-cyan-500/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-code text-2xl mb-3 text-accent-blue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-xl mb-1 text-white",
                                                                    children: "CLEAN CODE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 674,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Focus on maintainable, well-documented, and scalable codebase architecture."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 675,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 672,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "glass-card p-6 rounded-xl transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-laptop-code text-2xl mb-3 text-neon-purple"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-xl mb-1 text-white",
                                                                    children: "RESPONSIVENESS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-400 text-sm",
                                                                    children: "Pixel-perfect design ensured across mobile, tablet, and desktop environments."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 677,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 663,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "w-full lg:w-1/2 flex justify-center items-center h-96 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-64 h-64 rounded-full border border-blue-500/30 animate-ping",
                                                        style: {
                                                            animationDuration: '3s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 687,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-48 h-48 rounded-full border border-purple-500/30 animate-ping",
                                                        style: {
                                                            animationDuration: '2.5s',
                                                            animationDelay: '0.5s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 688,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-32 h-32 rounded-full border border-cyan-500/30 animate-ping",
                                                        style: {
                                                            animationDuration: '2s',
                                                            animationDelay: '1s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-3 h-3 rounded-full bg-blue-500 animate-orbit",
                                                        style: {
                                                            '--orbit-size': '120px',
                                                            '--orbit-duration': '4s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 691,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-2 h-2 rounded-full bg-purple-500 animate-orbit",
                                                        style: {
                                                            '--orbit-size': '90px',
                                                            '--orbit-duration': '3s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 692,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-2.5 h-2.5 rounded-full bg-cyan-500 animate-orbit",
                                                        style: {
                                                            '--orbit-size': '150px',
                                                            '--orbit-duration': '5s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 693,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 animate-pulse-glow",
                                                        style: {
                                                            boxShadow: '0 0 60px rgba(59, 130, 246, 0.6), 0 0 90px rgba(138, 43, 226, 0.4)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 685,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 662,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "skills",
                        className: "py-24 md:py-32 bg-mid-dark-bg scroll-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "container mx-auto max-w-7xl px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white",
                                    children: [
                                        "Skills & ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "Expertise"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 705,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 704,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-400 mb-20 text-lg",
                                    children: "Combining technical excellence with creative vision"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row gap-16 items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:w-2/5 flex justify-center relative w-full lg:w-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                id: "skill-diagram",
                                                className: "skill-ring-container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-center-toggle",
                                                        className: "skill-center rounded-full flex items-center justify-center z-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-bolt text-4xl text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 715,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 714,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-mobile",
                                                        "data-skill": "Mobile",
                                                        "data-stack": "stack-creative",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-paint-brush"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 719,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Design"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 720,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 718,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-react",
                                                        "data-skill": "Frontend",
                                                        "data-stack": "stack-frontend",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fab fa-react"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 723,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Frontend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 724,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 722,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-uiux",
                                                        "data-skill": "UI/UX",
                                                        "data-stack": "stack-tools",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-toolbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 727,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Tools"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 728,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 726,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-innovation",
                                                        "data-skill": "Innovation",
                                                        "data-stack": "stack-frontend",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-laptop-code"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 731,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Web Dev"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 732,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 730,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-tools",
                                                        "data-skill": "Tools",
                                                        "data-stack": "stack-backend",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-database"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 735,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Database"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 736,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 734,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "skill-backend",
                                                        "data-skill": "Backend",
                                                        "data-stack": "stack-backend",
                                                        className: "skill-icon glass-card rounded-full flex items-center justify-center text-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                className: "fas fa-server"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 739,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "absolute -bottom-6 text-xs text-gray-400 font-semibold",
                                                                children: "Backend"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 740,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 738,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 713,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 712,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "skill-stacks-list",
                                            className: "lg:w-3/5 space-y-6 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    id: "stack-frontend",
                                                    className: "glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group",
                                                    style: {
                                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-laptop-code text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 748,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold gradient-text",
                                                                    children: "Frontend Excellence"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 747,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300",
                                                            children: "Modern JavaScript frameworks, responsive design, and pixel-perfect implementations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 751,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "stack-content-frontend",
                                                            className: "tech-stack-container"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 752,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 746,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    id: "stack-backend",
                                                    className: "glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group",
                                                    style: {
                                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-server text-2xl text-purple-400 group-hover:scale-110 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 757,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold gradient-text",
                                                                    children: "Backend Development"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 758,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 756,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300",
                                                            children: "Designing robust APIs, managing databases, and building scalable server-side architecture."
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 760,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "stack-content-backend",
                                                            className: "tech-stack-container"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 761,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 755,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    id: "stack-creative",
                                                    className: "glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group",
                                                    style: {
                                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-palette text-2xl text-pink-400 group-hover:scale-110 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold gradient-text",
                                                                    children: "Creative Design"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 765,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300",
                                                            children: "User-centered design thinking with a focus on accessibility and visual appeal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 769,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "stack-content-creative",
                                                            className: "tech-stack-container"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 770,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 764,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    id: "stack-tools",
                                                    className: "glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group",
                                                    style: {
                                                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-tools text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 775,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold gradient-text",
                                                                    children: "Development Tools"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 774,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300",
                                                            children: "Essential tools for efficient development and version control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 778,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "stack-content-tools",
                                                            className: "tech-stack-container"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 779,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 773,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 745,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "portfolio",
                        className: "py-24 md:py-32 bg-transparent scroll-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "container mx-auto max-w-7xl px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white",
                                    children: [
                                        "VIEW MY ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "WORKS"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 790,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-400 mb-20 text-lg",
                                    children: "My latest projects and case studies"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 792,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        id: "portfolio-filters",
                                        className: "glass-card p-2 rounded-full flex flex-wrap justify-center space-x-3 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                "data-filter": "all",
                                                className: "px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-accent-blue text-white border-accent-blue hover:bg-blue-600",
                                                children: "All Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 798,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                "data-filter": "frontend",
                                                className: "px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50",
                                                children: "Frontend"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 801,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                "data-filter": "fullstack",
                                                className: "px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50",
                                                children: "Full-Stack"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 804,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                "data-filter": "creative",
                                                className: "px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50",
                                                children: "Creative UI/3D"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                "data-filter": "backend",
                                                className: "px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50",
                                                children: "Backend/API"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 810,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 797,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    id: "portfolio-grid",
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 816,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                    id: "interests",
                                    className: "mt-16 py-20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "container mx-auto max-w-7xl px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "mb-12 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        className: "text-4xl md:text-5xl font-bold text-white mb-4",
                                                        children: [
                                                            "My ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "gradient-text",
                                                                children: "Passions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 821,
                                                                columnNumber: 85
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 821,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-lg max-w-2xl mx-auto",
                                                        children: "Innovating at the intersection of technology and creativity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 822,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 820,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "interests-grid",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "interest-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "interest-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-robot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 828,
                                                                    columnNumber: 52
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 828,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                children: "AI & Automation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 829,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                children: "Leveraging artificial intelligence and machine learning to build intelligent automation solutions. From chatbots to predictive analytics, I create systems that learn and adapt to deliver smarter experiences."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 830,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#portfolio",
                                                                className: "inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto",
                                                                children: [
                                                                    "Explore AI ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-arrow-right text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/index.jsx",
                                                                        lineNumber: 832,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 831,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 827,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "interest-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "interest-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-cloud"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 52
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                children: "Cloud Computing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 837,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                children: "Building scalable cloud-native applications on AWS, Azure, and Google Cloud. Expert in serverless architecture, containerization, and designing resilient distributed systems that scale effortlessly."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#portfolio",
                                                                className: "inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto",
                                                                children: [
                                                                    "Cloud Projects ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-arrow-right text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/index.jsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 38
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 839,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 835,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "interest-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "interest-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-layer-group"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 844,
                                                                    columnNumber: 52
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 844,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                children: "Full-Stack Development"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 845,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                children: "Crafting end-to-end web applications with modern technologies. From responsive frontends with React to robust backends with Node.js and databases, I build complete solutions that users love."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 846,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#portfolio",
                                                                className: "inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto",
                                                                children: [
                                                                    "View Projects ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-arrow-right text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/index.jsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 847,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "interest-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "interest-icon",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-mobile-alt"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 52
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 852,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                children: "Mobile Innovation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 853,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                children: "Creating cutting-edge mobile experiences with React Native and Flutter. Building cross-platform apps that deliver native performance with beautiful, intuitive interfaces that engage users."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 854,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                                href: "#portfolio",
                                                                className: "inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto",
                                                                children: [
                                                                    "Mobile Apps ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                        className: "fas fa-arrow-right text-sm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/index.jsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 35
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/index.jsx",
                                                                lineNumber: 855,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.jsx",
                                                        lineNumber: 851,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 826,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.jsx",
                                        lineNumber: 819,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 818,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 788,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 787,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "py-24 md:py-32 bg-mid-dark-bg scroll-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "container mx-auto max-w-7xl px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white",
                                    children: [
                                        "Let's Create ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "Together"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 869,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 868,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-400 mb-20 text-lg",
                                    children: "Ready to bring your ideas to life? Let's start a conversation"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 871,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col lg:flex-row gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:w-1/3 p-8 glass-card rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-bold mb-6 gradient-text",
                                                    children: "Get In Touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 877,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 mb-8 leading-relaxed",
                                                    children: "I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you."
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 878,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-map-marker-alt mr-3 text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 884,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Based In:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "block text-gray-400 font-normal ml-6",
                                                                    children: "San Francisco, CA (Open to Remote)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 885,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 883,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "fas fa-hands-helping mr-3 text-green-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 888,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " Available for:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "block text-gray-400 font-normal ml-6 space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: "Freelance Projects"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 890,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: "Full-time Opportunities"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 891,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            children: "Consulting & Code Reviews"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.jsx",
                                                                            lineNumber: 892,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 887,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 882,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 876,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:w-2/3 p-8 glass-card rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                                    id: "contact-form",
                                                    className: "space-y-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Your Name",
                                                            className: "w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600",
                                                            style: {
                                                                outline: 'none'
                                                            },
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 900,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "email",
                                                            placeholder: "Your Email",
                                                            className: "w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600",
                                                            style: {
                                                                outline: 'none'
                                                            },
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 902,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                            className: "w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600 cursor-pointer",
                                                            style: {
                                                                outline: 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Project Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "freelance",
                                                                    children: "Freelance"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "fulltime",
                                                                    children: "Full-time Inquiry"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 907,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                    value: "consulting",
                                                                    children: "Consulting"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 908,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 904,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                            placeholder: "Tell me about your project...",
                                                            rows: "4",
                                                            className: "w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600 resize-none",
                                                            style: {
                                                                outline: 'none'
                                                            },
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 911,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: "w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden group",
                                                            style: {
                                                                backgroundSize: '200% 200%',
                                                                animation: 'gradient-shift 3s ease infinite'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "relative z-10",
                                                                    children: "Send Message"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 914,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.jsx",
                                                                    lineNumber: 915,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 913,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 899,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    id: "form-message",
                                                    className: "mt-4 text-center text-green-400 font-semibold hidden animate-pulse",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-check-circle mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.jsx",
                                                            lineNumber: 919,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Message Sent Successfully! I'll be in touch soon."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.jsx",
                                                    lineNumber: 918,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 898,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 875,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 867,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 866,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                        className: "py-10 border-t border-gray-800 bg-dark-bg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "container mx-auto max-w-7xl px-6 text-center text-gray-500 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "© 2026 Mithan's Folio. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition duration-300",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 930,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 931,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition duration-300",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 932,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 933,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition duration-300",
                                            children: "Careers"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 934,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-x-4 text-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://www.facebook.com/share/1DANjki2gL/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-gray-500 hover:text-blue-600 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "fab fa-facebook"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 937,
                                                columnNumber: 178
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 937,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://github.com/Mithanraj23",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-gray-500 hover:text-white transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "fab fa-github"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 938,
                                                columnNumber: 163
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 938,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://linkedin.com/in/mithanraj",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-gray-500 hover:text-blue-500 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "fab fa-linkedin"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 939,
                                                columnNumber: 169
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 939,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "https://www.instagram.com/itz_mithan_23/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "text-gray-500 hover:text-pink-500 transition-colors duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                className: "fab fa-instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.jsx",
                                                lineNumber: 940,
                                                columnNumber: 176
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.jsx",
                                            lineNumber: 940,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.jsx",
                                    lineNumber: 936,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 927,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 926,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        id: "scrollToTopBtn",
                        title: "Go to top",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                            className: "fas fa-arrow-up"
                        }, void 0, false, {
                            fileName: "[project]/pages/index.jsx",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 945,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 509,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__602e7fd2._.js.map