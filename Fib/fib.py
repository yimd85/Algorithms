# Python 3 Program to find n'th fibonacci Number in
# with O(Log n) arithmatic operations
# MAX = 1000001

# Create an array for memoization
f = [0] * 10000001


# Returns n'th fuibonacci number using table f[]
def solution(N) :

    if (N == 0) :
        return 0
    if (N == 1 or N == 2) :
        f[N] = 1
        return (f[N])
    if (f[N]) :
        return f[N]


    if(N & 1) :
        k = (N + 1) // 2
        f[N] = (solution(k) * solution(k) % 1000000 + solution(k-1)
        * solution(k-1)) % 1000000
        print(f[N],'test')
        print(N,"N")
    else :
        k = N // 2
        f[N] = (2*solution(k-1) % 1000000 + solution(k))*solution(k) % 1000000
        print(f[N])
        print(N,"!N")
        
    return f[N] % 1000000



# Driver code
# n = 1000000
print(solution(1000))


# In order to achieve O(log(N)) time complexity, you’ll need to use a matrix algorithm.
# See this site for a refresher on Fibonacci algorithms.
# Use recursive multiplication of the matrix to get the Fibonacci value,
# and modulus to find the significant digits. Hint: Make sure to apply modulus
# to each result from your matrix multiplication before putting it back in the matrix.
# You’ll also need to use modulus on the final Fibonacci result.
# Be sure to run your solution against these test cases to check for time/storage complexity.

# N: Result
# 50: 269025
# 100: 915075
# 1000: 228875
# 10000: 366875
# 100000: 746875
# 1000000: 546875
