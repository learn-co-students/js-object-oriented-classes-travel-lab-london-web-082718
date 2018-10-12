class Driver {

    constructor(name, startDate) {
        this.name = name 
        this.startDate = new Date(startDate) 
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }

}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']



class Route {

    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    avenueToInteger(avenue) {
        return eastWest.indexOf(avenue);
      }

    blocksTravelled() {

    let horizontalDistance =
        this.avenueToInteger(this.endingLocation.horizontal) -
        this.avenueToInteger(this.beginningLocation.horizontal);
        
    let verticalDistance =
        this.endingLocation.vertical - this.beginningLocation.vertical;

    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
    }

      estimatedTime(boolean) {
        const blocks = this.blocksTravelled();

        if (boolean === true) {
            return blocks / 2; 
        } else {
            return blocks / 3; 
        }

      } 
       
}

    
// { horizontal: 'Park', vertical: '34' },
// { horizontal: 'Park', vertical: '45' }


// function distanceFromHqInBlocks(number) {
//     if (number > 42) {
//       return number - 42;
//     } else {
//       return 42 - number;
//     }
//   }
  
  
//   function distanceFromHqInFeet(number) {
//     return feet = distanceFromHqInBlocks(number) * 264
//   }
  
//   function distanceTravelledInFeet(one, two) {
//     if (two > one) {
//       return (two - one) * 264
//     } else {
//       return (one - two) * 264;
//     }
//   }
  
  
