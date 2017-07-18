// Write your cade below:
function caclRemaindar(a,b) {
    if(a<b){
        return caclRemaindar(b,a);
    }
    return a%b;
};

function caclSum(a) {
    let ans=0;
    for(let i=0;i<a.length;i++){
        ans+=a[i];
    }
    return ans;
};

function caclSumInConditon(a,b) {
    let ans=0;
    for(let i=0;i<a.length;i++){
        if(a[i]<b)
            ans+=a[i];
    }
    return ans;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}