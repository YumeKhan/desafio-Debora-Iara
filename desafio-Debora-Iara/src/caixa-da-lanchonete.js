class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            { codigo: "cafe", descricao: "Café", valor: 3.00 },
                { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.50 },
                { codigo: "suco", descricao: "Suco Natural", valor: 6.20 },
                { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.50 },
                { codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
                { codigo: "salgado", descricao: "Salgado", valor: 7.25 },
                { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
                { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.50 },
        ];
        this.combos = [
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', itens: ['suco', 'sanduiche'], valor: 9.50 },
            // ... outros combos ...
        ];
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        if (!this.formasDePagamento.includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let total = 0;
        const itemQuantities = {};

        for (const itemInfo of itens) {
            const [itemCodigo, quantidade] = itemInfo.split(',');
            const item = this.cardapio.find(item => item.codigo === itemCodigo);

            if (!item) {
                return 'Item inválido!';
            }

            if (itemQuantities[itemCodigo]) {
                itemQuantities[itemCodigo] += parseInt(quantidade);
            } else {
                itemQuantities[itemCodigo] = parseInt(quantidade);
            }

            if (itemQuantities[itemCodigo] < 0) {
                return 'Quantidade inválida!';
            }

            total += item.valor * itemQuantities[itemCodigo];
        }

        if (formaDePagamento === 'dinheiro') {
            total *= 0.95; // 5% de desconto
        } else if (formaDePagamento === 'credito') {
            total *= 1.03; // 3% de acréscimo
        }

        for (const combo of this.combos) {
            const comboItems = combo.itens.every(item => itemQuantities[item]);
            if (comboItems) {
                total -= combo.valor;
            }
        }

        if (itemQuantities['chantily'] && !itemQuantities['cafe']) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };