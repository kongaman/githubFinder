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
            if (data.profile.message === 'Not Found') {
                //Show Alert through UI.js
            } else {
                // Sow Profile through UI.js
                ui.showProfile(data.profile);
            }
        })
    } else {
        // Clear Profile through ui.js
    }
});