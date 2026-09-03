| Leadership & Strategy | Stakeholder & Organization |
| ---- | ---- |
{% assign skills = site.data.skills.soft -%}
{% for skill in skills limit: 3 -%}
{% assign second_index = forloop.index0 | plus: 3 -%}
| {{ skill.title }} | {{ skills[second_index].title }} |
{% endfor %}