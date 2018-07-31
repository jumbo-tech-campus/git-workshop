# Jumbo Tech Campus Git workshop
This repository contains the exercises for the Git workshop. Go ahead and clone this repository. The exercises are in different branches, the first exercise is in branch `one`, the second in branch `two`, third in `three`, etcetera. The exercises build on top of each other.

### Exercise one: rewrite commit message of last commit
The commit message of the last commit is missing the JIRA issue number (GIT-1). Add the JIRA issue number to the commit message by using `git commit --amend`. The new commit message should be `[GIT-1] Update the README to include the first exercise`

### Exercise two: rewrite commit message of previous commit
This exercise is similar to the first one, you have to rewrite the commit message of the `Update the README to include the first exercise` commit. This time you cannot use `git commit --amend`, because it isn't the last commit you want to change (check `git log` to see which one it is). Now you can use interactive rebase to change the commit: `git rebase -i origin/master`.

_Tip: read the instructions in the editor that Git presents. You need to change the word `pick` into `reword` in one of the lines!_
