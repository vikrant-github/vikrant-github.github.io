# Portfolio Website — Project Instructions

## Project Context

This repository is a personal professional portfolio and technical writing website.

Its purpose is to present Vikrant as a senior technology leader who designs and delivers production AI systems, with emphasis on AI architecture, MLOps, GenAI/LLMs, cloud-native systems, and technical leadership.

Treat this as a portfolio and technical showcase, not an application product.

## Technology

The site uses Jekyll with the Minimal Mistakes theme, Ruby, Bundler, Markdown, HTML, Sass/CSS, and JavaScript where appropriate.

The repository uses:

* Ruby 3.3.12
* Jekyll 4.4.1
* Bundler 4.0.20
* Minimal Mistakes

Use `.ruby-version` and the repository's locked dependencies as the source of truth for the development environment.

Common commands:

```bash
bundle install
bundle exec jekyll serve --watch
bundle exec jekyll build
```

## Theme Architecture

Minimal Mistakes is delivered through `remote_theme` rather than being fully vendored in the repository.

If a standard Minimal Mistakes layout, include, or component is not present locally, do not assume it is missing or recreate it. Inspect the existing implementation and understand the remote theme behavior before changing theme-related functionality.

Existing theme customizations are intentional. Do not replace them with standard Minimal Mistakes implementations merely because the theme provides an alternative.

## Content Architecture

The repository intentionally uses the standard `_posts/` collection with category-based routing for the site's work and writing sections.

Posts use categories such as:

* `work`
* `article`

The existing custom layouts present these categories as My Work and My Writing.

Preserve this architecture. Do not introduce Jekyll collections or replace the existing content-routing approach unless explicitly approved.

## Change Guidance

Before changing an existing layout, include, Sass/CSS, configuration, navigation, or asset:

* Inspect how it is currently implemented and where it is used.
* Determine whether the behavior comes from the local customization or the remote theme.
* Prefer modifying the existing implementation over creating a parallel implementation.
* Consider the effect on other pages before making global changes.

Treat these as higher-impact areas:

* `_config.yml`
* `_data/navigation.yml`
* custom layouts
* site-wide includes
* global Sass/CSS
* dependency configuration

Do not perform unrelated cleanup or modernization discovered during a task. Mention relevant findings separately instead.

Do not manually edit `_site/` or `.jekyll-cache/`; they are generated output.

Do not introduce a CSS framework, major library, external service, or dependency upgrade unless the task requires it and the change is approved.

## Approval Boundaries

Claude may autonomously:

* Inspect and investigate the repository.
* Make normal, scoped changes required by the task.
* Run appropriate local validation.
* Review the resulting changes.
* Report unrelated issues without fixing them.

Ask for approval before making changes that are:

* Architectural or high-blast-radius.
* Consequential dependency or version changes.
* Major changes to Jekyll/theme architecture.
* Changes to the established content/category architecture.
* Major global design or styling changes.
* Substantial or difficult-to-reverse deletions.

If an important requirement is genuinely ambiguous, ask before proceeding.

## Validation

Validation should be proportional to the change.

For meaningful changes:

1. Run relevant unit tests when they exist.
2. Run:

```bash
bundle exec jekyll build
```

3. For layout, styling, navigation, or other user-facing changes, inspect the affected rendered pages.
4. Review `git status` and `git diff`.
5. Report what changed and what validation was performed.

Do not consider a user-facing change fully validated solely because the Jekyll build succeeds.

The repository currently has no comprehensive automated test suite or Playwright setup. When adding tests, prefer lightweight unit tests that provide meaningful coverage of testable site logic.

Playwright/browser-level testing is planned for a later stage and should not be introduced unless explicitly requested.

## Git

Use the repository's established Conventional Commit convention when creating commit messages, including:

* `feat:`
* `fix:`
* `chore:`
* `docs:`
* `style:`
* `refactor:`

Follow the Git safety and commit/push rules defined in the global personal Claude Code instructions.
