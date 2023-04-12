const q = (selector, elem = document) => elem.querySelector(selector);
const qAll = (selector, elem = document) => elem.querySelectorAll(selector);
const rect = (elem) => elem.getBoundingClientRect();

(function setupTabContainers() {
  const tabContainers = qAll(".tab-container");

  tabContainers.forEach(setup);

  function setup(tabContainer) {
    const tabs = qAll(".tab", tabContainer);
    const follow = q(".tab-list .follow", tabContainer);
    let currentTabIndex = 0;
    let currentTab = tabs[currentTabIndex];
    let currentTabPanel = q(".tab-content.tab-active", tabContainer);
    if (!currentTabPanel) {
      currentTabPanel = q("tab-content", tabContainer)           [currentTabIndex];
    }

    setActiveTab();

    function onTabSelect(e) {
      updateTabs(e.currentTarget);
    }

    function onTabKeyboardSelect(e) {
      if (e.code === "Enter") {
        updateTabs(e.target);
      }
    }

    function onTabContainerKeyUp(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log(e);
      if (e.code === "ArrowRight" || e.key === "ArrowRight") {
        nextTab();
      } else if (e.code === "ArrowLeft" || e.key === "ArrowLeft") {
        prevTab();
      } else if (
        (e.code === "ArrowUp" || e.key === "ArrowUp") &&
        e.ctrlKey === true
      ) {
        selectTabControls();
      }
    }

    function nextTab() {
      currentTabIndex++;
      if (currentTabIndex >= tabs.length) {
        currentTabIndex = tabs.length - 1;
      }

      updateTabs(tabs[currentTabIndex], true);
    }

    function prevTab() {
      currentTabIndex--;
      if (currentTabIndex < 0) {
        currentTabIndex = 0;
      }

      updateTabs(tabs[currentTabIndex], true);
    }

    function updateTabs(target, isKeyboard = false) {
      currentTab.classList.remove("is-keyboard-selected");
      currentTab.classList.toggle("active");
      currentTab.setAttribute("aria-selected", false);
      target.classList.toggle("active");
      currentTab = target;
      setActiveTab(isKeyboard);
      setContent(currentTab.getAttribute("aria-controls"), isKeyboard);
    }

    function getActiveTabProps(tabRect) {
      const parentRect = tabContainer.getBoundingClientRect();
      return {
        left: tabRect.left - parentRect.left,
        width: tabRect.width,
        height: tabRect.height
      };
    }

    function setActiveTab(isKeyboard) {
      const tabRect = rect(currentTab);
      const newProps = getActiveTabProps(tabRect);
      follow.style.left = `${newProps.left}px`;
      follow.style.width = `${newProps.width}px`;
      follow.style.height = `${newProps.height}px`;
      currentTab.setAttribute("aria-selected", true);
      currentTab.setAttribute("tabindex", "0");

      if (isKeyboard) {
        currentTab.classList.add("is-keyboard-selected");
      }
    }

    function setContent(selector, isKeyboard) {
      currentTabPanel.classList.toggle("tab-active");

      if (isKeyboard) {
        currentTabPanel.blur();
        currentTabPanel.classList.remove("is-keyboard-selected");
      }

      currentTabPanel.setAttribute("hidden", true);
      currentTabPanel = q(`#${selector}`, tabContainer);
      currentTabPanel.classList.toggle("tab-active");
      currentTabPanel.removeAttribute("hidden");
      if (isKeyboard) {
        currentTabPanel.classList.add("is-keyboard-selected");
        currentTabPanel.focus();
      }
    }

    function selectTabControls() {
      currentTab.parentNode.classList.add("navigation-selected");
      currentTab.focus();
    }

    function onResize() {
      setActiveTab();
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", onTabSelect);
      tab.addEventListener("keyup", onTabKeyboardSelect);
    });

    tabContainer.addEventListener("keyup", onTabContainerKeyUp);
    window.addEventListener("resize", onResize);
  }
})();


$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
