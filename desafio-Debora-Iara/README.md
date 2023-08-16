# DESAFIO CAIXA DA LANCHONETE

OBS: Oque foi relizado.

CaixaDaLanchonete, que descreve a lógica para calcular o valor de uma compra de acordo com as regras e informações fornecidas no desafio "Caixa da Lanchonete". Aqui está uma descrição formal do código:

A classe CaixaDaLanchonete é projetada para automatizar o cálculo do valor de compras em uma lanchonete, levando em consideração o cardápio, regras de desconto, formas de pagamento e outros critérios especificados. A implementação segue as orientações fornecidas no desafio para garantir a funcionalidade adequada do caixa.

Membros da Classe:

Constructor: O construtor da classe inicializa a estrutura do cardápio, que inclui diferentes itens de lanches e seus valores correspondentes. Também cria uma lista de combos, cada um com uma descrição, uma lista de itens componentes e um valor. Além disso, define as formas de pagamento aceitas, como dinheiro, débito e crédito.

Método calcularValorDaCompra(formaDePagamento, itens): Este método é o núcleo da funcionalidade da classe. Ele recebe dois parâmetros: formaDePagamento (que define a forma de pagamento, como "dinheiro", "debito" ou "credito") e itens (uma matriz contendo strings que representam os itens a serem comprados no formato codigo,quantidade).

O método começa validando a forma de pagamento para garantir que seja uma das formas aceitas. Também verifica se há pelo menos um item no carrinho de compra. Em seguida, itera sobre os itens especificados e calcula o valor total da compra com base nas quantidades e preços correspondentes.

O método aplica descontos ou acréscimos, dependendo da forma de pagamento selecionada. Além disso, verifica se os itens selecionados correspondem a algum dos combos definidos, ajustando o valor total de acordo.

Também é realizada uma verificação para determinar se um item extra (como chantily) foi selecionado sem seu item principal correspondente (como café), em conformidade com as regras da lanchonete.

O valor total calculado é formatado como uma string no formato "R$ X,XX", onde X representa os dígitos antes e após a vírgula.

Exportação da Classe: A classe é exportada usando a sintaxe export { CaixaDaLanchonete };, tornando-a disponível para uso em outros módulos ou arquivos.

Essa implementação da classe atende às especificações detalhadas no desafio, incluindo a consideração de cenários complexos, como itens extras, combos e validações de entrada. Ela encapsula a lógica necessária para calcular o valor total da compra de forma precisa, conforme as regras da lanchonete.
