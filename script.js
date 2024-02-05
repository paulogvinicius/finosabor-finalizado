    /* script relacionado a abertura da pagina */
    document.addEventListener("DOMContentLoaded", function () {
        // Aguarde um pouco mais (por exemplo, 3 segundos) e oculte completamente a máscara
        setTimeout(function () {
            document.getElementById("mask").style.display = "none";
        }, 6000);
    });
    
//Função para redirecionar o usuário a página com todos os produtos

function product(){
    window.location.href="produtos.html"
}

//Função ao clicar no botão voltar da pagina de produtos, o usuario vai retorna para a home do site

function  back(){
    window.location.href="index.html"
}




/*<!-- Script para abrir o WhatsApp (substitua o link conforme necessário) -->*/
  
function abrirWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5567984137814', '_blank');
}


/* Ação de eventos sobre o botão menu da tag nav (mobile). */
/* Parâmetros: Nome do evento, função. */
openMenu.addEventListener('click', () => {
	menu.style.display = "flex"
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	setTimeout(()=> {
		menu.style.opacity = '1'
		menu.style.right = "0"
		openMenu.style.display = 'none'
	}, 10);
})

closeMenu.addEventListener('click', () => {
	menu.style.opacity = '0'
	menu.style.right = (menu.offsetWidth * -1) + 'px'

	setTimeout(()=> {
		menu.removeAttribute('style')
		openMenu.removeAttribute('style')
	}, 200);
})



let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>6){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;

}
