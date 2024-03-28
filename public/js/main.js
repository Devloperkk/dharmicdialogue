jQuery(function ($) {
	("use strict");

	function owlCarousel() {
	  $('#slider-small').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: false,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 2
		  },
		  1000: {
			items: 4
		  }
		}
	  });

	  $('#slider-carousel').owlCarousel({
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 3
		  },
		  1000: {
			items: 3
		  }
		},
		nav: true,
		navText: ["<span class='arrow-prev'></span>", "<span class='arrow-next'></span>"]
	  });

	  $('#slideshow_face').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 450,
		loop: true,
		autoplay: true,
	  });

	  $('#slideshow_big').owlCarousel({
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		stagePadding: 0,
		smartSpeed: 450,
		loop: true,
		autoplay: false,
		nav: true,
		navText: ["<span class='arrow-prev'></span>", "<span class='arrow-next'></span>"]
	  });
	}
	owlCarousel();

	function contentWayPoint() {
	  var i = 0;
	  $('.animate-box').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
		  i++;
		  $(this.element).addClass('item-animate');
		  setTimeout(function () {
			$('body .animate-box.item-animate').each(function (k) {
			  var el = $(this);
			  setTimeout(function () {
				var effect = el.data('animate-effect');
				if (effect === 'fadeIn') {
				  el.addClass('fadeIn animated-fast');
				} else if (effect === 'fadeInLeft') {
				  el.addClass('fadeInLeft animated-fast');
				} else if (effect === 'fadeInRight') {
				  el.addClass('fadeInRight animated-fast');
				} else {
				  el.addClass('fadeInUp animated-fast');
				}
				el.removeClass('item-animate');
			  }, k * 50, 'easeInOutExpo');
			});
		  }, 100);
		}
	  }, { offset: '85%' });
	}
	contentWayPoint();

	function goToTop() {
	  $('.js-gotop').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
		  scrollTop: $('html').offset().top
		}, 500, 'swing');
		return false;
	  });

	  $(window).scroll(function () {
		var $win = $(window);
		if ($win.scrollTop() > 200) {
		  $('.js-top').addClass('active');
		} else {
		  $('.js-top').removeClass('active');
		}
	  });
	}
	goToTop();

	function slickNav() {
	  $('#main-menu').slicknav({
		label: 'MENU',
		duration: 150,
		allowParentLinks: true,
		prependTo: '#nav',
	  });

	  $('#sidebar-menu').slicknav({
		label: 'MENU',
		duration: 150,
		allowParentLinks: true,
		prependTo: '.menu-main-menu-container',
	  });
	}
	slickNav();

	function OffCanvas() {
	  $('.off-canvas-toggle').on('click', function (event) {
		$("#wrapper").addClass("toggled");
		$("#off-canvas-toggle").addClass("hidden");
	  });

	  $('.off-canvas-close').on('click', function (event) {
		$("#wrapper").removeClass("toggled");
	  });

	  $(document).mouseup(function (e) {
		var offcanvas = $("#sidebar-wrapper");
		if (!offcanvas.is(e.target) && offcanvas.has(e.target).length === 0) {
		  $("#wrapper").removeClass("toggled");
		}
	  });
	}
	OffCanvas();

	function TopSearch() {
	  $(".top-search").on('click', function (event) {
		$(".top-search-form").slideDown();
	  });

	  $(document).mouseup(function (e) {
		var container = $(".top-search-form");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
		  container.slideUp();
		}
	  });
	}
	TopSearch();

	function SubMenu() {
	  $("li.menu-item-has-children").on({
		mouseenter: function () {
		  $('.sub-menu:first, .children:first', this).stop(true, true).slideDown('fast');
		},
		mouseleave: function () {
		  $('.sub-menu:first, .children:first', this).stop(true, true).slideUp('fast');
		}
	  });
	}
	SubMenu();

	function MasonryGrid() {
	  $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	  });
	}
	MasonryGrid();

	function theStickySidebar() {
	  $('.sidebar_right').stickySidebar({
		topSpacing: 30,
		bottomSpacing: 30
	  });
	}
	theStickySidebar();

	function moreArticles() {
	  $(window).on("scroll", function () {
		var scrollHeight = $(document).height();
		var bottomHeight = $('.bottom').height() + 300;
		var scrollPosition = $(window).height() + $(window).scrollTop();
		var $more_articles = $('.single-more-articles');
		if ((scrollHeight - scrollPosition) < bottomHeight) {
		  $more_articles.addClass("single-more-articles--visible");
		} else {
		  $more_articles.removeClass("single-more-articles--visible");
		}
	  });

	  $(".single-more-articles-close-button").on('click', function (event) {
		$('.single-more-articles').hide();
	  });
	}
	moreArticles();
  });




















