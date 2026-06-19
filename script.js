function showMore(projectId) {
    const moreInfo = document.getElementById(projectId);
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}ss