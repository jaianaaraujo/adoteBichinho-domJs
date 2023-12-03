const criarTarefa = (event)=> {
    event.preventDefault();

   const nome = document.querySelector('[data-nome]');
   const conteudoNome = nome.value; 

   const idade = document.querySelector('[data-idade]');
   const conteudoIdade = idade.value;

   const img = document.querySelector('[data-img]');
   const conteudoImg = img.value;
   
   const section = document.querySelector('section');
   const ul = document.createElement('ul');
   section.appendChild(ul);

   const li = document.createElement('li');

   


   const informacao = `<img src="${conteudoImg}" class="imagem"> <br> <h4> ${conteudoNome} </h4> <br<br> Meu nome é: ${conteudoNome} e minha idade é: ${conteudoIdade}. ` 

   li.innerHTML = informacao;
   
   ul.appendChild(li);
   
      
   
}


const botao = document.querySelector('button');
botao.addEventListener('click', criarTarefa);