// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CarbonCreditNFT is ERC721 {
    uint256 public tokenCounter;

    struct CarbonData {
        uint256 carbonScore;
        string metadataURI;
    }

    mapping(uint256 => CarbonData) public carbonData;

    constructor() ERC721("BlueCarbon", "BCARB") {}

    function mintCarbonNFT(address to, uint256 score, string memory uri) public {
        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);
        carbonData[tokenId] = CarbonData(score, uri);
        tokenCounter++;
    }

    function updateCarbon(uint256 tokenId, uint256 newScore) public {
        carbonData[tokenId].carbonScore = newScore;
    }
}
