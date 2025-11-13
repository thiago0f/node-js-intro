
/**
 * @param {number} horasTrabalhadas 
 * @param {number} valorPorHora 
 * @returns {number} 
 */
function calcularSalario(horasTrabalhadas, valorPorHora) {
    return horasTrabalhadas * valorPorHora;
}

/**
 * @param {string} marca - 
 * @param {string} modelo - 
 * @param {number} ano - 
 * @param {string} cor - 
 * @returns {Object} 
 */
function criarCarro(marca, modelo, ano, cor) {
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        
        /**
         * @returns {string} 
         */
        obterDescricao: function() {
            return `${this.marca} ${this.modelo} ${this.ano} - Cor: ${this.cor}`;
        }
    };
}

module.exports = {
    calcularSalario,
    criarCarro
};

