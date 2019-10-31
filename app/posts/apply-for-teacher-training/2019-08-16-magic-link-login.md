---
title: Sign up and log in using a magic link
description: An alternative to using an account and password.
tags: apply-for-teacher-training
---
An alternative to the [account and password design](/apply-for-teacher-training/apply-june-2019/create-account).

Users had trouble with accounts:

* they didn’t know which GOV.UK account to use
* some didn’t know why they were making an account
* Only ask for an email address, and explain why we need it.

## Screenshots

{% from "gallery/macro.njk" import appGallery %}
{{ appGallery({
  path: page.filePathStem | replace("/posts", "/images"),
  items: [
    {text: "Start page"},
    {text: "Before you begin"},
    {text: "Check your email"},
    {text: "Please confirm your email address"}
  ]
}) }}