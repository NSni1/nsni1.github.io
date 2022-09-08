const title 		= document.getElementById("title");
const group			= document.getElementById("group");
const ctn 			= document.getElementById("ctn");
const expl 			= document.getElementById("expl");
const expl_title	= document.getElementById("expl-title");
const expl_text		= document.getElementById("expl-text");

class Title {
	#obj;
	#grp;
	#ctn;
	#anim;
	#on;
	
	constructor(obj, grp, ctn) {
		this.obj = obj;
		this.grp = grp;
		this.ctn = ctn;
		this.on = false;
	
		this.grp.animate([{transform: "translateY(-50%)"}, {transform: "translateY(0%)"}], {fill: "forwards", duration: 1000, delay: 1000});
		this.anim = this.ctn.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", direction: "alternate", fill: "forwards", delay: 2000, duration: 1000});
	};
};

class Career {
	#obj;
	#children;
	#index;
	
	constructor(obj, first, second, third, fourth) {
		this.obj = obj;
		this.children = new Array();
		this.children[0] = first;
		this.children[1] = second;
		this.children[2] = third;
		this.children[3] = fourth;
		this.index = 0;
	};
	
	show() {
		if (this.index > 0) {
			this.index ^= this.index;
			this.children[0].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 300});
			this.children[1].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
			this.children[2].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
			this.children[3].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
		}
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 250});
	};
	
	hide(duration = 100) {
		this.obj.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: duration});
	};
	
	next() {
		if (this.index < 3) {
			this.children[this.index].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 100});
			this.children[++this.index].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 250});
		}
	};
	
	previous() {
		if (this.index > 0) {
			this.children[this.index].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 100});
			this.children[--this.index].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 250});
		}
	};
}

class Careers {
	#obj;
	#careers;
	#index;
	
	constructor(obj, sa, se, sc) {
		this.obj = obj;
		this.careers = new Array();
		this.careers[0] = sa;
		this.careers[1] = se;
		this.careers[2] = sc;
		this.index = 0;
	};
	
	show() {
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000, easing: "ease-out"});
		if (this.index > 0) {
			this.index ^= this.index;
			this.careers[1].hide(0);
			this.careers[2].hide(0);
		}
		this.careers[0].show();
	};
	
	hide() {
		this.obj.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250});
	};
	
	next() {
		if (this.index < 2) {
			this.careers[this.index].hide();
			this.careers[++this.index].show();
		}
	};
	
	previous() {
		if (this.index > 0) {
			this.careers[this.index].hide();
			this.careers[--this.index].show();
		}
	};
	
	current() {
		return this.careers[this.index];
	}
}

class Victim {
	#obj;
	
	constructor(obj) {
		this.obj = obj;
	};
	
	show() {
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000});
	};
	
	hide(duration = 250) {
		this.obj.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: duration});
	};
};

class Victims {
	#obj;
	#title;
	#victims;
	#index;
	
	constructor(obj, title, vfs, va, vg) {
		this.obj = obj;
		this.title = title;
		this.victims = new Array();
		this.victims[0] = vfs;
		this.victims[1] = va;
		this.victims[2] = vg;
		this.index = 0;
	};
	
	show() {
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000, easing: "ease-out"});
		if (this.index > 0) {
			this.index ^= this.index;
			this.victims[1].hide(0);
			this.victims[2].hide(0)
		}
		this.victims[0].show();
		this.title.animate([{width: "0%"}, {width: "100%"}], {fill: "forwards", duration: 500});
	};
	
	hide() {
		this.obj.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250});
	};
	
	next() {
		if (this.index < 2) {
			this.victims[this.index].hide();
			this.victims[++this.index].show();
		}
	};
	
	previous() {
		if (this.index > 0) {
			this.victims[this.index].hide();
			this.victims[--this.index].show();
		}
	};
};

const careers = new Careers(document.getElementById("careers"),
							new Career(document.getElementById("security-analyst"), 
									document.getElementById("sa-first"),
									document.getElementById("sa-second"),
									document.getElementById("sa-third"),
									document.getElementById("sa-fourth")),
							new Career(document.getElementById("security-auditor"),
										document.getElementById("sau-first"),
										document.getElementById("sau-second"),
										document.getElementById("sau-third"),
										document.getElementById("sau-fourth")),
							new Career(document.getElementById("penetration-tester"),
										document.getElementById("pen-first"),
										document.getElementById("pen-second"),
										document.getElementById("pen-third"),
										document.getElementById("pen-fourth")));

