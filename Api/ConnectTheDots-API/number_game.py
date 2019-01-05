import random

secret_num = randint(1,10)

while True:
    guess = int(input("Guess a number between 1 and 10: "))

    if guess = secret_num:
        print("You got it! My number was {}".format(secret_num))
        break
    else:
        print("Sorry Try Again")