const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});











// @ts-nocheck
(function () {
	let captchaLoaded = false;
	let uploaderLoaded = false;
	function CaptchaLoader() {
	  const captchadiv = document.querySelectorAll('[data-captcha="true"]');
	  if (captchadiv.length && !captchaLoaded) {
		let lang = null;
		let onload = null;
		let render = null;
  
		captchadiv.forEach(function (item) {
		  const sitekey = item.dataset.sitekey;
		  lang = item.dataset.lang;
		  onload = item.dataset.onload;
		  render = item.dataset.render;
  
		  if (!sitekey) {
			item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
		  }
		});
  
		let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
		if (lang) {
		  scriptSrc += `&hl=${lang}`;
		}
		if (onload) {
		  scriptSrc += `&onload=${onload}`;
		}
		if (render) {
		  scriptSrc += `&render=${render}`;
		}
  
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.defer = true;
		script.src = scriptSrc;
		document.body.appendChild(script);
	  }
	  captchaLoaded = true;
	}
  
	function FileUploader() {
	  const fileupload = document.querySelectorAll('[data-fileupload="true"]');
  
	  if (fileupload.length && !uploaderLoaded) {
		let jqueryLoaded;
		if (typeof jQuery === "undefined") {
		  jqueryLoaded = false;
		} else {
		  jqueryLoaded = true;
		}
  
		const ucareScript = jqueryLoaded
		  ? "uploadcare.min.js"
		  : "uploadcare.full.min.js";
  
		let script = document.createElement("script");
		script.type = "text/javascript";
		script.async = true;
		script.defer = true;
		script.src = `https://ucarecdn.com/libs/widget/3.x/${ucareScript}`;
		document.body.appendChild(script);
  
		const styles = `.uploadcare--widget__button.uploadcare--widget__button_type_open {
  background-color: ${fileupload[0].dataset.backgroundColor || "#2a2a2a"};
  color: ${fileupload[0].dataset.textColor || "#FFFFFF"};
  }`;
  
		let styleSheet = document.createElement("style");
		styleSheet.textContent = styles;
		document.head.appendChild(styleSheet);
  
		function maxFileSize(size) {
		  return function (fileInfo) {
			if (fileInfo.size !== null && fileInfo.size > size) {
			  // alert("File Size exceeded!")
			  throw new Error("fileMaximumSize");
			}
		  };
		}
  
		script.addEventListener("load", function () {
		  fileupload.forEach(function (item) {
			item.setAttribute("name", "attachment");
			let widget = uploadcare.Widget(item, {
			  publicKey: "a0e4fd45fb9d5fed7599",
			  systemDialog: true,
			});
			if (item.dataset.maxsize) {
			  widget.validators.push(
				maxFileSize(parseInt(item.dataset.maxsize) * 1024 * 1024)
			  );
			}
		  });
		});
  
		const ButtonText = fileupload[0].dataset.buttonText;
  
		// File upload text settings
		UPLOADCARE_LOCALE_TRANSLATIONS = {
		  errors: {
			fileMinimalSize: "File is too small",
			fileMaximumSize: "File is too large",
		  },
		  buttons: {
			choose: {
			  files: {
				...(ButtonText && {
				  one: ButtonText,
				}),
				...(ButtonText && {
				  other: ButtonText,
				}),
			  },
			},
		  },
		};
	  }
	  uploaderLoaded = true;
	}
	CaptchaLoader();
	FileUploader();
  
	// Reload Scripts - Handle Back Button
	window.addEventListener("pageshow", function (event) {
	  if (event.persisted) {
		CaptchaLoader();
		FileUploader();
	  }
	});
  })();