# CodeFliX
<hr>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Aplicação](#aplicação)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Acesso ao projeto - Deploy](#acesso-ao-projeto---deploy)

- [Abrir e rodar o projeto localmente](#abrir-e-rodar-o-projeto-localmente)

## Descrição do projeto 

<p>
O CodeFliX é uma plataforma de catálogo de aulas dividida por módulos.
  
O sistema tem como principal função, exibir um catálogo de aulas, divididos por módulo. O usuário poderá se registar e fazer login, para ter acesso a recursos extras, como acesso ao painel administrativo e gerenciamento dos cursos.
</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Visualizar catálogo de cursos divididos por módulos.

:heavy_check_mark: `Funcionalidade 2:` Sistema de autenticação com login e cadastro (Sistema de autenticação JWT).

:heavy_check_mark: `Funcionalidade 3:` Painel administrativo de acesso somente para usuários autenticados, para excluir, editar e adicionar aulas e módulos.

## Aplicação
### Página principal da aplicação
![Screenshot_20220414_143545](https://user-images.githubusercontent.com/27708175/163443114-535663ae-d8f9-4032-b4d3-5a0b6d1da076.png)

### Video usando todos os recursos da aplicação
https://user-images.githubusercontent.com/27708175/163450594-c68ef7d3-3fdc-467a-8079-d71b7eeda545.mp4

## Ferramentas utilizadas

<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /> Python 3</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" /> Django 4</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> Javascript</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> Typescript</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> HTML 5</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> CSS 3</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" /> Angular CLI 12</p>
<p><img width="40" height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /> PostgreSQL</p>

## Acesso ao projeto - Deploy

<a href="https://proagro-facil.herokuapp.com/"><img width="80" height="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" /></a>

## Abrir e rodar o projeto localmente

#### Requisitos
- Shel do Linux;
- Python Versão 3
- Pipenv

### Backend
```console
git clone git@github.com:robsonleal/codeflix.git
cd codeflix
pipenv install
pipenv shell
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
### Frontend
```console
cd frontend
ng build --prod --output-path /{{caminho até o projeto}}/proagro_facil/backend/static/ang --watch --output-hashing none
```

- Abrir o endereço localhost:8000 no navegador de sua preferência;
- Com o build em execução qualquer alteração feita na pasta do projeto angular, será servido como arquivos estático para o Django
