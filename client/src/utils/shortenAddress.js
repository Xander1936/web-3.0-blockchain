// `${address.slice(0, 5)}...${address.slice(address.length - 4)}` Taking the first 5 characters `${address.slice(0, 5)} ... showing the last 4 characters of the address ${address.slice(address.length - 4)}`
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
