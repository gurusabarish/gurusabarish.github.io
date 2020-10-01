---
title: "Download Youtube Videos in Python"
date: 2020-10-01T13:21:52+05:30
draft: false
subtitle: "Download Youtube Videos in Python"
github_link: "https://github.com/gurusabarish/hugo-profile"
author: "Gurusabarish"
tags:
  - Python
bg_image: ""
description: "We should follow this program to download the Youtube videos in python."
---

We should follow this program to download the Youtube videos in python. I will explain the program and "How to use this program in your computer" in below sections.

``` Python

#Import the library
from pytube import YouTube

#Get the link
link = input("Enter the link: ") #enter your link

#Check the link is valid or not
try:
  yt = YouTube(link) 
except:
  print("Connection Error") #to handle exception

#Process the link to video
stream = yt.streams.first()

#Download the video
try:
  stream.download()
  print('Task Completed!')
except:
  print("Some Error!") #to handle exeption 

```

# Program Explanation

- We are using the Pytube library in python to download the video. Second line of the code is indicate and import the Pytube library.
- Line 5 is used to get the YouTube link from the user.
-  Line 8 to 11 is check whether the link is valid or not. If the link is not valid, the exception part will be activate and program will terminate by exception part.
- Line 14 is convert the link to video format. The "first()" function is represent the quality of video. Use the resources section to know more about the resolution and so.
- Line 17 to 21 is download the video to your system. In this process, if any errors arrive, exception part will be activate.

# Requirements to use the program

I know "you all are interested to use the program in your computer". But, there are certain procedure that we need to follow. Firstly, make sure Your computer has python latest version. If not, download and install. Then install the Pytube library. You should install Git to clone or download the program file from GitHub. These are all the requirements to use the program in your system. 

# How to use the program?

- **Download or clone the Python program which is help us to download the youtube videos:**
    Make sure you have the Git with your computer. Then go to your terminal and type the below code. It will download the folder that contains the program file. 
    ```
    git clone https://github.com/gurusabarish/youtube-videos-download.git
    ```
- **Run the python file:**
    Now, You have the python file with the folder. Move into the folder with cd youtube-videos-download and run the python file with python youtube.py
    ```
    cd youtube-videos-download
    python youtube.py
    ```

> Note: If any error is arrive when you run the file, 
[click Here](https://pypi.org/project/pytube)

---------------------------------------------------