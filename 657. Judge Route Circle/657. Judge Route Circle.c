#include <stdio.h>

#define MAXSIZE 100

int main(int argc, char const *argv[])
{
    char *moves;
    moves
    return 0;
}

bool judgeCircle(char* moves) {
    int i,x,y;

    x=0;
    y=0;

    for(i=0;moves[i]!='\0';i++){
        switch(moves[i]){
            case 'R': x++;break;
            case 'L': x--;break;
            case 'U': y++;break;
            case 'D': y--;break;
        }
    }
    return x==y&&x==0?true:false;
}
