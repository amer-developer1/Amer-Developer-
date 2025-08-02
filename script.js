/**
 * ========================================
 * 🚀 Amer Developer Portfolio - Final Script
 * Version: 3.1 | Fixed: Lang, Typing, Admin UX
 * Author: Amer Developer
 * Lines: ~700
 * ========================================
 */

// =======================
// 1. DOM Elements
// =======================

const logoImg = document.getElementById('logo-img');
const languageSwitcher = document.getElementById('language-switcher');
const languageMenu = document.getElementById('language-menu');
const toast = document.getElementById('toast');
const yearSpan = document.getElementById('year');
const adminPanel = document.getElementById('admin-panel');
const passwordModal = document.getElementById('password-modal');

// Typing Effect
const typingText = document.getElementById('typing-text');

// Contact Form
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitText = document.getElementById('submit-text');
const loadingSpinner = document.getElementById('loading');

// Admin Panel
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const formProject = document.getElementById('form-project');
const formSkill = document.getElementById('form-skill');
const formTool = document.getElementById('form-tool');

// Grids
const skillsGrid = document.getElementById('skills-grid');
const toolsGrid = document.getElementById('tools-grid');
const projectsGrid = document.getElementById('projects-grid');
const projectsEmpty = document.getElementById('projects-empty');

// TikTok Modal
const tiktokModal = document.getElementById('tiktok-modal');

// Password Modal
const adminPassword = document.getElementById('admin-password');
const passwordError = document.getElementById('password-error');

// Sections
const sections = document.querySelectorAll('.section');

// About Text
const aboutText = document.getElementById('about-text');

// =======================
// 2. Language System
// =======================

