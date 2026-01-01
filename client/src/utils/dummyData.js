export default [
  {
    id: 1,
    url: "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
  {
    id: 2,
    url: "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
  {
    id: 3,
    url: "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
  {
    id: 6,
    url: "https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",
    message: "",
    timestamp: "12/21/2021, 4:33:21 PM",
    addressFrom: "0x06db794Bcad6139eeC9e5d83674c8d460D0434D6",
    amount: "0.01",
    addressTo: "0x5719D65309a883E336bf0986247BEa36bDbDacd8",
  },
];

// const ETHERSCAN_API_KEY = import.meta.env.ETHERSCAN_API_KEY; // Replace with your Etherscan API key

// const ADDRESS = import.meta.env.YOUR_WALLET_ADDRESS; // Replace with your Ethereum address

// async function fetchRecentTransactions() {
//     const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${ADDRESS}&startblock=0&endblock=99999999&sort=desc&apikey=${ETHERSCAN_API_KEY}`;
    
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         if (data.status !== "1") {
//             throw new Error('Error fetching transactions: ' + data.message);
//         }

//         const transactions = data.result.slice(0, 6); // Get the most recent 6 transactions
//         displayTransactions(transactions);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// export default function displayTransactions(transactions) {
//     transactions.forEach(transaction => {
//         console.log(`Hash: ${transaction.hash}`);
//         console.log(`From: ${transaction.from}`);
//         console.log(`To: ${transaction.to}`);
//         console.log(`Value: ${transaction.value} Wei`);
//         console.log(`Timestamp: ${new Date(transaction.timeStamp * 1000).toISOString()}`);
//         console.log('-----------------------------------');
//     });
// }

// // Call the function to fetch and display transactions
// fetchRecentTransactions();

