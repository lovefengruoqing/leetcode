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
    int pos[MAXSIZE][MAXSIZE];
    
    memset(pos, 0, sizeof(pos));
    
    x=50;
    y=50;
    pos[x][y]=1;  //将(50,50)当作起点
    
    for(i=0;moves[i]!='\0';i++){
        switch(moves[i]){
            case 'R': x++;break;
            case 'L': x--;break;
            case 'U': y++;break;
            case 'D': y--;break;
        }
        if(pos[x][y]==1){
            return true;
        }else{
            pos[x][y]=1;
        }
    }
    return false;
}
