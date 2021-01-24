// Remove all available HTML tags from given string


let string = "<p><strong><em>Only print this</em></strong></p>";


const removeTags = (string) => {
    let txt = string.toString();
    return txt.replace(/(<([^>]+)>)/ig, '')
}

document.write(`${removeTags(string)}`);
