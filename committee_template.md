{% for c in committees %}
{{c.rule}}. {{c.name}}.
(a) The {{c.name}} is responsible for {{c.jurisdiction}}.
(b) The following agencies come within the purview of the {{c.name}}:{% for agency in c.agencies %}
	{{agency}}{% endfor %}
{% endfor %}