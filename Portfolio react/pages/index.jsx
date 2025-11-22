import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on navigation or resize to larger screens
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && mobileMenuOpen) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // --- DOM references ---
    const bgLayer = document.getElementById('layer-bg')
    const midLayer = document.getElementById('layer-mid')
    const scrollToTopBtn = document.getElementById('scrollToTopBtn')
    const navLinks = document.querySelectorAll('.nav-link')
    const sections = document.querySelectorAll('.scroll-hidden')
    const mainHeader = document.getElementById('main-header')

    const bgSpeed = parseFloat(bgLayer?.getAttribute('data-speed')) || 0.1
    const midSpeed = parseFloat(midLayer?.getAttribute('data-speed')) || 0.2

    let lastScrollY = window.scrollY
    let ticking = false

    function updateParallax(currentScrollY) {
      const bgTranslateY = currentScrollY * bgSpeed
      const midTranslateY = currentScrollY * midSpeed

      if (bgLayer) bgLayer.style.transform = `translate3d(0, ${bgTranslateY}px, 0)`
      if (midLayer) midLayer.style.transform = `translate3d(0, ${midTranslateY}px, 0)`

      ticking = false
    }

    function checkScrollAnimations() {
      let currentActiveSection = ''
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const isVisible = (rect.top <= (window.innerHeight - rect.height * 0.2) && rect.bottom >= (rect.height * 0.2))

        if (isVisible) {
          section.classList.add('scroll-visible')
          currentActiveSection = section.id

          const sectionChildren = section.querySelectorAll('h2, h3, p, .glass-card, .interest-card')
          sectionChildren.forEach((child, index) => {
            setTimeout(() => {
              if (index % 2 === 0) {
                child.classList.add('animate-fade-in-left')
              } else {
                child.classList.add('animate-fade-in-right')
              }
            }, index * 100)
          })
        } else {
          section.classList.remove('scroll-visible')
        }
      })

      navLinks.forEach(link => {
        link.classList.remove('active')
        if (window.scrollY < 300) {
          if (link.getAttribute('href') === '#hero') {
            link.classList.add('active')
          }
          return
        }
        if (link.getAttribute('href').substring(1) === currentActiveSection) {
          link.classList.add('active')
        }
      })

      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex'
      } else {
        scrollToTopBtn.style.display = 'none'
      }
    }

    scrollToTopBtn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    function handleScroll() {
      lastScrollY = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax(lastScrollY)
          checkScrollAnimations()
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    // Enhanced header scroll effect
    let lastScroll = 0
    const headerScrollHandler = () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > 100) {
        mainHeader.style.backdropFilter = 'blur(20px)'
        mainHeader.style.backgroundColor = 'rgba(17, 20, 37, 0.95)'
        mainHeader.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
        mainHeader.style.borderBottom = '1px solid rgba(59, 130, 246, 0.2)'
      } else {
        mainHeader.style.backdropFilter = 'blur(12px)'
        mainHeader.style.backgroundColor = 'rgba(17, 20, 37, 0.9)'
        mainHeader.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)'
        mainHeader.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', headerScrollHandler)

    // --- Skills & Stacks logic ---
    const skillCenterToggle = document.getElementById('skill-center-toggle')
    const skillStacksList = document.getElementById('skill-stacks-list')
    const skillIconsNodeList = document.querySelectorAll('.skill-icon')
    const skillIcons = Array.from(skillIconsNodeList)
    let isExpanded = false

    const detailedTechStacks = {
      "stack-content-frontend": [
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
        { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-500" },
        { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
        { name: "Tailwind", icon: "fas fa-wind", color: "text-sky-500" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" },
        { name: "jQuery", icon: "fas fa-code", color: "text-blue-700" },
      ],
      "stack-content-backend": [
        { name: "Java", icon: "fab fa-java", color: "text-red-600" },
        { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "SQL", icon: "fas fa-database", color: "text-gray-400" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-600" },
        { name: "Express", icon: "fas fa-server", color: "text-gray-400" },
      ],
      "stack-content-creative": [
        { name: "Figma", icon: "fab fa-figma", color: "text-pink-500" },
        { name: "UI/UX", icon: "fas fa-drafting-compass", color: "text-yellow-600" },
        { name: "Prototyping", icon: "fas fa-layer-group", color: "text-purple-400" },
        { name: "Three.js", icon: "fas fa-cubes", color: "text-white" },
      ],
      "stack-content-tools": [
        { name: "VS Code", icon: "fas fa-code", color: "text-blue-400" },
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600" },
        { name: "GitHub", icon: "fab fa-github", color: "text-white" },
        { name: "Vercel", icon: "fas fa-triangle", color: "text-white" },
        { name: "IDLE (Python)", icon: "fab fa-python", color: "text-yellow-400" },
        { name: "IntelliJ IDEA", icon: "fas fa-tools", color: "text-red-700" },
      ]
    }

    function populateStacks() {
      for (const id in detailedTechStacks) {
        const container = document.getElementById(id)
        if (container) {
          container.innerHTML = ''
          const innerContainer = document.createElement('div')
          innerContainer.className = 'flex flex-wrap justify-start gap-4 p-4 bg-gray-900/40 rounded-lg'
          detailedTechStacks[id].forEach(stack => {
            const isVercel = stack.name === 'Vercel'
            const iconHtml = `
              <div class="tech-icon-item">
                <i class="${stack.icon} ${stack.color} text-3xl mb-1 ${isVercel ? 'fa-vercel' : ''}"></i>
                <span class="text-xs text-gray-400">${stack.name}</span>
              </div>
            `
            innerContainer.insertAdjacentHTML('beforeend', iconHtml)
          })
          container.appendChild(innerContainer)
        }
      }
    }

    function setRadialPositions() {
      const container = document.getElementById('skill-diagram')
      if (!container) return
      const radius = 155
      const center = 200
      const icons = [
        'skill-mobile',
        'skill-react',
        'skill-uiux',
        'skill-innovation',
        'skill-tools',
        'skill-backend'
      ]
      const totalIcons = icons.length
      const angleStep = 360 / totalIcons

      icons.forEach((id, index) => {
        const element = document.getElementById(id)
        if (element) {
          const angle = angleStep * index - 90
          const angleRad = angle * (Math.PI / 180)
          const x = center + radius * Math.cos(angleRad) - 40
          const y = center + radius * Math.sin(angleRad) - 40
          element.style.left = `${x}px`
          element.style.top = `${y}px`
        }
      })
    }

    function toggleSkillIcons() {
      const isVisible = skillIcons[0]?.classList.contains('visible')
      skillIcons.forEach(icon => {
        if (isVisible) icon.classList.remove('visible')
        else icon.classList.add('visible')
      })
    }

    skillIcons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        const stackId = icon.getAttribute('data-stack')
        if (stackId) {
          const shouldOpen = true
          toggleSingleStack(stackId, shouldOpen)

          const stackCard = document.getElementById(stackId)
          if (stackCard) stackCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      })
    })

    function toggleSingleStack(cardId, shouldOpen) {
      const contentId = `stack-content-${cardId.split('-').pop()}`
      const contentContainer = document.getElementById(contentId)
      const card = document.getElementById(cardId)

      skillStacksList.querySelectorAll('.tech-stack-container').forEach(c => c.classList.remove('expanded'))
      skillStacksList.querySelectorAll('.glass-card').forEach(c => {
        c.classList.remove('border-accent-blue', 'border-2')
        c.style.transform = 'scale(1)'
      })

      if (contentContainer && card && shouldOpen) {
        contentContainer.classList.add('expanded')
        card.classList.add('border-accent-blue', 'border-2')
        card.style.transform = 'scale(1.02)'
        isExpanded = true
      } else {
        isExpanded = false
      }
    }

    skillCenterToggle?.addEventListener('click', toggleSkillIcons)

    const stackCards = skillStacksList?.querySelectorAll('.glass-card') || []
    stackCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const contentId = `stack-content-${card.id.split('-').pop()}`
        const contentContainer = document.getElementById(contentId)
        const shouldOpen = !contentContainer.classList.contains('expanded')
        toggleSingleStack(card.id, shouldOpen)
      })
    })

    // --- Portfolio rendering and project data ---
    const PROJECT_DATA = [
      {
        title: "QR Code Generator",
        description: "A simple yet powerful QR code generator web application, built for efficiency and ease of use. Focus on speed and modern design.",
        link: "https://qr-generator23.vercel.app/",
        category: "frontend",
        tags: ["React", "Tailwind CSS", "API"],
        color: "cyan"
      },
      {
        title: "Cypher Wallet (Mobile App)",
        description: "A secure mobile banking application prototype built with React Native, featuring custom UI/UX design and biometrics integration.",
        link: "https://mithan23.neocities.org/Projects/cypher-wallet",
        category: "fullstack",
        tags: ["React Native", "UI/UX", "Biometrics"],
        color: "purple"
      },
      {
        title: "DeepMind API Service",
        description: "A robust backend service using Python/FastAPI for machine learning inference, deployed with Docker and Kubernetes.",
        link: "https://mithan23.neocities.org/Projects/deepmind-api",
        category: "backend",
        tags: ["Python", "FastAPI", "Docker", "ML"],
        color: "green"
      },
      {
        title: "Retro Grid UI",
        description: "A pure CSS/HTML static site showcasing an 80s cyberpunk aesthetic with custom animated background effects.",
        link: "https://mithan23.neocities.org/Projects/retro-grid",
        category: "creative",
        tags: ["HTML", "CSS", "Animation"],
        color: "red"
      },
      {
        title: "Dynamic Blog Platform",
        description: "A full-stack blog platform with user authentication, rich text editing, and dynamic content serving.",
        link: "https://mithan23.neocities.org/Projects/blog-platform",
        category: "fullstack",
        tags: ["Node.js", "Express", "MongoDB"],
        color: "blue"
      },
      {
        title: "3D Portfolio Viewer",
        description: "An experimental project using Three.js to render a 3D environment where projects can be interactively viewed.",
        link: "https://mithan23.neocities.org/Projects/3d-portfolio",
        category: "creative",
        tags: ["Three.js", "JavaScript", "3D"],
        color: "yellow"
      }
    ]

    function renderProjects(filter = 'all') {
      const portfolioGrid = document.getElementById('portfolio-grid')
      if (!portfolioGrid) return
      portfolioGrid.innerHTML = ''

      const filteredProjects = filter === 'all'
        ? PROJECT_DATA
        : PROJECT_DATA.filter(p => p.category === filter)

      filteredProjects.forEach(project => {
        const tagsHtml = project.tags.map(tag =>
          `<span class="text-xs font-medium bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600">${tag}</span>`
        ).join('')

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
                `
        portfolioGrid.insertAdjacentHTML('beforeend', projectHtml)
      })

      updateFilterButtons(filter)
    }

    function updateFilterButtons(activeFilter) {
      const buttons = document.querySelectorAll('#portfolio-filters button')
      buttons.forEach(button => {
        button.classList.remove('bg-accent-blue', 'text-white', 'border-accent-blue', 'hover:bg-blue-600')
        button.classList.add('bg-gray-800/50', 'text-gray-400', 'border-gray-700/50', 'hover:bg-gray-700/50')

        if (button.getAttribute('data-filter') === activeFilter) {
          button.classList.remove('bg-gray-800/50', 'text-gray-400', 'border-gray-700/50')
          button.classList.add('bg-accent-blue', 'text-white', 'border-accent-blue', 'hover:bg-blue-600')
        }
      })
    }

    // --- Contact form simulation ---
    const form = document.getElementById('contact-form')
    const formMessage = document.getElementById('form-message')

    function formSubmitHandler(e) {
      e.preventDefault()
      const btn = form.querySelector('button')
      btn.textContent = 'Sending...'
      btn.disabled = true

      setTimeout(() => {
        form.reset()
        formMessage.classList.remove('hidden')
        btn.textContent = 'Send Message'
        btn.disabled = false

        setTimeout(() => {
          formMessage.classList.add('hidden')
        }, 5000)
      }, 1500)
    }

    form?.addEventListener('submit', formSubmitHandler)

    function createBackgroundParticles() {
      const colors = [
        'rgba(59, 130, 246, 0.3)',
        'rgba(138, 43, 226, 0.3)',
        'rgba(0, 191, 255, 0.3)',
        'rgba(236, 72, 153, 0.3)'
      ]

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'

        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s infinite ease-in-out`
        particle.style.animationDelay = `${Math.random() * 5}s`

        document.body.appendChild(particle)
      }
    }

    // On load actions
    requestAnimationFrame(() => {
      updateParallax(window.scrollY)
      checkScrollAnimations()
      setRadialPositions()
      populateStacks()
      createBackgroundParticles()
      renderProjects('all')

      const portfolioFiltersEl = document.getElementById('portfolio-filters')
      const portfolioGridEl = document.getElementById('portfolio-grid')

      const portfolioFiltersHandler = (e) => {
        const target = e.target.closest('button')
        if (target && target.hasAttribute('data-filter')) {
          renderProjects(target.getAttribute('data-filter'))
          // close mobile sidebar when a filter is chosen
          setMobileMenuOpen(false)
        }
      }

      const portfolioGridHandler = (e) => {
        // close the sidebar when any project (or link) inside the grid is clicked
        const target = e.target.closest('a, button, [data-project-id], .portfolio-item')
        if (target) setMobileMenuOpen(false)
      }

      portfolioFiltersEl?.addEventListener('click', portfolioFiltersHandler)
      portfolioGridEl?.addEventListener('click', portfolioGridHandler)
    })

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('scroll', headerScrollHandler)
      scrollToTopBtn?.removeEventListener('click', () => {})
      form?.removeEventListener('submit', formSubmitHandler)
      skillCenterToggle?.removeEventListener('click', toggleSkillIcons)
      // cleanup portfolio listeners
      portfolioFiltersEl?.removeEventListener('click', portfolioFiltersHandler)
      portfolioGridEl?.removeEventListener('click', portfolioGridHandler)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Mithan's Folio - Creative Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mithan's Portfolio - Creative Web & Full-Stack Developer specializing in modern web applications" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      {/* Page content converted to JSX (kept structure/ids/classes intact) */}
      <div className="antialiased min-h-screen">
        <header id="main-header" className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-dark-bg/90 border-b border-gray-700/50 transition-all duration-500 shadow-lg shadow-black/20">
          <nav className="container mx-auto flex justify-between items-center max-w-7xl">
            <div className="text-2xl font-extrabold text-white flex items-center">
              <i className="fas fa-cube text-xl mr-2 text-accent-blue"></i>
              Mithan <span className="gradient-text ml-1">Folio</span>
            </div>

            {/* Desktop nav (hidden on small screens) */}
            <div className="hidden md:flex space-x-2 md:space-x-4 text-sm font-medium">
              <a href="#hero" className="nav-link active">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            {/* Mobile hamburger (visible on small screens) */}
            <div className="md:hidden">
              <button aria-label="Open menu" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md bg-gray-800/40 hover:bg-gray-800/60">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile sidebar (slides in) */}
          <div className={`fixed inset-0 z-60 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* overlay (colored/opaque) */}
            <div onClick={() => setMobileMenuOpen(false)} className={`fixed inset-0 bg-gradient-to-br from-blue-900/70 via-purple-800/60 to-pink-800/50 transition-opacity ${mobileMenuOpen ? 'opacity-90' : 'opacity-0'}`} />

            <aside className={`fixed top-0 left-0 h-full w-64 transform bg-dark-bg backdrop-blur-md border-r border-gray-700/40 transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 70 }}>
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-white">Mithan <span className="gradient-text">Folio</span></div>
                  <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-md bg-gray-800/30 hover:bg-gray-800/50">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-3">
                  <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</a>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About</a>
                  <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="nav-link">Skills</a>
                  <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="nav-link">Portfolio</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
                </nav>

                <div className="mt-auto">
                  <div className="flex gap-4">
                    <a href="https://github.com/Mithanraj23" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/mithanraj" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </header>

        <section id="hero" className="parallax-container h-[120vh]">
          <div id="layer-bg" data-speed="0.05" className="parallax-layer layer-bg"></div>
          <div id="layer-mid" data-speed="0.15" className="parallax-layer layer-mid"></div>

          <div className="layer-fg z-40 p-4 pt-20 flex items-center justify-center h-full">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 text-left space-y-6 hero-content-animate">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                    I'M <span className="gradient-text">MITHAN</span>
                  </h1>
                  <p className=" text-gray-400 mb-16 text-lg">
                    <span style={{ color: 'var(--neon-blue)' }}>WEB</span> & <span style={{ color: 'var(--neon-purple)' }}>FULL-STACK</span> DEVELOPER
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    I'm passionate about crafting beautiful, responsive web applications with cutting-edge technology. 
                    With expertise in both frontend and backend development, I transform ideas into scalable, user-centric digital experiences.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href="#portfolio" className="px-8 py-3 bg-accent-blue text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                      View My Works
                    </a>
                    <a href="#contact" className="btn-talk">
                      Let's Talk
                    </a>
                  </div>

                  <div className="social-links flex gap-6 mt-8">
                    <a href="https://www.facebook.com/share/1DANjki2gL/" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-blue-600 transition-colors duration-300"><i className="fab fa-facebook"></i></a>
                    <a href="https://github.com/Mithanraj23" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/mithanraj" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors duration-300"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/itz_mithan_23/" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-pink-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>

                <div className="lg:w-1/2 flex items-center justify-center relative">
                  <div className="relative w-96 h-96">
                    <div className="absolute inset-0 bg-gray-900/80 rounded-2xl border-2 border-blue-500/30 overflow-hidden shadow-2xl">
                      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 text-gray-400 text-sm">index.jsx</span>
                      </div>

                      <div className="p-4 font-mono text-sm leading-relaxed">
                        <div className="code-line"><span className="text-purple-400">import</span> <span className="text-blue-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></div>
                        <div className="code-line"><span className="text-purple-400">import</span> <span className="text-blue-300">&#123; useState &#125;</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span></div>
                        <div className="code-line mt-2"></div>
                        <div className="code-line"><span className="text-purple-400">const</span> <span className="text-yellow-300">Portfolio</span> = () <span className="text-purple-400">=</span> &#123;</div>
                        <div className="code-line ml-4"><span className="text-purple-400">const</span> [<span className="text-blue-300">skills</span>] = <span className="text-yellow-300">useState</span>([</div>
                        <div className="code-line ml-8"><span className="text-green-400">'React'</span>,</div>
                        <div className="code-line ml-8"><span className="text-green-400">'Node.js'</span>,</div>
                        <div className="code-line ml-8"><span className="text-green-400">'MongoDB'</span>,</div>
                        <div className="code-line ml-4">])</div>
                        <div className="code-line mt-2"></div>
                        <div className="code-line ml-4"><span className="text-purple-400">return</span> (</div>
                        <div className="code-line ml-8"><span className="text-gray-500">&lt;</span><span className="text-blue-400">div</span> <span className="text-cyan-300">className</span>=<span className="text-green-400">"portfolio"</span><span className="text-gray-500">&gt;</span></div>
                        <div className="code-line ml-12"><span className="text-gray-500">&lt;</span><span className="text-blue-400">h1</span><span className="text-gray-500">&gt;</span><span className="text-white">Creative Dev</span><span className="cursor-blink">|</span></div>
                        <div className="code-line ml-8"><span className="text-gray-500">&lt;/</span><span className="text-blue-400">div</span><span className="text-gray-500">&gt;</span></div>
                        <div className="code-line ml-4">)</div>
                        <div className="code-line">&#125;</div>
                      </div>
                    </div>

                    <div className="absolute -top-8 -right-8 text-4xl text-blue-500/40 animate-float" style={{ animationDelay: '0s' }}>&lt;/&gt;</div>
                    <div className="absolute -bottom-8 -left-8 text-3xl text-purple-500/40 animate-float" style={{ animationDelay: '1s' }}>&#123; &#125;</div>
                    <div className="absolute top-1/4 -left-12 text-2xl text-cyan-500/40 animate-float" style={{ animationDelay: '2s' }}>&lt;div&gt;</div>
                    <div className="absolute bottom-1/4 -right-12 text-2xl text-pink-500/40 animate-float" style={{ animationDelay: '1.5s' }}>( )</div>

                    <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-5 w-1 h-1 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-transparent to-mid-dark-bg min-h-screen scroll-hidden">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white">
              ABOUT <span className="gradient-text">ME</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              <span style={{ color: 'var(--neon-blue)' }}>WEB</span> & <span style={{ color: 'var(--neon-purple)' }}>FULL-STACK</span> DEVELOPER
            </p>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="lg:w-1/2 space-y-8">
                <p className="text-xl text-gray-300 border-l-4 border-accent-blue pl-4 italic">
                  I am a dedicated Web and Full-Stack Developer with a strong passion for building dynamic, user-friendly, and high-performance web applications. My expertise spans from crafting engaging frontend interfaces to designing robust backend systems.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My journey in development is driven by a desire to solve complex problems and create meaningful digital experiences. I thrive on continuous learning and adapting to new technologies to deliver innovative solutions that meet and exceed client expectations. I believe in writing clean, efficient, and scalable code that stands the test of time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="glass-card p-6 rounded-xl transition duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <i className="fas fa-code text-2xl mb-3 text-accent-blue"></i>
                    <h3 className="font-bold text-xl mb-1 text-white">CLEAN CODE</h3>
                    <p className="text-gray-400 text-sm">Focus on maintainable, well-documented, and scalable codebase architecture.</p>
                  </div>
                  <div className="glass-card p-6 rounded-xl transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <i className="fas fa-laptop-code text-2xl mb-3 text-neon-purple"></i>
                    <h3 className="font-bold text-xl mb-1 text-white">RESPONSIVENESS</h3>
                    <p className="text-gray-400 text-sm">Pixel-perfect design ensured across mobile, tablet, and desktop environments.</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center items-center h-96 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 rounded-full border border-blue-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute w-48 h-48 rounded-full border border-purple-500/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                  <div className="absolute w-32 h-32 rounded-full border border-cyan-500/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }}></div>

                  <div className="absolute w-3 h-3 rounded-full bg-blue-500 animate-orbit" style={{ '--orbit-size': '120px', '--orbit-duration': '4s' }}></div>
                  <div className="absolute w-2 h-2 rounded-full bg-purple-500 animate-orbit" style={{ '--orbit-size': '90px', '--orbit-duration': '3s' }}></div>
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-cyan-500 animate-orbit" style={{ '--orbit-size': '150px', '--orbit-duration': '5s' }}></div>

                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 animate-pulse-glow" style={{ boxShadow: '0 0 60px rgba(59, 130, 246, 0.6), 0 0 90px rgba(138, 43, 226, 0.4)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 md:py-32 bg-mid-dark-bg scroll-hidden">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-center text-gray-400 mb-20 text-lg">
              Combining technical excellence with creative vision
            </p>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-2/5 flex justify-center relative w-full lg:w-auto">
                <div id="skill-diagram" className="skill-ring-container">
                  <div id="skill-center-toggle" className="skill-center rounded-full flex items-center justify-center z-20">
                    <i className="fas fa-bolt text-4xl text-white"></i>
                  </div>

                  <div id="skill-mobile" data-skill="Mobile" data-stack="stack-creative" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fas fa-paint-brush"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Design</span>
                  </div>
                  <div id="skill-react" data-skill="Frontend" data-stack="stack-frontend" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fab fa-react"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Frontend</span>
                  </div>
                  <div id="skill-uiux" data-skill="UI/UX" data-stack="stack-tools" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fas fa-toolbox"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Tools</span>
                  </div>
                  <div id="skill-innovation" data-skill="Innovation" data-stack="stack-frontend" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fas fa-laptop-code"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Web Dev</span>
                  </div>
                  <div id="skill-tools" data-skill="Tools" data-stack="stack-backend" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fas fa-database"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Database</span>
                  </div>
                  <div id="skill-backend" data-skill="Backend" data-stack="stack-backend" className="skill-icon glass-card rounded-full flex items-center justify-center text-3xl">
                    <i className="fas fa-server"></i>
                    <span className="absolute -bottom-6 text-xs text-gray-400 font-semibold">Backend</span>
                  </div>
                </div>
              </div>

              <div id="skill-stacks-list" className="lg:w-3/5 space-y-6 w-full">
                <div id="stack-frontend" className="glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-laptop-code text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <h3 className="text-xl font-bold gradient-text">Frontend Excellence</h3>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Modern JavaScript frameworks, responsive design, and pixel-perfect implementations</p>
                  <div id="stack-content-frontend" className="tech-stack-container"></div>
                </div>

                <div id="stack-backend" className="glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-server text-2xl text-purple-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <h3 className="text-xl font-bold gradient-text">Backend Development</h3>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Designing robust APIs, managing databases, and building scalable server-side architecture.</p>
                  <div id="stack-content-backend" className="tech-stack-container"></div>
                </div>

                <div id="stack-creative" className="glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-palette text-2xl text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <h3 className="text-xl font-bold gradient-text">Creative Design</h3>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">User-centered design thinking with a focus on accessibility and visual appeal</p>
                  <div id="stack-content-creative" className="tech-stack-container"></div>
                </div>

                <div id="stack-tools" className="glass-card p-6 rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-tools text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300"></i>
                    <h3 className="text-xl font-bold gradient-text">Development Tools</h3>
                  </div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Essential tools for efficient development and version control</p>
                  <div id="stack-content-tools" className="tech-stack-container"></div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 md:py-32 bg-transparent scroll-hidden">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white">
              VIEW MY <span className="gradient-text">WORKS</span>
            </h2>
            <p className="text-center text-gray-400 mb-20 text-lg">
              My latest projects and case studies
            </p>

            <div className="flex justify-center mb-12">
              <div id="portfolio-filters" className="glass-card p-2 rounded-full flex flex-wrap justify-center space-x-3 shadow-xl">
                <button data-filter="all" className="px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-accent-blue text-white border-accent-blue hover:bg-blue-600">
                  All Projects
                </button>
                <button data-filter="frontend" className="px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50">
                  Frontend
                </button>
                <button data-filter="fullstack" className="px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50">
                  Full-Stack
                </button>
                <button data-filter="creative" className="px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50">
                  Creative UI/3D
                </button>
                <button data-filter="backend" className="px-5 py-2 rounded-full text-sm font-semibold transition duration-300 bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-gray-700/50">
                  Backend/API
                </button>
              </div>
            </div>

            <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>

            <section id="interests" className="mt-16 py-20">
              <div className="container mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="gradient-text">Passions</span></h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Innovating at the intersection of technology and creativity
                  </p>
                </div>
                <div className="interests-grid">
                  <div className="interest-card">
                    <div className="interest-icon"><i className="fas fa-robot"></i></div>
                    <h3>AI & Automation</h3>
                    <p>Leveraging artificial intelligence and machine learning to build intelligent automation solutions. From chatbots to predictive analytics, I create systems that learn and adapt to deliver smarter experiences.</p>
                    <a href="#portfolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto">
                      Explore AI <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                  </div>
                  <div className="interest-card">
                    <div className="interest-icon"><i className="fas fa-cloud"></i></div>
                    <h3>Cloud Computing</h3>
                    <p>Building scalable cloud-native applications on AWS, Azure, and Google Cloud. Expert in serverless architecture, containerization, and designing resilient distributed systems that scale effortlessly.</p>
                    <a href="#portfolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto">
                      Cloud Projects <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                  </div>
                  <div className="interest-card">
                    <div className="interest-icon"><i className="fas fa-layer-group"></i></div>
                    <h3>Full-Stack Development</h3>
                    <p>Crafting end-to-end web applications with modern technologies. From responsive frontends with React to robust backends with Node.js and databases, I build complete solutions that users love.</p>
                    <a href="#portfolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto">
                      View Projects <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                  </div>
                  <div className="interest-card">
                    <div className="interest-icon"><i className="fas fa-mobile-alt"></i></div>
                    <h3>Mobile Innovation</h3>
                    <p>Creating cutting-edge mobile experiences with React Native and Flutter. Building cross-platform apps that deliver native performance with beautiful, intuitive interfaces that engage users.</p>
                    <a href="#portfolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mt-auto">
                      Mobile Apps <i className="fas fa-arrow-right text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 bg-mid-dark-bg scroll-hidden">
          <div className="container mx-auto max-w-7xl px-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase text-center mb-4 tracking-wider text-white">
              Let's Create <span className="gradient-text">Together</span>
            </h2>
            <p className="text-center text-gray-400 mb-20 text-lg">
              Ready to bring your ideas to life? Let's start a conversation
            </p>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3 p-8 glass-card rounded-xl">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white">
                    <i className="fas fa-map-marker-alt mr-3 text-red-500"></i> Based In:
                    <span className="block text-gray-400 font-normal ml-6">San Francisco, CA (Open to Remote)</span>
                  </p>
                  <p className="text-sm font-semibold text-white">
                    <i className="fas fa-hands-helping mr-3 text-green-500"></i> Available for:
                    <span className="block text-gray-400 font-normal ml-6 space-y-1">
                      <span>Freelance Projects</span>
                      <span>Full-time Opportunities</span>
                      <span>Consulting & Code Reviews</span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 p-8 glass-card rounded-xl">
                <form id="contact-form" className="space-y-6">
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600" style={{ outline: 'none' }} required />

                  <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600" style={{ outline: 'none' }} required />

                  <select className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600 cursor-pointer" style={{ outline: 'none' }}>
                    <option value="">Project Type</option>
                    <option value="freelance">Freelance</option>
                    <option value="fulltime">Full-time Inquiry</option>
                    <option value="consulting">Consulting</option>
                  </select>

                  <textarea placeholder="Tell me about your project..." rows="4" className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 text-white placeholder-gray-500 transition-all duration-300 focus:bg-gray-800/70 focus:shadow-lg focus:shadow-blue-500/20 hover:border-gray-600 resize-none" style={{ outline: 'none' }} required></textarea>

                  <button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden group" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 3s ease infinite' }}>
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </form>
                <div id="form-message" className="mt-4 text-center text-green-400 font-semibold hidden animate-pulse">
                  <i className="fas fa-check-circle mr-2"></i>Message Sent Successfully! I'll be in touch soon.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t border-gray-800 bg-dark-bg">
          <div className="container mx-auto max-w-7xl px-6 text-center text-gray-500 text-sm">
            <p>© 2026 Mithan's Folio. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-white transition duration-300">Careers</a>
            </div>
            <div className="mt-6 space-x-4 text-xl">
              <a href="https://www.facebook.com/share/1DANjki2gL/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-300"><i className="fab fa-facebook"></i></a>
              <a href="https://github.com/Mithanraj23" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/mithanraj" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors duration-300"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/itz_mithan_23/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors duration-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </footer>

        <button id="scrollToTopBtn" title="Go to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  )
}
