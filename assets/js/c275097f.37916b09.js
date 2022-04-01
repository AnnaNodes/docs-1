"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7283],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=i(n),u=o,k=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),c=(n(4996),["components"]),s={},l="Contract Interaction and Events",i={unversionedId:"dapp-dev-guide/tutorials/cep47/contract-interaction",id:"dapp-dev-guide/tutorials/cep47/contract-interaction",title:"Contract Interaction and Events",description:"The NFT contract emits events. These events occur when some operation (like minting token) succeeds.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/cep47/contract-interaction.md",sourceDirName:"dapp-dev-guide/tutorials/cep47",slug:"/dapp-dev-guide/tutorials/cep47/contract-interaction",permalink:"/dapp-dev-guide/tutorials/cep47/contract-interaction",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/cep47/contract-interaction.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Deployment",permalink:"/dapp-dev-guide/tutorials/cep47/deploy"},next:{title:"Testing Framework",permalink:"/dapp-dev-guide/tutorials/cep47/test"}},p={},d=[{value:"Enabling the Event Stream",id:"enabling-the-event-stream",level:2},{value:"Minting tokens",id:"minting-tokens",level:3},{value:"1. Minting the token",id:"1-minting-the-token",level:4},{value:"2. Sending the deploy to the network",id:"2-sending-the-deploy-to-the-network",level:4},{value:"3. Check the account balance",id:"3-check-the-account-balance",level:4},{value:"4. Check token ownership",id:"4-check-token-ownership",level:4},{value:"5. Token index and metadata",id:"5-token-index-and-metadata",level:4},{value:"Burning tokens",id:"burning-tokens",level:3},{value:"Executing the burn method",id:"executing-the-burn-method",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network",level:4},{value:"Minting copies of tokens",id:"minting-copies-of-tokens",level:3},{value:"Executing mintCopies",id:"executing-mintcopies",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network-1",level:4},{value:"Checking token balance",id:"checking-token-balance",level:4},{value:"Checking the owner",id:"checking-the-owner",level:4},{value:"Checking token metadata",id:"checking-token-metadata",level:4},{value:"Transferring tokens",id:"transferring-tokens",level:3},{value:"Executing a transfer",id:"executing-a-transfer",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network-2",level:4},{value:"Approving tokens",id:"approving-tokens",level:3},{value:"Executing the approve method",id:"executing-the-approve-method",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network-3",level:4},{value:"Checking the new account",id:"checking-the-new-account",level:4},{value:"Transferring tokens from another account",id:"transferring-tokens-from-another-account",level:3},{value:"Executing the transferFrom method",id:"executing-the-transferfrom-method",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network-4",level:4},{value:"Checking the new owner",id:"checking-the-new-owner",level:4},{value:"Updating token metadata",id:"updating-token-metadata",level:3},{value:"Executing the updateTokenMeta method",id:"executing-the-updatetokenmeta-method",level:4},{value:"Sending the deploy to the network",id:"sending-the-deploy-to-the-network-5",level:4}],h={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-interaction-and-events"},"Contract Interaction and Events"),(0,r.kt)("p",null,"The NFT contract emits events. These events occur when some operation (like minting token) succeeds."),(0,r.kt)("p",null,"There are seven main event types for Casper CEP-47 token contract. Those are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minting-tokens"},"Mint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#burning-tokens"},"Burn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minting-copies-of-tokens"},"Mint Copies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transferring-tokens"},"Transfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#approving-tokens"},"Approve")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transferring-tokens-from-another-account"},"Transfer From")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#updating-token-metadata"},"Update Metadata"))),(0,r.kt)("p",null,"We will go through each one with examples in the next sections."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisite")),(0,r.kt)("p",null,"Make sure you have ",(0,r.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/cep47/deploy"},"installed the CEP-47 contract")," on the Casper Network."),(0,r.kt)("h2",{id:"enabling-the-event-stream"},"Enabling the Event Stream"),(0,r.kt)("p",null,"To trigger the events related to the contract, you must run the ",(0,r.kt)("em",{parentName:"p"},"casper-contracts-js-clients/e2e/cep47/usage.ts")," file using NodeJS."),(0,r.kt)("p",null,"This is the command to run the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run e2e:cep47:usage\n")),(0,r.kt)("p",null,"You will see the output as below:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for deploying the token event stream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'... Account Info:\n{\n  "_accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",\n  "namedKeys": [\n    {\n      "name": "bdk_nft_contract_contract_hash",\n      "key": "hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0"\n    },\n    {\n      "name": "bdk_nft_contract_contract_hash_wrapped",\n      "key": "uref-ff9b562d357d9a258acb2b3798f82c6ec5db49a8852e2e96b0ed4b1faf873206-007"\n    },\n    {\n      "name": "contract_package_hash",\n      "key": "hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23"\n    }\n  ],\n  "mainPurse": "uref-a33e25cb1e6baa38e8306dba0492183c65cb41db3dbe8f69546868a4c0cfd0d9-007",\n  "associatedKeys": [\n    {\n      "accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",\n      "weight": 1\n    }\n  ],\n  "actionThresholds": {\n    "deployment": 1,\n    "keyManagement": 1\n  }\n}\n... Contract Hash: hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0\n... Contract Package Hash: hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23\n... Contract name: bdk_nft_token\n... Contract symbol: BDK47\n... Contract meta: [[{"isCLValue":true,"data":"1"},{"isCLValue":true,"data":"bdk-nft-1"}],[{"isCLValue":true,"data":"2"},{"isCLValue":true,"data":"bdk-nft-2"}]]\n... Total supply: 0\n'))),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"casper-cep47-js-clients")," provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"CEP47EventsParser")," which can be used in combination with JS-SDK\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-js-sdk/blob/master/src/services/EventStream.ts#L73-L141"},"EventStream"),"."),(0,r.kt)("p",null,"Example code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'const es = new EventStream(EVENT_STREAM_ADDRESS!);\n\nes.subscribe(EventName.DeployProcessed, (event) => {\n  const parsedEvents = CEP47EventParser({\n    contractPackageHash,\n    eventNames: [\n      CEP47Events.MintOne,\n      CEP47Events.TransferToken,\n      CEP47Events.BurnOne,\n      CEP47Events.MetadataUpdate,\n      CEP47Events.ApproveToken\n    ]\n  }, event);\n\n  if (parsedEvents && parsedEvents.success) {\n    console.log("*** EVENT ***");\n    console.log(parsedEvents.data);\n    console.log("*** ***");\n  }\n});\n\nes.start();\n')),(0,r.kt)("h3",{id:"minting-tokens"},"Minting tokens"),(0,r.kt)("p",null,"The token minting process creates NFTs. The Casper virtual machine executes the code stored in the smart contract and maps the item to a blockchain token containing certain attributes known as metadata. The creator's public key serves as a certificate of authenticity for that particular NFT."),(0,r.kt)("h4",{id:"1-minting-the-token"},"1. Minting the token"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," method requires input parameters like recipient address, token ID, token metadata, and the payment amount to generate the NFT token. The list of input parameters is specified in the ",(0,r.kt)("em",{parentName:"p"},".env.cep47")," file and can be customized for each NFT implementation. This method will execute those parameters and generate the deploy object as ",(0,r.kt)("inlineCode",{parentName:"p"},"mintDeploy"),". Then that deploy object is sent to the network via the node address to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"mintDeployHash"),". The console will output the deploy hash. Then when minting got confirmed through event stream - name of the event, CL values, and the token mint successful message will be printed."),(0,r.kt)("p",null,"The code snippet below is executing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L123-L130"},"mint")," method. In this example, a token with ID 1 is minted with the metadata ",(0,r.kt)("em",{parentName:"p"},"number")," and ",(0,r.kt)("em",{parentName:"p"},"one"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mintDeploy = await cep47.mint(\n    KEYS.publicKey,\n    [\"1\"],\n    [new Map([['number', 'one']])],\n    MINT_ONE_PAYMENT_AMOUNT!,\n    KEYS.publicKey,\n    [KEYS]\n  );\n")),(0,r.kt)("h4",{id:"2-sending-the-deploy-to-the-network"},"2. Sending the deploy to the network"),(0,r.kt)("p",null,"Send the 'mintDeploy' to the network via the node address and get the deploy hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," const mintDeployHash = await mintDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("h4",{id:"3-check-the-account-balance"},"3. Check the account balance"),(0,r.kt)("p",null,"After minting the token with ID 1, you can check the balance of tokens assigned to a specific public key using the ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf")," method. This method returns the number of tokens stored in this account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const balanceOf1 = await cep47.balanceOf(KEYS.publicKey);\n")),(0,r.kt)("h4",{id:"4-check-token-ownership"},"4. Check token ownership"),(0,r.kt)("p",null,"You can check the token owner by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getOwnerOf")," method. This method takes the token ID as the input parameter and returns the prefixed account hash of the account owning this specific token. ",(0,r.kt)("strong",{parentName:"p"},"Note"),": the prefix is ",(0,r.kt)("em",{parentName:"p"},"account-hash-"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const ownerOfTokenOne = await cep47.getOwnerOf("1");\n')),(0,r.kt)("h4",{id:"5-token-index-and-metadata"},"5. Token index and metadata"),(0,r.kt)("p",null,"You can also check the token metadata, the index of the token, and the token ID using the methods below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const tokenOneMeta = await cep47.getTokenMeta("1");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const indexByToken1 = await cep47.getIndexByToken(KEYS.publicKey, "1");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const tokenByIndex1 = await cep47.getTokenByIndex(KEYS.publicKey, indexByToken1);\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for token minting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"... Mint token one\n...... Mint deploy hash:  bd6f088d9687b51edf7d0669a1153365e7a9bd2b67064762979d03a21fd7aea2\n*** EVENT ***\n[\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token minted successfully\n...... Balance of master account:  1\n...... Owner of token one:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n...... Token five metadata:  Map(1) { 'number' => 'one' }\n...... index of token one:  0\n...... token one id:  1\n"))),(0,r.kt)("h3",{id:"burning-tokens"},"Burning tokens"),(0,r.kt)("p",null,'The token burning process permanently removes the tokens from circulation within the blockchain network. The tokens are sent to a wallet address called "burner" or "eater" that cannot be used for transactions other than receiving these tokens. Even though the tokens will still exist on the blockchain, there will be no way of accessing them.'),(0,r.kt)("h4",{id:"executing-the-burn-method"},"Executing the burn method"),(0,r.kt)("p",null,"The code snippet below will execute when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L165-L171"},"burn")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const burnDeploy = await cep47.burn(\n    KEYS.publicKey,\n    ["1"],\n    MINT_ONE_PAYMENT_AMOUNT!,\n    KEYS.publicKey,\n    [KEYS]\n  );\n\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const burnDeployHash = await burnDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," method executes given the values passed in and generates a ",(0,r.kt)("inlineCode",{parentName:"p"},"burnDeploy")," object. Then, the deploy is sent to the network. When the ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," operation got confirmed by the event stream, the name of the event and corresponding CL values, and a message indicating success or failure got printed."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for token burning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'... Burn token one\n\n... Burn deploy hash:  76761cc2e1b51cb2fc6e91c61adc1139c9466316fd8bf98a4f2de05b22a31b63\n... Account Info:\n{\n  "_accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",\n  "namedKeys": [\n    {\n      "name": "bdk_nft_contract_contract_hash",\n      "key": "hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0"\n    },\n    {\n      "name": "bdk_nft_contract_contract_hash_wrapped",\n      "key": "uref-ff9b562d357d9a258acb2b3798f82c6ec5db49a8852e2e96b0ed4b1faf873206-007"\n    },\n    {\n      "name": "contract_package_hash",\n      "key": "hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23"\n    }\n  ],\n  "mainPurse": "uref-a33e25cb1e6baa38e8306dba0492183c65cb41db3dbe8f69546868a4c0cfd0d9-007",\n  "associatedKeys": [\n    {\n      "accountHash": "account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803",\n      "weight": 1\n    }\n  ],\n  "actionThresholds": {\n    "deployment": 1,\n    "keyManagement": 1\n  }\n}\n... Contract Hash: hash-a47d35d835a5fa8a1bcd55a4426dc14e21da9b876c1617742f18813737a4ece0\n... Contract Package Hash: hash-2468facdc9a6f324f8442584fd46d911e3ac9b434dfa79435567bf71f9b8bd23\n... Contract name: bdk_nft_token\n... Contract symbol: BDK47\n... Contract meta: [[{"isCLValue":true,"data":"1"},{"isCLValue":true,"data":"bdk-nft-1"}],[{"isCLValue":true,"data":"2"},{"isCLValue":true,"data":"bdk-nft-2"}]]\n... Total supply: 0\n\n*************************\n*** EVENT ***\n[\n  {\n    name: \'cep47_burn_one\',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n... Token burned successfully\n'))),(0,r.kt)("h3",{id:"minting-copies-of-tokens"},"Minting copies of tokens"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"mintCopies")," creates several tokens with different IDs but the same metadata. The process is the same as minting one token but with multiple IDs and metadata. The payment amount also changes accordingly."),(0,r.kt)("h4",{id:"executing-mintcopies"},"Executing mintCopies"),(0,r.kt)("p",null,"The below code snippet executes when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L187-L195"},"mintCopies")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const mintCopiesDeploy = await cep47.mintCopies(\n    KEYS.publicKey,\n    ["2", "3", "4", "5"],\n    new Map([[\'number\', \'from-series\']]),\n    4,\n    MINT_COPIES_PAYMENT_AMOUNT!,\n    KEYS.publicKey,\n    [KEYS]\n  );\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network-1"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-burn"},"const mintCopiesDeployHash = await mintCopiesDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("p",null,"This method takes multiple token IDs and metadata, the token count, and other general input parameters to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"mintCopiesDeploy")," object. Then it sends the deploy to the network. Since it is a series of tokens, we will check the token balance, owner, metadata, and index."),(0,r.kt)("h4",{id:"checking-token-balance"},"Checking token balance"),(0,r.kt)("p",null,"This method will check the balance of tokens in the master account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const balanceOf2 = await cep47.balanceOf(KEYS.publicKey);\n")),(0,r.kt)("h4",{id:"checking-the-owner"},"Checking the owner"),(0,r.kt)("p",null,"This method checks the owner of the token with ID 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let ownerOfTokenFive = await cep47.getOwnerOf("5");\n')),(0,r.kt)("h4",{id:"checking-token-metadata"},"Checking token metadata"),(0,r.kt)("p",null,"This method checks the metadata of the token with ID 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const tokenFiveMeta = await cep47.getTokenMeta("5");\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for minting copies of a token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"... Mint copies #1\n\n...... Mint deploy hash:  e1b75c38665463da71062983b7533dc0018991487ac80a4ed8b7838f5e258ab9\n... Mint token one\n\n...... Mint deploy hash:  bd6f088d9687b51edf7d0669a1153365e7a9bd2b67064762979d03a21fd7aea2\n*** EVENT ***\n[\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token minted successfully\n...... Balance of master account:  1\n...... Owner of token one:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n...... Token five metadata:  Map(1) { 'number' => 'one' }\n...... index of token one:  0\n...... token one id:  1\n\n^[*** EVENT ***\n[\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  },\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  },\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  },\n  {\n    name: 'cep47_mint_one',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token minted successfully\n...... Balance of master account:  4\n...... Owner of token five:  account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n...... Token five metadata:  Map(1) { 'number' => 'from-series' }\n...... index of token five:  3\n...... token five id:  5\n"))),(0,r.kt)("h3",{id:"transferring-tokens"},"Transferring tokens"),(0,r.kt)("p",null,"This method transfers NFT token(s) to other accounts. The transfer process will initiate from your account address and be sent to the selected recipient address. The recipient address will be a randomly selected account hash in this example."),(0,r.kt)("h4",{id:"executing-a-transfer"},"Executing a transfer"),(0,r.kt)("p",null,"The code snippet below executes when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L234-L235"},"transfer")," method."),(0,r.kt)("p",null,"Create the recipient address from a random number and assign it to ",(0,r.kt)("inlineCode",{parentName:"p"},"transferOneRecipient"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const transferOneRecipient = CLPublicKey.fromHex("016e5ee177b4008a538d5c9df7f8beb392a890a06418e5b9729231b077df9d7215");\n')),(0,r.kt)("p",null,"Use the token with ID 2 and the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferOneRecipient")," address along with other input parameters to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferOneDeploy")," object, and send that deploy to the network. This completes the transfer event call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const transferOneDeploy = await cep47.transfer(\n    transferOneRecipient,\n    ["2"],\n    TRANSFER_ONE_PAYMENT_AMOUNT!,\n    KEYS.publicKey,\n    [KEYS]);\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network-2"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," const transferOneHash = await transferOneDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("p",null,"Finally, check the owner of the token with ID 2. Confirm that the owner has changed from your account hash to the recipient account hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ownerOfTokenTwo = await cep47.getOwnerOf("2");\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for transferring tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'... Transfer #1\n\n...... Owner of token "2" is account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n...... Transfer from account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803 to account-hash-ec0125ebcf79ab482046647049a26152166a2ed260f4ac95f279c77295b55212\n...... Transfer #1 deploy hash:  e52f3cc6969fcc1641b677a66ef90c54c3368e7f141b26a3f7d4a2ba939412c2\n*** EVENT ***\n[\n  {\n    name: \'cep47_transfer_token\',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token transfered successfully\n...... Owner of token "2" is account-hash-ec0125ebcf79ab482046647049a26152166a2ed260f4ac95f279c77295b55212\n'))),(0,r.kt)("h3",{id:"approving-tokens"},"Approving tokens"),(0,r.kt)("p",null,"This method is used to hand over the token transfer capability to another account. In this example, the new owner's public key is created before the transfer. Then the new account will perform the token transfer."),(0,r.kt)("h4",{id:"executing-the-approve-method"},"Executing the approve method"),(0,r.kt)("p",null,"The following code snippet will execute when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L259-L267"},"approve")," method."),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedAccount")," recipient address using the ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYS_USER")," variable from the ",(0,r.kt)("em",{parentName:"p"},".env.cep47")," file. This variable indicates the new spender of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const allowedAccount = KEYS_USER!.publicKey;\n")),(0,r.kt)("p",null,"Next, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"approve")," method, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"approveDeploy")," object, and send it to the network. Here, the token with ID 5 will be used for approval."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'  const approveDeploy = await cep47.approve(\n    allowedAccount,\n    ["5"],\n    MINT_ONE_PAYMENT_AMOUNT!,\n    KEYS.publicKey,\n    [KEYS]\n  );\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network-3"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const approveDeployHash = await approveDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("h4",{id:"checking-the-new-account"},"Checking the new account"),(0,r.kt)("p",null,"After generating the deploy hash for the approval, you can check which account is allowed to do the approval. It will return the account hash of the account owning this specific token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const allowanceOfTokenFive = await cep47.getAllowance(KEYS.publicKey, "5");\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for token approval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"... Approve\n\n...... Approval deploy hash:  940868f10945325e70ba6955c8edfe047c78ad71529bac86989d056d8ca1f26c\n*** EVENT ***\n[\n  {\n    name: 'cep47_approve_token',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token approved successfully\n...... Allowance of token 5 account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n"))),(0,r.kt)("h3",{id:"transferring-tokens-from-another-account"},"Transferring tokens from another account"),(0,r.kt)("p",null,"Here, you will transfer tokens to another account. You will use some randomly generated account addresses to check the behavior of this method."),(0,r.kt)("h4",{id:"executing-the-transferfrom-method"},"Executing the transferFrom method"),(0,r.kt)("p",null,"The following code snippet will execute when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L297-L302"},"transferFrom")," method."),(0,r.kt)("p",null,"First, check the owner of the token with ID 5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ownerOfTokenFive = await cep47.getOwnerOf("5");\n')),(0,r.kt)("p",null,"Then, generate the recipient address from a random number."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const transferFromRecipient = CLPublicKey.fromHex("019548b4f31b06d1ce81ab4fd90c9a88e4a5aee9d71cac97044280905707248da4");\n')),(0,r.kt)("p",null,"Then, generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferFromDeploy")," deploy object using the new recipient address and the rest of the input parameters, complete the transfer from another account process, and send it to the network. This completes the transfer-from event call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const transferFromDeploy = await cep47.transferFrom(\n    transferFromRecipient,\n    KEYS.publicKey,\n    ["5"],\n    TRANSFER_ONE_PAYMENT_AMOUNT!,\n    KEYS_USER.publicKey, [KEYS_USER]);\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network-4"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const transferFromHash = await transferFromDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("h4",{id:"checking-the-new-owner"},"Checking the new owner"),(0,r.kt)("p",null,"Finally, check the owner of the token with ID 5 and note that it has changed to the new recipient."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ownerOfTokenFive = await cep47.getOwnerOf("5");\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for transferring tokens from another account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'... Transfer From #1\n\n...... Owner of token "5" is account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803\n...... Transfer from account-hash-179cd876d5c74317cce9c48d718a040e6e909063d7d786de0c5c6421a09fa803 to account-hash-fc36989e547ec1eba1d8aea840ffabbcbe7d27fb249801870551160eaa014306\n...... Transfer From #1 deploy hash:  3a1e3632a401af565fad0e6c131e5347392e191e3b3c1e9a6f9c467409e055a0\n*** EVENT ***\n[\n  {\n    name: \'cep47_transfer_token\',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token transfered successfully\n...... Owner of token "5" is account-hash-fc36989e547ec1eba1d8aea840ffabbcbe7d27fb249801870551160eaa014306\n'))),(0,r.kt)("h3",{id:"updating-token-metadata"},"Updating token metadata"),(0,r.kt)("p",null,"This method will update the metadata of a selected token."),(0,r.kt)("h4",{id:"executing-the-updatetokenmeta-method"},"Executing the updateTokenMeta method"),(0,r.kt)("p",null,"The following code snippet will execute when calling the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-contracts-js-clients/blob/b210261ba6b772a7cb25f62f2bdf00f0f0064ed5/e2e/cep47/usage.ts#L329-L335"},"update metadata")," method."),(0,r.kt)("p",null,"First, check the metadata of the token with ID 4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let tokenFourMeta = await cep47.getTokenMeta("4");\n')),(0,r.kt)("p",null,"Then, execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateTokenMeta")," method, generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateMetadataDeploy")," object, and send it to the network. This completes the update metadata call."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const updateMetadataDeploy = await cep47.updateTokenMeta(\n    "4",\n    new Map([["name", "four"]]),\n    TRANSFER_ONE_PAYMENT_AMOUNT!,\n    KEYS_USER.publicKey,\n    [KEYS_USER]\n  );\n')),(0,r.kt)("h4",{id:"sending-the-deploy-to-the-network-5"},"Sending the deploy to the network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const updateMetadataHash = await updateMetadataDeploy.send(NODE_ADDRESS!);\n")),(0,r.kt)("p",null,"Again, check the metadata of the token with ID 4 and confirm the data has changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'tokenFourMeta = await cep47.getTokenMeta("4");\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Console output for updating token metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"... Update metadata of token 4\n\n...... Token 4 metadata:  Map(1) { 'number' => 'from-series' }\n...... Update metadata deploy hash:  1b5d31481bb8177d798a8368e93d5f92bf34cc493bde8caf8a078d753cdd28ec\n*** EVENT ***\n[\n  {\n    name: 'cep47_metadata_update',\n    clValue: t { isCLValue: true, refType: [Array], data: [Array] }\n  }\n]\n*** ***\n...... Token metadata updated successfully\n...... Token 4 metadata:  Map(1) { 'name' => 'four' }\n\n"))))}u.isMDXComponent=!0}}]);