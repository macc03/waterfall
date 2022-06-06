window.onload = function () {
  const COL_WIDTH = 200;

  const gap = 10;

  const img_collection = document.getElementById("masonry").children;

  const waterfall = () => {
    const container_width = parseInt(
      getComputedStyle(document.getElementById("masonry")).width
    );

    const COL_LENGTH = Math.floor(container_width / COL_WIDTH);
    let arr = [];

    for (let i = 0; i < img_collection.length; i++) {
      if (i < COL_LENGTH) {
        img_collection[i].style.top = 0;
        img_collection[i].style.left = COL_WIDTH * i + (i + 1) * gap + "px";
        arr.push(img_collection[i].offsetHeight);
      } else {
        let min_height = arr[0],
          index = 0; // 最小宽度的索引
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] < min_height) {
            min_height = arr[j];
            index = j;
          }
        }
        img_collection[i].style.top = min_height + gap + "px";
        img_collection[i].style.left = img_collection[index].offsetLeft + "px";
        arr[index] += img_collection[i].offsetHeight + gap;
      }
    }
  };
  window.onresize = function () {
    waterfall();
  };
  waterfall();
};
