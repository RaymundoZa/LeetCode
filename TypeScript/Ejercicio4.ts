/*
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example 1:

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".

Constraints:

1 <= s.length <= 20
1 <= p.length <= 20
s contains only lowercase English letters.
p contains only lowercase English letters, '.', and '*'.
It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

*/

function isMatch(s: string, p: string): boolean {
    function dfs(i: number, j: number): boolean {

        if (i >= s.length && j >= p.length) {
            return true;
        }

        const match = i < s.length && (s[i] === p[j] || p[j] === ".");

        // '*' 
        if (j + 1 < p.length && p[j + 1] === "*") {

            return dfs(i, j + 2) || (match && dfs(i + 1, j));
        }

        if (match) {
            return dfs(i + 1, j + 1);
        }

        return false;
    }

    return dfs(0, 0);
}
