# JavaScript Essentials

This is just a test site for practing JS basics.

Notes:

- View git history.

```
git log --oneline --graph --all
```

- Checkout a commit. So get the log list and then get yoru hex value and copy paste like this...

```
git checkout 707a9b2
```

If you do a `git status` and you get something like `HEAD detached from bb1e955` then just do this...

```
git branch my-temporary-work
git checkout master
git merge my-temporary-work
```
