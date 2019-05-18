import { Problem } from "./models/problem.models";
export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "Three Sum",
    desc:
      "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
    difficulty: "medium"
  },
  {
    id: 3,
    name: "Four Sum",
    desc:
      "Given an array of integers, find any one combination of four elements in the array whose sum is equal to a given value X.",
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Triangle Count",
    desc:
      "Given an unsorted array of positive integers. Find the number of triangles that can be formed with three different array elements as three sides of triangles.",
    difficulty: "hard"
  },
  {
    id: 5,
    name: "Sliding Window Maximum",
    desc:
      "Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    difficulty: "super"
  }
];
