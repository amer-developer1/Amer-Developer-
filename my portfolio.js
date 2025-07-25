// متغيرات عامة
let clickCount = 0;
let lastClickTime = 0;
const requiredClickInterval = 2000; // ثانيتان بين كل ضغطة

// تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل التأثيرات عند التمرير
    initScrollAnimations();
    
    // تفعيل التفاعل مع المهارات
    initSkillCards();
    
    // تفعيل نظام اللغة
    initLanguageSelector();
    
    // تفعيل نموذج التواصل
    initContactForm();
    
    // تفعيل ميزة الإدارة السرية
    initAdminFeature();
});

// تفعيل التأثيرات عند التمرير
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // مراقبة الأقسام
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// تفعيل التفاعل مع بطاقات المهارات
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.background = 'rgba(138, 43, 226, 0.1)';
            this.style.borderColor = 'var(--accent-purple)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.background = 'rgba(255, 255, 255, 0.05)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        // إظهار التفاصيل الكاملة عند النقر
        card.addEventListener('click', function() {
            const fullName = this.getAttribute('data-fullname');
            const description = this.getAttribute('data-description');
            alert(`${fullName}\n\n${description}`);
        });
    });
}

// تفعيل نظام تغيير اللغة
function initLanguageSelector() {
    const languageIcon = document.getElementById('language-icon');
    const languageDropdown = document.getElementById('language-dropdown');
    
    languageIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // إغلاق القائمة عند النقر في أي مكان آخر
    document.addEventListener('click', function(e) {
        if (!languageIcon.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // تفعيل خيارات اللغة
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            alert(`سيتم ترجمة الموقع إلى اللغة: ${lang === 'ar' ? 'العربية' : lang === 'en' ? 'الإنجليزية' : 'الفرنسية'}`);
            languageDropdown.classList.remove('show');
        });
    });
}

// تفعيل نموذج التواصل
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // الحصول على البيانات
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // إرسال إلى الواتساب
        const phoneNumber = '01032637977';
        const whatsappMessage = `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // فتح رابط الواتساب
        window.open(whatsappUrl, '_blank');
        
        // إظهار رسالة النجاح
        successMessage.style.display = 'block';
        
        // إعادة تعيين النموذج
        this.reset();
        
        // إخفاء رسالة النجاح بعد 5 ثوانٍ
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// تفعيل ميزة الإدارة السرية
function initAdminFeature() {
    const logo = document.getElementById('admin-logo');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.getElementById('closeModal');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminPassword = document.getElementById('adminPassword');
    
    logo.addEventListener('click', function() {
        const currentTime = new Date().getTime();
        
        // التحقق من التوقيت بين الضغطات
        if (currentTime - lastClickTime <= requiredClickInterval) {
            clickCount++;
        } else {
            clickCount = 1; // إعادة العد إذا تجاوز الوقت المسموح
        }
        
        lastClickTime = currentTime;
        
        // إذا تم الضغط 5 مرات متتالية
        if (clickCount >= 5) {
            adminModal.style.display = 'flex';
            clickCount = 0; // إعادة العد
        }
    });
    
    // إغلاق النافذة
    closeModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
        adminPassword.value = '';
    });
    
    // إغلاق عند النقر خارج النافذة
    window.addEventListener('click', function(e) {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
            adminPassword.value = '';
        }
    });
    
    // تسجيل الدخول للإدارة
    adminLoginBtn.addEventListener('click', function() {
        const password = adminPassword.value;
        const correctPassword = 'ameramer9.1.2010';
        
        if (password === correctPassword) {
            alert('تم تسجيل الدخول بنجاح! سيتم فتح صفحة إضافة المشاريع.');
            adminModal.style.display = 'none';
            adminPassword.value = '';
            // هنا يمكن فتح صفحة إضافة المشاريع
            window.location.href = '#'; // سيتم تعديله لاحقًا
        } else {
            alert('كلمة المرور غير صحيحة!');
            adminPassword.value = '';
        }
    });
}

// تفعيل التمرير السلس للروابط
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// إضافة تأثيرات عند تحميل الصفحة
window.addEventListener('load', function() {
    // إظهار العناصر تدريجيًا
    const elements = document.querySelectorAll('.hero-content > *, .about-content > *, .skills-grid > *, .contact-content > *');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});