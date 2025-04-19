const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function clipCoupons() {
	var btnShowMore = document.querySelector("#show-more");
	
	// Click the "Show More" button element until all coupons appear on page
	while (btnShowMore) {
		btnShowMore.click();
		await sleep(15000);
		btnShowMore = document.querySelector("#show-more");
	}
	
	const couponsUnordList = document.querySelector("#panel-browse > div:nth-child(2) > ul");
	
	if (!couponsUnordList) {
		console.error("Unordered list not found");
		return;
	}

	const listItems = couponsUnordList.querySelectorAll("li");

	listItems.forEach((li, index) => {
		const buttons = li.querySelectorAll("button");

		buttons.forEach((button) => {
			// Look for a <div> inside the button that exactly contains "Clip Coupon"
			const hasClipCouponDiv = Array.from(button.querySelectorAll("div")).some(div => div.textContent.trim() === "Clip Coupon);

			if (hasClipCouponDiv) {
				console.log(`Clicking 'Clip Coupon' button in list item ${index + 1}`);
				button.click();
			}		
		});
	
		await sleep(15000);
	});
}

async function main() {
	await clipCoupons();
	console.log ("All coupons have been clipped.");
}

main();