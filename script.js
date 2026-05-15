// MA'LUMOTLAR BAZASI (LocalStorage bilan ishlash)
const STORAGE_KEYS = {
    USERS: 'quizmaster_users',
    CURRENT_USER: 'quizmaster_current_user',
    QUIZZES: 'quizmaster_quizzes',
    RESULTS: 'quizmaster_results',
    STATS: 'quizmaster_stats'
};

// Boshlang'ich ma'lumotlar
const initialQuizzes = [
    // MATEMATIKA TESTLARI
    {
        id: 1,
        title: "Algebra asoslari",
        category: "matematika",
        difficulty: "easy",
        description: "Tenglamalar va ifodalar",
        questions: [
            {
                question: "x² = 49 tenglamaning ildizlari yig'indisini toping.",
                options: ["7", "14", "0", "49"],
                correct: 2
            },
            {
                question: "5x + 3 = 2x + 15 tenglamani yeching.",
                options: ["4", "5", "6", "7"],
                correct: 0
            },
            {
                question: "(a + b)² ifodaning yoyilmasini toping.",
                options: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + ab + b²"],
                correct: 1
            },
            {
                question: "√144 ning qiymatini toping.",
                options: ["11", "12", "13", "14"],
                correct: 1
            },
            {
                question: "3! (faktorial) ning qiymati nechaga teng?",
                options: ["3", "6", "9", "12"],
                correct: 1
            }
        ],
        plays: 1250,
        rating: 4.8
    },
    {
        id: 2,
        title: "Geometriya testi",
        category: "matematika",
        difficulty: "medium",
        description: "Shakllar va ularning xossalari",
        questions: [
            {
                question: "To'g'ri to'rtburchakning perimetri 40 sm, eni 8 sm bo'lsa, bo'yini toping.",
                options: ["10 sm", "12 sm", "14 sm", "16 sm"],
                correct: 1
            },
            {
                question: "Aylana uzunligi formulasi qaysi?",
                options: ["2πr", "πr²", "πd", "2πd"],
                correct: 0
            },
            {
                question: "Uchburchak ichki burchaklari yig'indisi necha gradus?",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1
            }
        ],
        plays: 980,
        rating: 4.6
    },

    // FIZIKA TESTLARI
    {
        id: 3,
        title: "Mexanika asoslari",
        category: "fizika",
        difficulty: "medium",
        description: "Harakat va kuchlar",
        questions: [
            {
                question: "Nyutonning birinchi qonuni qanday nomlanadi?",
                options: ["Inersiya qonuni", "Dinamika qonuni", "Reaksiya qonuni", "Gravitatsiya qonuni"],
                correct: 0
            },
            {
                question: "Tezlikning o'lchov birligi?",
                options: ["m/s", "m/s²", "N", "J"],
                correct: 0
            },
            {
                question: "Erkin tushish tezlanishi qiymati?",
                options: ["9.8 m/s²", "10 m/s²", "9.8 m/s", "10 m/s"],
                correct: 0
            }
        ],
        plays: 870,
        rating: 4.7
    },

    // TARIX TESTLARI
    {
        id: 4,
        title: "O'zbekiston tarixi",
        category: "tarix",
        difficulty: "easy",
        description: "Qadimgi davrdan to hozirgacha",
        questions: [
            {
                question: "Amir Temur qachon tug'ilgan?",
                options: ["1336", "1337", "1338", "1339"],
                correct: 0
            },
            {
                question: "Mustaqillik qachon e'lon qilingan?",
                options: ["1990", "1991", "1992", "1993"],
                correct: 1
            },
            {
                question: "Samarqandda qaysi mashhur masjid joylashgan?",
                options: ["Bibi-Xonim", "Minorai Kalon", "Xo'ja Ahror", "Balx"],
                correct: 0
            }
        ],
        plays: 1500,
        rating: 4.9
    },

    // ADABIYOT TESTLARI
    {
        id: 5,
        title: "O'zbek adabiyoti",
        category: "adabiyot",
        difficulty: "medium",
        description: "Shoir va yozuvchilar ijodi",
        questions: [
            {
                question: "'Alpomish' dostoni qahramoni kim?",
                options: ["Alpomish", "Barchin", "Qorajon", "Surxayil"],
                correct: 0
            },
            {
                question: "Abdulla Qodiriy qaysi asarni yozgan?",
                options: ["O'tkan kunlar", "Mehrobdan chayon", "Ikki eshik orasi", "Sarob"],
                correct: 0
            },
            {
                question: "Navoiyning 'Xamsa' asari necha doston?",
                options: ["3", "4", "5", "6"],
                correct: 2
            }
        ],
        plays: 720,
        rating: 4.5
    }
];

