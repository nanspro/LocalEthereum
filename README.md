# LocalEthereum
A subgraph for trading insights and data statistics on localethereum.

Subgraph is deployed here https://thegraph.com/explorer/subgraph/nanspro/localethereum, you can run queries there and also use the apis in your dapp. There is one demo dapp which can be used here https://nanspro.github.io

## Installation
```
yarn install
yarn codegen
yarn deploy
```

## Example Queries

Latest n trades opened (escrow created)
```graphql
{
    createds(first: n) {
    id
    _tradeHash
    }
}
```

Latest n trades successful (escrow released) 
```graphql
{
    releaseds(first: n) {
    id
    _tradeHash
    }
}
```

Latest n disuptes resolved
```graphql
{
    disputeResolveds(first: n) {
    id
    _tradeHash
    }
}
```

Check if a trade created was successful or not
```graphql
{
    releaseds(where: {_tradeHash: "${createdTxHash}"}) {
    id
    _tradeHash
    }
}
```
_Note: Using this query on loop can tell us rate at which trades get successful without any dispute_

Check if a trade was cancelled by seller or buyer
```graphql
{
    cancelledBySellers(where: {_tradeHash: "${createdTxHash}"}) {
    id
    _tradeHash
    }

    cancelledByBuyers(where: {_tradeHash: "${createdTxHash}"}) {
    id
    _tradeHash
    }
}
```
_Note: Using this query on loop can give us stats about how many times a trade is cancelled by buyer and how many times by seller_

