# Jumbo Tech Campus Git workshop
This repository contains the exercises for the Git workshop. Go ahead and clone this repository. The exercises are in different branches, the first exercise is in branch `one`, the second in branch `two`, third in `three`, etcetera. The exercises build on top of each other.

### Exercise one: rewrite commit message of last commit
The commit message of the last commit is missing the JIRA issue number (GIT-1). Add the JIRA issue number to the commit message by using `git commit --amend`. The new commit message should be `[GIT-1] Update the README to include the first exercise`

### Exercise two: rewrite commit message of previous commit
This exercise is similar to the first one, you have to rewrite the commit message of the `Update the README to include the first exercise` commit. This time you cannot use `git commit --amend`, because it isn't the last commit you want to change (check `git log` to see which one it is). Now you can use interactive rebase to change the commit: `git rebase -i origin/master`.

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

Use interactive rebasing to change the commit: `git rebase -i origin/master`.

_Tip: you can use `edit` to change the commit during rebasing. Git will stop the rebase at the point of the commit, you can change the code and add your changes to the stage with `git add`. Once added, you can finish the rebase with `git rebase --continue`_

### Exercise four: reorder commits to reflect workflow
In this project, we work with a test driven workflow. We created a test for a new feature: when you send the query parameter `name` to the default route, you get a response that includes that name (see [the test for the default route](test/defaultRoute.js#L33)). For example, a request to `http://localhost:3000/?name=Jumbo` will get the response `Hallo Jumbo!`. 

We made the code changes and created two commits, but have a look at the Git log. It now looks like we wrote the tests _after_ writing the feature. We can leave it as it is (that is perfectly fine), but for the sake of the workshop, let's change the order to match our workflow. Use interactive rebasing to change the order of the commits.

_Tip: you can change the order of commits in the editor that Git presents, by reordering the list_
