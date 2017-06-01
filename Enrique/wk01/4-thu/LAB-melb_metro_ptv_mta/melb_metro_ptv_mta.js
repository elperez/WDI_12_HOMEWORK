console.log('---melb metro ptv solution---');

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

function getStations(station){
  debugger 
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

function getJourney(source, destination){

  var journeyOutput = [];
  var traverseToRight;
  var temptations = getStations(source);
debugger
  //SOURCE AND DESTINATION ARE ON THE SAME LINE
  if (stations.indexOf(destination, 0) != -1) {
    var sourceIndex = stations.indexOf(source,0);
    var destinationIndex = stations.indexOf(destination,0);

    if (sourceIndex < destinationIndex){
      stations = stations.slice(sourceIndex,destinationIndex+1);
      journeyOutput.push(stations.join(' -----> '));
    } else {
      stations = stations.reverse();
      stations = stations.slice(stations.indexOf(source,0),stations.indexOf(destination,0)+1);
      journeyOutput.push(stations.join(' -----> '));
    }
  } else {  //SOURCE AND DESTINATION ARE ON DIFFERENT LINES
//debugger
    //PRINT FIRST STATION UNTIL RICHMOND
    if (stations.indexOf(source,0) > stations.indexOf('Richmond',0)){
      stations = stations.reverse();    
    }
    var indexOfRichmond = stations.indexOf('Richmond',0);

    stations = stations.splice(stations.indexOf(source,0),indexOfRichmond);
    journeyOutput.push(stations.join(' -----> '));
 
    //PRINT SECOND LINE
    var stationstwo = getStations(destination);
    var indexOfDestination = stationstwo.indexOf(destination,0);
    
    if (stationstwo.indexOf(destination,0) < stationstwo.indexOf('Richmond',0)){
      stationstwo = stationstwo.reverse();
      
    }
    journeyOutput.push(' -----> ');
    
    stationstwo = stationstwo.splice(stationstwo.indexOf('Richmond',0),stationstwo.indexOf(destination,0));
    journeyOutput.push(stationstwo.join(' -----> '));
  }

  return journeyOutput.join('');
}

function displayJourney(source, destination){
  var output = [];
  output.push('origin: ' + source + '\n');
  output.push('destination: ' + destination + '\n\n');
  output.push(getJourney(source, destination));

  console.log(output.join(''));
}
// ON THE SAME LINE
// displayJourney('Flinders Street','Glenferrie');
// displayJourney('Glenferrie','Flinders Street');
// displayJourney('Glenferrie','Richmond');
// displayJourney('Windsor','Richmond');

//ON DIFFERENT LINES
//displayJourney('Southern Cross','South Yarra');
displayJourney('Glenferrie','Flagstaff');
displayJourney('Flagstaff','Glenferrie');
//displayJourney('Flagstaff','Parliament');
//displayJourney('Melbourne Central','Parliament');