const victims = new Victims(document.getElementById("victim"),
							document.getElementById("victim-title"),
							new Victim(document.getElementById("vfs")),
							new Victim(document.getElementById("va")),
							new Victim(document.getElementById("vg")));

var page_index = 0;
var victim_index = 0;


// Make sure the document is loaded.
window.onload = function() {
	// Show the document
	document.body.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", easing: "linear", duration: 1000});
	// Early credits
	group.animate([{transform: "translateY(-50%)", opacity: 0}, {transform: "translateY(0%)", opacity: 1}], {duration: 1000, fill: "forwards", delay: 1000});
	let c = ctn.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 1000, direction: "alternate", iterations: Infinity, delay: 2000});
	document.addEventListener("keydown", function f(evt) {
		if (evt.code !== "Enter")
			return;
		c.cancel();
		ctn.animate([{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 350});
		title.animate([{}, {transform: "translateY(-40vh)"}], {fill: "forwards", easing: "ease-out", duration: 1000});
		expl.animate([{opacity: 0}, {opacity: 1, zIndex: 1}], {fill: "forwards", delay: 1000, duration: 1000});
		expl_title.animate([{}, {width: "100%"}], {fill: "forwards", delay: 1000, duration: 1000});
		document.removeEventListener("keydown", f);
		++page_index;
		document.addEventListener("keydown", function(evt) {
			switch (evt.code) {
				case "Enter":
					if (page_index !== 0) break;
					++page_index;
					c.effect = new KeyframeEffect(ctn, [{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 250});
					ctn.animate([{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 350});
					title.animate([{}, {transform: "translateY(-40vh)"}], {fill: "forwards", easing: "ease-out", duration: 1000});
					expl.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", delay: 1000, duration: 1000});
					expl_title.animate([{width: "0%"}, {width: "100%"}], {fill: "forwards", delay: 1000, duration: 1000});
					break;
				case "ArrowDown":
					switch (page_index) {
						case 1:
							++page_index;
							expl.animate([{}, {opacity: 0, zIndex: "auto"}], {fill: "forwards", duration: 250, easing: "ease-out"});
							victims.show();
							break;
						case 2:
							++page_index;
							victims.hide();
							careers.show();
							break;
					}
					break;
				case "ArrowUp":
					switch (page_index) {
						case 0:
							break;
						case 1:
							--page_index;
							expl.animate([{}, {opacity: 0, zIndex: "auto"}], {fill: "forwards", duration: 250});
							c = ctn.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 1000, delay: 1000, direction: "alternate", iterations: Infinity});
							title.animate([{}, {transform: "initial"}], {fill: "forwards", duration: 500, easing: "ease-out"});
							break;
						case 2:
							--page_index;
							victims.hide();
							expl.animate([{opacity: 0}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000, easing: "ease-out"});
							expl_title.animate([{width: "0%"}, {width: "100%"}], {fill: "forwards", duration: 750});
							break;
						case 3:
							--page_index;
							careers.hide();
							victims.show();
							break;
					}
					break;
				case "ArrowRight":
					if (page_index === 2) {
						victims.next();
					}
					else if (page_index === 3) {
						careers.next();
					}
					break;
				case "ArrowLeft":
					if (page_index === 2) {
						victims.previous();
					}
					else if (page_index === 3) {
						careers.previous();
					}
					break;
				case "Equal":
					if (page_index === 3)
						careers.current().next();
					break;
				case "Minus":
					if (page_index === 3)
						careers.current().previous();
				default:
					break;
			}
		});
	});
	window.onblur = function() {
		document.title = "​";
	}
	window.onfocus = function() {
		document.title = "Cyber Security";
	}
	const waaaaah = document.getElementsByTagName("p");
	for (const i of waaaaah) {
		i.addEventListener("click", function() {
			navigator.clipboard.writeText(i.innerHTML).then(() => document.getElementById("alert").children[0].innerHTML = "Copied");
		});
	}
};
