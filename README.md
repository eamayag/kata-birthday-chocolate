### PROBLEM TO SOLVE

*Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers
on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.
Consider the chocolate bar as an array of squares, s= [2,2,1,3,2]. She wants to find segments summing to Ron's birthday, d=4 with a length equalling his birth month, m=2. In this case, there are two segments meeting her criteria: [2,2] and [1,3].*

### Function description

Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.
birthday has the following parameter(s):
- s: an array of integers, the numbers on each of the squares of chocolate
- d: an integer, Ron's birth day
- m: an integer, Ron's birth month

**Input Format**
- The first line contains an integer , the number of squares in the chocolate bar.
- The second line contains space-separated integers , the numbers on the chocolate squares where .
- The third line contains two space-separated integers, and , Ron's birth day and his birth month.

**Constraints**
- 1 ≤ n ≤ 100 
- 1 ≤ s[i] ≤ 5, where (0 ≤i ≤n)
- 1 ≤ d ≤ 31
- 1 ≤ m≤ 12

**Output format**
Print an integer denoting the total number of ways that Lily can portion her chocolate bar to share with Ron.

**Sample Input**

5

1 2 1 3 2

3 2

**Sample Output** 

2

### Explanation
Lily wants to give Ron m= 2squares summing to d=3 . The following two segments meet the criteria:

1+2=3 --> s[0] + s[1]

2+1=3 --> s[1] + s[2]
