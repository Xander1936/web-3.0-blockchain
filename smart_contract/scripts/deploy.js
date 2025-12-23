// We need some "gas" -> small etherium in our wallet to make things happen.

const main = async () => {
  // transactionsFactory is the class that is going to generate the specific contracts.
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions deployed to address: ", transactionsContract.address);
}; 

const runMain = async () => {
  try {
    await main();
    process.exit(0); // Simply means there is no error.
  } catch (error) {
    console.error(error);
    process.exit(1); // Simply means there was an error.
  }
};

runMain();