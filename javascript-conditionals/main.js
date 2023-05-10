/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const isUnderFive=number=>number<5;
const isEven=number=>number%2===0;
const startsWithJ=string=>string[0]==='J';
const isOldEnoughToDrink=({name,age})=>age>=21;
const isOldEnoughToDrive=({name,age})=>age>=16;
const isOldEnoughToDrinkAndDrive=({name,age})=>false; // dont drink AND drive, drink THEN drive:)
function categorizeAcidity(pH){
if(pH===7)return 'neutral';
else if(pH>0&&pH<7) return 'acid';
else if(pH>7&&pH<14) return 'base';
else return 'invalid pH level';
}
const introduceWarnerBro=name=>{
  switch (name){
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!"; break;
    case 'dot':
      return "I'm cute~"; break;
    default:
      return "Goodnight everybody!"; break;
  }
}
function recommendMovie(genre){
  switch(genre){
    case 'action': return 'Die Hard'; break;
    case 'comedy': return 'The Big Lebowski'; break;
    case 'horror': return 'Winnie the Pooh'; break;
    case 'drama': return 'Red Notice'; break;
    case 'musical': return 'High School Musical'; break;
    case 'sci-fi': return 'Alita'; break;
    default: return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';break;
  }
}
