# Hello, GitHub.

`hello-github` is an instruction repository designed to help new TTS employees onboard to
GitHub. It encourages learning by doing: every new employee is supposed to make
a pull request in this repository and see a welcome message posted to the
`#welcomes` slack channel!

Note: For implementing this in the TTS workspace, see [Greg's message about webhooks](https://gsa-tts.slack.com/archives/C02AFQAQDPB/p1628686809000100?thread_ts=1628634575.003600&cid=C02AFQAQDPB); it might be more promising than what I've done her with a Slack app.

## Instructions

This process is meant to familarize employees with the essentials of GitHub _for TTS_: repositories, issues, commits, pull requests, and merges. GitHub is an essential tool at TTS, and we make training a part of new employee onboarding. 

Logistically, this process is meant to be done with a partner. This will hopefully create a more open and encouraging environment for learning.

### Step 1: Repositories 

You are currently looking at the `18F/hello-github` repository. A _repository_ is a home for a project: it normally has lots of files that many people contribute to. You could think about it like a folder on your computer, except that this folder is hosted in the cloud and has (potentiall) many other readers and writers. Repositories can be used for software and non-software projects: for example, [`18F/handbook`](https://github.com/18F/handbook) stores the website code and content for the Handbook, while [`18F/tts-rfc`](https://github.com/18F/tts-rfc) houses the Request For Comments (RFCs) process here at TTS.

### Step 2: Issues

Now we'll familiarize ourselves with Issues. [GitHub Issues](hhttps://guides.github.com/features/issues/) are used for tracking work in a given repository; if you're familiar with project management tools like Jira or Trello, issues are very similar to those tools' "tickets." At TTS, you'll see a lot of work -- and discussions around that work -- documented in issues, so they're pretty important.

Let's create an issue of our own. Between you and your partner, head over to this repository's [issues page](https://github.com/18F/hello-github/issues). Once you're there, click the 'New issue' button. You should see a screen that has two text fields: one for the "Title" and another for "Leave a comment."

Enter the following text in the title prompt: "Create welcome message for <Person #1 first name> and <Person #2 first name>".

Enter the following text in the comment prompt: "<Person #1 first name> and <Person #2 first name> are new employees at TTS. They should be welcomed over Slack!"

#### Assignees

Now we're on the last step. Once your title and comment are filled out, it's time to assign this issue to one or more persons. And since you will be the one completing the process, you should assign yourself and your partner!

Click on the 'Assignees' text, and when prompted enter both you and your partners GitHub usernames. Once you've done this, click 'Submit new issue' and you're all done for this step! Congratulations! 

> One way to check that you've copmleted this successfully is by comparing the issue you've created to [this one](https://github.com/18F/hello-github/issues/2).

### Step 3: Creating and editing a file

Now it's time to learn how to create and edit a file using GitHub's web interface. Navigate back to the [repository's main page](https://github.com/18F/hello-github). Click on the 'welcomes' folder. 

On this screen, you should see a list of previously-created `<person>.json` files: feel free to click on any of these files to see what you'll be creating. When you're ready, click on the 'Add file' button and then click 'Create new file.'

At this point, you'll want to name your new file. Follow the convention of `<first_name>-<last_name>.json`. You'll be creating only one person's file now, but not to worry -- you'll fill out your partner's in a moment.

You'll now be creating a JSON file with some information about you. Your teammates at TTS are eager to know more about you, so let's tell them! Follow this structure to create your file:

```json
{
  "name": "<insert full name here>",
  "preferredFirstName": "<preferred first name>",
  "pronouns": "<pronouns>",
  "city": "<your city and state>",
  "favoriteMovie": "<what's your favorite movie?>",
  "funFact": "<share a fun fact about yourself>"
}
```

Once you're done, scroll down to where you see 'Commit new file.'

### Step 4: Commits

TODO: Describe what a commit is, have them commit the file and create a new branch. 

### Step 5: Pull requests

TODO: Describe a pull request, have them create a pull request and appropriately title it. Then have the partner merge it. 

### Step 6: Approval

TODO: Describe what an approval is.

### Step 7: Merge the pull request

TODO: Describe what merging is. 

TODO: Repeat steps 3-7 for the other partner.

### Step 8: Close the issue

TODO: Describe the importance of closing out tickets. Once both partners have received their welcome message via Slack, close the issue they've created. 