const translations = {
  ar: {
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    tools: 'الأدوات',
    projects: 'المشاريع',
    contact: 'اتصل بي',
    'More About Me': 'مزيد من التفاصيل',
    'Hello, I\'m': 'مرحبًا، أنا',
    'Building digital solutions': 'أبني حلولًا رقمية تساعدك على الظهور بشكل احترافي وفعّال في السوق الرقمي',
    'About Me': 'من أنا',
    aboutMeText: 'أنا عامر، مطوّر برمجيات أعمل على تقديم حلول رقمية فعّالة وعصرية تساعد الأفراد والشركات على بناء حضور قوي على الإنترنت. أمتلك مهارات في تطوير الواجهات باستخدام HTML وCSS وJavaScript، إلى جانب خبرة جيدة في لغة Python. أحرص دائمًا على كتابة كود نظيف، منظم، وسهل التوسّع. أسعى لتقديم أعمال عالية الجودة بأداء سريع وتصميم جذّاب، مع اهتمام حقيقي بتجربة المستخدم وتفاصيل المشروع.',
    'My Skills': 'مهاراتي',
    'Latest Projects': 'أحدث المشاريع',
    'Contact Me': 'اتصل بي',
    'Your Name': 'اسمك',
    'Your Email': 'بريدك الإلكتروني',
    'Your Message': 'رسالتك',
    'Send Message': 'إرسال الرسالة',
    'I am available for collaboration': 'أنا متاح للتعاون والعمل على مشاريع جديدة، لا تتردد في التواصل معي لأي استفسار أو عرض عمل.',
    'Admin Panel': 'لوحة التحكم',
    'Add Project': 'إضافة مشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة',
    'Project Name': 'اسم المشروع',
    'Project URL': 'رابط المشروع',
    'Image URL': 'رابط الصورة',
    'Video URL (optional)': 'رابط الفيديو (اختياري)',
    'Short Description': 'وصف مختصر',
    'Skill Abbreviation': 'اختصار المهارة (مثل: HTML)',
    'Full Name': 'الاسم الكامل (مثل: HyperText Markup Language)',
    'Tool Abbreviation': 'اختصار الأداة (مثل: Git)',
    'Save Project': 'حفظ المشروع',
    'Add Skill': 'إضافة مهارة',
    'Add Tool': 'إضافة أداة'
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    tools: 'Tools',
    projects: 'Projects',
    contact: 'Contact',
    'More About Me': 'More About Me',
    'Hello, I\'m': 'Hello, I\'m',
    'Building digital solutions': 'I build digital solutions that help you appear professionally and effectively in the digital market',
    'About Me': 'About Me',
    aboutMeText: 'I am Amer, a software developer who works on providing effective and modern digital solutions to help individuals and companies build a strong presence online. I have skills in developing interfaces using HTML, CSS, and JavaScript, as well as good experience with Python. I always strive to write clean, organized, and easily scalable code. I aim to deliver high-quality work with fast performance and attractive design, with a genuine focus on user experience and project details.',
    'My Skills': 'My Skills',
    'Latest Projects': 'Latest Projects',
    'Contact Me': 'Contact Me',
    'Your Name': 'Your Name',
    'Your Email': 'Your Email',
    'Your Message': 'Your Message',
    'Send Message': 'Send Message',
    'I am available for collaboration': 'I am available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.',
    'Admin Panel': 'Admin Panel',
    'Add Project': 'Add Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool',
    'Project Name': 'Project Name',
    'Project URL': 'Project URL',
    'Image URL': 'Image URL',
    'Video URL (optional)': 'Video URL (optional)',
    'Short Description': 'Short Description',
    'Skill Abbreviation': 'Skill Abbreviation (e.g. HTML)',
    'Full Name': 'Full Name (e.g. HyperText Markup Language)',
    'Tool Abbreviation': 'Tool Abbreviation (e.g. Git)',
    'Save Project': 'Save Project',
    'Add Skill': 'Add Skill',
    'Add Tool': 'Add Tool'
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    skills: 'Compétences',
    tools: 'Outils',
    projects: 'Projets',
    contact: 'Contact',
    'More About Me': 'En savoir plus',
    'Hello, I\'m': 'Bonjour, je suis',
    'Building digital solutions': 'Je crée des solutions numériques pour vous aider à briller en ligne.',
    'About Me': 'À Propos de Moi',
    aboutMeText: 'Je suis Amer, développeur passionné par les solutions numériques modernes. J\'ai des compétences en développement d\'interfaces avec HTML, CSS, JavaScript et une bonne expérience en Python. J\'aime écrire un code propre, organisé et évolutif.',
    'My Skills': 'Mes Compétences',
    'Latest Projects': 'Derniers Projets',
    'Contact Me': 'Contactez-moi',
    'Your Name': 'Votre Nom',
    'Your Email': 'Votre Email',
    'Your Message': 'Votre Message',
    'Send Message': 'Envoyer',
    'I am available for collaboration': 'Je suis disponible pour de nouveaux projets. Contactez-moi !',
    'Admin Panel': 'Panneau d\'administration',
    'Add Project': 'Ajouter un projet',
    'Add Skill': 'Ajouter une compétence',
    'Add Tool': 'Ajouter un outil',
    'Project Name': 'Nom du projet',
    'Project URL': 'URL du projet',
    'Image URL': 'URL de l\'image',
    'Video URL (optional)': 'URL de la vidéo (optionnel)',
    'Short Description': 'Description courte',
    'Skill Abbreviation': 'Abréviation (ex: HTML)',
    'Full Name': 'Nom complet (ex: HyperText Markup Language)',
    'Tool Abbreviation': 'Abréviation (ex: Git)',
    'Save Project': 'Enregistrer',
    'Add Skill': 'Ajouter',
    'Add Tool': 'Ajouter'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
document.documentElement.lang = currentLang;
if (currentLang === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
} else {
  document.documentElement.removeAttribute('dir');
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.removeAttribute('dir');
  }

  // Update navigation
  document.querySelectorAll('.nav-link')[0].textContent = translations[lang].home;
  document.querySelectorAll('.nav-link')[1].textContent = translations[lang].about;
  document.querySelectorAll('.nav-link')[2].textContent = translations[lang].skills;
  document.querySelectorAll('.nav-link')[3].textContent = translations[lang].tools;
  document.querySelectorAll('.nav-link')[4].textContent = translations[lang].projects;
  document.querySelectorAll('.nav-link')[5].textContent = translations[lang].contact;

  // Update hero
  document.querySelector('.hero-paragraph').textContent = translations[lang]['Building digital solutions'];

  // Update buttons
  document.querySelector('.btn-primary').innerHTML = `${translations[lang]['More About Me']} <i class="fas fa-arrow-right"></i>`;

  // Update sections
  document.querySelector('#about h2').textContent = translations[lang]['About Me'];
  document.querySelector('#skills h2').textContent = translations[lang]['My Skills'];
  document.querySelector('#projects h2').textContent = translations[lang]['Latest Projects'];
  document.querySelector('#contact h2').textContent = translations[lang]['Contact Me'];

  // Update form
  document.querySelector('label[for="name"]').textContent = translations[lang]['Your Name'];
  document.querySelector('label[for="email"]').textContent = translations[lang]['Your Email'];
  document.querySelector('label[for="message"]').textContent = translations[lang]['Your Message'];
  document.getElementById('submit-text').textContent = translations[lang]['Send Message'];
  document.querySelector('.motivational-message blockquote').textContent = translations[lang]['I am available for collaboration'];

  // Update admin panel
  document.querySelector('.admin-header h3').textContent = translations[lang]['Admin Panel'];
  document.querySelector('.tab-btn[data-tab="add-project"]').textContent = translations[lang]['Add Project'];
  document.querySelector('.tab-btn[data-tab="add-skill"]').textContent = translations[lang]['Add Skill'];
  document.querySelector('.tab-btn[data-tab="add-tool"]').textContent = translations[lang]['Add Tool'];

  // Update forms
  const t = translations[lang];
  document.getElementById('input-project-name').placeholder = t['Project Name'];
  document.getElementById('input-project-link').placeholder = t['Project URL'];
  document.getElementById('input-project-image').placeholder = t['Image URL'];
  document.getElementById('input-project-video').placeholder = t['Video URL (optional)'];
  document.getElementById('input-project-desc').placeholder = t['Short Description'];
  document.getElementById('input-skill-short').placeholder = t['Skill Abbreviation'];
  document.getElementById('input-skill-full').placeholder = t['Full Name'];
  document.getElementById('input-skill-desc').placeholder = t['Short Description'];
  document.getElementById('input-tool-short').placeholder = t['Tool Abbreviation'];
  document.getElementById('input-tool-desc').placeholder = t['Short Description'];

  // Update active language in menu
  document.querySelectorAll('#language-menu li').forEach(li => {
    li.classList.remove('active');
    if (li.dataset.lang === lang) {
      li.classList.add('active');
    }
  });

  // Update About Me Text
  aboutText.textContent = translations[lang].aboutMeText;

  showToast(`اللغة تغيرت إلى ${lang.toUpperCase()}`);
}

setLanguage(currentLang);

languageSwitcher.addEventListener('click', () => {
  languageMenu.hidden = !languageMenu.hidden;
});

document.querySelectorAll('#language-menu li').forEach(li => {
  li.addEventListener('click', () => {
    setLanguage(li.dataset.lang);
    languageMenu.hidden = true;
  });
});

// =======================
// 3. Typing Animation (Only 3 Roles)
// =======================

const roles = ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeRole, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  } else {
    const speed = isDeleting ? 50 : 150;
    setTimeout(typeRole, speed);
  }
}