// Boshlang'ich statistikalar
const initialStats = {
    totalUsers: 15420,
    totalQuizzes: 45,
    totalPlays: 23450
};

// Ma'lumotlarni yuklash
function loadData() {
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.QUIZZES)) {
        localStorage.setItem(STORAGE_KEYS.QUIZZES, JSON.stringify(initialQuizzes));
    }
    if (!localStorage.getItem(STORAGE_KEYS.RESULTS)) {
        localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.STATS)) {
        localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(initialStats));
    }
}

// UI elementlari
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const userProfile = document.getElementById('userProfile');
const usernameDisplay = document.getElementById('usernameDisplay');
const logoutBtn = document.getElementById('logoutBtn');
const quizzesContainer = document.getElementById('quizzesContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');

// Quiz modal elementlari
const quizModal = document.getElementById('quizModal');
const closeQuizModal = document.getElementById('closeQuizModal');
const quizModalTitle = document.getElementById('quizModalTitle');
const progressBar = document.getElementById('progressBar');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const scoreSpan = document.getElementById('score');
const timerSpan = document.getElementById('timer');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

// Result modal elementlari
const resultModal = document.getElementById('resultModal');
const correctAnswersSpan = document.getElementById('correctAnswers');
const wrongAnswersSpan = document.getElementById('wrongAnswers');
const totalScoreSpan = document.getElementById('totalScore');
const percentageSpan = document.getElementById('percentage');
const resultMessage = document.getElementById('resultMessage');
const playAgainBtn = document.getElementById('playAgainBtn');
const homeBtn = document.getElementById('homeBtn');

// Statistikalar
const totalUsersSpan = document.getElementById('totalUsers');
const totalQuizzesSpan = document.getElementById('totalQuizzes');
const totalPlaysSpan = document.getElementById('totalPlays');

// Reyting jadvali
const ratingBody = document.getElementById('ratingBody');
const ratingTabs = document.querySelectorAll('.rating-tab');

// Quiz o'zgaruvchilari
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timer = null;
let timeLeft = 15;

// Mobil menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Modal oynalar
loginBtn.addEventListener('click', () => {
    authModal.classList.add('active');
    loginTab.click();
});

registerBtn.addEventListener('click', () => {
    authModal.classList.add('active');
    registerTab.click();
});

closeModal.addEventListener('click', () => {
    authModal.classList.remove('active');
});

// Tablar
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// LOGIN form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS));
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
        updateUIForLoggedInUser(user);
        authModal.classList.remove('active');
        showNotification('Muvaffaqiyatli kirdingiz!', 'success');
    } else {
        showNotification('Email yoki parol noto\'g\'ri!', 'error');
    }
});

// REGISTER form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Parollar mos kelmadi!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS));

    if (users.some(u => u.email === email)) {
        showNotification('Bu email allaqachon ro\'yxatdan o\'tgan!', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        avatar: `https://ui-avatars.com/api/?name=${name}&background=6c5ce7&color=fff&size=40`,
        registeredAt: new Date().toISOString(),
        stats: {
            quizzesPlayed: 0,
            totalScore: 0,
            correctAnswers: 0
        }
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));

    updateUIForLoggedInUser(newUser);
    authModal.classList.remove('active');
    showNotification('Ro\'yxatdan muvaffaqiyatli o\'tdingiz!', 'success');
});

// Logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    updateUIForLoggedOutUser();
    showNotification('Tizimdan chiqdingiz', 'info');
});

// UI ni yangilash
function updateUIForLoggedInUser(user) {
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    userProfile.style.display = 'flex';
    usernameDisplay.textContent = user.name;
}

function updateUIForLoggedOutUser() {
    loginBtn.style.display = 'flex';
    registerBtn.style.display = 'flex';
    userProfile.style.display = 'none';
}

