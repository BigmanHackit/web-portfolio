const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // entry.target.classList.remove('.hidden');
        }else {
            entry.target.classList.remove('show');
        }
    });
});

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
            // entry.target.classList.remove('.hidden');
        }else {
            entry.target.classList.remove('show1');
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
            // entry.target.classList.remove('.hidden');
        }else {
            entry.target.classList.remove('show2');
        }
    });
});

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
            // entry.target.classList.remove('.hidden');
        }else {
            entry.target.classList.remove('show3');
        }
    });
});

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show4');
            // entry.target.classList.remove('.hidden');
        }else {
            entry.target.classList.remove('show4');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer1.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observer3.observe(el));

const hiddenElements4 = document.querySelectorAll('.hidden4');
hiddenElements4.forEach((el) => observer4.observe(el));


// Form validation function

function validate() {
    let name = document.querySelector('#userName');
    let password = document.querySelector('#pwd');
    let confirmPassword = document.querySelector('#pwd');
    let submit = document.querySelector('#submitBtn');
    let msg = document.querySelectorAll('#promptMsg');

    if (password < 8 || confirmPassword < 8) {
        this.msg.innerHTML = 'password must be at least 8 characters';
    }
}


// Preloader

// setTimeout(() => {
//     document.getElementById('idname').style.display = 'none'
//     document.getElementById('mainsiteid').style.display = 'block'
// }, 3000);

//  Sidebar script