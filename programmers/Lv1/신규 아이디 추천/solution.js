function solution(new_id) {
    new_id = firstPhase(new_id);
    new_id = secondPhase(new_id);
    new_id = thirdPhase(new_id);
    new_id = fourthPhase(new_id);
    new_id = fifthPhase(new_id);
    new_id = sixthPhase(new_id);
    new_id = seventhPhase(new_id);
    return new_id;
}

function firstPhase(str) {
    return str.toLowerCase();
}

function secondPhase(str) {
    return str.replace(/[^a-z0-9-_.]/g, '');
}

function thirdPhase(str) {
    return str.replace(/[.]{2,}/g, '.');
}

function fourthPhase(str) {
    str = str.split('');
    if (str[0] === '.') str[0] = '';
    if (str[str.length - 1] === '.') str[str.length - 1] = '';
    return str.join('');
}

function fifthPhase(str) {
    return str === '' ? 'a' : str;
}

function sixthPhase(str) {
    if (str.length >= 16) {
        str = str.slice(0, 15).split('');
        if (str[str.length - 1] === '.') str[str.length - 1] = '';
        return str.join('');
    }
    return str;
}

function seventhPhase(str) {
    str = str.split('');
    while (str.length < 3) {
        str.push(str[str.length - 1]);
    }
    return str.join('');
}
