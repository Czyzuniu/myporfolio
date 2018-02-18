window.addEventListener('load', () => {
	// init controller
	let controller = new ScrollMagic.Controller();
	let projects = []

	slideOnScroll('main', 'home', controller, 'slideOff')
	let learnMore = document.getElementById('learn-more-click')
	learnMore.addEventListener('click', () => {
		fancyScroll('main')
	})

	let menuIcon = document.getElementById('menubar')

	menuIcon.addEventListener('click', () => {
		let sideMenu = window.sidemenu;
		sideMenu.classList.toggle('rightOff')
	})


	let links = Array.from(document.getElementById('links').children);
	for(let l of links) {
		l.addEventListener('click', () => {
			let view = l.getAttribute('view');
			toggleView(view)
		});
	}

	
	loadProjects(initalizeProjects(projects))

})



function toggleView(showId) {
	let toShow = document.getElementById(showId);
	let current = document.querySelector("div:not(.slideOff).moveable");
	if (toShow != current) {
		toShow.classList.remove('slideOff');
		current.classList.add('slideOff');
	}
}





function fancyScroll(to) {
	$('html, body').animate({
	        scrollTop: $("#" + to).offset().top
	    }, 1000);
}


function slideOnScroll(onElem, element, controller, nameOfClass) {
	let scene = new ScrollMagic.Scene({triggerElement: "#" + onElem})
					.on("start", function (e) {
						document.getElementById(element).classList.remove(nameOfClass)
						scene.destroy()
					})
					.addTo(controller);
}


function loadProjects(projects) {
	for (let i of projects) {
		let container = document.createElement('div');
		container.classList.add('card-container')
		
		let card = document.createElement('div');
		card.classList.add('card')

		let title = document.createElement('h4');
		title.textContent = i.name;

		let description = document.createElement('p')
		description.textContent = i.description;

		let link = document.createElement('a');
		link.href = i.href;


		let iconContainer = document.createElement('div');
		iconContainer.id = "see-" + i.name;
		let icon = document.createElement('img');
		iconContainer.appendChild(icon);
		//icon.src = i.icon;

		card.appendChild(link)
		card.appendChild(iconContainer)

		container.appendChild(card)
		container.appendChild(title)
		container.appendChild(description)
		window.projects.appendChild(container)





	}
}


function initalizeProjects(projects) {
	let project1 = {
		name:"Dashboard",
		description: "this is my Dashboard",
		href: "/dashboard",
		icon: "dashboard.png"
	};

	projects.push(project1);

	project1 = {
		name:"Something",
		description: "this is my Something",
		href: "/dashboard",
		icon: "dashboard.png"
	};

	projects.push(project1);

	project1 = {
		name:"Something1",
		description: "this is my Something1",
		href: "/dashboard",
		icon: "dashboard.png"
	};

	projects.push(project1);

	return projects
}