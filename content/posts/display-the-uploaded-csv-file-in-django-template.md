---
title: Display the uploaded CSV file in Django template
date: 2021-05-17T07:39:00.308Z
image: '/images/uploads/django.png'
description: Python django code to display the uploaded file in django template
author: 'Gurusabarish'
tags: ['Python', 'Django']
categories: ['Web development']
draft: false
slug: /display-uploaded-csv-file-in-django
---

> Here, is the python django code to display the uploaded csv file in django template.

### Django template code to upload a csv file

```html
home.html

<form method="POST" enctype="multipart/form-data">
  {% csrf_token %}
  <input name="file" accept=".csv" type="file" id="csv" />
  <button type="submit">upload</button>
</form>
<table class="table">
  <tbody>
    {% for i in header %}
    <tr>
      <th scope="row">{{ i }}</th>
      {% for j in data|get_item:i %}
      <td>{{j}}</td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
</table>
```

### Backend code to get and display the uploaded csv file

```python
views.py


def home(req):
    if req.POST:
        context = {}
        reader=csv.DictReader(decode_utf8(req.FILES['file']))
        for row in reader:
            header = list(row.keys())
            break
        data = {}
        for row in reader:
            for i in header:
                values = []
                values.append(row.get(i))
                if i not in data:
                    data[i] = values
                data[i].extend(values)
        context['header'] = header
        context['data'] = data

        return render(req, 'home.html', context)
    return(render(req, 'home.html'))
```

<br>

```python
url.py


from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
]
```
