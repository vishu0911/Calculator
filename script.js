let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            // Handle percentage properly
            string = string.replace(/(\d+)([+\-*/])(\d+)%/g, (match, base, operator, percent) => {
                let result = `${base}${operator}(${base}*${percent}/100)`;
                return result;
            });

            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});

