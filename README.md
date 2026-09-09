# Vikrant | AI Platforms, MLOps & Cloud Architecture

Personal portfolio and technical writing site for Vikrant, a technology leader who helps organizations design and deliver production AI systems.

The site covers AI platforms, MLOps, cloud-native systems, software architecture, and engineering leadership. It is built with [Jekyll](https://jekyllrb.com/) and uses the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme.

## Professional Focus

- AI platform strategy and architecture
- MLOps and production machine learning systems
- Generative AI, LLMs, and agentic systems
- Cloud-native architecture and distributed systems
- Technical direction and multidisciplinary team leadership

## Contents

- [About](https://vikrant-github.github.io/about/): Professional background and areas of expertise.
- [My Work](https://vikrant-github.github.io/mywork): Selected projects and engineering work.
- [My Writing](https://vikrant-github.github.io/mywriting): Articles and technical notes.

## Professional Profile

- [GitHub](https://github.com/vikrant-github)
- [Portfolio website](https://vikrant-github.github.io)

## Prerequisites

- Ruby
- Bundler

The required Ruby gems are defined in [`Gemfile`](Gemfile).

## Local Development

Install the project dependencies:

```bash
bundle install
```

Start the local development server:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Build

Generate the production site in the `_site/` directory:

```bash
bundle exec jekyll build
```

## Repository Structure

| Path | Description |
| --- | --- |
| `_config.yml` | Jekyll and theme configuration. |
| `_data/` | Structured site data, including navigation and skills. |
| `_includes/` | Reusable Markdown and HTML snippets. |
| `_layouts/` | Custom page and post layouts. |
| `_posts/` | Technical articles written in Jekyll post format. |
| `_sass/` | Sass stylesheets used by the site. |
| `assets/` | Custom stylesheets, images, and JavaScript. |
| `_site/` | Generated site output. |

## AI-Assisted Development Strategy

This site was originally designed and built manually, establishing the baseline architecture, visual design, content structure, and theme customizations. Once that baseline reached a stable, mature state, ongoing development shifted toward agentic coding with [Claude Code](https://claude.com/claude-code).

In this workflow, Claude Code acts as an engineering agent that implements changes within the existing architecture, while direction, architectural decisions, scope, and approval of consequential changes remain with the maintainer.

Development guidance is split by scope: a project-level [`CLAUDE.md`](CLAUDE.md) defines repository-specific architecture, constraints, approval boundaries, and validation expectations, while a separate personal-level configuration outside this repository captures general working preferences that apply across projects.

Agentic coding accelerates implementation — it does not transfer ownership of architecture or design decisions to the agent.

### Agentic AI update log

The following are concise examples of changes completed with agentic coding support while keeping the site's architecture and design intent intact:

| Area | Update | Outcome |
| --- | --- | --- |
| Dark mode | Added a light/dark theme toggle and persisted user preference. | Improved readability and a more comfortable viewing experience. |
| Visual refinement | Adjusted dark theme styling for core content, cards, and navigation elements. | Better contrast and consistency across the site. |
| Workflow | Continued repo-aware implementation with scoped validation and design oversight. | Faster iteration without drifting from the existing architecture. |

## License

No license has been specified for this repository.
