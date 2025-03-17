/*===============================소개글===================================*/

let activeProfile = null;

function toggleProfile(profile) {
    const girlfriendProfile = document.getElementById('girlfriend-profile');
    const boyfriendProfile = document.getElementById('boyfriend-profile');
    const girlfriendDetail = document.getElementById('girlfriend-detail');
    const boyfriendDetail = document.getElementById('boyfriend-detail');
    const profileContainer = document.querySelector('.profile-container');

    if (activeProfile === profile) {
        // 프로필이 활성화된 상태에서 다시 클릭하면 원래 상태로 돌아감
        activeProfile = null;
        girlfriendProfile.classList.remove('active', 'inactive');
        boyfriendProfile.classList.remove('active', 'inactive');
        girlfriendDetail.classList.remove('active');
        boyfriendDetail.classList.remove('active');
        profileContainer.classList.remove('intro-bg');
    } else {
        // 다른 프로필이 활성화되도록 설정
        activeProfile = profile;
        if (profile === 'girlfriend') {
            girlfriendProfile.classList.add('active');
            boyfriendProfile.classList.add('inactive');
            girlfriendDetail.classList.add('active');
            boyfriendDetail.classList.remove('active');
            profileContainer.classList.add('intro-bg');
        } else if (profile === 'boyfriend') {
            boyfriendProfile.classList.add('active');
            girlfriendProfile.classList.add('inactive');
            boyfriendDetail.classList.add('active');
            girlfriendDetail.classList.remove('active');
            profileContainer.classList.add('intro-bg');
        }
    }
}


/*========================================================================*/