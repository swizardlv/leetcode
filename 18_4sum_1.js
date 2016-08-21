/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]


*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums = nums.sort(sorting);
  var result = [];
  var countAppear = {}; twoSumMap = {}, twoSumArr = [];
   var i, j, twoSum;
   for(i = 0; i < nums.length; i++){
       if(!countAppear[nums[i]]){
           countAppear[nums[i]] = 1;
       }else{
           countAppear[nums[i]]++;
       }
       for(j = i + 1; j < nums.length; j++){
           twoSum = nums[i] + nums[j];
           if(!twoSumMap[twoSum]){
               twoSumArr.push(twoSum);
               twoSumMap[twoSum] = [[nums[i], nums[j]]];
           }else if(!arrContains(twoSumMap[twoSum], nums[i], nums[j])){
               twoSumMap[twoSum].push([nums[i], nums[j]]);
           }
       }
   }
   twoSumArr = twoSumArr.sort(sorting);

   var numA, numB, sum4;
   for(i = 0, j = twoSumArr.length - 1; i <= j;){
       numA = twoSumMap[twoSumArr[i]], numB = twoSumMap[twoSumArr[j]];
       sum4 = twoSumArr[i] + twoSumArr[j];
       if(sum4 === target){
           addCandidate(numA, numB, result);
       }
       if(sum4 < target){
           i++;
       }else{
           j--;
       }
   }
   return result;

   function verifyResult(arr){
       var previous = null, count = 0;
       for(var i = 0; i < arr.length; i++){
           if(arr[i] !== previous){
               previous = arr[i];
               count = 1;
           }else{
               count++;
               if(count > countAppear[previous]){
                   return false;
               }
           }
       }
       return true;
   }
   function addCandidate(numA, numB, result){
       var i, j, tmp;
       for(i = 0; i < numA.length; i++){
           for(j = 0; j < numB.length; j++){
               if(numA[i][1] <= numB[j][0]){
                   tmp = [numA[i][0], numA[i][1], numB[j][0], numB[j][1]];
                   if(verifyResult(tmp)){
                       result.push(tmp);
                   }
               }
           }
       }
   }
   function arrContains(arr, small, large){
       for(var i = 0; i < arr.length; i++){
           if(arr[i][0] === small && arr[i][1] === large){
               return true;
           }
       }
       return false;
   }
   function sorting(a, b){
       if(a > b){
           return 1;
       }else if(a < b){
           return -1;
       }else{
           return 0;
       }
   }
};
