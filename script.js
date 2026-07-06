document.addEventListener('DOMContentLoaded', function() {
    // 元素获取
    const greeting = document.getElementById('greeting');
    const greetingStart = document.getElementById('greeting_start');
    const homeLearn = document.getElementById('home_learn');
    const homeProjects = document.getElementById('home_projects');
    const homeContact = document.getElementById('home_contact');
    const homeDonate = document.getElementById('home_donate');
    const mainContent = document.getElementById('main_content');
    const mainContentTitle = document.getElementById('main_content_title');
    const mainContentFrame = document.getElementById('main_content_frame');
    const mainContentClose = document.getElementById('main_content_close');
    const mainLoading = document.getElementById('main_loading');
    const backgroundMusic = document.getElementById('background_music');
    const backgroundMusicAudio = document.getElementById('background_music_audio');


    // 菜单点击事件
    function openContent(title, url) {
        mainContentTitle.textContent = title;
        mainLoading.classList.add('active');
        
        mainContentFrame.onload = function() {
            mainLoading.classList.remove('active');
        };
        
        mainContentFrame.src = url;
        mainContent.classList.add('active');
    }

    // 关闭内容区域
    function closeContent() {
        mainContent.classList.remove('active');
        mainContentFrame.src = '';
    }

    function bindMenu(menu, title, url) {
        if (!menu) {
            return;
        }

        menu.addEventListener('click', function() {
            openContent(title, url);
        });

        menu.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openContent(title, url);
            }
        });
    }

    // 音乐播放控制
    function toggleMusic() {
        if (backgroundMusicAudio.paused) {
            backgroundMusicAudio.play();
            backgroundMusic.classList.add('playing');
        } else {
            backgroundMusicAudio.pause();
            backgroundMusic.classList.remove('playing');
        }
    }

    // 监听音频播放状态变化，同步UI
    if (backgroundMusicAudio) {
        backgroundMusicAudio.addEventListener('play', function() {
            backgroundMusic.classList.add('playing');
        });
        backgroundMusicAudio.addEventListener('pause', function() {
            backgroundMusic.classList.remove('playing');
        });
    }

    // 绑定事件
    if (greetingStart) {
        greetingStart.addEventListener('click', function() {
            if (greeting) {
                greeting.classList.add('hidden');
            }
        });
    }

    bindMenu(homeLearn, '了解', 'learn.html');
    bindMenu(homeProjects, '项目', 'projects.html');
    bindMenu(homeContact, '联系', 'contact.html');
    bindMenu(homeDonate, '捐助', 'donate.html');

    if (mainContentClose) {
        mainContentClose.addEventListener('click', closeContent);
    }

    if (backgroundMusic) {
        backgroundMusic.addEventListener('click', toggleMusic);
    }



    // 初始化页面
    console.log('个人网站初始化完成');
});
