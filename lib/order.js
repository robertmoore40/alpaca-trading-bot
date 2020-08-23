
const buyMarket = async ({symbol, amt}) => {
     await new Promise(res => {
        setTimeout(() => {
            res({price: 10.35});
        });
    });
};


const sellStop = async ({symbol, price, amt}) => {
    await new Promise(res => {
        setTimeout(() => {
            res({price: 10.35});
        });
    });
};

const sellLimit = async ({symbol, price, amt}) => {
    await new Promise(res => {
        setTimeout(() => {
            res({price: 10.35});
        });
    });
};

module.exports = {
    buyMarket, sellStop, sellLimit
};