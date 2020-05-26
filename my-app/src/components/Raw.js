
["ao",1],
["dz",6],
["ar",25],
["at",3],
["au",27],
["az",3],
["be",4],
["by",2],
["bg",1],
["bo",1],
["ca",63]
["br",91],
["cl",3],
["co",2],
["cr",1],
["cz",8],
["dk",12],
["ec",2],
["eg",9],
["ee",1],
["fi",8],
["fr",1318],
["de",85]
["gh",1],
["gr",5],
["hu",3],
["in",696],
["id",19],
["ir",11],
["iq",1],
["il",34],
["it",46],
["jo",1],
["jp",612],
["kz",8],
["ke",1]
["la",1]
["lk",1]
["lt",5]
["lu",2],
["ma",2],
["my",7],
["mx",10],
["mn",1],
["nl",9],	
["ng",6],
["kp",6]
["no",11]
["np",1],
["nz",1],
["pk",7],
["pe",4],	
["pl",6],
["pt",1],	
["cn",5556],
["tw",16],
["ro",1],
["ph",3],
["rw",1]
["za",7]
["sa",15]
["sd",1]
["sg",12]
["kr",30]
["es",30]
["sg",2]
["se",12]
["ch",4]
["th",10],		
["mc",1],		
["tr",15],
["ae",10]
["gb",142]		
["ua",9],
["uy",1],
["us",13517],
["br",1],		
["ve",3],
["vn", 5]	
ALL		45607


const mapOptions = {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },
    tooltip: {
      pointFormatter: function() {
        return this.properties['woe-label'].split(',')[0];
      }
    },
    series: [{
      //mapData: mapData,
      dataLabels: {
        formatter: function() {
          return this.point.properties['woe-label'].split(',')[0];
        }
      },
      name: 'World',
      data: [
       ["ALG",6],
       ["ARGN",25],
       ["ASRA",3],
       ["AUS",27],
       ["AZER",3],
       ["BEL",4],
       ["US", 13517]
      ]
    }]
  }