import java.util.*;

public class hi {

  public static void main(String[] args) {
    getMinProblemCount(5, new int[] { 2, 4, 6, 8 });
  }

  public static int getMinProblemCount(int N, int[] S) {
    // Write your code here
    Arrays.sort(S);
    int[] count = new int[4];
    for (int i = 0; i < S.length; i++) {
      int curr = S[i];
      curr -= count[1] + (count[2] * 2) + (count[3] * 3);
      count[3] += curr / 3;
      curr = curr % 3;
      count[2] += curr / 2;
      curr = curr % 2;
      count[1] += curr;
      if (count[1] > 2) {
        count[2] += 1;
        count[1] = 1;
      }
      if (count[2] > 2) {
        count[3] += 1;
        count[2] = 2;
      }
    }
    int totalCount = 0;
    for (int i = 0; i < 4; i++)
      totalCount += count[i];
    return totalCount;
  }

}
