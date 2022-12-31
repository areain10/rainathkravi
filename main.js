let intro = document.querySelector('.intro');
let name = document.querySelector('.name-header');
let nameSpan = document.querySelectorAll('.name');

window.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
                for(let i=0;i<3;i++){
                        setTimeout(()=>{
                                nameSpan[i].classList.add('active');
                        },(i+1)*800)
                }
        });

        setTimeout(()=>{
                for(let i=0;i<3;i++){
                        setTimeout(()=>{
                                setTimeout(()=>{

                                        nameSpan[i].classList.remove('active');
                                        nameSpan[i].classList.add('fade');
                                },0)
                        },2000)
                }
        },2000);
	setTimeout(()=>{
		nameSpan[3].classList.add('active');
	},5000)
        setTimeout(()=>{
                intro.style.top= '-100vh';
        },9000);
});
