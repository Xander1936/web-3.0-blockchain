// Setting up the smart contract sending process
const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions deployed to this address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);// Means there is no error
  } catch (error) {
    console.error(error);
    process.exit(1);// Means there is an error
  }
};

runMain();