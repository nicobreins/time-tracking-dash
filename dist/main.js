const navLinks = document.querySelectorAll('.profile-nav-link')
const currentTimeEls = document.querySelectorAll('.card-time');
const prevTimeEls = document.querySelectorAll('.prev-time');


function fetchData(period){
    return fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < currentTimeEls.length; i++){
            currentTimeEls[i].innerText = data[i].timeframes[period].current + 'hrs';
            prevTimeEls[i].innerText = data[i].timeframes[period].previous + 'hrs';
        }                    
    })
}

fetchData('daily');

navLinks.forEach(link => {
    link.addEventListener('click', (e)=>{
        e.preventDefault;
        const linkSiblings = Array.from(e.target.parentNode.children);
        linkSiblings.forEach(linkk => {
            linkk.classList.remove('active')
        })
        e.target.classList.add('active');

        if(e.target.id == 'daily'){
            fetchData('daily')
        }

        if(e.target.id == 'weekly'){
            fetchData('weekly')
        }

        if(e.target.id == 'monthly'){
            fetchData('monthly')
        }
        
    });
})
