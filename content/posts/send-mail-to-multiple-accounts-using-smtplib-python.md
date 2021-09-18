---
title: Python Send mail to multiple accounts using smtplib
date: 2021-05-16T10:29:41.931Z
image: '/images/uploads/python.png'
description: Python program to send mails using smtplib. Here, we gonna learn to
  send mail to multiple and single accoount.
author: 'Gurusabarish'
tags: ['Python']
categories: ['Programming']
draft: false
slug: /python-send-mail
---

> You need to enable lesssecureapps in [your gmail account ](https://myaccount.google.com/lesssecureapps) to send mails using smtplib.

## Python code to send mail to multiple accounts

Python program to send mail more then one account. We can use python's smtplib build-in library to send mails.

```python
import smtplib
from email.mime.text import MIMEText

recipients = [
   "example@example.com",
   "example1@example.com",
   "example2@example.com",
]

s = smtplib.SMTP("smtp.gmail.com", 587)
s.starttls()
s.login("yourmail@gmail.com", "password")
msg = MIMEText("""your body text""")
sender = "yourmail@gmail.com"
msg["Subject"] = "Mail subject"
msg["From"] = sender
msg["To"] = " .".join(recipients)
s.sendmail(sender, recipients, msg.as_string())
s.quit()
```

## Python program to send mail

This code will send a mail to only one account.

```python
import smtplib
from email.mime.text import MIMEText

s = smtplib.SMTP("smtp.gmail.com", 587)
s.starttls()
s.login("yourmail@gmail.com", "password")
msg = MIMEText("""your body text""")
sender = "yourmail@gmail.com"
msg["Subject"] = "Mail subject"
msg["From"] = sender
msg["To"] = "receiver@example.com"
s.sendmail(sender, "receiver@example.com", msg.as_string())
s.quit()
```
