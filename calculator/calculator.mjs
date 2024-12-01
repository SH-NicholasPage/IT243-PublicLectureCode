class Calc
{
    xInput;
    yInput;
    #output;

    static xName = 'xInput';
    static yName = 'yInput';

    constructor(xInput, yInput, output)
    {
        this.xInput = xInput;
        this.yInput = yInput;
        this.#output = output;
        Object.seal(this);
    }

    render(result)
    {
        this.#output.innerText = String(result);
    }
}

class CalcValue
{
    #calc;
    #x;
    #y;
    #result;

    constructor(calc, x, y)
    {
        this.#calc = calc;
        this.#x = x;
        this.#y = y;
        this.#result = x + y;
        Object.seal(this);
    }

    // Returns a new CalcValue with the given name updated to the given value.
    copyWith(name, value)
    {
        const number = parseFloat(value);
        if (isNaN(number) || !isFinite(number))
        {
            return this;
        }
        if (name === Calc.xName)
        {
            return new CalcValue(this.#calc, number, this.#y);
        }
        if (name === Calc.yName)
        {
            return new CalcValue(this.#calc, this.#x, number);
        }
        return this;
    }

    render()
    {
        this.#calc.render(this.#result);
    }
}

const initCalc = (elem) =>
{
    const calc = new Calc(
        elem.querySelector('input#calc-x-input'),
        elem.querySelector('input#calc-y-input'),
        elem.querySelector('span#calc-result')
    );

    let lastValues = new CalcValue(
        calc,
        parseFloat(calc.xInput.value),
        parseFloat(calc.yInput.value)
    );

    const handleCalcEvent = (e) =>
    {
        const elem = e.target;
        let newValues = lastValues;

        switch (elem)
        {
            case calc.xInput:
                newValues = lastValues.copyWith(Calc.xName, elem.value);
                break;
            case calc.yInput:
                newValues = lastValues.copyWith(Calc.yName, elem.value);
                break;
        }

        if (newValues !== lastValues)
        {
            lastValues = newValues;
            lastValues.render();
        }
    };

    elem.addEventListener('keyup', handleCalcEvent);
    return lastValues;
};

document.addEventListener('DOMContentLoaded', () =>
{
    const cv = initCalc(document.getElementById('myCalc'));
    cv.render();
});
