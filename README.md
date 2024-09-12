AppBruno
Este projeto foi gerado com Angular CLI versão 18.2.4.

Descrição
O AppBruno é um projeto Angular que implementa uma aplicação com duas telas principais, onde cada tela é composta por componentes distintos. O projeto permite a comunicação e parametrização entre os componentes, utilizando técnicas como @Input(), @Output(), e emissão de eventos entre os componentes.

Funcionalidades
Seleção de datas: Um componente personalizado para selecionar um intervalo de datas, que utiliza @Input() para receber as datas inicial e final, e @Output() para emitir eventos ao selecionar um novo intervalo de datas.
Exemplo prático de comunicação entre componentes: A aplicação inclui exemplos de como passar parâmetros entre componentes pai e filho, além de como tratar eventos emitidos por componentes filhos.
Servidor de desenvolvimento
Execute ng serve para iniciar o servidor de desenvolvimento. Navegue até http://localhost:4200/. A aplicação será recarregada automaticamente se você modificar qualquer um dos arquivos fonte.

Estrutura de Componentes
Componente DateSelector
Este componente permite a seleção de uma data inicial e uma data final, exibindo um intervalo de datas e emitindo um evento quando o intervalo é selecionado.

Exemplo de uso:

html
Copiar código
<app-date-selector [startDate]="startDate" [endDate]="endDate" (onSelect)="updateSelectedDates($event)"></app-date-selector>
Inputs:

startDate: Data inicial para o calendário.
endDate: Data final para o calendário.
Output:

onSelect: Evento emitido quando o usuário seleciona um intervalo de datas.
Componente CalendarPage
Este componente pai utiliza o DateSelector e trata o evento de seleção de datas.

Exemplo de uso:

html
Copiar código
<app-calendar-page></app-calendar-page>
Comandos úteis
Criação de novos componentes
Execute ng generate component nome-do-componente para gerar um novo componente. Você também pode utilizar ng generate directive|pipe|service|class|guard|interface|enum|module para gerar outros tipos de artefatos no projeto.

Build
Execute ng build para compilar o projeto. Os artefatos de build serão armazenados no diretório dist/.

Testes unitários
Execute ng test para rodar os testes unitários via Karma.

Testes de ponta a ponta
Execute ng e2e para rodar os testes de ponta a ponta via uma plataforma de sua escolha. Para usar esse comando, você deve primeiro adicionar um pacote que implemente funcionalidades de teste de ponta a ponta.

Ajuda adicional
Para obter mais ajuda sobre o Angular CLI, utilize ng help ou acesse a página de documentação oficial do Angular CLI.

Esse texto detalha o propósito do projeto, explica as funcionalidades dos componentes principais e mantém as informações úteis sobre comandos de desenvolvimento e build.






