var ClozeCard = function(text, cloze) {
    // Check for valid card
    if (text.toLowerCase().indexOf(cloze.toLowerCase()) === -1)
        return console.log("ERROR: Cloze does not appear anywhere in your text");
    
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
    this.fullText = text;
}
module.exports = ClozeCard;