document.addEventListener('DOMContentLoaded', typeRole);

// =======================
// 4. Scroll Animations
// =======================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

// =======================
// 5. Admin: 5 Clicks + Password Modal
// =======================

let clickCount = 0;
let lastClickTime = 0;

logoImg.addEventListener('click', () => {
  const now = Date.now();
  if (now - lastClickTime < 2000) {
    clickCount++;
  } else {
    clickCount = 1;
  }
  lastClickTime = now;

  if (clickCount >= 5) {
    openPasswordModal();
    clickCount = 0;
  }
});

function openPasswordModal() {
  passwordModal.classList.add('show');
  passwordModal.hidden = false;
  adminPassword.value = '';
  passwordError.style.display = 'none';
}

function closePasswordModal() {
  passwordModal.classList.remove('show');
  setTimeout(() => {
    passwordModal.hidden = true;
  }, 300);
}

function checkPassword() {
  const pass = adminPassword.value;
  if (pass === 'ameramer9.1.2010') {
    closePasswordModal();
    toggleAdminPanel();
    showToast('تم الدخول بنجاح إلى لوحة التحكم!');
  } else {
    passwordError.textContent = 'كلمة المرور غير صحيحة.';
    passwordError.style.display = 'block';
  }
}

function toggleAdminPanel() {
  if (adminPanel.style.display === 'block') {
    adminPanel.style.display = 'none';
  } else {
    adminPanel.style.display = 'block';
  }
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!passwordModal.hidden) closePasswordModal();
    if (adminPanel.style.display === 'block') toggleAdminPanel();
  }
});

// =======================
// 6. Data Management
// =======================

const defaultSkills = [
  { short: 'HTML', full: 'HyperText Markup Language', desc: 'Building web page structure.' },
  { short: 'CSS', full: 'Cascading Style Sheets', desc: 'Styling and designing web appearance.' },
  { short: 'JavaScript', full: 'JavaScript', desc: 'Adding interactivity and motion.' },
  { short: 'Python', full: 'Python', desc: 'High-level, versatile programming language.' },
  { short: 'Tailwind CSS', full: 'Tailwind CSS', desc: 'Rapid, flexible interface design.' },
  { short: 'AI Tools', full: 'Artificial Intelligence Tools', desc: 'AI-assisted development tools.' }
];

