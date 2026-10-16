1.
O fetch apenas considera como falha problemas de conexão de rede,404 é uma resposta válida.
O fetch apenas lança exceções em casos de falha de rede ou bloqueios de CORS.

2.
A função res.json() devolve uma Promise. Sem o await, o código não espera pela 
resolução da mesma e guarda o objeto da Promise pendente em vez dos dados finais
A pagina pode apresentar dados incorretos


3.
O innerHTML interpreta e executa a estrutura de marcação recebida, 
o que permite ataques de injeção de código caso os dados da API contenham 
scripts maliciosos ou marcações não desejadas


4.
O Vue assumirá toda a manipulação do DOM
Em vez de ter de reconstruir os elementos HTML à mão e ter de chamar a função render(),
o Vue vai detetar as mudanças de forma automática