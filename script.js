const SPA = {
    currentView: 'home',
    viewCache: new Map(),
    transitions: {
        duration: 700,
        easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
};
const VIEWS = {
    home: {
        title: 'Le Nexus Connecté - L\'Écho Personnalisé',
        render: () => `
            <div class="nexus-container view-home">
                <header class="nexus-header">
                    <div class="header-decoration top"></div>
                    <div class="header-decoration bottom"></div>
                    <h1 class="nexus-title" data-text="Le Nexus Connecté">Le Nexus Connecté</h1>
                    <p class="nexus-subtitle">L'Écho Personnalisé - Cycle <span class="dynamic-year">2025</span></p>
                    <div class="axolotl-avatar">
                        <div class="avatar-inner">
                            <div class="avatar-eye left"></div>
                            <div class="avatar-eye right"></div>
                            <div class="avatar-mouth"></div>
                            <div class="avatar-glow"></div>
                        </div>
                        <div class="avatar-rings">
                            <div class="ring ring-1"></div>
                            <div class="ring ring-2"></div>
                            <div class="ring ring-3"></div>
                        </div>
                    </div>
                </header>
                <main class="nexus-main">
                    <section>
                        <h2>Salutations, Voyageur des Flux de Données !</h2>
                        <p>Je suis <strong>Axolotl</strong>, et je perçois en toi le potentiel d'un véritable Chevalier du Code. Notre monde numérique, notre "Nexus", est en péril. Les Bugs Ancestraux menacent de corrompre les liens vitaux entre notre communauté et ses "Soutiens Essentiels".</p>
                        <p>L'association, en lien avec la nuit de l'info de cette année, a besoin de toi. Nous devons renforcer notre "Canal de Communication et de Soutien". Les utilisateurs, qu'ils soient simples visiteurs, potentiels contributeurs ou âmes charitables, doivent sentir notre présence, notre gratitude.</p>
                        <p><strong>Ta Quête</strong>, si tu l'acceptes, se nomme : <em>"Le Nexus Connecté : L'Écho Personnalisé"</em></p>
                        <div class="data-stream">
                            <span class="stream-line"></span>
                            <span class="stream-line"></span>
                            <span class="stream-line"></span>
                        </div>
                    </section>
                    <section class="mission-section">
                        <div class="section-badge">MISSION</div>
                        <div class="holographic-border"></div>
                        <h2>Portail d'Intention</h2>
                        <p>Choisis ta Mission et forge ton chemin dans le Nexus</p>
                        <form id="nexus-form">
                            <fieldset>
                                <legend>Sélectionne Ta Voie</legend>
                                <p>Quelle quête souhaites-tu entreprendre dans le Nexus ?</p>
                                <div class="radio-group">
                                    <div class="radio-option">
                                        <input type="radio" id="contact" name="mission" value="contact" required>
                                        <label for="contact">Établir le Contact<br><small>Ouvre un canal de communication avec nos Gardiens</small></label>
                                        <span class="radio-custom"></span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" id="don" name="mission" value="don">
                                        <label for="don">Offrir un Don<br><small>Contribue aux Ressources du Nexus</small></label>
                                        <span class="radio-custom"></span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" id="guilde" name="mission" value="guilde">
                                        <label for="guilde">Rejoindre la Guilde des Bénévoles<br><small>Deviens un Gardien actif du Nexus</small></label>
                                        <span class="radio-custom"></span>
                                    </div>
                                    <div class="radio-option">
                                        <input type="radio" id="info" name="mission" value="info">
                                        <label for="info">Demander des Informations<br><small>Explore les Mystères du Nexus</small></label>
                                        <span class="radio-custom"></span>
                                    </div>
                                </div>
                            </fieldset>
                            <div id="dynamic-fields"></div>
                            <fieldset class="common-fields">
                                <legend>Informations d'Identification</legend>
                                <div class="field-group">
                                    <label for="nom">Nom du Voyageur *</label>
                                    <input type="text" id="nom" name="nom" required aria-required="true">
                                </div>
                                <div class="field-group">
                                    <label for="email">Canal de Retransmission (Email) *</label>
                                    <input type="email" id="email" name="email" required aria-required="true">
                                </div>
                            </fieldset>
                            <div class="honeypot" aria-hidden="true">
                                <label for="website">Site web (ne pas remplir)</label>
                                <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
                            </div>
                            <div class="button-group">
                                <button type="submit" class="submit-button">Initialiser le Transfert</button>
                            </div>
                            <p><small>Champs requis pour compléter la mission</small></p>
                        </form>
                    </section>
                    <section class="year-filter">
                        <div class="section-badge">2025</div>
                        <div class="holographic-border"></div>
                        <div class="filter-content">
                            <h3>Le Filtre Temporel</h3>
                            <p>Ton soutien pour le cycle <strong class="dynamic-year">2025</strong> est crucial pour notre progression !</p>
                            <p class="year-highlight">Objectif 2025 : Renforcer le Canal de Communication et créer l'Écho Personnalisé pour chaque âme charitable.</p>
                        </div>
                        <div class="temporal-waves">
                            <div class="wave wave-1"></div>
                            <div class="wave wave-2"></div>
                            <div class="wave wave-3"></div>
                        </div>
                    </section>
                </main>
                ${renderFooter()}
            </div>
        `,
        onMount: () => {
            initFormHandlers();
            init3DAvatar();
        }
    },
    confirmation: {
        title: 'Mission Accomplie - Le Nexus Connecté',
        render: (data = {}) => {
            const { mission = 'contact', nom = 'Voyageur' } = data;
            const currentYear = new Date().getFullYear();
            const messages = {
                contact: {
                    title: `Salutations, ${nom} !`,
                    content: `Ton message a bien été acheminé vers nos serveurs centraux. Nos "Agents de Support" te répondront sous peu.<br><br>Ton soutien en ${currentYear} est crucial pour notre progression !`
                },
                don: {
                    title: `Gratitude éternelle, ${nom} !`,
                    content: `Ton don a été enregistré dans notre Registre des Bienfaiteurs. Grâce à toi, le Nexus prospère !<br><br>Ensemble, nous bâtissons un ${currentYear} meilleur !`
                },
                guilde: {
                    title: `Bienvenue dans la Guilde, ${nom} !`,
                    content: `Ta candidature a été transmise à nos Maîtres de Guilde. Prépare-toi à devenir un Gardien légendaire !<br><br>L'année ${currentYear} sera notre année de gloire !`
                },
                info: {
                    title: `Requête enregistrée, ${nom} !`,
                    content: `Les Archives du Nexus ont bien reçu ta demande. Nos Sages t'enverront les informations nécessaires.<br><br>Que ${currentYear} t'apporte toutes les réponses que tu cherches !`
                }
            };
            const msg = messages[mission] || messages.contact;
            return `
                <div class="nexus-container view-confirmation">
                    <header class="nexus-header">
                        <h1 class="nexus-title">Écho de Gratitude</h1>
                        <p class="nexus-subtitle">Zone de Confirmation Personnalisée</p>
                    </header>
                    <main class="nexus-main">
                        <section class="confirmation-content">
                            <div class="confirmation-card">
                                <div class="card-glow"></div>
                                <h2>${msg.title}</h2>
                                <p>${msg.content}</p>
                                <div class="success-animation">
                                    <div class="check-mark">
                                        <div class="check-icon">
                                            <span class="icon-line line-tip"></span>
                                            <span class="icon-line line-long"></span>
                                            <div class="icon-circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-group">
                                <button onclick="navigateTo('home')" class="back-button">Retour au Nexus</button>
                            </div>
                        </section>
                    </main>
                    ${renderFooter()}
                </div>
            `;
        },
        onMount: () => {
            playSuccessAnimation();
        }
    }
};
function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
        <footer class="nexus-footer">
            <div class="footer-grid"></div>
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Le Nexus Connecté</h4>
                    <p>Votre passerelle vers l'interaction personnalisée</p>
                </div>
                <div class="footer-section">
                    <h4>Contact</h4>
                    <p>support@nexus-connecte.fr</p>
                    <p>Hotline: +33 (0)1 23 45 67 89</p>
                </div>
                <div class="footer-section">
                    <h4>Suivez-nous</h4>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Twitter">TW</a>
                        <a href="#" class="social-link" aria-label="LinkedIn">LI</a>
                        <a href="#" class="social-link" aria-label="GitHub">GH</a>
                    </div>
                </div>
            </div>
            <div class="team-section">
                <h3 class="team-title">L'Équipe du Nexus</h3>
                <div class="team-grid">
                    <a href="https://www.linkedin.com/in/mohamed-barbych/" target="_blank" class="team-card" aria-label="Mohamed Barbych LinkedIn">
                        <div class="team-icon">👨‍💻</div>
                        <div class="team-info">
                            <span class="team-name">Mohamed Barbych</span>
                            <span class="team-role">Lead Developer</span>
                        </div>
                        <div class="team-linkedin">in</div>
                    </a>
                    <a href="https://www.linkedin.com/in/mouaad-elhansali/" target="_blank" class="team-card" aria-label="Mouaad Elhansali LinkedIn">
                        <div class="team-icon">👨‍💻</div>
                        <div class="team-info">
                            <span class="team-name">Mouaad Elhansali</span>
                            <span class="team-role">Full Stack Developer</span>
                        </div>
                        <div class="team-linkedin">in</div>
                    </a>
                    <a href="http://www.linkedin.com/in/youness-el-mourid-899b92332" target="_blank" class="team-card" aria-label="Youness El Mourid LinkedIn">
                        <div class="team-icon">👨‍💻</div>
                        <div class="team-info">
                            <span class="team-name">Youness El Mourid</span>
                            <span class="team-role">Frontend Developer</span>
                        </div>
                        <div class="team-linkedin">in</div>
                    </a>
                    <a href="https://www.linkedin.com/in/reda-bouchkouch-236aa6367/" target="_blank" class="team-card" aria-label="Reda Bouchkouch LinkedIn">
                        <div class="team-icon">👨‍💻</div>
                        <div class="team-info">
                            <span class="team-name">Reda Bouchkouch</span>
                            <span class="team-role">Backend Developer</span>
                        </div>
                        <div class="team-linkedin">in</div>
                    </a>
                    <a href="https://www.linkedin.com/in/elmahjoub-bentaher-4a1808285/" target="_blank" class="team-card" aria-label="Elmahjoub Bentaher LinkedIn">
                        <div class="team-icon">👨‍💻</div>
                        <div class="team-info">
                            <span class="team-name">Elmahjoub Bentaher</span>
                            <span class="team-role">DevOps Engineer</span>
                        </div>
                        <div class="team-linkedin">in</div>
                    </a>
                </div>
            </div>
            <div class="footer-divider"></div>
            <p class="footer-quote">Que la puissance absolue du code t'envahisse, te consume, et te transforme en légende !</p>
            <p class="footer-meta">La Nuit de l'Info <span class="dynamic-year">${currentYear}</span> - Le Nexus Connecté | Tous droits réservés</p>
            <div class="footer-pulse"></div>
        </footer>
    `;
}
window.navigateTo = function(viewName, data = {}) {
    if (!VIEWS[viewName]) {
        console.error(`Vue ${viewName} introuvable`);
        return;
    }
    console.log('Navigation vers:', viewName, data);
    const app = document.getElementById('app');
    const oldView = app.querySelector('.nexus-container');
    window.location.hash = viewName === 'home' ? '' : viewName;
    if (data && Object.keys(data).length > 0) {
        sessionStorage.setItem('navigationData', JSON.stringify(data));
    }
    if (oldView) {
        oldView.style.transition = `all ${SPA.transitions.duration}ms ${SPA.transitions.easing}`;
        oldView.style.transform = 'perspective(2000px) rotateY(-90deg) translateZ(-500px)';
        oldView.style.opacity = '0';
        oldView.style.filter = 'blur(10px)';
        createTransitionParticles();
        setTimeout(() => {
            renderView(viewName, data);
        }, SPA.transitions.duration);
    } else {
        renderView(viewName, data);
    }
    document.title = VIEWS[viewName].title;
    SPA.currentView = viewName;
}
function renderView(viewName, data = {}) {
    const view = VIEWS[viewName];
    const app = document.getElementById('app');
    let html;
    if (viewName === 'confirmation' || !SPA.viewCache.has(viewName)) {
        html = view.render(data);
        if (viewName !== 'confirmation') {
            SPA.viewCache.set(viewName, html);
        }
    } else {
        html = SPA.viewCache.get(viewName);
    }
    app.innerHTML = html;
    const newView = app.querySelector('.nexus-container');
    if (newView) {
        newView.style.transform = 'perspective(2000px) rotateY(90deg) translateZ(-500px)';
        newView.style.opacity = '0';
        newView.style.filter = 'blur(10px)';
        requestAnimationFrame(() => {
            newView.style.transition = `all ${SPA.transitions.duration}ms ${SPA.transitions.easing}`;
            requestAnimationFrame(() => {
                newView.style.transform = 'perspective(2000px) rotateY(0deg) translateZ(0px)';
                newView.style.opacity = '1';
                newView.style.filter = 'blur(0px)';
            });
        });
    }
    updateDynamicYears();
    initCustomCursor();
    if (view.onMount) {
        setTimeout(() => {
            console.log('Exécution onMount pour', viewName);
            view.onMount();
            setTimeout(() => initCustomCursor(), 100);
        }, SPA.transitions.duration + 50);
    }
}
function createTransitionParticles() {
    const container = document.createElement('div');
    container.className = 'transition-particles';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    document.body.appendChild(container);
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${3 + Math.random() * 6}px;
            height: ${3 + Math.random() * 6}px;
            background: radial-gradient(circle, rgba(0, 255, 255, 1), rgba(0, 212, 255, 0));
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleBurst ${0.5 + Math.random() * 0.5}s ease-out forwards;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
        `;
        container.appendChild(particle);
    }
    setTimeout(() => container.remove(), 1000);
}
function playSuccessAnimation() {
    const checkMark = document.querySelector('.check-mark');
    if (checkMark) {
        setTimeout(() => {
            checkMark.classList.add('animate');
        }, 300);
    }
}
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1); 
    const viewName = hash || 'home';
    const storedData = sessionStorage.getItem('navigationData');
    const data = storedData ? JSON.parse(storedData) : {};
    console.log('Hash changed:', viewName, data);
    renderView(viewName, data);
    SPA.currentView = viewName;
});
const MISSION_FIELDS = {
    contact: [
        { type: 'textarea', id: 'message', label: 'Ton Message', required: true }
    ],
    don: [
        { type: 'number', id: 'montant', label: 'Montant du Don (€)', required: true, min: 1 },
        { type: 'select', id: 'recurrence', label: 'Récurrence', required: true, options: [
            { value: '', text: 'Choisis une option' },
            { value: 'unique', text: 'Don unique' },
            { value: 'mensuel', text: 'Don mensuel' },
            { value: 'annuel', text: 'Don annuel' }
        ]}
    ],
    guilde: [
        { type: 'text', id: 'competences', label: 'Tes Compétences', required: true },
        { type: 'select', id: 'disponibilite', label: 'Disponibilité', required: true, options: [
            { value: '', text: 'Choisis une option' },
            { value: 'temps-plein', text: 'Temps plein' },
            { value: 'temps-partiel', text: 'Temps partiel' },
            { value: 'ponctuel', text: 'Ponctuel' }
        ]}
    ],
    info: [
        { type: 'select', id: 'sujet', label: 'Sujet de ta Requête', required: true, options: [
            { value: '', text: 'Choisis un sujet' },
            { value: 'general', text: 'Information générale' },
            { value: 'projet', text: 'Nos projets' },
            { value: 'partenariat', text: 'Partenariat' },
            { value: 'autre', text: 'Autre' }
        ]},
        { type: 'textarea', id: 'details', label: 'Détails de ta Demande', required: true }
    ]
};
function updateDynamicYears() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.dynamic-year').forEach(el => {
        el.textContent = currentYear;
    });
}
function initFormHandlers() {
    const form = document.getElementById('nexus-form');
    const dynamicFieldsContainer = document.getElementById('dynamic-fields');
    const missionRadios = document.querySelectorAll('input[name="mission"]');
    if (!form || !dynamicFieldsContainer) {
        console.error('Formulaire non trouvé');
        return;
    }
    console.log('Formulaire initialisé avec', missionRadios.length, 'radios');
    missionRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateDynamicFields(dynamicFieldsContainer, radio.value);
        });
    });
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulaire soumis !');
        const honeypot = document.getElementById('website');
        if (honeypot && honeypot.value !== '') {
            console.warn('Honeypot détecté - spam bloqué');
            return false;
        }
        const formData = new FormData(form);
        const mission = formData.get('mission');
        const nom = formData.get('nom');
        console.log('Mission:', mission, 'Nom:', nom);
        if (!mission || !nom) {
            alert('Merci de remplir tous les champs obligatoires');
            return false;
        }
        localStorage.setItem('lastMission', JSON.stringify({ mission, nom }));
        window.navigateTo('confirmation', { mission, nom });
    });
}
function createField(fieldConfig) {
    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'field-group';
    const label = document.createElement('label');
    label.htmlFor = fieldConfig.id;
    label.textContent = fieldConfig.label + (fieldConfig.required ? ' *' : '');
    let input;
    if (fieldConfig.type === 'textarea') {
        input = document.createElement('textarea');
        input.rows = 4;
    } else if (fieldConfig.type === 'select') {
        input = document.createElement('select');
        fieldConfig.options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.text;
            input.appendChild(option);
        });
    } else {
        input = document.createElement('input');
        input.type = fieldConfig.type;
        if (fieldConfig.min !== undefined) input.min = fieldConfig.min;
    }
    input.id = fieldConfig.id;
    input.name = fieldConfig.id;
    if (fieldConfig.required) {
        input.required = true;
        input.setAttribute('aria-required', 'true');
    }
    fieldGroup.appendChild(label);
    fieldGroup.appendChild(input);
    return fieldGroup;
}
function updateDynamicFields(container, missionValue) {
    if (!container) {
        container = document.getElementById('dynamic-fields');
    }
    if (!container) return;
    container.innerHTML = '';
    if (missionValue && MISSION_FIELDS[missionValue]) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = 'Outils de Saisie Spécifiques';
        fieldset.appendChild(legend);
        MISSION_FIELDS[missionValue].forEach(fieldConfig => {
            fieldset.appendChild(createField(fieldConfig));
        });
        container.appendChild(fieldset);
    }
}
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('Code Konami activé ! Tu es un vrai Gardien du Nexus !');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
function createParticles() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        container.appendChild(particle);
    }
}
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const trail = document.querySelector('.cursor-trail');
    if (!cursor || !trail) {
        console.warn('Curseur personnalisé non trouvé');
        return;
    }
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
    });
    setTimeout(() => {
        const interactiveElements = document.querySelectorAll('input, button, a, label');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }, 100);
}
function init3DAvatar() {
    const avatar = document.querySelector('.axolotl-avatar');
    const avatarInner = document.querySelector('.avatar-inner');
    const eyes = document.querySelectorAll('.avatar-eye');
    const mouth = document.querySelector('.avatar-mouth');
    if (!avatar || !avatarInner) return;
    document.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const avatarCenterX = rect.left + rect.width / 2;
        const avatarCenterY = rect.top + rect.height / 2;
        const deltaX = e.clientX - avatarCenterX;
        const deltaY = e.clientY - avatarCenterY;
        const rotateY = (deltaX / window.innerWidth) * 30;
        const rotateX = -(deltaY / window.innerHeight) * 30;
        avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        avatarInner.style.transform = `translateZ(20px)`;
        eyes.forEach(eye => {
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const eyeDeltaX = e.clientX - eyeCenterX;
            const eyeDeltaY = e.clientY - eyeCenterY;
            const maxMove = 6;
            const angle = Math.atan2(eyeDeltaY, eyeDeltaX);
            const distance = Math.min(Math.hypot(eyeDeltaX, eyeDeltaY) / 50, maxMove);
            const pupilX = Math.cos(angle) * distance;
            const pupilY = Math.sin(angle) * distance;
            const pupil = eye.querySelector('::after') || eye;
            eye.style.setProperty('--pupil-x', `${pupilX}px`);
            eye.style.setProperty('--pupil-y', `${pupilY}px`);
        });
        const distanceFromAvatar = Math.hypot(deltaX, deltaY);
        const maxDistance = 400;
        const smileIntensity = Math.max(0, 1 - (distanceFromAvatar / maxDistance));
        if (mouth) {
            const scaleY = 1 + (smileIntensity * 0.3);
            mouth.style.transform = `translateX(-50%) scaleY(${scaleY})`;
        }
    });
    avatar.addEventListener('mouseenter', () => {
        avatar.style.transition = 'transform 0.3s ease';
        avatarInner.style.transform = 'translateZ(40px) scale(1.05)';
    });
    avatar.addEventListener('mouseleave', () => {
        avatar.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        avatarInner.style.transform = 'translateZ(0px) scale(1)';
        if (mouth) {
            mouth.style.transform = 'translateX(-50%) scaleY(1)';
        }
    });
}
function create3DParticlesAroundAvatar() {
    const avatar = document.querySelector('.axolotl-avatar');
    if (!avatar) return;
    const particleCount = 20;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'avatar-3d-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${3 + Math.random() * 5}px;
            height: ${3 + Math.random() * 5}px;
            background: radial-gradient(circle, rgba(0, 255, 255, 1), rgba(0, 212, 255, 0));
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `;
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 140 + Math.random() * 30;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 100;
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`;
        particle.style.animation = `orbit3D ${8 + Math.random() * 4}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        avatar.appendChild(particle);
    }
}
const style = document.createElement('style');
style.textContent = `
    @keyframes orbit3D {
        0% {
            transform: translate(-50%, -50%) translate3d(var(--x), var(--y), var(--z)) rotateZ(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translate3d(var(--x), var(--y), var(--z)) rotateZ(360deg);
            opacity: 0;
        }
    }
    @keyframes particleBurst {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) translateX(${Math.random() * 200 - 100}px) 
                       translateY(${Math.random() * 200 - 100}px) scale(2);
            opacity: 0;
        }
    }
    .avatar-eye::after {
        transform: translate(calc(-50% + var(--pupil-x, 0px)), calc(-50% + var(--pupil-y, 0px)));
    }
    .avatar-3d-particle {
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
    }
    .check-mark {
        width: 120px;
        height: 120px;
        margin: 2rem auto;
        position: relative;
    }
    .check-icon {
        width: 120px;
        height: 120px;
        position: relative;
        border-radius: 50%;
        box-sizing: content-box;
        border: 4px solid #00ffff;
        background: rgba(0, 255, 255, 0.1);
    }
    .icon-line {
        height: 5px;
        background-color: #00ffff;
        display: block;
        border-radius: 2px;
        position: absolute;
        z-index: 10;
    }
    .line-tip {
        top: 56px;
        left: 25px;
        width: 25px;
        transform: rotate(45deg);
    }
    .line-long {
        top: 50px;
        right: 16px;
        width: 47px;
        transform: rotate(-45deg);
    }
    .icon-circle {
        top: -4px;
        left: -4px;
        z-index: 10;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        position: absolute;
        box-sizing: content-box;
        border: 4px solid rgba(0, 255, 255, 0.3);
    }
    .check-mark.animate .icon-line {
        animation: checkLine 0.8s ease-in-out forwards;
    }
    .check-mark.animate .icon-circle {
        animation: checkCircle 0.6s ease-in-out forwards;
    }
    @keyframes checkLine {
        0% {
            width: 0;
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes checkCircle {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    .confirmation-card {
        position: relative;
        background: linear-gradient(135deg, rgba(0, 20, 40, 0.95), rgba(0, 40, 80, 0.9));
        border: 2px solid rgba(0, 255, 255, 0.3);
        border-radius: 20px;
        padding: 3rem;
        margin: 2rem 0;
        box-shadow: 0 20px 60px rgba(0, 255, 255, 0.2);
        animation: cardAppear 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    @keyframes cardAppear {
        0% {
            transform: scale(0.8) translateY(50px);
            opacity: 0;
        }
        100% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
    }
    .card-glow {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #00ffff, #00d4ff, #00ffff);
        border-radius: 20px;
        z-index: -1;
        filter: blur(20px);
        opacity: 0.3;
        animation: glowPulse 3s ease-in-out infinite;
    }
    @keyframes glowPulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
    }
`;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initialisation SPA');
    createParticles();
    initCustomCursor();
    const hash = window.location.hash.slice(1);
    let initialView = hash || 'home';
    let initialData = {};
    const storedNav = sessionStorage.getItem('navigationData');
    if (storedNav) {
        initialData = JSON.parse(storedNav);
    }
    if (initialView === 'confirmation') {
        const stored = localStorage.getItem('lastMission');
        if (stored) {
            initialData = JSON.parse(stored);
        }
    }
    const view = VIEWS[initialView];
    const app = document.getElementById('app');
    if (!app) {
        console.error('Container #app introuvable !');
        return;
    }
    app.innerHTML = view.render(initialData);
    console.log('Vue rendue:', initialView);
    updateDynamicYears();
    setTimeout(() => {
        if (view.onMount) {
            console.log('Appel onMount pour', initialView);
            view.onMount();
        }
        initCustomCursor();
    }, 50);
    SPA.currentView = initialView;
    console.log('Application SPA initialisée - Vue courante:', initialView);
});
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2200);
});