// Testlarni ko'rsatish
function displayQuizzes(filter = 'all') {
    const quizzes = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZZES));
    const filtered = filter === 'all' ? quizzes : quizzes.filter(q => q.category === filter);

    quizzesContainer.innerHTML = '';

    filtered.forEach(quiz => {
        const card = document.createElement('div');
        card.className = 'quiz-card';
        card.innerHTML = `
            <div class="quiz-card-header">
                <span class="quiz-category"><i class="fas fa-${getCategoryIcon(quiz.category)}"></i> ${getCategoryName(quiz.category)}</span>
                <span class="quiz-difficulty difficulty-${quiz.difficulty}">${getDifficultyName(quiz.difficulty)}</span>
            </div>
            <h3>${quiz.title}</h3>
            <p>${quiz.description}</p>
            <div class="quiz-card-footer">
                <div class="quiz-stats">
                    <span><i class="fas fa-question-circle"></i> ${quiz.questions.length} ta</span>
                    <span><i class="fas fa-star"></i> ${quiz.rating}</span>
                </div>
                <button class="quiz-play-btn" onclick="startQuiz(${quiz.id})">
                    <i class="fas fa-play"></i> Boshlash
                </button>
            </div>
        `;
        quizzesContainer.appendChild(card);
    });
}

function getCategoryIcon(category) {
    const icons = {
        matematika: 'calculator',
        fizika: 'flask',
        tarix: 'landmark',
        adabiyot: 'book',
        informatika: 'laptop-code',
        geografiya: 'globe'
    };
    return icons[category] || 'puzzle-piece';
}

function getCategoryName(category) {
    const names = {
        matematika: 'Matematika',
        fizika: 'Fizika',
        tarix: 'Tarix',
        adabiyot: 'Adabiyot',
        informatika: 'Informatika',
        geografiya: 'Geografiya'
    };
    return names[category] || category;
}

function getDifficultyName(difficulty) {
    const names = {
        easy: 'Oson',
        medium: "O'rtacha",
        hard: 'Qiyin'
    };
    return names[difficulty] || difficulty;
}

// Filter tugmalari
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        displayQuizzes(btn.dataset.filter);
    });
});

// Kategoriya kartalari
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        document.querySelector(`[data-filter="${category}"]`).click();
        document.querySelector('#quizzes').scrollIntoView({ behavior: 'smooth' });
    });
});

// Testni boshlash
window.startQuiz = function(quizId) {
    const currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
    if (!currentUser) {
        showNotification('Test yechish uchun tizimga kiring!', 'warning');
        authModal.classList.add('active');
        return;
    }

    const quizzes = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZZES));
    currentQuiz = quizzes.find(q => q.id === quizId);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    score = 0;

    quizModalTitle.textContent = currentQuiz.title;
    totalQuestionsSpan.textContent = currentQuiz.questions.length;
    updateQuizDisplay();

    quizModal.classList.add('active');
    startTimer();
};

