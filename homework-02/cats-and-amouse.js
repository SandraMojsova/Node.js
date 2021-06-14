function catAndMouse(x, y, z) {
    //  if(z>x&&z>y) {
    //       if(z-x<z-y) {
    //           return 'Cat A';
    //       }
    //       else {
    //           return 'Cat A';
    //       }
    // }
    //  if(z-x==y-z) {
    //      return 'Mouse C';
    //  }
    // }
        let catA=Math.abs(z-x);
        let catB=Math.abs(z-y);
        if(catA<catB) {
            return 'Cat A';
        }
        else if(catA>catB) {
            return 'Cat B';
        }
        else {
            return 'Mouse C';
        }
    }
    