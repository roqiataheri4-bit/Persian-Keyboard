const keyboard = document.getElementById('keyboard');
const output = document.getElementById('output');

// چیدمان دکمه‌ها (اعداد، حروف فارسی و کلیدهای خاص)
const keys = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح',
    'ج', 'چ', 'ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن',
    'م', 'ک', 'گ', 'ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'پ',
    'و', 'و', 'ه', 'ی', 'ء', 'آ', 'اً', '؛', '،', '.',
    'پاک کردن', 'فاصله'
];

// ساخت دکمه‌ها و اضافه کردن به صفحه
keys.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('key');

    // اعمال کلاس‌های خاص برای ابعاد و رنگ متفاوت دکمه‌ها
    if (key === 'پاک کردن') {
        button.classList.add('delete');
    } else if (key === 'فاصله') {
        button.classList.add('space');
    } else if (key === '0' || key === '9') {
        // برای تنظیم بالانس ردیف آخر دکمه‌ها (اختیاری)
    }

    // رویداد کلیک روی دکمه‌ها
    button.addEventListener('click', () => {
        handleKeyPress(key);
    });

    keyboard.appendChild(button);
});

// مدیریت عملکرد دکمه‌ها
function handleKeyPress(key) {
    if (key === 'پاک کردن') {
        // حذف آخرین کاراکتر متن
        output.value = output.value.slice(0, -1);
    } else if (key === 'فاصله') {
        // اضافه کردن فاصله
        output.value += ' ';
    } else {
        // اضافه کردن حرف یا عدد فشرده شده
        output.value += key;
    }
    
    // اسکرول خودکار به پایین در صورت طولانی شدن متن
    output.scrollTop = output.scrollHeight;
}