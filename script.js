// 语言资源配置
const translations = {
    zh: {
        project_name: "银发 AI 创业课堂",
        nav_about: "项目介绍",
        nav_courses: "课程安排",
        nav_guide: "学习指南",
        nav_faq: "常见问题",
        nav_about_us: "关于我们",
        hero_title: "教爷爷奶奶用 AI 创业、拍视频、开直播",
        hero_subtitle: "让科技点亮银发生活，简单易学的 AI 创业课程",
        hero_cta: "从第一节课开始学习",
        about_background_title: "项目背景",
        about_background_text: "为什么要教老年人 AI？在这个数字化时代，我们希望通过简单易懂的教学，帮助长辈们跨越数字鸿沟，享受科技带来的便利与乐趣。",
        about_goals_title: "项目目标",
        about_goals_text: "不仅仅是学习技术，更是为了：兼职赚钱增加收入、自我表达分享生活、拓展社交认识新朋友。",
        courses_title: "课程安排",
        guide_title: "学习指南",
        guide_step1_title: "准备设备",
        guide_step1_text: "一部智能手机，保持网络通畅",
        guide_step2_title: "观看视频",
        guide_step2_text: "点击课程卡片，随时随地学习",
        guide_step3_title: "动手实践",
        guide_step3_text: "跟着视频操作，遇到问题随时问",
        faq_title: "常见问题",
        faq_q1: "完全不懂电脑能学吗？",
        faq_a1: "当然可以！我们的课程专为零基础设计",
        faq_q2: "学习需要收费吗？",
        faq_a2: "本课程为公益毕业项目，完全免费开放。",
        about_us_title: "关于我们",
        about_us_text: "这是 UKM-GSB 的学生毕业项目，致力于通过教育赋能，让银发族在 AI 时代焕发新生机。",
        mentors_title: "指导老师",
        students_title: "项目成员",
        footer_text: "2026 银发 AI 创业课堂. UKM-GSB 毕业项目",
        video_unsupported: "您的浏览器不支持视频播放。",
        watch_btn: "点击观看",
        duration_label: "时长",
        audience_label: "适合人群",
        course_1_title: "1. 认识 AI：AI 能帮我做什么？",
        course_1_desc: "了解人工智能的基本概念，发现它在日常生活中的神奇用途。",
        course_1_audience: "零基础",
        course_2_title: "2. 用 AI 找创业点子、写文案、做图片和短视频",
        course_2_desc: "不知道拍什么？让 AI 帮你出主意，一键生成文案、图片和短视频内容。",
        course_2_audience: "想尝试创作",
        course_3_title: "3. 玩转短视频账号与直播带货入门",
        course_3_desc: "从注册账号到发布作品，再到直播设备和话术，一站式入门。",
        course_3_audience: "视频新手/准主播",
        course_4_title: "4. 安全防骗与心态建设",
        course_4_desc: "快乐学习，安全第一。识别网络诈骗，保持积极健康的上网心态。",
        course_4_audience: "所有学员"
    },
    en: {
        project_name: "Silver AI Entrepreneurship Class",
        nav_about: "About Project",
        nav_courses: "Courses",
        nav_guide: "Guide",
        nav_faq: "FAQ",
        nav_about_us: "About Us",
        hero_title: "Teach Seniors to Use AI for Entrepreneurship, Video & Live Streaming",
        hero_subtitle: "Lighting up silver lives with technology, easy-to-learn AI courses",
        hero_cta: "Start First Lesson",
        about_background_title: "Background",
        about_background_text: "Why teach seniors AI? In this digital age, we hope to help elders bridge the digital divide through simple teaching and enjoy the convenience and fun of technology.",
        about_goals_title: "Goals",
        about_goals_text: "Not just learning tech, but for: Part-time income, Self-expression, and Socializing.",
        courses_title: "Course Schedule",
        guide_title: "Learning Guide",
        guide_step1_title: "Prepare Device",
        guide_step1_text: "A smartphone with internet access",
        guide_step2_title: "Watch Videos",
        guide_step2_text: "Click cards to learn anytime, anywhere",
        guide_step3_title: "Practice",
        guide_step3_text: "Follow along and ask questions",
        faq_title: "FAQ",
        faq_q1: "Can I learn without computer skills?",
        faq_a1: "Absolutely! Our courses are designed for beginners",
        faq_q2: "Is it free?",
        faq_a2: "Yes, this is a graduation project and completely free.",
        about_us_title: "About Us",
        about_us_text: "This is a UKM-GSB student graduation project, dedicated to empowering seniors in the AI era through education.",
        mentors_title: "Mentors",
        students_title: "Team Members",
        footer_text: "2026 Silver AI Entrepreneurship Class. UKM-GSB Project",
        video_unsupported: "Your browser does not support video playback.",
        watch_btn: "Watch Now",
        duration_label: "Duration",
        audience_label: "Audience",
        course_1_title: "1. Intro to AI: What can AI do?",
        course_1_desc: "Understand basic AI concepts and its magical uses in daily life.",
        course_1_audience: "Beginners",
        course_2_title: "2. AI for Ideas, Copywriting, Images & Videos",
        course_2_desc: "Let AI help you brainstorm, write copy, and create beautiful visuals.",
        course_2_audience: "Creators",
        course_3_title: "3. Short Video Accounts & Live Streaming",
        course_3_desc: "From account setup to posting, plus equipment and scripts for live streaming.",
        course_3_audience: "Newbies/Streamers",
        course_4_title: "4. Safety & Mindset",
        course_4_desc: "Happy learning, safety first. Identify scams and maintain a healthy mindset.",
        course_4_audience: "Everyone"
    },
    ms: {
        project_name: "Kelas Keusahawanan AI Warga Emas",
        nav_about: "Mengenai Projek",
        nav_courses: "Kursus",
        nav_guide: "Panduan",
        nav_faq: "Soalan Lazim",
        nav_about_us: "Tentang Kami",
        hero_title: "Ajar Warga Emas Guna AI untuk Berniaga & Video",
        hero_subtitle: "Menyerikan kehidupan warga emas dengan teknologi, kursus AI yang mudah dipelajari",
        hero_cta: "Mula Belajar",
        about_background_title: "Latar Belakang",
        about_background_text: "Mengapa ajar warga emas AI? Di era digital ini, kami ingin membantu mereka merapatkan jurang digital melalui pembelajaran mudah.",
        about_goals_title: "Matlamat",
        about_goals_text: "Bukan sekadar teknikal, tetapi untuk: Pendapatan sampingan, Ekspresi diri, dan Bersosial.",
        courses_title: "Jadual Kursus",
        guide_title: "Panduan Belajar",
        guide_step1_title: "Sediakan Peranti",
        guide_step1_text: "Telefon pintar dengan internet",
        guide_step2_title: "Tonton Video",
        guide_step2_text: "Klik kad untuk belajar bila-bila masa",
        guide_step3_title: "Latihan Amali",
        guide_step3_text: "Ikut video dan tanya soalan",
        faq_title: "Soalan Lazim",
        faq_q1: "Tiada asas komputer boleh belajar?",
        faq_a1: "Boleh! Kursus ini khas untuk pemula",
        faq_q2: "Adakah ianya percuma?",
        faq_a2: "Ya, ini adalah projek graduasi dan percuma sepenuhnya.",
        about_us_title: "Tentang Kami",
        about_us_text: "Ini adalah projek pelajar UKM-GSB, berdedikasi untuk memperkasa warga emas di era AI.",
        mentors_title: "Mentor",
        students_title: "Ahli Pasukan",
        footer_text: "2026 Kelas Keusahawanan AI Warga Emas. Projek UKM-GSB",
        video_unsupported: "Pelayar anda tidak menyokong main balik video.",
        watch_btn: "Tonton Sekarang",
        duration_label: "Tempoh",
        audience_label: "Sasaran",
        course_1_title: "1. Pengenalan AI: Apa AI boleh buat?",
        course_1_desc: "Fahami konsep asas AI dan kegunaannya dalam kehidupan seharian.",
        course_1_audience: "Pemula",
        course_2_title: "2. AI untuk Idea, Penulisan, Gambar & Video",
        course_2_desc: "Biar AI bantu anda cari idea, tulis ayat menarik, dan hasilkan visual cantik.",
        course_2_audience: "Pencipta",
        course_3_title: "3. Urus Akaun Video Pendek & Siaran Langsung",
        course_3_desc: "Dari daftar akaun hingga muat naik, serta peralatan dan skrip untuk live.",
        course_3_audience: "Pemula/Streamer",
        course_4_title: "4. Keselamatan & Minda",
        course_4_desc: "Belajar dengan gembira dan selamat. Kenali penipuan dalam talian.",
        course_4_audience: "Semua"
    }
};

