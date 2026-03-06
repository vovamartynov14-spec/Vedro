let bucketStands = true;

function loadGame() {
    let savedBucket = localStorage.getItem('bucketStands');
    if (savedBucket !== null) {
        bucketStands = savedBucket === 'true';
    }
    updateDisplay();
}

function saveGame() {
    localStorage.setItem('bucketStands', bucketStands);
}

function updateDisplay() {
    document.getElementById('bucketStatus').textContent = bucketStands ? 'STANDS' : 'LYING';
}

document.getElementById('v1').onclick = function() {
    if (bucketStands) {
        alert('BUCKET FELL!');
        bucketStands = false;
        saveGame();
        updateDisplay();
    } else {
        alert('Bucket is already lying...');
    }
};

document.getElementById('v2').onclick = function() {
    bucketStands = true;
    alert('BOUGHT!');
    saveGame();
    updateDisplay();
};

document.getElementById('v3').onclick = function() {
    if (!bucketStands) {
        if (Math.random() > 0.3) {
            bucketStands = true;
            alert('Bucket lifted!');
        } else {
            alert('Bucket broke...');
        }
        saveGame();
        updateDisplay();
    } else {
        alert('Bucket already stands');
    }
};

document.getElementById('reset').onclick = function() {
    localStorage.removeItem('bucketStands');
    bucketStands = true;
    updateDisplay();
    alert('Game reset!');
};

loadGame();
