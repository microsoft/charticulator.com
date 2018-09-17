// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

function displayVideoCallout(src, timeRange, openTutorial) {
    var timeStart = +timeRange.split(",")[0];
    var timeEnd = +timeRange.split(",")[1];
    var container = document.createElement("div");
    var innerContainer = document.createElement("div");
    var videoContainer = document.createElement("div");
    var controlsContainer = document.createElement("div");
    var video = document.createElement("video");
    container.setAttribute("class", "video-callout");
    videoContainer.setAttribute("class", "video-container");
    controlsContainer.setAttribute("class", "controls-container");
    videoContainer.appendChild(video);
    innerContainer.appendChild(videoContainer);
    container.appendChild(innerContainer);
    document.body.appendChild(container);
    video.setAttribute("src", src);
    var linkReplay = document.createElement("a");
    linkReplay.innerText = "Replay";
    linkReplay.setAttribute("href", "#");
    linkReplay.onclick = function () {
      video.currentTime = timeStart;
      video.play();
      return false;
    };
    controlsContainer.appendChild(linkReplay);
    if (openTutorial) {
      var link = document.createElement("a");
      link.innerText = "Open in Tutorial Viewer";
      link.setAttribute("href", "/tutorials/" + openTutorial + ".html#timeStart=" + timeStart);
      controlsContainer.appendChild(link)
    }
    var linkClose = document.createElement("a");
    linkClose.setAttribute("class", "pull-right");
    linkClose.innerText = "Close";
    linkClose.setAttribute("href", "#");
    linkClose.onclick = function () {
        close();
      return false;
    };
    controlsContainer.appendChild(linkClose);
    innerContainer.appendChild(controlsContainer);
    video.currentTime = timeStart;
    video.play();
    video.ontimeupdate = function () {
      if (video.currentTime > timeEnd) {
        video.pause();
      }
    };
    container.onclick = function (e) {
      if (e.target == videoContainer || e.target == innerContainer || e.target == container) {
        close();
      }
    }
    var escapeListener = function (e) {
      if (e.keyCode == 27) { // esc
        close();
      }
    };
    window.addEventListener("keydown", escapeListener);
    var close = function() {
        window.removeEventListener("keydown", escapeListener);
        container.remove();
    }
  }