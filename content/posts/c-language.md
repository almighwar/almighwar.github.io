---
title: I do this simple projects with C language
date: 2023-05-08
author: Almighwar
description: i made it 
tags: 
   - c
   - programming
   - simple
---

## Age of someone (haha)

```c
#include<stdio.h>

int main() {

    int x,y, age;
	char g;

	printf("Female: (f)\nMale: (m)\nAre you female or male: ");
    scanf("%c", &g);
    printf("Enter current year: ");
    scanf("%d", &x);
    printf("Enter the year that you were born: ");
    scanf("%d", &y);

    age = x-y;
    
    switch(g){
    case('f'):
    	printf("Your age is %d\n", age-5);
    	break;
	case('m'):
		printf("Your age is %d\n", age);
		break;
	default:
		printf("Error");
	}
    return 0;
}
```

## Simple calculator

```c
#include<stdio.h>

int main() {

    int num,num2;
	char g;

	printf("-Simple calculator-\n(+)\n(-)\n(*)\n(/)\nEnter a symbol: ");
    scanf("%c", &g);
    printf("Enter first number: ");
    scanf("%d", &num);
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    switch(g){
    case('+'):
    	printf("%d + %d = %d\n", num,num2,num+num2);
    	break;
	case('-'):
	    	printf("%d - %d = %d\n", num,num2,num-num2);
	    	break;
	case('*'):
	    	printf("%d * %d = %d\n", num,num2,num*num2);
	    	break;
	case('/'):
	    	printf("%d / %d = %d\n", num,num2,num/num2);
	    	break;
	default:
		printf("Error\n");
	}
    return 0;
}
```

## The  largest number from three numbers

```c
int main() {

    float num,num1,num2,larg;

	printf("Enter first number: ");
	scanf("%f", &num);
	printf("Enter second number: ");
	scanf("%f", &num1);
	printf("Enter third number: ");
	scanf("%f", &num2);

	if(num>num1 && num>num2)
		larg = num;
		
	else if(num1>num && num1>num2)
		larg = num1;
		
	else if(num2>num && num2>num1)
		larg = num2;
		
	printf("The largest number is %.2f", larg);
		
    return 0;
}
```

## The absolute value

```c
#include<stdio.h>
#include<stdlib.h>

int main() {

    int num, x;

	printf("Enter a number: ");
	scanf("%d", &num);

	x = abs(num);

	printf("Number: %d\nThe absolute value:  %d\n", num ,x);
    return 0;
}
```
