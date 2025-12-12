const USER_DATA_KEY = 'efreiUserData';
const USER_INFO_KEY = 'efreiUserInfo';

function saveFullUserData(data) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
}

function saveHeaderInfo(nom, prenom) {
    const userInfo = { nom: nom, prenom: prenom };
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
}

function updateHeaderDisplay() {
    const userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY));
    const userInfoElement = document.getElementById('user-info');
    const signInLink = document.querySelector('a[href*="Sign-in.html"]');

    // Le lien de connexion (signInLink) est désormais toujours visible par défaut dans le HTML et le CSS
    // Nous gérons uniquement l'affichage de l'information utilisateur

    if (userInfo && userInfoElement) {
        // Afficher le nom et prénom de l'utilisateur
        userInfoElement.textContent = `${userInfo.prenom} ${userInfo.nom}`;
        userInfoElement.style.display = 'block';
        
        // Optionnel : Changer le look du lien de connexion pour indiquer que c'est une "re-soumission"
        // Nous allons simplement le garder visible à côté du nom.
        
    } else {
        // Masquer l'information utilisateur s'il n'y a pas de formulaire soumis
        if (userInfoElement) {
            userInfoElement.style.display = 'none';
        }
    }
}

function displayUserDataOnAPropos() {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
    
    if (userData) {
        const dataHtml = `
            <div class="stat-box">
                <h3 class="stat-label">Dernière Soumission du Formulaire (Sign-in)</h3>
                <ul class="job-list" style="list-style-type: disc; color: #333;">
                    <li><strong>Nom:</strong> ${userData.nom}</li>
                    <li><strong>Prénom:</strong> ${userData.prenom}</li>
                    <li><strong>Date de Naissance:</strong> ${userData.naissance}</li>
                    <li><strong>Email:</strong> ${userData.mail}</li>
                    <li><strong>Genre:</strong> ${userData.genre}</li>
                </ul>
            </div>
        `;
        const statsContainer = document.querySelector('#contributions .stats-container');
        if (statsContainer) {
            statsContainer.insertAdjacentHTML('beforeend', dataHtml);
        }
    }
}

document.addEventListener('DOMContentLoaded', updateHeaderDisplay);

if (document.URL.includes('A_propos.html')) {
    document.addEventListener('DOMContentLoaded', displayUserDataOnAPropos);
}