// Quiz display ni yangilash
function updateQuizDisplay() {
    const question = currentQuiz.questions[currentQuestionIndex];
    questionText.textContent = question.question;

    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = `option-item ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`;
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%`;

    prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        finishBtn.style.display = 'none';
    }
}

// Variant tanlash
function selectOption(index) {
    if (userAnswers[currentQuestionIndex] !== null) return;

    userAnswers[currentQuestionIndex] = index;
    const question = currentQuiz.questions[currentQuestionIndex];

    if (index === question.correct) {
        score += 10;
        scoreSpan.textContent = score;
    }

    updateQuizDisplay();

    // Avtomatik keyingi savolga o'tish (3 sekunddan keyin)
    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            nextQuestion();
        }
    }, 2000);
}

// Oldingi savol
prevBtn.addEventListener('click', prevQuestion);
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuizDisplay();
        resetTimer();
    }
}

// Keyingi savol
nextBtn.addEventListener('click', nextQuestion);
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        updateQuizDisplay();
        resetTimer();
    }
}

// Testni yakunlash
finishBtn.addEventListener('click', finishQuiz);
function finishQuiz() {
    clearInterval(timer);

    const correctCount = userAnswers.filter((answer, index) =>
        answer === currentQuiz.questions[index].correct
    ).length;

    const wrongCount = userAnswers.filter(a => a !== null).length - correctCount;
    const percentage = Math.round((correctCount / currentQuiz.questions.length) * 100);

    correctAnswersSpan.textContent = correctCount;
    wrongAnswersSpan.textContent = wrongCount;
    totalScoreSpan.textContent = score;
    percentageSpan.textContent = percentage + '%';

    let message = '';
    if (percentage >= 80) {
        message = "Ajoyib! Siz haqiqiy mutaxassissiz! 🏆";
    } else if (percentage >= 60) {
        message = "Yaxshi natija! Bilimingizni yanada oshiring! 📚";
    } else if (percentage >= 40) {
        message = "O'rtacha natija. Ko'proq mashq qiling! 💪";
    } else {
        message = "Qayta urinib ko'ring! Muvaffaqiyatga erishasiz! ⭐";
    }
    resultMessage.textContent = message;

    // Natijalarni saqlash
    saveQuizResult(correctCount, wrongCount, score);

    quizModal.classList.remove('active');
    resultModal.classList.add('active');
}

// Natijalarni saqlash
function saveQuizResult(correct, wrong, score) {
    const currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
    if (!currentUser) return;

    const results = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESULTS));
    const newResult = {
        id: Date.now(),
        userId: currentUser.id,
        userName: currentUser.name,
        quizId: currentQuiz.id,
        quizTitle: currentQuiz.title,
        category: currentQuiz.category,
        correct,
        wrong,
        score,
        date: new Date().toISOString()
    };
    results.push(newResult);
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results));

    // Reytingni yangilash
    updateRatingTable();
}

// Taymer
function startTimer() {
    timeLeft = 15;
    timerSpan.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Vaqt tugaganda avtomatik keyingi savolga o'tish
            if (currentQuestionIndex < currentQuiz.questions.length - 1) {
                nextQuestion();
            } else {
                finishQuiz();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Qayta boshlash
playAgainBtn.addEventListener('click', () => {
    resultModal.classList.remove('active');
    startQuiz(currentQuiz.id);
});

homeBtn.addEventListener('click', () => {
    resultModal.classList.remove('active');
});

// Modalni yopish
closeQuizModal.addEventListener('click', () => {
    if (confirm('Testni to\'xtatmoqchimisiz?')) {
        quizModal.classList.remove('active');
        clearInterval(timer);
    }
});

// Reyting jadvalini yangilash
function updateRatingTable(period = 'all') {
    const results = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESULTS));

    // Foydalanuvchilar bo'yicha guruhlash
    const userStats = {};

    results.forEach(result => {
        const date = new Date(result.date);
        const now = new Date();
        let include = true;

        if (period === 'daily') {
            include = date.toDateString() === now.toDateString();
        } else if (period === 'weekly') {
            const weekAgo = new Date(now.setDate(now.getDate() - 7));
            include = date >= weekAgo;
        } else if (period === 'monthly') {
            const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
            include = date >= monthAgo;
        }

        if (include) {
            if (!userStats[result.userId]) {
                userStats[result.userId] = {
                    name: result.userName,
                    quizzes: 0,
                    totalScore: 0,
                    correct: 0,
                    total: 0
                };
            }
            userStats[result.userId].quizzes++;
            userStats[result.userId].totalScore += result.score;
            userStats[result.userId].correct += result.correct;
            userStats[result.userId].total += result.correct + result.wrong;
        }
    });

    // Reytingni tartiblash
    const sortedUsers = Object.entries(userStats)
        .map(([id, stats]) => ({
            id,
            ...stats,
            percentage: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
        }))
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 10);

    // Jadvalni to'ldirish
    ratingBody.innerHTML = '';
    sortedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><i class="fas fa-user"></i> ${user.name}</td>
            <td>${user.quizzes}</td>
            <td>${user.totalScore}</td>
            <td>${user.percentage}%</td>
        `;
        ratingBody.appendChild(row);
    });
}

// Reyting tablari
ratingTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        ratingTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        updateRatingTable(tab.dataset.period);
    });
});

// Statistikalarni yangilash
function updateStats() {
    const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.STATS));
    const results = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESULTS));

    totalUsersSpan.textContent = stats.totalUsers.toLocaleString();
    totalQuizzesSpan.textContent = stats.totalQuizzes;
    totalPlaysSpan.textContent = results.length.toLocaleString();
}

// Bildirishnoma ko'rsatish
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    displayQuizzes();
    updateRatingTable();
    updateStats();

    // Avtorizatsiyani tekshirish
    const currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER));
    if (currentUser) {
        updateUIForLoggedInUser(currentUser);
    }
});

// Notification uchun CSS qo'shish
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 5000;
        animation: slideIn 0.3s ease;
    }

    .notification-success {
        border-left: 4px solid #1dd1a1;
    }

    .notification-success i {
        color: #1dd1a1;
    }

    .notification-error {
        border-left: 4px solid #ff6b6b;
    }

    .notification-error i {
        color: #ff6b6b;
    }

    .notification-warning {
        border-left: 4px solid #feca57;
    }

    .notification-warning i {
        color: #feca57;
    }

    .notification-info {
        border-left: 4px solid #6c5ce7;
    }

    .notification-info i {
        color: #6c5ce7;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);