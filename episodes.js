/*
const episodes = {
			S2E08: [`A Lot Of Sparkles`, ['Tidyping', 'MJ'], `Dylan encounters MJ, a famous basketball player, and asks for an autograph. But Tidyping, who wants to clean everything, makes the autograph mysteriously disappear...`, `<video controls poster="thumbnails/S2E08.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211259&authkey=AEzj-CN2CVYPVwE" type="video/mp4" /></video>`],

			S2E09: [`Yummyping Is The Best Cooking Teacher`, ['Yummyping'], `After the chef quits, the business isn't going well at Eline's Seasoned Chicken Restaurant. To help her mother, Ellie practices day and night, but keeps failing over and over again. But Yummyping, who smells the chicken, decides to help her.`, `<video controls poster="thumbnails/S2E09.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211260&authkey=AOtT26Y8smwiCXg" type="video/mp4" /></video>`],
			
			S2E10: [`Fainted Trustping`, ['Tomato Jewel'], `While Trustping and Teeheeping are fighting each other, Trustping suddenly faints! In order to cure Trustping's disease, The Tomato Jewel is needed. With the help of Dadaping, the Teeniepings make everything possible to cure him.`, `<video controls poster="thumbnails/S2E10.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211263&authkey=AIcSasy_bkw44rg" type="video/mp4" /></video>`],
			
			S2E11: [`Heartsping The Knitted Doll`, ['Cozyping'], `Cozyping enters in the Teenieping Academy and transforms objects into wolly creations... But when the Teeniepings wake up, a bad surprise awaits: there's a giant Heartsping doll!`, `<video controls poster="thumbnails/S2E11.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211262&authkey=AMNGS5_Kg9belM8" type="video/mp4" /></video>`],
			
			S2E12: [`The Teddy Bear is Alive?`, ['Romi\'s teddy bear'], `While everyone is relaxing, Gamyeonping takes control of Romi's teddy bear, to attack the Teenieping Academy. The Teeniepings gets afraid, and Tidyping gets devoured! All of this must end!`, `<video controls poster="thumbnails/S2E12.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211261&authkey=AN2wa15-kYxSGx4" type="video/mp4" /></video>`],
			
			S2E13: [`Another Princess`, ['Jennie', 'Onlyping'], `Jennie, Romi's other cousin from the Emotion Kingdom, arrives in Harmony Village. But if Romi and her are like sisters, her personal Teenieping Onlyping hates Heartsping, and an argument quickly starts...`, `<video controls poster="thumbnails/S2E13.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211266&authkey=AFKQKpx7uUHS3xU" type="video/mp4" /></video>`],
			
			S2E14: [`Memoping's Memo Memo`, ['Memoping'], `Memoping has a really special power: eveything she notes in her notebook will become true! And when Romi finds her, a race starts, but Romi can't manage to catch Memoping...`, `<video controls poster="thumbnails/S2E14.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211264&authkey=AI0wI3nO1_Zja4s" type="video/mp4" /></video>`],
			
			S2E15: [`Duel! Royal Teeniepings`, ['Royal Teeniepings'], `The Royal Teeniepings arrive at the Teenieping Academy, and they say that the students Teeniepings cannot help Romi properly. To keep their place, the students Teeniepings will have to win a duel...`, `<video controls poster="thumbnails/S2E15.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211265&authkey=AOnyYASv-a_dXlI" type="video/mp4" /></video>`],
			
			S2E16: [`Heartrose With A Big Kingdom`, ['Ladyping', 'Gamyeonping'], `While Romi is at school, Ladyping, who fell in love with Gamyeonping, enters the bakery and creates her own kingdom, with everyone being at her service, including all the Teeniepings!`, `<video controls poster="thumbnails/S2E16.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211269&authkey=AKx2vDRS_ZMOlTk" type="video/mp4" /></video>`],
			
			S2E17: [`The Jewel Teeniepings Got Stolen!`, ['Thieves', 'Jewelry Box'], `Sneak peek - While everyone is sleeping, two thieves enter the bakery to steal the Jewelry Box and the Jewel Teeniepings! And when Romi wakes up, it's already too late...`, `<video controls poster="thumbnails/S2E17.png"><source src="https://onedrive.live.com/download?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211268&authkey=AI7YvfC2dLyVT64" type="video/mp4" /></video>`],

			S2E18: [`Who Is The Real Heartsping?`, ['Buddyping'], `Trailer - Buddyping is having fun duplicating everything in the bakery. And when Heartsping tries to find him, she gets duplicated into her twin... Good luck finding who's the real one!`, `<iframe src="https://www.youtube.com/embed/UXiSrLPIGIk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]
	}
*/

const episodes = {
	S2E08: {
		title: "A Lot Of Sparkles",
		description: "Dylan encounters MJ, a famous basketball player, and asks for an autograph. But Tidyping, who wants to clean everything, makes the autograph mysteriously disappear...",
		wikiPages: ["Tidyping"],
		specialStatus: "",
		videoType: "OneDrive",
		videoUrl: "?cid=F11F4BE3C253D021&resid=F11F4BE3C253D021%211259&authkey=AEzj-CN2CVYPVwE"
	}
}

function getParameter(name) {
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(window.location.href);
	if (!results || !results[2]) return null;
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
if (getParameter('episode')) {var episode = episodes[getParameter('episode')]}