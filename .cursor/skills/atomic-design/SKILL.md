---
name: atomic-design
description: >-
  Applies Atomic Design (atoms, molecules, organisms, templates, pages) to the
  Rakheoana Next.js Pages Router UI. Use when creating, scaffolding, or
  refactoring components under frontend/components or routes under frontend/pages.
---

# Atomic Design

Classify a UI piece before adding a file. Put it in the matching layer. This app is the Next.js Pages Router under `frontend/`.

## Classify first

Walk the questions in order. Stop at the first yes.

1. One native element, or one icon or text primitive, with no other project components? **Atom.**
2. A small group of atoms with one job (label + input, icon + text, button + badge)? **Molecule.**
3. A distinct section (header, list, form, card group)? **Organism.**
4. A page layout of regions and slots, with no real data and no fetching? **Template.**
5. A route that loads data and fills one template? **Page.**

If a piece fetches, maps API data, or talks to a store that loads remote state, it is a page. Split presentational parts downward. Do not put fetching inside atoms, molecules, organisms, or templates.

## Where files go

```
frontend/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  pages/
```

- `frontend/pages/` is the page layer (`index`, `contact`, `experience`, `portfolio`, `stack`, `blog`, and new profile routes). One page component per route.
- `frontend/pages/_app.tsx` composes the shell. It does not own section markup.
- `frontend/components/layouts/` is legacy. New screen layouts go in `templates`. Do not mass-move `navbar`, `footer`, or existing layouts. When a change must edit one of those files, extract only the piece that change touches into the correct layer.
- Create a layer folder only when the first component of that layer is added.
- One component per file. Name it for what it is (`Button`, `SearchField`, `SiteHeader`). Add a `Template` or `Page` suffix only when both exist for the same screen. Do not put `Atom` in the name.
- Colocate a test beside the component. Match existing styling (global CSS and SCSS under `frontend/styles/`).
- Import with the existing path style (`components/...` or `@components/...`).

Design tokens are not a layer. Atoms consume the project's existing styles.

## Dependency rule

Imports point downward only.

| Layer | May import |
| --- | --- |
| Atom | Native elements, tokens, icons. No project components. |
| Molecule | Atoms |
| Organism | Molecules, atoms |
| Template | Organisms, molecules, atoms |
| Page | Its template, plus data loading for that route |

Never import a page from a component. Never import an organism from a molecule or an atom.

## Layer rules

**Atoms.** One native element or primitive. Props and children only. No business rules, no stores, no routing.

**Molecules.** Compose atoms for one interaction. Local UI state is limited to that interaction. No API calls.

**Organisms.** A section of molecules and atoms. May hold section UI state (open panel, selected tab). Receive data and callbacks through props. No HTTP, no router, no domain services.

**Templates.** Layout only. Compose the organisms for that screen and forward props. Use `children` for regions whose content varies. No hardcoded business records, no fetching.

**Pages.** Own the route. Load data through `frontend/services/httpService.ts`, map it into template props, and pass callbacks. One template per page. No markup that belongs in a lower layer.

## React

- Function components. Type props in a `type` alias next to the component.
- Varying content goes through `children`, not boolean mode flags piled onto one component.
- Pages load data. Pass plain props into the template.

## Workflow

1. Read the surrounding UI and name the layer before adding a file.
2. Add the component in that layer's folder. Pass data in and events out.
3. Compose it from the layer above.
4. If a file imports upward, move the dependent piece up a layer or split it.
5. Leave unrelated components where they are.

## Checklist

- [ ] Each new component sits in exactly one layer
- [ ] Imports point downward only
- [ ] Fetching and route params live in the page
- [ ] Atoms and molecules contain no domain or API code
- [ ] Templates contain layout and slots, not live data
- [ ] Styling and tests stay with the component
- [ ] Empty layer folders were not added
