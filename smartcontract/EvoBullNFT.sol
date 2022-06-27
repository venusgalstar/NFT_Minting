// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EvoBullNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string base_uri;

    address _paymentToken = address(0);
    address _clientWallet = address(0);
    address _clientWallet1 = address(0);

    uint256 _totalFee = 100;
    uint256 _clientFee = 100;

    event Received(address addr, uint amount);
    event Fallback(address addr, uint amount);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable { 
        emit Fallback(msg.sender, msg.value);
    }

    constructor() ERC721("EvoBullNFT", "EBNFT") {
        base_uri = "https://ipfs.infura.io/ipfs/QmU7S7urCReuuzfhcrFT9uko2ntUTQziQMbLZUbQULYjqq/";
        _clientWallet = address(this);
        _clientWallet1 = 0x0f4C9ca5c722Cd93D8FA1db2B632b31Aa8f30353;
    }

    function setPaymentToken(address _newAddress) external onlyOwner {
        _paymentToken = _newAddress;
    }

    function setAddressAndFee(address _newC1Wallet, address _newC2Wallet, uint256 _newC1Fee) external onlyOwner {
        _clientWallet = _newC1Wallet;
        _clientWallet1 = _newC2Wallet;
        _clientFee = _newC1Fee;
    }

    function getBaseuri() public view returns(string memory){
        return base_uri;
    }

    function setBaseUri(string memory _newUri) external returns(string memory){
        base_uri = _newUri;
        return base_uri;
    }

    function tranferNFT(address _from, address _to, uint256 _tokenId) external payable {
        transferFrom(_from, _to, _tokenId);
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        super._setTokenURI(tokenId, _tokenURI);
    }
    
    function itod(uint256 x) private pure returns (string memory) {
        if (x > 0) {
            string memory str;
            while (x > 0) {
                str = string(abi.encodePacked(uint8(x % 10 + 48), str));
                x /= 10;
            }
            return str;
        }
        return "0";
    }

    function mint() external payable returns (uint256) {     
        address recipient = msg.sender;
        require(recipient != address(0), "Invalid recipient address." ); 

        uint256 tokenBalance = IERC20(_paymentToken).balanceOf(recipient);
        uint256 clientAmount = tokenBalance * _clientFee / _totalFee;
        uint256 client1Amount = tokenBalance - clientAmount;
        
        IERC20(_paymentToken).transferFrom(recipient, _clientWallet, clientAmount);

        if( client1Amount > 0 )
        {
            IERC20(_paymentToken).transferFrom(recipient, _clientWallet1, client1Amount);
        }            
                 
        _tokenIds.increment();

        uint256 nftId = _tokenIds.current(); 
        _mint(recipient, nftId);
        string memory fullUri = string.concat(base_uri, itod(nftId));
        setTokenURI(nftId, fullUri);

        return nftId;
    }

    function withdrawAll() external onlyOwner{
        uint256 balance = IERC20(_paymentToken).balanceOf(address(this));

        if(balance > 0) {
            uint256 clientAmount = balance * _clientFee / _totalFee;
            uint256 client1Amount = balance - clientAmount;
            
            IERC20(_paymentToken).transfer(_clientWallet, clientAmount);

            if( client1Amount > 0 )
            {
                IERC20(_paymentToken).transfer(_clientWallet1, client1Amount);
            }
        }
        
        address payable mine = payable(msg.sender);
        if(address(this).balance > 0) {
            mine.transfer(address(this).balance);
        }
    }

    function batchMint(address recipient, uint256 _count)  external  returns (uint256[] memory) {        
        require(recipient != address(0), "Invalid recipient address." );           
        require(_count > 0, "Invalid count value." );       
        uint256 i; 
        uint256[] memory nftIds = new uint256[](_count);
        string memory fullUri;
        for(i = 0; i < _count; i++)
        {
            _tokenIds.increment();

            uint256 nftId = _tokenIds.current(); 
            _mint(recipient, nftId);
            fullUri = string.concat(base_uri, itod(nftId));
            setTokenURI(nftId, fullUri);
            nftIds[i] = nftId;
        }
        return nftIds;
    }
}