
var peakIndexInMountainArray = function(A) {
    const peak = A.reduce((a,b) => (a<b) ? b : a);
    return A.indexOf(peak);
};
