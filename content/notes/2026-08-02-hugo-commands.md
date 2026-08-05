+++
date = '2026-08-02T18:20:01+05:30'
draft = false
title = 'Hugo Commands'
tags = ['tech', 'coding']
+++

I designed my blog using Hugo, and I use Hugo commands frequently to keep it updated. I've compiled a list of the Hugo commands I use most often and published it here in the Notes section for my own reference and record-keeping

{{< codeblock lang="hugo" >}}
hugo new blog/post-title.md  // to publish a new blog post
hugo new notes/notes-title.md  //to publish a new note
hugo server  //to start the local server where I can view all my changes
hugo server -D // local server environment where I can see the draft changes as well
{{< /codeblock >}}


Below are the git commands to push my changes to production:
{{< codeblock lang="hugo" >}}
git add . 
git commit -m "commit title"
git push origin main 
git log --oneline  //to see recent commits
git diff // to see the exact changes
git status   //to check what's changed
{{< /codeblock >}}
