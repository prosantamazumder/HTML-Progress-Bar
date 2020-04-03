# HTML Progress Bar

**Live Demo**
[repositories.presstechit-institute.com](http://repositories.presstechit-institute.com/HTML-Progress-Bar/)

### Progress Bar Markup HTML

<pre><code>
<!--Skill Box-->
    <div class="progress-box wow">
	<div class="choose-text">
	    <h6>REACT JS</h6>
	    <p>Pellentesque aliquam praesent nam ipanplaat cras sed a tristique morbi.</p>
	</div>
	<div class="inner">
	    <div class="bar">
		<div class="bar-innner">
		    <div class="bar-fill" data-percent="35">
			<span class="number">35%</span>
		    </div>
		</div>
	    </div>
	</div>
    </div>
</code></pre>

###  PROGRESS BAR active.js

<pre><code>
    /**!-------------------------------------------
        04. PROGRESS BAR LEVEL
    --------------------------------------------**/
    if( $('.progress-levels .progress-box .bar-fill').length){
        $('.progress-box .bar-fill').each(function() {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
            $(this).children('.percent').html(progressWidth+'%');
        });
    }
</code></pre>

###   WOW JS INIT active.js
<pre><code>
  new WOW().init();
</code></pre>    

### Ask Any Question or if you need help contact me 24/7 we are ready support team.

[Facebook:](https://www.facebook.com/PMPROSANTA0)<br />
[Web:](http://presstechit-institute.com/)\
[Personal:](http://pm-prosanto.themefusions.com/)\
[Email Me:](mailto:prosantomazumder@gmail.com)\
[Linkedin:](https://www.linkedin.com/in/prosantomazumder/)\
[Twitter:](https://twitter.com/prosantomazumd1)\
[Instagram:](https://www.instagram.com/prosantomazumder/)\
[Codepen:](https://codepen.io/ProsantaMazumder)


### Changelog
- [x] Version 2.4.3

##### Cradit
[Bootstrap](https://getbootstrap.com/)
[WOW](https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js)
