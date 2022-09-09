class Help {
	#view;
	#help;
	#index;
	#status;
	#children;
	
	constructor(view, help, page, target, career, mode, lang, end) {
		this.view = view;
		this.help = help;
		this.children = new Array();
		this.children.push(page);
		this.children.push(target);
		this.children.push(career);
		this.children.push(mode);
		this.children.push(lang);
		this.children.push(end);
		this.index = 0;
		this.status = 1;
	};
	
	toggle() {
		if (this.status) {
			this.view.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250, easing: "ease-out"});
			if (this.index > 0) {
				this.children[1].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
				this.children[2].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
				this.children[3].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
				this.children[4].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards"});
				this.children[0].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards"});
				this.index ^= this.index;
			}
			this.help.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 500, easing: "ease-out"});
			this.status ^= 1;
		}
		else {
			this.help.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250, easing: "ease-out"});
			this.view.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 500, easing: "ease-out"});
			this.status ^= 1;
		}
	};
	
	next() {
		if (this.index < 5) {
			this.children[this.index].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250});
			this.children[++this.index].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 500});
		}
	};
	
	previous() {
		if (this.index > 0) {
			this.children[this.index].animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250});
			this.children[--this.index].animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 500});
		}
	};
};

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
		this.on = 1;
	
		this.grp.animate([{transform: "translateY(-50%)", opacity: 0}, {transform: "translateY(0%)", opacity: 1}], {fill: "forwards", duration: 1000, delay: 1000});
		this.anim = this.ctn.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", direction: "alternate", fill: "forwards", delay: 2000, duration: 1000, iterations: Infinity});
	};
	
	show() {
		this.anim = this.ctn.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 1000, delay: 1000, direction: "alternate", iterations: Infinity});
		this.obj.animate([{}, {transform: "initial"}], {fill: "forwards", duration: 500, easing: "ease-out"});
		this.on ^= 1;
	};
	
	hide() {
		this.anim.effect = new KeyframeEffect(this.ctn, [{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 250});
		this.obj.animate([{}, {transform: "translateY(-40vh)"}], {fill: "forwards", easing: "ease-out", duration: 1000});
		this.on ^= 1;
	};
	
	relocate() {
		if (this.on) return;
		this.obj.animate([{}, {transform: "translateY(-40vh)"}], {fill: "forwards", easing: "ease-out", duration: 250});
	};
};

class Explanation {
	#obj;
	#title;
	
	constructor(obj, title) {
		this.obj = obj;
		this.title = title;
	};
	
	show() {
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000});
		this.title.animate([{width: "0%"}, {width: "100%"}], {fill: "forwards", duration: 750});
	};
	
	hide() {
		this.obj.animate([{}, {opacity: 0, zIndex: 0}], {fill: "forwards", duration: 250, easing: "ease-out"});
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
	#title;
	#careers;
	#index;
	
	constructor(obj, sa, se, sc, title) {
		this.obj = obj;
		this.careers = new Array();
		this.careers[0] = sa;
		this.careers[1] = se;
		this.careers[2] = sc;
		this.title = title;
		this.index = 0;
	};
	
	show() {
		this.obj.animate([{}, {opacity: 1, zIndex: 1}], {fill: "forwards", duration: 1000, easing: "ease-out"});
		if (this.index > 0) {
			this.index ^= this.index;
			this.careers[1].hide(0);
			this.careers[2].hide(0);
		}
		this.title.animate([{width: "0%"}, {width: "100%"}], {fill: "forwards", duration: 750, easing: "ease-out"})
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

let page_index = 0;
let victim_index = 0;
let in_help = 0;
let mode = 0;
const title_e = document.getElementById("title");
let dark_images = document.getElementsByClassName("imgb");
let light_images = document.getElementsByClassName("imgw");
const lang = document.body.getAttribute("lang");

const help = new Help(document.getElementById("view"), document.getElementById("help"), document.getElementById("page-navigation"), document.getElementById("target-navigation"), document.getElementById("career-navigation"), document.getElementById("mode-navigation"), document.getElementById("lang-navigation"), document.getElementById("navigation-end"));

const explanation = new Explanation(document.getElementById("expl"), document.getElementById("expl-title"));

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
										document.getElementById("pen-fourth")),
							document.getElementById("careers-title"));

