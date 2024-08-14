
const Escrow = artifacts.require("Escrow");
contract("Escrow", accounts => {
	let escrow;
	beforeEach(async () => {
		escrow = await Escrow.new({from: accounts[0]});
	});

	it("Should initialize owner address", async () => {
		const owner = await escrow.owner();
		assert.equal(owner.toString(), accounts[0]);
	})

	it("Should initialize with balance", async () => {
		const balance = await escrow.balance();
		assert.isAbove(parseInt(balance), 0, "Balance should be greater than 0");
	})
})