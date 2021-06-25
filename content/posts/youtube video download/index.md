---
title: "Python's Pytube Library to Download YouTube Videos"
date: 2021-02-05
excerpt: 'Download the YouTube videos using python and pytube. We are download the single, multiple and playlist videos in python and pytube.'
draft: false
slug: /python's-pytube-library-to-download-youtube-videos
---

YouTube is a social platform for video sharing. We may spent 2 to 4 hours in YouTube and want to download some videos But YouTube doesn't allow to download any video. _In this article, We learn to download the YouTube videos in Python using Pytube library._

# Pytube | the Python Library

- Pytube is a Python library to download YouTube videos.
- Pytube is a lightweight library written in Python. It has no third party dependencies and aims to be highly reliable.

# Install the Pytube library before write the python program to download YouTube videos

- Download the pytube library
  ```shell
  pip install pytube
  ```

# Download the single youtube video in Python

We should use the Pytube's YouTube feature or function whenever we want to download the YouTube video.

- Firsly, we are import our pytube library.
- We set the url of the YouTube video to download.
- We prepare the video to download with the quality. If you want to download the video in highest quality, then replace the line with `video = youtube.streams.get_highest_resolution()`.
- Download function is used to download the video in given path.

Note: _If it doesn't work then, uninstall the pytube library and reinstall. It works for me and my friends._

```python

import pytube

url = 'https://www.youtube.com/watch?v=ID8MoC34SFA'

youtube = pytube.YouTube(url)
video = youtube.streams.first()
video.download('../path')
print('Completed')

```

# Download multiple youtube videos in Python

Here, the only different is "we are getting the youtube videos link in list format and processed with the for loop. _If it doesn't work then, uninstall the pytube library and reinstall. It works for me and my friends._

```python

import pytube

link=[
  "https://www.youtube.com/watch?v=ID8MoC34SFA",
  "https://www.youtube.com/watch?v=VzuBJTtwm3o"
    ]

for i in link:
  yt = pytube.YouTube(i)
  video = youtube.streams.first()
  video.download('../Video')

print('Completed')

```

# Download youtube playlist in python

Here, we are using the Playlist feature or function to download the youtube playlist in python. _If it doesn't work then, uninstall the pytube library and reinstall. It works for me and my friends._

```python
from pytube import Playlist
pl = Playlist("https://www.youtube.com/watch?v=-otyb0ngsa4&list=PL0lo9MOBetEFCNnxB1uZcDGcrPO1Jbpz8")
for video in pl.videos:
  video.streams.first().download()
```

# Download the youtube video's audio in Python

It will the audio file in mp4 format. Don't worry this mp4 file also support for audio. _If it doesn't work then, uninstall the pytube library and reinstall. It works for me and my friends._

```python

import pytube

url = 'https://www.youtube.com/watch?v=VzuBJTtwm3o'

youtube = pytube.YouTube(url)
video = youtube.streams.filter(only_audio=True).all()
video[0].download('./path')

```

You should use the ``get_highest_resolution()` after streams to get the highest resolution of the YouTube video.
