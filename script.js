function changeTab(tabName) {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(tabName);
    selectedSection.style.display = 'block';
}
function showMath() {
    document.getElementById('mathContent').style.display = 'block';
    document.getElementById('physicsContent').style.display = 'none';
}

function showPhysics() {
    document.getElementById('mathContent').style.display = 'none';
    document.getElementById('physicsContent').style.display = 'block';
}

