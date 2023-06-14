var locateElements = document.querySelectorAll('.locate');

locateElements.forEach(function(locateElement) {
  var locActElement = locateElement.querySelector('.loc-act');

  locateElement.addEventListener("click", function(event) {
    // 移除其他元素的 active 类
    locateElements.forEach(function(element) {
      element.classList.remove("active");
    });

    // 添加 active 类
    locateElement.classList.add("active");
    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    // 检查事件目标是否位于 .locate 或 .loc-act 元素内
    if (!locateElement.contains(event.target) && !locActElement.contains(event.target)) {
      // 移除 active 类
      locateElement.classList.remove("active");
    }
  });
});


var locateG = document.querySelector('.locate-g');
  var mc = new Hammer.Manager(locateG);
  var pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL });
  mc.add(pan);

  var initialX, initialY;
  var currentX = 0, currentY = 0;
  var dragging = false;

  mc.on('panstart', function(event) {
    event.stopPropagation(); // 阻止事件冒泡到地图
    dragging = true;
  });

  mc.on('panmove', function(event) {
    if (dragging) {
      event.preventDefault();
      currentX += event.deltaX;
      currentY += event.deltaY;
      locateG.style.transform = 'translate(' + currentX + 'px, ' + currentY + 'px)';
    }
  });

  mc.on('panend', function() {
    dragging = false;
  });