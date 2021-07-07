---
"@frontity/frontity-org-theme": patch
---

Add a useEffect to the header which closes the mobile menu on state.router.link changes. The work for this was actually done in #192, but Michal forgot to add the changeset there.
