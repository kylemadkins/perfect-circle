const playwright = require("playwright");

async function main() {
	const browser = await playwright.chromium.launch({
		headless: false,
	});

	const page = await browser.newPage({
		viewport: {
			height: 1000,
			width: 1000,
		},
	});
	await page.goto("https://neal.fun/perfect-circle/");
	await page.click("button.on");

	const r = 350;
	const startX = 500;
	const startY = 480;

	await page.mouse.move(startX + r, startY);
	await page.mouse.down();
	for (let th = 1; th <= 360; th++) {
		radians = (Math.PI / 180) * th;
		await page.mouse.move(
			startX + r * Math.cos(radians),
			startY + r * Math.sin(radians)
		);
	}
	await page.mouse.up();
}

main();
