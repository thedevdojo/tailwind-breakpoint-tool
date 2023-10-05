# 🛠️ TailwindCSS Breakpoint Tool

A simple breakpoint notification that shows up at the top of the screen when you resize your window and hides after you stop resizing.

```html
<script src="//unpkg.com/tailwind-breakpoint-tool" defer></script>
```

https://github.com/thedevdojo/tailwind-breakpoint-tool/assets/601261/5e7af794-1ccd-4f33-9e76-28e26f0a0662

## How to use

This tool is only meant to be used during development and it works pairs perfectly with the <a href="https://tailwindcss.com/docs/installation/play-cdn" target="_blank">Tailwind Play CDN</a>. You can include this tool right alongside it:

```html
<script src="//unpkg.com/tailwind-breakpoint-tool" defer></script>
<!-- Right alongside the Play CDN -->
<script src="https://cdn.tailwindcss.com"></script>
```
Resize your window and see the little breakpoint tool pop down from the top of the screen 🔮

---

This tool utilizes some Tailwind classes itself, so if you are not utilizing the TailwindCDN there may be some classes that do not display correctly. In this case you may just want to copy and paste the javascript from the `index.js` anywhere on your page.

```html
<script>
// copy/paste content from index.js here.
</script>
```
