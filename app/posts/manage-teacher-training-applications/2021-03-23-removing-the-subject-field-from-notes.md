---
title: Removing the subject field from notes
description: Why we decided to remove the note subject field
date: 2021-03-23
---

A note is currently made up of a subject and a message. The reason for having the subject was so that it could be [squeezed into the application list](/manage-teacher-training-applications/sorting-by-rbd-date/#sorting-by-last-changed-default).

Since we no longer show the subject on the application list, we’ve decided not to include the field on the ‘Add note’ page. This will make it easier for users to create a note. 

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Add note",
    img: {
      src: "add-note.png"
    }
  }, {
    text: "Notes page with success message",
    img: {
      src: "notes-page-with-success.png"
    }
  }]
}) }}
