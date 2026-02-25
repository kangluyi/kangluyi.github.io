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
    const mainHomeLeftCover = document.getElementById('main_home_left_cover');

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

    // 音乐播放控制
    function toggleMusic() {
        if (backgroundMusicAudio.paused) {
            backgroundMusicAudio.play();
        } else {
            backgroundMusicAudio.pause();
        }
    }

    // 绑定事件
    if (greetingStart) {
        greetingStart.addEventListener('click', function() {
            if (greeting) {
                greeting.classList.add('hidden');
            }
        });
    }

    if (homeLearn) {
        homeLearn.addEventListener('click', function() {
            openContent('了解', 'learn.html');
        });
    }

    if (homeProjects) {
        homeProjects.addEventListener('click', function() {
            openContent('项目', 'projects.html');
        });
    }

    if (homeContact) {
        homeContact.addEventListener('click', function() {
            openContent('联系', 'contact.html');
        });
    }

    if (homeDonate) {
        homeDonate.addEventListener('click', function() {
            openContent('捐助', 'donate.html');
        });
    }

    if (mainContentClose) {
        mainContentClose.addEventListener('click', closeContent);
    }

    if (backgroundMusic) {
        backgroundMusic.addEventListener('click', toggleMusic);
    }

    if (mainHomeLeftCover) {
        mainHomeLeftCover.addEventListener('click', toggleMusic);
    }

    // 初始化页面
    console.log('个人网站初始化完成');
});