// 课程基础数据 (ID和时长/缩略图是通用的，文本从翻译对象中获取)
const courseData = [
    { id: 1, duration: "10 min", thumbnail: "🤖", videoUrl: "video/beginning.mp4" },
    { id: 2, duration: "25 min", thumbnail: "💡", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: 3, duration: "30 min", thumbnail: "🎥", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: 4, duration: "15 min", thumbnail: "🛡️", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }
];

// 当前语言
let currentLang = 'en';

// DOM元素
const courseGrid = document.getElementById('courseGrid');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const closeBtn = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-link');
const languageSelect = document.getElementById('languageSelect');

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 强制重置下拉框的值为默认语言 'en'
    if (languageSelect) {
        languageSelect.value = currentLang; 
    }
    
    // 设置初始语言属性
    document.documentElement.lang = currentLang;
    renderContent();
    setupEventListeners();
});

// 渲染所有内容
function renderContent() {
    updateText();
    renderCourses();
}

// 更新静态文本
function updateText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// 渲染课程列表
function renderCourses() {
    courseGrid.innerHTML = '';
    
    courseData.forEach(course => {
        const t = translations[currentLang];
        // 动态获取课程文本
        const title = t[`course_${course.id}_title`];
        const desc = t[`course_${course.id}_desc`];
        const audience = t[`course_${course.id}_audience`];
        
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-thumbnail">${course.thumbnail}</div>
            <h3>${title}</h3>
            <p>${desc}</p>
            <div class="course-meta">
                <span>👥 ${audience}</span>
            </div>
            <a href="javascript:void(0)" class="btn-card">${t.watch_btn}</a>
        `;
        
        courseCard.addEventListener('click', () => openVideoModal(course, title, desc));
        courseGrid.appendChild(courseCard);
    });
}

// 打开视频模态框
function openVideoModal(course, title, desc) {
    videoTitle.textContent = title;
    videoDescription.textContent = desc;
    videoPlayer.src = course.videoUrl;
    videoModal.style.display = 'block';
    
    // 播放视频
    videoPlayer.play().catch(err => {
        console.log('自动播放被阻止，用户需要手动点击播放');
    });
}

// 关闭视频模态框
function closeVideoModal() {
    videoModal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = '';
}

// 设置事件监听器
function setupEventListeners() {
    // 语言切换
    languageSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        document.documentElement.lang = currentLang; // Update html lang attr
        renderContent();
    });

    // 关闭按钮
    closeBtn.addEventListener('click', closeVideoModal);
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && videoModal.style.display === 'block') {
            closeVideoModal();
        }
    });
    
    // 平滑滚动导航
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果只是切换语言，不需要阻止默认行为（这里其实已经在HTML里处理了href）
            // 主要是为了平滑滚动
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
