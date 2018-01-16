#include <stdio.h>
#define MAXSIZE 100

int main(int argc, char const *argv[])
{
    int a=3,b=1;
    printf("%d",hammingDistance(a,b));
    return 0;
}
int hammingDistance(int x, int y) {
    int stack1[MAXSIZE],top1=-1;
    int stack2[MAXSIZE],top2=-1;
    int dis;

    while(x>0){
        stack1[++top1] = x%2;
        x /= 2;
    }


    while(y>0){
        stack2[++top2] = y%2;
        y /= 2;
    }

    dis=0;
    while(top1>top2){
        if(stack1[top1--]==1){
            dis++;
        }
    }

    while(top2>top1){
        if(stack2[top2--]==1){
            dis++;
        }
    }

    // printf("top1=%d,top2=%d,dis=%d\n",top1,top2,dis);

    while(top1>-1&&top2>-1){
        if(stack1[top1--]!=stack2[top2--]){
            dis++;
        }
    }

    return dis;
}
