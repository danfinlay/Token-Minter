# Precompiled contracts needed

These could also be factories, but the point is that in order to avoid including a compiler in the page, we need some pre-formed contracts.

Since our variables are:

- [MintableToken](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v1.12.0/contracts/token/ERC20/MintableToken.sol)
- [BurnableToken](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v1.12.0/contracts/token/ERC20/BurnableToken.sol)
- [SmartToken](https://github.com/bancorprotocol/contracts/blob/master/solidity/contracts/token/SmartToken.sol)

We have 2^3 or 8 different contracts we're talking about having compiled for MVP, presuming we permit including the token details in the constructor:

- Mintable only
- Mintable Burnable
- Mintable Burnable SmartToken
- Mintable SmartToken
- Fixed
- Fixed Burnable
- Fixed Burnable SmartToken
- Fixed SmartToken

Also for the sake of simplicity we could leave out the SmartToken to start, and implement in this order:

1. Fixed
2. Mintable only
3. Mintable Burnable
4. Fixed Burnable

I like this because at step one we achieve parity with TokenFactory, and at step 2 we already have a novel application.

In fact, I think we might be ready to add management and maybe even market-making after step 2.

