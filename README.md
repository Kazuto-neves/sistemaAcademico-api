# sistema Academico API

<details>
  <summary>Tema</summary>
  <p>O tema proposto neste trabalho era de elaborar um serviço sistema acadêmico tendo o controle de todas as partes que um sistema acadêmico deve ter controles de (Disciplina, Boletim, Aluno, Professor, etc.).</p>
</details>

<details>
  <summary>Motivação</summary>
  <p>A proposta era pegar a ideia do sistema acadêmico da faeterj e separar a aplicação do front-end com o back-end além de usar de tecnologias atuais que beneficiam na hora de rodar a aplicação, além de poder servir como molde para todas as faculdades da rede faetec, pois o mesmo poderia estar rodando em um sistema distribuído prevenindo falhas como queda de luz, falha na rede, desastres naturais.</p>
</details>


<details>
  <summary>O problema abordado</summary>
  <p>Na parte da construção do trabalho, houve dificuldade sobre o uso do Docker e de como subir a imagem do banco de dados nele. A primeiro momento foi usado o Postgresql, mas foi posteriormente trocado pelo Mysql por ser mais prático neste trabalho. Outro problema relacionado ao Docker  e de como levantar o container coloca-lo no Docker hub, os comandos não funcionavam direito e por isso ele não levantava a imagem do projeto.
Um ponto importante é que por falta de tempo, muitas ideias tiveram que ser descartadas para conseguir realizar o mínimo do trabalho.</p>
</details>

<details>
  <summary>Funcionalidades do sistema</summary>
  <p>A aplicação faz um CRUD(criar, exibe, atualiza e deleta) os dados de forma simples do aluno, professor, boletim e disciplina.</p>
</details>

<h2> Bibliotecas usadas</h2>

<details>
  <summary>Para a integração do banco de dados com a aplicação foi usado:</summary>
  <ul>
    <li>Conector do Mysql</li>
    <li>Express</li>
    <li>BodyParser</li>
    <li>Morgan</li>
  </ul>
</details>

<details>
  <summary>Para executar o servidor  de forma contínua foi usado o :</summary>
  <ul><li>nodemon</li></ul>
</details>
