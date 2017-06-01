console.log('MELBOURNE METRO PTV');

var lines = [{
  name : 'Alemein',
  stations : ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn', 'Glenferrie']
  },{
  name: 'Glen Waverly',
  stations : ['Flagstaff', 'Melbourne Central','Parliament','Richmond','Kooyong','Tooranga']
  },{
  name: 'Sandringham',
  stations : ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
  }
];

var stationCount;

function getStations(station){
  
  for (var index = 0; index < lines.length; index++){
    var currentLine = lines[index].stations;

    if (currentLine.indexOf(station, 0) != -1){
      return lines[index].stations;
    }
  }
}

function getJourneyStations(source, destination){
  var stationList;
  if (source < destination){
    stationList = stations.slice(source, destination);
  } else {
    stationList = stations.reverse().slice(source, destination);
  }
  journeyOutput.push(stations.join(' -----> '));
}

function getJourneyString(source, destination){

  var journeyOutput = [];
  var traverseToRight;
  var tempStations = getStations(source);
  var stationstwo = getStations(destination);

  //SOURCE AND DESTINATION ARE ON THE SAME LINE
  if (tempStations.indexOf(destination, 0) != -1) {
    var sourceIndex = tempStations.indexOf(source,0);
    var destinationIndex = tempStations.indexOf(destination,0);

    if (sourceIndex < destinationIndex){
      tempStations = tempStations.slice(sourceIndex,destinationIndex+1);
      journeyOutput.push(tempStations.join(' -----> '));
    } else {
      tempStations = tempStations.reverse();
      tempStations = tempStations.slice(tempStations.indexOf(source,0),tempStations.indexOf(destination,0)+1);
      journeyOutput.push(tempStations.join(' -----> '));
    }
  } else {  //SOURCE AND DESTINATION ARE ON DIFFERENT LINES
//debugger
    //PRINT FIRST STATION UNTIL RICHMOND
    if (tempStations.indexOf(source,0) > tempStations.indexOf('Richmond',0)){
      tempStations = tempStations.reverse();    
    }
    var indexOfRichmond = tempStations.indexOf('Richmond',0);

    tempStations = tempStations.slice(tempStations.indexOf(source,0),indexOfRichmond);
    journeyOutput.push(tempStations.join(' -----> '));
 
    //PRINT SECOND LINE
    var indexOfDestination = stationstwo.indexOf(destination,0);
    
    if (stationstwo.indexOf(destination,0) < stationstwo.indexOf('Richmond',0)){
      stationstwo = stationstwo.reverse();
      
    }
    if (source !== 'Richmond'){
      journeyOutput.push(' -----> ');  
    }
    
    stationstwo = stationstwo.slice(stationstwo.indexOf('Richmond',0),stationstwo.indexOf(destination,0)+1);
    journeyOutput.push(stationstwo.join(' -----> '));
  }

  stationCount = tempStations.length + stationstwo.length;

  return journeyOutput.join('');
}

function displayJourney(source, destination){
  var output = [];
  output.push('origin: ' + source + '\n');
  output.push('destination: ' + destination + '\n\n');
  output.push(getJourneyString(source, destination) + '\n\n');
  output.push(stationCount+ ' stops total');

  console.log(output.join(''));
}

// ON THE SAME LINE
displayJourney('Flinders Street','Glenferrie');
displayJourney('Glenferrie','Flinders Street');
displayJourney('Glenferrie','Richmond');
displayJourney('Windsor','Richmond');
displayJourney('Southern Cross','South Yarra');

//ON DIFFERENT LINES
displayJourney('Glenferrie','Flagstaff');
displayJourney('Flagstaff','Southern Cross');
displayJourney('Parliament','Richmond');
displayJourney('South Yarra','Richmond');
displayJourney('Richmond','Parliament');
displayJourney('Richmond','South Yarra');
displayJourney('Kooyong','Prahran');
