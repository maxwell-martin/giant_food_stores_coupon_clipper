javascript: (async () => {
  
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

	async function clipCoupons() {
		var btnShowMore = document.querySelector("#show-more");
		
		/* Click the "Show More" button element until all coupons appear on page */
		while (btnShowMore) {
			console.log(`Loading all coupons onto the page...`);
			btnShowMore.click();
			await sleep(3000);
			btnShowMore = document.querySelector("#show-more");
		}
		
		const couponsUnordList = document.querySelector("#panel-browse > div:nth-child(2) > ul");
		
		if (!couponsUnordList) {
			console.error("Unordered list not found");
			return;
		}

		const listItems = couponsUnordList.querySelectorAll("li");
		var index = 0;

		for (const listItem of listItems) {
			var rndInt = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
			const buttons = listItem.querySelectorAll("button");
			
			buttons.forEach((button) => {
				/* Look for a <div> inside the button that exactly contains "Clip Coupon" */
				const hasClipCouponDiv = Array.from(button.querySelectorAll("div")).some(div => div.textContent.trim() === "Clip Coupon");

				if (hasClipCouponDiv) {
					console.log(`Clicking 'Clip Coupon' button in list item ${index + 1}`);
					button.click();
				}		
			});
			
			index++;
			await sleep(rndInt * 250);
		}
	}
  
	async function main() {
		await clipCoupons();
		console.log ("All coupons have been clipped.");
	}

	main();
  
})();