---
layout: default
title: "hicksford | citizenhicks"
---
<header>
<h1>{{ site.data.site.author.name }}</h1>
<p class="subtitle">{{ site.data.site.author.subtitle }}</p>
  <div>
      <nav class="post-nav">
          <a href="{{ '/blog' | relative_url }}" class="to-blog">blog</a>
      </nav>
      | <a href="{{ site.data.site.author.twitter }}"
  target="_blank">X/Twitter</a>
  </div>

</header>
<section class="section">
<h2>About Me</h2>
<p>indie ml engineer and ai enthusiast specializing in multi-agent systems and autonomous ai architectures. building the next generation of multi agent applications that enable complex startegic modeling, planning, and tool use. passionate about creating intelligent systems that can decompose problems, coordinate across specialized agents, and deliver sophisticated solutions through orchestrated workflows. focused on pushing the boundaries of what agents can achieve in real-world applications especially in model development and validation in the fincancial services sector.</p>
<div class="skills">
       {% for skill in site.data.site.skills.about %}
<span class="tag">{{ skill }}</span>
       {% endfor %}
</div>
</section>
<section class="section">
<h2>Projects</h2>
<div class="projects">
       {% for project in site.data.projects %}
<div class="project-card {% if project.featured %}featured{% endif %} {% if project.beta %}beta-tag{% endif %}">
<h3>{{ project.name }} {% if project.beta %}<span class="beta-label">CLOSED BETA</span>{% endif %}</h3>
<p>{{ project.description }}</p>
           {% if project.features %}
<ul>
               {% for feature in project.features %}
<li>{{ feature }}</li>
               {% endfor %}
</ul>
           {% endif %}
           {% if project.additional_info %}
<p>{{ project.additional_info }}</p>
           {% endif %}
           {% if project.links %}
<div class="project-links">
               {% for link in project.links %}
<a href="{{ link.url }}" target="_blank">{{ link.text }}</a>
               {% endfor %}
</div>
           {% endif %}
</div>
       {% endfor %}
</div>
</section>
<section class="section">
<h2>Skills</h2>
<div class="skills">
       {% for skill in site.data.site.skills.technical %}
<span class="tag">{{ skill }}</span>
       {% endfor %}
</div>
</section>
<section class="section">
<h2>GitHub Stats</h2>
<p><img src="https://github-readme-stats.vercel.app/api?username=citizenhicks&show_icons=true&theme=catppuccin_mocha" alt="GitHub Stats" style="max-width: 100%; height: auto;"></p>
</section>
<footer>
<p>Find me on <a href="{{ site.data.site.author.twitter }}" target="_blank">X</a> | <a href="{{ site.data.site.author.github }}" target="_blank">GitHub</a> | built with passion</p>
</footer>
