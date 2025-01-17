---
title: Show tuition fee status
description: Let users see when a candidate’s application is eligible for home tuition fee funding.
date: 2021-03-22
---

Many candidates qualify for ‘home tuition fee funding’. This means that they: 

- pay the ’home’ rate of tuition fees, which is usually lower than the ‘overseas’ rate
- are eligible for student loans
- might be eligible for bursaries and scholarships

The UCAS application service offers a provisional assessment of whether a candidate qualifies. It has been suggested that we should do the same.

## Who qualifies for home tuition fee funding

A candidate’s funding status is determined through a combination of three factors: 

- nationality
- the right to work or study in the UK
- residency (whether they have a UK address)

British and Irish candidates automatically qualify for home funding. All other candidates must have the right to work or study in the UK and have a UK address.

Candidates may have the right to work or study in the UK for a number of reasons including:

- EU settled status
- EU pre-settled status
- permanent residence card
- family visa
- student visa
- refugee status

We can’t be sure whether a candidate qualifies for home funding because we do not ask them enough questions when they apply. This is why we can only offer a provisional assessment.

## Candidate data analysis

Looking at the candidate data, we can see who is likely to qualify for home tuition fee funding.

The proportion of all candidates who are British or Irish:

- 88% of candidates have British or Irish nationality
- 12% of candidates do not have British or Irish nationality, they are ‘international’

The proportion of international candidates who say they have the right to work or study in the UK:

- 58% of international candidates have the right to work or study in the UK
- 28% of international candidates do not have the right to work or study in the UK
- 15% of international candidates’ right to work in the UK is unknown (for example, marked as ‘not yet, or not sure’)

The proportion of international candidates who have a UK address (also known as residency):

- 74% of international candidates have a UK address
- 26% of international candidates do not have a UK address

The proportion of all candidates who have two or more nationalities:

- 99% of candidates have only one nationality
- 1% of candidates have two or more nationalities

The proportion of all candidates with two or more nationalities who have British or Irish as one of those nationalities:

- 76% of all candidates with two or more nationalities has British or Irish as one of their nationalities
- 24% of all candidates with two or more nationalities do not have British or Irish as one of their nationalities

## What we changed and why

We added a new field to the application details summary list, giving an assessment of the candidate’s funding status.

We emphasised that the assessment may not be correct. Providers should always check the candidate’s details so they can make a more accurate assessment.

## How it works

If the candidate meets the criteria for funding, we display the message ‘Eligible for home tuition fee funding (automated assessment - check details with candidate)’.

If the candidate has not met the criteria for funding, we display the message ‘Not eligible for home tuition fee funding (automated assessment - check details with candidate)’.

If the candidate does not have the right to work or study in the UK at the time of the application, we also display ‘Candidate needs to apply for permission to work and study in the UK’ in the candidate details section.

## Understanding needs and impact

We need to get a stronger understanding of the needs of providers and the impact on candidates before we can recommend providing an assessment of fee status.

The assessment will rely on information provided by candidates which could be inaccurate. 

For example, we ask whether they have the right to live and work in the UK rather than asking questions to work this out. The candidate could get the answer wrong, or could say they are ‘not sure’ (which would be treated as a ‘no’ for this assessment).

This is particularly important to consider in light of recent changes due to Brexit, which has introduced the new EU pre-settled and settled statuses for EU nationals. We need to be sure that candidates will not be put at a disadvantage by our changes.

We need to carry out research with providers to find out:

- what they think has been used to make the initial assessment
- whether they realise that the assessment might not be right, and why they think that might be
- what data they would check and what questions they would ask of the candidate, so that they can make a more accurate assessment
- whether they equate “not eligible for home funding” with overseas applicants
- what they think the initial assessment means for the funding for their course and for the candidate’s access to funding
- what they would do with the information

We will also need to work with the candidate team to understand the implications for candidates. We should consider whether to make the provisional fee status available to candidates as well as providers.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Application details – Eligible for funding",
    caption: "Figure 1: The application details screen showing the candidate is eligible for home tuition fee funding",
    img: {
      src: "application-details-eligible-for-funding.png"
    }
  }, {
    text: "Application details – Not eligible for funding (right to work or study)",
    caption: "Figure 2: The application details screen showing the candidate is not eligible for home tuition fee funding because the candidate does not have a right to work or study in the UK",
    img: {
      src: "application-details-not-eligible-for-funding-right-to-work.png"
    }
  },  {
    text: "Application details – Not eligible for funding (international address)",
    caption: "Figure 3: The application details screen showing the candidate is not eligible for home tuition fee funding because their address is not in the UK",
    img: {
      src: "application-details-not-eligible-for-funding-address.png"
    }
  },{
    text: "Application details – Not eligible for funding (right to work or study and international address)",
    caption: "Figure 4: The application details screen showing the candidate is not eligible for home tuition fee funding because the candidate does not have a right to work or study in the UK and they do not have a UK address",
    img: {
      src: "application-details-not-eligible-for-funding-right-to-work-and-address.png"
    }
  }]
}) }}
