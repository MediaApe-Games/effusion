const ef_types = require('../types');

type crypto = {
    min_miner_power: number;
    value: number;

    name: string;
    market_id: string;
    description: string;

    investors: user[];
}

type company = {
    // https://reddit.com/r/wallstreetbets
    stock_price: number;
    stock: number;

    name: string;
    market_id: string;
    location: string;
    description: string;

    owner: user;
    investors: user[];
}

type nft = {
    // you will never be able to actually buy these on any effusion platform

    creator: company;
    preferred_currency: crypto;

    price: number;

    jpg_path: string;
}