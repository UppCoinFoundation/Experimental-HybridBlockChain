var privateheader2Contract = web3.eth.contract([{"constant":true,"inputs":[{"name":"h","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"getadd","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]);
var privateheader2 = privateheader2Contract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b50610125806100206000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663ad56427c81146043575b600080fd5b348015604e57600080fd5b50606460043560ff60243516604435606435608d565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b604080516000808252602080830180855288905260ff87168385015260608301869052608083018590529251909260019260a080820193601f198101928190039091019086865af115801560e5573d6000803e3d6000fd5b5050604051601f19015196955050505050505600a165627a7a723058201070905161bc7e709e77135fcd055739ecd9d8115fc64c750c0b56b6fcca384f0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
