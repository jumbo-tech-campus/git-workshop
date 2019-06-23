# Jumbo Tech Campus Git workshop
This repository contains the exercises for the Git workshop. Go ahead and clone this repository. The exercises are in different branches, the first exercise is in branch `one`, the second in branch `two`, third in `three`, etcetera. The exercises build on top of each other.

Some remarks:
- Checkout the first exercise branche:
  - `git checkout one` or `git checkout -b one origin/one`
  Then of course continue with branch `two` etcetera.
- Branches were created in succession, so you can do rebasing on the branch of the previous exercise. For example, in exercise four you should rebase on branch of exercise three, so `git rebase -i origin/three` should work.
- Check the log to see if your changes were successful
  - `git log --oneline --graph`
- If you get into trouble:
  - `git reset --hard`
  - `git rebase --abort`
- Git has good explanatory text, if you get stuck, read what Git has printed to your console.
- Still stuck, ask for help.
- Use the command line!
  - If you are not used to using VI editor, try the Nano editor `git config --global core.editor nano`
- The project is a NodeJS API. You can run the code if you have NodeJS version 8 or higher installed. First install dependencies with `npm install`, then start the API with `npm start`, or if you have Docker installed, `docker-compose up`. The API runs on `http://localhost:3000/`
You can run the tests with `npm test`.

## Exercises
Good luck and have fun with these exercises!
<b>NOTE: You can find the Git history for each exercise on a seperate branch. To start with the first exercise, checkout branch `one` first. Once you have succeeded, checkout branch `two` for the second exercise etcetera</b>

### Exercise one: rewrite commit message of last commit
The commit message of the last commit is missing the JIRA issue number (GIT-1). Add the JIRA issue number to the commit message by using `git commit --amend`. The new commit message should be `[GIT-1] Update the README to include the first exercise`

### Exercise two: rewrite commit message of previous commit
This exercise is similar to the first one, you have to rewrite the commit message of the `Update the README to include the first exercise` commit. This time you cannot use `git commit --amend`, because it isn't the last commit you want to change (check `git log` to see which one it is). Now you can use interactive rebase to change the commit: `git rebase -i origin/one`.

_Tip: read the instructions in the editor that Git presents. You need to change the word `pick` into `reword` in one of the lines!_

### Exercise three: fix a mistake in a previous commit
If you look at the test for the default route, you will notice that the last test asserts that the default route returns `Hallo wereld` as response. However, this is not correct, since the slogan for JTC is `Hallo world`. You can fix that mistake by making a new commit, but what you can also do is change the `[GIT-1] Change response in default route to 'Hallo world'` commit so it contains the correct slogan. This is what we are going to do. Change the code in [the default route file](routes/default.js#L6) to:
```javascript
handler: (request, h) => {
  return 'Hallo world!'
}
```

And the code in [the test for the default route](test/defaultRoute.js#L29) to:
```javascript
expect(response.payload).to.equal('Hallo world!')
```
to make sure the tests still run.

Use interactive rebasing to change the commit: `git rebase -i origin/two`.

_Tip: you can use `edit` to change the commit during rebasing. Git will stop the rebase at the point of the commit, you can change the code and add your changes to the stage with `git add`. Once added, you can finish the rebase with `git rebase --continue`_

### Exercise four: reorder commits to reflect workflow
In this project, we work with a test driven workflow. We created a test for a new feature: when you send the query parameter `name` to the default route, you get a response that includes that name (see [the test for the default route](test/defaultRoute.js#L33)). For example, a request to `http://localhost:3000/?name=Jumbo` will get the response `Hallo Jumbo!`.

We made the code changes and created two commits, but have a look at the Git log. It now looks like we wrote the tests _after_ writing the feature. We can leave it as it is (that is perfectly fine), but for the sake of the workshop, let's change the order to match our workflow. Use interactive rebasing to change the order of the commits.

_Tip: you can change the order of commits in the editor that Git presents, by reordering the list_

### Exercise five: squashing commits that do the same thing
After looking at the default route test, we were a bit unhappy with the readability. We see that using `lab.it` and `lab.describe` is less readable than just using `it` and `describe`. We made two boyscout commits to improve the code.

Take a look at the Git log. It seems that these commits have the same message and similar contents (you can view git commit changes by using `git show` and `git show HEAD~`). Let's make one commit of these two commits. Use interactive rebasing to squash the `[BOYSCOUT] Make default route test more readable by extracting a const` commits into one commit.

_Tip: you can also use `fixup` instead of `squash`. With `fixup` the commit message of the previous commit (e.g. the commit that is fixed up) will be used. The step where you choose a commit message from both commit messages will be skipped._

### Exercise six: fixing up a previous commit because tests are failing
At Jumbo we do not really like our main competitor. As an easter egg, we want to return a `403 Forbidden` status code if someone uses the name parameter `Appie`. We created the test and the code and we created a commit for it.

However, if you run the tests (`npm test`), you will see that the tests fail! Apparently we did something wrong. Look at the code in the test and in the route and you will spot the bug.

In exercise three we fixed the commit by using `edit`. This time we will use a different approach:
- create a new commit which fixes the bug
- start an interactive rebase
- reorder the commit so that your new commit will be below the `[GIT-6] Add easter egg for Appie in default route` commit
- change the action for the new commit to `fixup`
- save the file and voila, your commit is fixed

### Exercise seven: split up a previous commit to make logical changes
We have been working on a new endpoint: `/products`. This is quite a lot of work, because products need to be retrieved from a MongoDB instance. Our first step was to create a Dockerfile for this project and a docker-compose configuration, to be able to develop locally against a MongoDB instance running in a container. We also started working on the endpoint, which at first returns an empty object. Later we will work on setting up the MongoDB connection, for example. We have created a commit that contains all the changes that we have made so far.

Have a look at this `[GIT-7] WIP Add products GET endpoint` commit. It contains changes related to setting up Docker and it contains changes related to the new endpoint. We should split that commit up, to make two logical changes. Split this commit into two commits:
- `[GIT-7] Add first version of products GET endpoint`
- `[GIT-7] Add Dockerfile and docker-compose configuration`

_Tip: use `git reset HEAD~` to reset the HEAD reference to the commit before the WIP commit. After that you can make commits by `git add -p` and `git commit`_
