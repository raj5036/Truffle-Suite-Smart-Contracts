
const Escrow = artifacts.require("Escrow");
contract("Escrow", accounts => {
	let escrow;
	const depositAmount = web3.utils.toWei("1", "ether"); // 1 Ether

	beforeEach(async () => {
		escrow = await Escrow.new({from: accounts[0], value: depositAmount});
	});

	it("Should initialize owner address", async () => {
		const owner = await escrow.owner();
		assert.equal(owner.toString(), accounts[0]);
	})

	it("Should initialize with balance of 1 ether", async () => {
		const balance = await escrow.balance();
		assert.equal(balance, depositAmount, "Contract balance should be 1 Ether");
	})
})