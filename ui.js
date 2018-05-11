class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        const options = {  
            weekday: "long", day: "numeric", month: "short", year: "numeric",   
            hour: "2-digit", minute: "2-digit"  
        };  
        let datum = (new Date(user.created_at)).toLocaleDateString('de-DE', options);

        this.profile.innerHTML = 
        `
        <div class ="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Profil anzeigen</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Firma: ${user.company}</li>
                        <li class="list-group-item">Webseite/Blog: ${user.blog}</li>
                        <li class="list-group-item">Wohnort: ${user.location}</li>
                        <li class="list-group-item">Bei GitHub seit: ${datum}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos:</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += 
            `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        //output repos
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className) {
        // Clear previous alerts
        this.clearAlert();
        // create div with class and text
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // Get parent to place element
        const container = document.querySelector('.search');
        // Get search box
        const search = document.getElementById('searchUser');
        // insert alert
        container.insertBefore(div, search);
        // Timeout Alert after 3 Sec
        setTimeout(() => { this.clearAlert(); }, 3000);
    }

    //Clear alert message befor showing a new one
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}