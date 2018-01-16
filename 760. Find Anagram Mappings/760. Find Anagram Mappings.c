/**
 * Return an array of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* anagramMappings(int* A, int ASize, int* B, int BSize, int* returnSize) {
    int *p;
    p = (int *)malloc(sizeof(int)*ASize);
    int flag[ASize];
    memset(flag, 0, sizeof(flag));
    
    *returnSize = ASize;
    for(int i=0; i<ASize; i++){
        for(int j=0; j<BSize; j++){
            if(A[i]==B[j]&&flag[j]==0){
                p[i]=j;
                // printf("p[%d]=%d\n",i,j);
                flag[j]=1;
                break;  //一定别忘了break！
            }
        }
    }
    return p;
}