const defaultTools = [
  { short: 'Git', full: 'Git', desc: 'Version control system for code tracking.' },
  { short: 'GitHub', full: 'GitHub', desc: 'Platform for hosting and collaborating on code.' },
  { short: 'VS Code', full: 'Visual Studio Code', desc: 'Flexible code editor with extensions.' },
  { short: 'Figma', full: 'Figma', desc: 'UI/UX design tool for teams.' },
  { short: 'AI Tools', full: 'Artificial Intelligence Tools', desc: 'Tools to boost productivity with AI.' }
];

const defaultProjects = [];

let skills = loadData('skills', defaultSkills);
let tools = loadData('tools', defaultTools);
let projects = loadData('projects', defaultProjects);

function loadData(key, defaults) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : defaults;
}

function saveData() {
  localStorage.setItem('skills', JSON.stringify(skills));
  localStorage.setItem('tools', JSON.stringify(tools));
  localStorage.setItem('projects', JSON.stringify(projects));
  renderAll();
  showToast('تم الحفظ بنجاح!');
}

// =======================
// 7. Render Content
// =======================

function renderAll() {
  renderSkills();
  renderTools();
  renderProjects();
}

function renderSkills() {
  skillsGrid.innerHTML = '';
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <h3>${skill.short}</h3>
      <p>${skill.desc}</p>
      <div class="tooltip">الكامل: ${skill.full}<br>الوصف: ${skill.desc}</div>
    `;
    skillsGrid.appendChild(card);
  });
}

function renderTools() {
  toolsGrid.innerHTML = '';
  tools.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <h3>${tool.short}</h3>
      <p>${tool.desc}</p>
      <div class="tooltip">الكامل: ${tool.full}<br>الوصف: ${tool.desc}</div>
    `;
    toolsGrid.appendChild(card);
  });
}

function renderProjects() {
  projectsGrid.innerHTML = '';
  if (projects.length === 0) {
    projectsEmpty.style.display = 'block';
    return;
  }
  projectsEmpty.style.display = 'none';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-img">
      <div class="project-content">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}

renderAll();

// =======================
// 8. Form Handling
// =======================

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    showToast('يرجى ملء جميع الحقول.', 'error');
    return;
  }

  submitText.style.display = 'none';
  loadingSpinner.style.display = 'inline';

  setTimeout(() => {
    const whatsappUrl = `https://wa.me/2001032637977?text=
      رسالة جديدة من ${name}%0A
      البريد: ${email}%0A
      الرسالة: ${message}%0A
      تم الإرسال عبر موقع عامر`.replace(/\s+/g, ' ');

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
    submitText.style.display = 'inline';
    loadingSpinner.style.display = 'none';

    showToast('تم الإرسال بنجاح. سيتم التواصل معك عبر الواتساب أو البريد الإلكتروني.');
  }, 1500);
});

// =======================
// 9. Admin Forms
// =======================

formProject.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('input-project-name').value;
  const link = document.getElementById('input-project-link').value;
  const image = document.getElementById('input-project-image').value;
  const video = document.getElementById('input-project-video').value;
  const desc = document.getElementById('input-project-desc').value;

  projects.unshift({ name, link, image, video, desc });
  saveData();
  formProject.reset();
  showToast('تمت إضافة المشروع!');
});

formSkill.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-skill-short').value;
  const full = document.getElementById('input-skill-full').value;
  const desc = document.getElementById('input-skill-desc').value;

  skills.push({ short, full, desc });
  saveData();
  formSkill.reset();
  showToast('تمت إضافة المهارة!');
});

formTool.addEventListener('submit', (e) => {
  e.preventDefault();
  const short = document.getElementById('input-tool-short').value;
  const full = document.getElementById('input-tool-full').value;
  const desc = document.getElementById('input-tool-desc').value;

  tools.push({ short, full, desc });
  saveData();
  formTool.reset();
  showToast('تمت إضافة الأداة!');
});

// =======================
// 10. Toast & UI Feedback
// =======================

function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.style.backgroundColor = type === 'error' ? '#FF5555' : '#00FFFF';
  toast.style.color = type === 'error' ? '#000' : '#000033';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// =======================
// 11. TikTok Notice
// =======================

function showTikTokNotice() {
  tiktokModal.classList.add('show');
  tiktokModal.hidden = false;
}

function closeTikTokModal() {
  tiktokModal.classList.remove('show');
  setTimeout(() => {
    tiktokModal.hidden = true;
  }, 300);
}

// =======================
// 12. Misc
// =======================

yearSpan.textContent = new Date().getFullYear();

window.addEventListener('click', (e) => {
  if (e.target === tiktokModal) closeTikTokModal();
});