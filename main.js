let intro = document.querySelector('.intro');
let name = document.querySelector('.name-header');
let nameSpan = document.querySelectorAll('.name');
let main = document.querySelector('.main');
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
        },8000);
	setTimeout(()=>{
		main.classList.add('active');
	},10000);
	setTimeout(()=>{
		cursor.style.display ="block";
	},13000);
	
});

let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove',(e)=>{
	let x = e.clientX;
	let y = e.pageY;
	cursor.style.left = x+"px";
	cursor.style.top = y+"px";
});
document.addEventListener('wheel',(e)=>{
	let x = e.clientX;
	let y = e.pageY;
	cursor.style.left = x+"px";
	cursor.style.top = y+"px";
});

let dd = document.querySelectorAll(".dd");

dd.forEach((d,i)=>{

	d.addEventListener('mouseover',()=>{
		cursor.classList.add('hov');
	});
	d.addEventListener('mouseout',()=>{
		cursor.classList.remove('hov');
	});
});

