//Init classes
const gitHub = new GitHub;
const ui = new UI;
//search Input
const searchUser = document.getElementById('searchUser');
//EventListener
searchUser.addEventListener('keyup', (e) => {
    //Get iput text
    const userText = e.target.value;
    if (userText !== '') {
        console.log(userText);
        // make http-call
        gitHub.getUser(userText).then(data => {
            //console.log(data.profile.message);
            if (data.profile.message === 'Not Found') {
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Sow Profile through UI.js
                ui.clearAlert();
                ui.showProfile(data.profile);
               
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
});