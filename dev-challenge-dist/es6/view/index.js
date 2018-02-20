// create the view using document fragment which will act as a Virtual dom

module.exports = class {

    constructor(currencies) {
        this.currencies = currencies;
        this.createView();
    }

    createView() {
        let _currencies = this.currencies;
        let _tbodyHtml;
        let _tblRef = document.getElementById("stompTable");
        let _tbodyRef = document.getElementsByTagName("tbody")[0];
        
        let fragment = document.createDocumentFragment();
        _tbodyRef.innerHTML = "";
        _currencies.forEach( ( currency, index ) => {
             _tbodyHtml = this.createTablerow(currency, _tbodyRef);
        });

        fragment.appendChild(_tbodyHtml);
        _tblRef.appendChild(fragment);   
    }

    createTablerow(currency, tbody) {
        let row = tbody.insertRow();
        
        row.insertCell(0).textContent = currency.name;
        row.insertCell(1).textContent = currency.bestBid;
        row.insertCell(2).textContent = currency.bestAsk;
        row.insertCell(3).textContent = currency.lastChangeBid;
        row.insertCell(4).textContent = currency.lastChangeAsk;

        let SparklineSpan = row.insertCell(5).appendChild(document.createElement('span'));
        const sparkLine = new Sparkline(SparklineSpan);
        let sparkLineArr;
        if(currency.hasOwnProperty('sparkLineData')) {
            if(currency.sparkLineData.length > 5) {
                sparkLineArr = currency.sparkLineData.slice(Math.max(currency.sparkLineData.length - 5, 1))
            } else {
                sparkLineArr = currency.sparkLineData;
            }
            sparkLine.draw(sparkLineArr);
        }

        return tbody;
 
    }

}