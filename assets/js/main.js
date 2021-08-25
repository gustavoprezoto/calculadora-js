function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        totalValue: 0,
        
        inicia(){
            this.clickBtn();  
        },
        
        clickBtn(){
            document.addEventListener('click', function(event){
                const el = event.target;
                if (el.classList.contains('btn-num')) {
                    this.btntoDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.deleteLastOne();
                }

                if (el.classList.contains('btn-eql')){
                    this.showResult();
                }
            }.bind(this));
        },

        btntoDisplay(num){
            this.display.value += num;

        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteLastOne(){
            let displayValue = this.display.value;
            this.display.value = this.display.value.slice(0, -1);
        },

        showResult(){
            this.display.value = eval(this.display.value);
        },

    };
}

const calculadora = criaCalculadora();

calculadora.inicia();