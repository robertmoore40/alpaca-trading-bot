const fetch = require('node-fetch');

const getBars = async ({symbol, start, end}) => {
    try {