const victims = new Victims(document.getElementById("victim"),
							document.getElementById("victim-title"),
							new Victim(document.getElementById("vfs")),
							new Victim(document.getElementById("va")),
							new Victim(document.getElementById("vg")));


window.onload = function() {
	document.body.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", easing: "linear", duration: 1000});
	const title = new Title(title_e, document.getElementById("group"), document.getElementById("ctn"));
	let h;
	document.addEventListener("keydown", function f(evt) {
		if (evt.code !== "Enter")
			return;
		title.hide();
		explanation.show();
		const h = document.getElementById("h").animate([{opacity: 0}, {opacity: 1}], {direction: "alternate", iterations: Infinity, duration: 1000});
		document.removeEventListener("keydown", f);
		++page_index;
		window.onresize = () => title.relocate();
		document.addEventListener("keydown", function(evt) {
			switch (evt.code) {
				case "Enter":
					if (page_index !== 0) break;
					++page_index;
					title.hide();
					explanation.show();
					h.effect = new KeyframeEffect(document.getElementById("h"), [{opacity: 0}, {opacity: 1}], {fill: "forwards", direction: "alternate", duration: 1000, iterations: Infinity});
					break;
				case "ArrowDown":
					if (in_help) break;
					switch (page_index) {
						case 1:
							++page_index;
							explanation.hide();
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
					if (in_help) break;
					switch (page_index) {
						case 1:
							--page_index;
							explanation.hide();
							title.show();
							h.effect = new KeyframeEffect(document.getElementById("h"), [{}, {opacity: 0}], {fill: "forwards", duration: 250});
							break;
						case 2:
							--page_index;
							victims.hide();
							explanation.show();
							break;
						case 3:
							--page_index;
							careers.hide();
							victims.show();
							break;
					}
					break;
				case "ArrowRight":
					console.log(in_help);
					if (!in_help) {
						if (page_index === 2) {
							victims.next();
						}
						else if (page_index === 3) {
							careers.next();
						}
					}
					else {
						help.next();
					}
					break;
				case "ArrowLeft":
					if (!in_help) {
						if (page_index === 2) {
							victims.previous();
						}
						else if (page_index === 3) {
							careers.previous();
						}
					}
					else {
						help.previous();
					}
					break;
				case "Period":
					if (page_index === 3)
						careers.current().next();
					break;
				case "Comma":
					if (page_index === 3)
						careers.current().previous();
					break;
				case "KeyH":
					help.toggle();
					in_help ^= 1;
					break;
				case "Semicolon":
					if (in_help) break;
					if (mode) {
						document.body.animate([{}, {background: "#fff", color: "#000"}], {fill: "forwards", duration: 500});
						title_e.classList.remove("light-border-bottom");
						title_e.classList.add("dark-border-bottom");
						for (const e of dark_images)
							e.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 500});
						for (const e of light_images)
							e.animate([{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 500});
						--mode;
					}
					else {
						document.body.animate([{}, {background: "#555", color: "#fff"}], {fill: "forwards", duration: 500});
						title_e.classList.add("light-border-bottom");
						title_e.classList.remove("dark-border-bottom");
						for (const e of dark_images)
							e.animate([{opacity: 1}, {opacity: 0}], {fill: "forwards", duration: 500});
						for (const e of light_images)
							e.animate([{opacity: 0}, {opacity: 1}], {fill: "forwards", duration: 500});
						++mode;
					}
					break;
				case "KeyT":
					if (lang === "en") {
						window.location.assign("id_index.html");
					}
					else {
						window.location.assign("index.html");
					}
					break;
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
	let t;
	const paragraphs = document.getElementsByTagName("p");
	for (const e of paragraphs) {
		e.onclick = () => navigator.clipboard.writeText(e.innerHTML).then(() => {
			clearTimeout(t);
			document.title = "Copied!";
			t = setTimeout(() => document.title = "Cyber Security", 500)
		});
	}
};
