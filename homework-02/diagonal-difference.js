function diagonalDifference(arr) {
    let firstDiagonal=0;
    let secondDiagonal=0;
    let n=arr.length;
    for(let i=0; i<n; i++) {
        for(let j=0; j< n; j++) {
            if(i==j) {
                firstDiagonal+=arr[i][j];
            }
            if(i==n-1-j) { 
                //i+j==n-1
                secondDiagonal+=arr[i][j];
            }
        }
    }
    let absolute= Math.abs(firstDiagonal-secondDiagonal);
    return absolute;
}
