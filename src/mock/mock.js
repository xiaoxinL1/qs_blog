import Mock from "mockjs";

/***
 * 接口拦截 并返回数据
 */

const list = Mock.mock({
	"list|10": [{
		"id|+1": 1,
		"author": '七岁',
		"title": () => {
			return Mock.Random.ctitle(12)
		},
		"pic": () => {
			return Mock.Random.image("200x100")
		},
		"content": () => {
			return Mock.Random.csentence(50)
		},
		"time": () => {
			return Mock.Random.time()
		}
	}]
})
const content = Mock.mock({
	'content': [{
			id: 1,
			title: 'ES6相关特性、语法',
			timer: 1671084903858,
			image: require('@/static/index/content/es6.jpg'),
			content: '随着Web前端的发展，JavaScript已经成为越来越多的开发者的首选语言。随之也催生出了众多的框架如Vue，React等。作为JavaScript的下一代标准，ES6引入了众多新特性，不仅提高了JavaScript的语言表现力，同时也增加了JavaScript的代码可读性和可维护性。',
			container: `
							<div><h1 id="es6语法" tabindex="-1"><a class="header-anchor" href="#es6语法" aria-hidden="true">#</a> ES6语法</h1><p>随着Web前端的发展，JavaScript已经成为越来越多的开发者的首选语言。随之也催生出了众多的框架如Vue，React等。</p><p>作为JavaScript的下一代标准，ES6引入了众多新特性，不仅提高了JavaScript的语言表现力，同时也增加了JavaScript的代码可读性和可维护性。</p><h2 id="let和const关键字" tabindex="-1"><a class="header-anchor" href="#let和const关键字" aria-hidden="true">#</a> let和const关键字</h2><p>在ES6之前，JavaScript只有var关键字定义变量。而为了更好的语义化和更好的变量作用域定义，ES6引入了let和const关键字。</p><p>let关键字定义的变量和var不同的是，let定义的变量只存在于当前块级作用域中。而var定义的变量则存在于函数作用域中。</p><p>const定义的是常量，定义之后就不能更改，适用于那些不会发生改变的值。</p><h2 id="变量的解构赋值" tabindex="-1"><a class="header-anchor" href="#变量的解构赋值" aria-hidden="true">#</a> 变量的解构赋值</h2><p>在JavaScript中给变量赋值就是让一个变量指向一个值。而新引入的变量的解构赋值，就是让左边对象或数组匹配相应的的右边的值，并赋值给左边的变量。</p><p>比如下面这个例子，我们可以再次满足语义化的称呼，让代码更加易懂。</p><p><code>let [a, b, c] = [1, 2, 3];</code></p><h2 id="对象字面量的增强写法" tabindex="-1"><a class="header-anchor" href="#对象字面量的增强写法" aria-hidden="true">#</a> 对象字面量的增强写法</h2><p>在ES6中新增了很多对象字面量的语法，比如支持定义方法和属性的缩写，支持动态属性和表达式作为属性名。</p><p>比如我们可以这样定义一个对象：<code>let obj = {name, age, sayHi(){console.log('Hi~');}};</code></p><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><p>ES6中另一个非常重要的特性——箭头函数，它提供了更加简洁的函数定义方式，避免了this的指向问题，改善了函数的作用域。</p><p><code>const fn = () =&gt; {console.log('Hello ES6!');}</code></p><h2 id="promise对象" tabindex="-1"><a class="header-anchor" href="#promise对象" aria-hidden="true">#</a> Promise对象</h2><p>异步编程一直是前端开发中最主要的问题之一。 ES6中加入了Promise对象，可以优雅的处理异步编程的情况，并可以将链式调用的方式使得异步代码更加优美。</p><p>比如我们可以这样使用Promise对象：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const promise = new Promise((resolve, reject) =&gt; {
							  setTimeout(() =&gt; {
								resolve('Hello ES6!');
							  }, 1000);
							});
							promise.then(res =&gt; console.log(res));
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是ES6语法的一些重要特性，随着Web前端的发展，越来越多的开发者使用ES6来编写代码，ES6也成为了定义JavaScript标准的一个重要里程碑。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 2,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 200,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 30,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 2,
			title: 'CSS3新特性',
			timer: 1661084903858,
			image: require('@/static/index/content/css.png'),
			content: 'CSS3 是 CSS 技术的升级版，它引入了许多新的特性和功能，使得开发者可以更加轻松地实现一些复杂的效果和布局。下面我们就来了解一下其中几个新特性：',
			container: `
							<div><h1 id="css3新特性" tabindex="-1"><a class="header-anchor" href="#css3新特性" aria-hidden="true">#</a> CSS3新特性</h1><p>CSS3 是 CSS 技术的升级版，它引入了许多新的特性和功能，使得开发者可以更加轻松地实现一些复杂的效果和布局。下面我们就来了解一下其中几个新特性：</p><h2 id="_1-border-radius" tabindex="-1"><a class="header-anchor" href="#_1-border-radius" aria-hidden="true">#</a> 1. Border-Radius</h2><p>Border-Radius 是一个用于设置边框圆角的属性。在 CSS3 之前，我们只能通过背景图片或其他技巧来实现边框圆角的效果。而现在，我们只需要设置一个 border-radius 属性即可快速实现边框圆角效果，使得页面看起来更加美观。</p><p>举个例子，我们可以通过以下代码来实现一个圆形的图片：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>img {
							  border-radius: 50%;
							}
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-box-shadow" tabindex="-1"><a class="header-anchor" href="#_2-box-shadow" aria-hidden="true">#</a> 2. Box-Shadow</h2><p>Box-Shadow 是一个用于设置盒子阴影的属性。通过设置该属性，我们可以使盒子看起来更加立体，同时还可以为盒子添加一些特效，比如发光、投影等。</p><p>举个例子，我们可以通过以下代码来实现一个带有投影效果的盒子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>div {
							  box-shadow: 2px 2px 4px #aaa;
							}
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-text-shadow" tabindex="-1"><a class="header-anchor" href="#_3-text-shadow" aria-hidden="true">#</a> 3. Text-Shadow</h2><p>Text-Shadow 是一个用于设置文字阴影的属性。通过设置该属性，我们可以为文字添加一些特效，比如发光、投影等。</p><p>举个例子，我们可以通过以下代码来实现一个带有文字投影效果的标题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>h1 {
							  text-shadow: 2px 2px 4px #aaa;
							}
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-transition" tabindex="-1"><a class="header-anchor" href="#_4-transition" aria-hidden="true">#</a> 4. Transition</h2><p>Transition 是一个用于设置 CSS 属性过渡效果的属性。通过设置该属性，我们可以为某一个属性设置过渡效果，使得该属性在发生变化时，能够平滑地过渡到新的属性值，从而实现比较流畅的动画效果。</p><p>举个例子，我们可以通过以下代码来实现一个带有过渡效果的按钮：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>button {
							  background-color: #fff;
							  transition: background-color 0.5s ease;
							}
							
							button:hover {
							  background-color: #aaa;
							}
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-flexbox" tabindex="-1"><a class="header-anchor" href="#_5-flexbox" aria-hidden="true">#</a> 5. Flexbox</h2><p>Flexbox 是一个用于弹性布局的 CSS 模块，它使得我们能够更加容易地实现灵活的布局方式。通过设置该属性，我们可以使得子元素按照我们所希望的比例进行排列，同时还能够进行折行、排序等操作。</p><p>举个例子，我们可以通过以下代码来实现一列等高的三列布局：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.container {
							  display: flex;
							}
							
							.item {
							  flex: 1;
							  height: 200px;
							}
							</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是 CSS3 新特性的一些介绍，CSS3 还有许多其他的新特性和功能，值得我们去深入学习和掌握。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 2,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 230,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 112,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 3,
			title: '搜索引擎优化',
			timer: 1675084903858,
			image: require('@/static/index/content/seo.png'),
			content: '搜索引擎优化（Search Engine Optimization，简称 SEO），是一种通过了解搜索引擎的运作方式，以及了解用户的需求和习惯，将网站针对性地进行内部和外部的调整和优化，从而提高网站在各大搜索引擎中的排名和曝光度的方式。',
			container: `
							<div><h1 id="搜索引擎优化" tabindex="-1"><a class="header-anchor" href="#搜索引擎优化" aria-hidden="true">#</a> 搜索引擎优化</h1><p>搜索引擎优化（Search Engine Optimization，简称 SEO），是一种通过了解搜索引擎的运作方式，以及了解用户的需求和习惯，将网站针对性地进行内部和外部的调整和优化，从而提高网站在各大搜索引擎中的排名和曝光度的方式。</p><p>SEO 特别重要，因为随着越来越多的用户使用搜索引擎来寻找可靠的信息，网站的排名在现代互联网市场上变得尤为重要。毕竟，您不想在搜索引擎的海洋里沉默无声地消失，不是吗？</p><p>SEO 包括很多因素，例如网站结构、关键词选择、内容质量、站内优化、用户体验、外部链接等等，所有这些因素都可以影响一个网站在搜索引擎中的排名。</p><p>其实，在很多方面，SEO 态度就类似于香瓜的种植一样。要根据“土壤”的类型和特征，选择适合的“肥料”，并注意细微之处，才能将产出提高到最优质的水平。</p><p>附一个简单的 SEO 小技巧：使用一些直接、简单的标题。因为搜索引擎是通过标记来了解你的网站内容的，因此使用最容易理解的标题可以让搜索引擎快速抓住你的关键词，更好地排名你的内容。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 1,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 10,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 0,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 4,
			title: '移动端开发工具',
			timer: 1621084903858,
			image: require('@/static/index/content/mobileEnd.png'),
			content: '随着智能设备的普及，移动端开发的重要性也越来越高。对于前端开发者来说，提高效率是一件非常重要的事情。那么，如何选择一款优秀的移动端开发工具呢？',
			container: `
							<div><h1 id="移动端开发工具" tabindex="-1"><a class="header-anchor" href="#移动端开发工具" aria-hidden="true">#</a> 移动端开发工具</h1><p>随着智能设备的普及，移动端开发的重要性也越来越高。对于前端开发者来说，提高效率是一件非常重要的事情。那么，如何选择一款优秀的移动端开发工具呢？</p><h2 id="开发工具的重要性" tabindex="-1"><a class="header-anchor" href="#开发工具的重要性" aria-hidden="true">#</a> 开发工具的重要性</h2><p>一款优秀的移动端开发工具，可以为开发者带来很多的便利。首先，它可以帮助我们有效地提高开发效率；其次，它可以检测代码中可能出现的问题，并及时给出提示，让我们更快速地进行开发；再次，它可以为代码提供在线调试的功能，让我们更快捷地发现问题，提高开发质量。</p><h2 id="常用的移动端开发工具" tabindex="-1"><a class="header-anchor" href="#常用的移动端开发工具" aria-hidden="true">#</a> 常用的移动端开发工具</h2><h3 id="_1-hbuilder" tabindex="-1"><a class="header-anchor" href="#_1-hbuilder" aria-hidden="true">#</a> 1. HBuilder</h3><p>HBuilder是一款基于Web技术的开发工具，它支持多种语言的编写，比如HTML、CSS、JavaScript等。HBuilder的特点在于它集成了很多的实用工具，比如代码片段、智能提示、即时预览等等。而且它还拥有非常强大的调试功能，可以方便地定位、修复代码中的问题。</p><h3 id="_2-xcode" tabindex="-1"><a class="header-anchor" href="#_2-xcode" aria-hidden="true">#</a> 2. Xcode</h3><p>Xcode是一款适用于iOS操作系统的开发工具，它主要用于开发iOS应用程序。Xcode的特点在于它非常智能，可以为我们提供各种类型的代码提示和自动补全功能。另外，Xcode还自带了很多的UI组件和图形化工具，可以帮助我们轻松地实现各种功能。</p><h3 id="_3-android-studio" tabindex="-1"><a class="header-anchor" href="#_3-android-studio" aria-hidden="true">#</a> 3. Android Studio</h3><p>Android Studio是一款适用于Android操作系统的开发工具，它主要用于开发Android应用程序。Android Studio的特点在于它非常强大、易用。它可以为我们提供各种类型的代码提示、自动补全功能，还可以为我们生成各种类型的UI界面，让我们专注于代码的实现，而不必过多关注底层细节。</p><h3 id="_4-weex" tabindex="-1"><a class="header-anchor" href="#_4-weex" aria-hidden="true">#</a> 4. Weex</h3><p>Weex是一款基于Vue.js框架的移动端多平台开发框架。它的特点在于它可以支持iOS、Android和Web多个平台的开发，并且它拥有非常灵活的架构和友好的开发体验。另外，Weex还可以方便地进行在线调试和热更新，大大提高了开发效率。</p><h3 id="_5-uni-app" tabindex="-1"><a class="header-anchor" href="#_5-uni-app" aria-hidden="true">#</a> 5. Uni-app</h3><p>Uni-app是一款基于Vue.js框架的移动端多平台开发框架，它支持 iOS、Android、H5和小程序等多个平台。Uni-app的特点在于它可以将一份代码直接转换成多种不同平台的应用程序，大大减少了我们的开发工作量。此外，它还内置了很多的UI组件和常用接口，无需手动配置即可快速搭建页面。</p><p>总之，选择一款优秀的移动端开发工具可以为我们的开发带来很多的便利和效率，同时也可以帮助我们更快速地定位和解决代码中的问题。相信在不久的将来，随着移动端技术的不断发展，开发工具也会越来越方便、智能化。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 1,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 10,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 30,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 5,
			title: '响应式设计',
			timer: 1601084903858,
			image: require('@/static/index/content/media.jpg'),
			content: '在现代互联网时代，我们需要面对的屏幕种类越来越多，从传统的桌面电脑、笔记本电脑，到平板电脑、手机、电视等等。如何在这么多不同大小、不同分辨率的屏幕上展示一致、舒适的用户体验就成了一个急需解决的问题。而响应式设计就是为了解决这个问题而生。所谓响应式设计，是指设计一个能够自动适应不同设备尺寸和屏幕分辨率的网站或应用程序。',
			container: `
							<div><h1 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h1><p>在现代互联网时代，我们需要面对的屏幕种类越来越多，从传统的桌面电脑、笔记本电脑，到平板电脑、手机、电视等等。如何在这么多不同大小、不同分辨率的屏幕上展示一致、舒适的用户体验就成了一个急需解决的问题。</p><p>而响应式设计就是为了解决这个问题而生。所谓响应式设计，是指设计一个能够自动适应不同设备尺寸和屏幕分辨率的网站或应用程序。</p><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><p>响应式设计通过一些基本的设计原则来实现：</p><h3 id="流动网格布局" tabindex="-1"><a class="header-anchor" href="#流动网格布局" aria-hidden="true">#</a> 流动网格布局</h3><p>在响应式设计中，比较常见的布局方式是流动网格布局。这种布局方式会将网站分成若干分布局单元，然后通过调整网格的大小，自动适应不同屏幕下的布局。这样就能够在不同的设备上，呈现出更适合的页面布局。</p><h3 id="弹性图片和媒体" tabindex="-1"><a class="header-anchor" href="#弹性图片和媒体" aria-hidden="true">#</a> 弹性图片和媒体</h3><p>不同设备拥有各自的屏幕尺寸和分辨率，这就带来了一个问题：如何在不失真的前提下展示图片和媒体？由于每个设备的屏幕大小和分辨率都不尽相同，固定像素宽度的图片和媒体可能会变形或缩小过小从而无法展现清晰完整的内容。因此，需要在响应式设计中，使用弹性图片和媒体，让它们按比例自动适应不同大小的屏幕。</p><h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h3><p>媒体查询是响应式设计的核心技术之一，它是 CSS3 的一种语法，用于针对不同的媒体类型和屏幕尺寸，对页面样式进行不同的控制。这样做可以让我们根据不同的设备特性，来选择最合适的页面布局和显示方式。</p><h2 id="设计流程" tabindex="-1"><a class="header-anchor" href="#设计流程" aria-hidden="true">#</a> 设计流程</h2><p>响应式设计需要经过梳理业务需求、确定设计方案后进入到具体的页面设计流程：</p><ol><li>确定页面的设备范围和视口尺寸</li><li>设置网格布局和排版结构</li><li>设计移动优先的页面结构</li><li>设计媒体查询，保证页面能够自动适应不同设备</li><li>使用弹性图片和媒体，防止图片失真</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>响应式设计在今天已经成为了标配，对于开发一个可以在不同设备上呈现优秀的体验的应用来说，是必不可少的技术。虽然在具体实现过程中，我们需要面对一些复杂的技术应用，但通过相应的设计原则和流程，我们能够更好地达到设计的目标。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 13,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 135,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 20,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 6,
			title: '前端性能优化',
			timer: 1641084903858,
			image: require('@/static/index/content/optimization.png'),
			content: '随着移动设备的不断普及，前端性能优化已经逐渐被大家所熟知和重视。前端性能优化可以提高网站速度、减少资源请求次数、减小页面体积，从而能够带来更好的用户体验和更高的转化率。本篇文章将会介绍前端性能优化的几个方面，以及这些方面可以如何被应用到实际项目中。',
			container: `
							<div><h1 id="前端性能优化" tabindex="-1"><a class="header-anchor" href="#前端性能优化" aria-hidden="true">#</a> 前端性能优化</h1><p>随着移动设备的不断普及，前端性能优化已经逐渐被大家所熟知和重视。前端性能优化可以提高网站速度、减少资源请求次数、减小页面体积，从而能够带来更好的用户体验和更高的转化率。本篇文章将会介绍前端性能优化的几个方面，以及这些方面可以如何被应用到实际项目中。</p><h2 id="减少请求次数" tabindex="-1"><a class="header-anchor" href="#减少请求次数" aria-hidden="true">#</a> 减少请求次数</h2><p>当我们访问一个网站时，网页需要加载不同的资源，例如 HTML、CSS、JavaScript 和图片等。如果这些资源数量过多，那么加载的时间就会变得很长，导致用户的流失率增加。所以，我们要尽可能地减少资源请求次数。</p><h3 id="css-sprite-图片合并" tabindex="-1"><a class="header-anchor" href="#css-sprite-图片合并" aria-hidden="true">#</a> CSS Sprite 图片合并</h3><p>在 Web 开发中，我们通常会使用大量的小图片，例如按钮或图标等。对于这类图片，我们通常使用 CSS Sprite 技术来把所有图片合并成一张图片。这样可以减少请求次数，并且由于合并后的图片只需要请求一次，可以大大提升页面加载速度。</p><h3 id="lazyload" tabindex="-1"><a class="header-anchor" href="#lazyload" aria-hidden="true">#</a> LazyLoad</h3><p>LazyLoad 是一种图片延迟加载技术，它可以让页面在加载时只加载用户可见区域内的图片，而不会加载整个页面的所有图片。这种技术既可以减少页面请求次数，又可以减少整个页面的大小，因此可以显著提升页面加载速度。</p><h2 id="加载速度优化" tabindex="-1"><a class="header-anchor" href="#加载速度优化" aria-hidden="true">#</a> 加载速度优化</h2><p>除了减少资源请求次数，我们还需要优化资源加载速度。</p><h3 id="压缩资源" tabindex="-1"><a class="header-anchor" href="#压缩资源" aria-hidden="true">#</a> 压缩资源</h3><p>当我们编写了一段 JavaScript 或 CSS 代码时，这段代码可能包含大量的空格和注释等不必要的内容。这些不必要的内容会增加资源的大小，并且会延长资源下载时间。因此，我们需要对这些资源进行压缩处理，以减少下载时间和网络带宽。</p><h3 id="缓存技术" tabindex="-1"><a class="header-anchor" href="#缓存技术" aria-hidden="true">#</a> 缓存技术</h3><p>为了提高页面的加载速度，我们可以使用缓存来减少服务器的资源请求次数。缓存可以分为本地缓存和远程缓存。本地缓存是指浏览器缓存，而远程缓存是指 CDN 缓存。本地缓存可以使用 Expires 和 Cache-Control 来控制，而远程缓存可以使用 CDN（内容分发网络）来实现。</p><h2 id="dom-操作优化" tabindex="-1"><a class="header-anchor" href="#dom-操作优化" aria-hidden="true">#</a> DOM 操作优化</h2><p>DOM 操作是前端性能优化的重要方面之一。因为 DOM 操作涉及到页面渲染和重绘，如果我们频繁地操作 DOM，就会导致页面性能下降。</p><h3 id="批量操作-dom" tabindex="-1"><a class="header-anchor" href="#批量操作-dom" aria-hidden="true">#</a> 批量操作 DOM</h3><p>批量操作指的是把多个 DOM 操作合并成一次操作，从而减少页面的重绘次数。我们可以把所有 DOM 操作集中在一起，然后一次性进行处理。这样可以减少页面的重绘次数，从而提高页面性能。</p><h3 id="避免强制同步布局" tabindex="-1"><a class="header-anchor" href="#避免强制同步布局" aria-hidden="true">#</a> 避免强制同步布局</h3><p>当浏览器需要对一个元素进行布局计算时，它需要暂停 JavaScript 进程，这个过程叫做强制同步布局。因此，我们要避免频繁地进行 DOM 元素的布局操作。</p><p>总之，前端性能优化是一个非常复杂的过程，需要各种各样的技术和策略来实现。在实际项目中，我们可以根据具体的情况去选择和应用不同的技术，从而提高页面的性能和用户体验。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 0,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 300,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 131,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 7,
			title: '前端框架设计模式',
			timer: 1621084903858,
			image: require('@/static/index/content/designPatterns.png'),
			content: '随着前端项目变得越来越复杂，使用前端框架的方式越来越普遍。但是，单纯地使用框架并不能让我们的项目变得更好，更加清晰和易于维护。所以，学习框架的设计模式成为了我们不容忽视的一部分。',
			container: `
							<div><h1 id="前端框架设计模式" tabindex="-1"><a class="header-anchor" href="#前端框架设计模式" aria-hidden="true">#</a> 前端框架设计模式</h1><p>随着前端项目变得越来越复杂，使用前端框架的方式越来越普遍。但是，单纯地使用框架并不能让我们的项目变得更好，更加清晰和易于维护。所以，学习框架的设计模式成为了我们不容忽视的一部分。</p><h2 id="_1、前言" tabindex="-1"><a class="header-anchor" href="#_1、前言" aria-hidden="true">#</a> 1、前言</h2><p>设计模式的出现是为了解决一些常见问题，而且使用了很多反复的试验和错误。对于前端框架设计模式，它们具有如下优点：</p><ul><li>避免了脆弱的代码，让你的前端代码变得更加健壮</li><li>提高了代码的复用性，减少了代码的冗余</li><li>提高了代码的可维护性和可拓展性</li></ul><p>所以，学习前端框架设计模式，是开发一个好的前端项目的基础。</p><h2 id="_2、基本概念" tabindex="-1"><a class="header-anchor" href="#_2、基本概念" aria-hidden="true">#</a> 2、基本概念</h2><ul><li>设计模式：一种通用的可重用的解决问题的思路</li><li>框架：某一类实际项目代码共性代码的抽象</li><li>模型：描述了一组保持一致的模式，可以看作是模态的模式</li><li>模式：从经验中总结出来可重用的解决问题的思路</li></ul><p>框架中包括很多经典的设计模式，例如：</p><h2 id="_3、常见的设计模式" tabindex="-1"><a class="header-anchor" href="#_3、常见的设计模式" aria-hidden="true">#</a> 3、常见的设计模式</h2><h3 id="_3-1-单例模式" tabindex="-1"><a class="header-anchor" href="#_3-1-单例模式" aria-hidden="true">#</a> 3.1 单例模式</h3><p>单例模式是指一个类只有一个实例，且该实例能够被外部访问到。一般使用一个变量来记录这个唯一实例，同时定义一个静态的工厂方法来获取该实例。在前端框架中，单例模式非常重要，例如我们的Vuex就是一个典型的单例模式。</p><h3 id="_3-2-工厂模式" tabindex="-1"><a class="header-anchor" href="#_3-2-工厂模式" aria-hidden="true">#</a> 3.2 工厂模式</h3><p>工厂模式是一种特殊的创建型模式，其主要功能是为创建复杂对象提供创建工厂。工厂模式在前端框架中的应用非常广泛，例如我们常用的React的JSX语法中，createElement方法就是一个典型的工厂方法，它的主要功能是根据传入的参数来创建对应的React组件。</p><h3 id="_3-3-策略模式" tabindex="-1"><a class="header-anchor" href="#_3-3-策略模式" aria-hidden="true">#</a> 3.3 策略模式</h3><p>策略模式是一种在运行时动态地选择算法，而不是在编译时就确定好算法的模式。在前端框架中，策略模式的应用举例就是React中的事件系统。每个事件都有一个事件处理函数，当执行这个事件时，就会调用相应的处理函数，这样就实现了在运行时动态地选择算法的功能。</p><h3 id="_3-4-观察者模式" tabindex="-1"><a class="header-anchor" href="#_3-4-观察者模式" aria-hidden="true">#</a> 3.4 观察者模式</h3><p>在前端框架中，我们经常需要监听某些数据的变化，这时观察者模式就成为了我们的重要工具之一。观察者模式是一个一对多的关系，当一个对象的状态发生改变时，其它相关对象会被自动地通知到。在React中，就是通过使用setState方法来触发对数据变化的监听。</p><h3 id="_3-5-代理模式" tabindex="-1"><a class="header-anchor" href="#_3-5-代理模式" aria-hidden="true">#</a> 3.5 代理模式</h3><p>代理模式是一种为其他对象提供一种代理以控制对这个对象的访问模式。在前端框架中，代理模式也是应用广泛的一种模式。例如我们可以使用代理模式来对数据进行拦截和处理，或者可以使用代理模式来将一些繁杂的计算放到后台线程里去执行，从而提高前端性能。</p><h2 id="_4、总结" tabindex="-1"><a class="header-anchor" href="#_4、总结" aria-hidden="true">#</a> 4、总结</h2><p>以上就是前端框架设计模式的相关知识点。掌握好这些设计模式及其应用，将会使你在开发中受益匪浅。只有不断地提高我们的代码设计和架构能力，才能更好地应对各种复杂的项目需求。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 0,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 34,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 22,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 8,
			title: '浏览器兼容性',
			timer: 1639084903858,
			image: require('@/static/index/content/ie.png'),
			content: '在前端开发中，浏览器兼容性一直是个让人很头疼的问题。由于不同浏览器对标准支持程度不同，可能导致相同的代码在不同浏览器上呈现出不同的效果甚至完全无法运行。',
			container: `
							<div><h1 id="浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#浏览器兼容性" aria-hidden="true">#</a> 浏览器兼容性</h1><p>在前端开发中，浏览器兼容性一直是个让人很头疼的问题。由于不同浏览器对标准支持程度不同，可能导致相同的代码在不同浏览器上呈现出不同的效果甚至完全无法运行。</p><p>为了解决这个问题，我们可以借助各种工具和技术手段来处理浏览器兼容性问题。下面列出几种：</p><h2 id="_1-各浏览器特性区分" tabindex="-1"><a class="header-anchor" href="#_1-各浏览器特性区分" aria-hidden="true">#</a> 1. 各浏览器特性区分</h2><p>每个浏览器对网站规范的支持程度不同，利用每个浏览器本身的特性完成更好的兼容处理。对于HTML5，在其不支持的浏览器中，例如IE6-8，可以使用transform进行图片缩放。</p><h2 id="_2-polyfill" tabindex="-1"><a class="header-anchor" href="#_2-polyfill" aria-hidden="true">#</a> 2. Polyfill</h2><p>Polyfill是前端开发中常用的一个术语，它指的是JavaScript代码，用来实现在目标环境下缺失的功能，其中实现方式通常是模拟标准API，以便能够在不支持该标准API的环境下工作。比如在IE8中使用es5-shim.js，支持函数、数组、字符串等方法的兼容性。</p><h2 id="_3-modernizr" tabindex="-1"><a class="header-anchor" href="#_3-modernizr" aria-hidden="true">#</a> 3. Modernizr</h2><p>Modernizr是一款能够检测浏览器是否支持指定特性的JavaScript库。Modernizr会检测浏览器是否支持HTML5和CSS3特性，并且会在不支持这些特性的浏览器添加对应的样式类。</p><h2 id="_4-浏览器嗅探技术" tabindex="-1"><a class="header-anchor" href="#_4-浏览器嗅探技术" aria-hidden="true">#</a> 4. 浏览器嗅探技术</h2><p>使用嗅探技术，可以识别不同的浏览器和浏览器版本，然后在代码中执行特定的语句。常用的嗅探技术包括：User Agent Detection，条件注释，JS检测。其中，User Agent Detection是通过检测HTTP请求头中的User-Agent字段信息确定浏览器类型，条件注释是以注释形式控制不同的样式在不同浏览器中显示或隐藏，JS检测判断不同的方法和属性是否存在。</p><h2 id="_5-统一代码库和规则" tabindex="-1"><a class="header-anchor" href="#_5-统一代码库和规则" aria-hidden="true">#</a> 5. 统一代码库和规则</h2><p>在开发过程中，我们可以运用基于组件化和代码库统一的规范来减少bug出现的机会。使用相同的框架、库和编程风格，可以有效减少不同浏览器之间的兼容性问题，并且也能更好地维护自己的代码库，方便复用和协作开发。</p><p>处理浏览器兼容性问题虽然比较麻烦，但对开发的效率和最终的用户体验来说却至关重要，是前端开发工作中必不可少的一环。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 0,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 20,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 13,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 9,
			title: '代码规范',
			timer: 1511084903858,
			image: require('@/static/index/content/eslint.jpg'),
			content: '如果你写过代码，你就会发现在阅读别人的代码时，有的人的代码很容易看懂，而有的人的代码则难以理解。在团队协作开发中，代码风格的一致性是至关重要的。而代码规范就是为了解决这个问题而生的。',
			container: `
							<div><h1 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h1><p>如果你写过代码，你就会发现在阅读别人的代码时，有的人的代码很容易看懂，而有的人的代码则难以理解。在团队协作开发中，代码风格的一致性是至关重要的。而代码规范就是为了解决这个问题而生的。</p><p>代码规范简单来说就是约定俗成的代码书写风格和规则。不同的语言有不同的书写风格和规则，而在同一种语言中，不同的团队也会有不同的书写偏好。</p><p>代码规范的好处在于它可以使代码的可维护性和可读性更高。当我们遵循统一的规范编写代码时，代码会变得更易于阅读和理解，同时也方便代码的维护和修改。</p><p>代码规范最常涉及的方面包括缩进、变量命名、注释、代码注重可读性等。遵循统一的代码规范还有助于减少代码错误和提高代码质量。</p><p>为了更好地实现代码规范，我们可以使用相应的工具来检查代码是否符合规定的书写风格和规则。目前，市面上有很多代码规范检查工具，如ESLint、JSLint、JSHint等。</p><p>总之，代码规范在编写高质量的代码中非常重要。它可以帮助我们将注意力集中在代码业务逻辑上，而不是浪费时间在于阅读和理解代码风格上。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 0,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 10,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 0,
					text: '点赞',
					color: '#ffa800',
				}
			]
		},
		{
			id: 10,
			title: '协作开发工具',
			timer: 1634084903858,
			image: require('@/static/index/content/cooperation.jpg'),
			content: '随着前端开发的不断发展，越来越多的项目在进行中需要多人协同开发，因此协作开发工具成了项目中必不可少的一环。',
			container: `
							<div><h1 id="协作开发工具" tabindex="-1"><a class="header-anchor" href="#协作开发工具" aria-hidden="true">#</a> 协作开发工具</h1><p>随着前端开发的不断发展，越来越多的项目在进行中需要多人协同开发，因此协作开发工具成了项目中必不可少的一环。</p><h2 id="_1-谈谈协作开发的问题" tabindex="-1"><a class="header-anchor" href="#_1-谈谈协作开发的问题" aria-hidden="true">#</a> 1. 谈谈协作开发的问题</h2><p>在协作开发中，经常会遇到以下问题：</p><ul><li>文件同步问题：由于多人在不同位置修改同一文件，会导致文件变得不一致。</li><li>版本控制问题：多人对同一文件进行修改时，如何合并多个版本的代码。</li><li>沟通交流问题：多人协作时，如何进行高效沟通交流。</li></ul><h2 id="_2-常见协作开发工具" tabindex="-1"><a class="header-anchor" href="#_2-常见协作开发工具" aria-hidden="true">#</a> 2. 常见协作开发工具</h2><h3 id="_2-1-git" tabindex="-1"><a class="header-anchor" href="#_2-1-git" aria-hidden="true">#</a> 2.1 Git</h3><p>Git 是目前最流行的分布式版本控制工具，可以很好地解决版本控制问题。多人可以通过 Git 把各自的代码提交到远程仓库中，再进行合并。</p><h3 id="_2-2-svn" tabindex="-1"><a class="header-anchor" href="#_2-2-svn" aria-hidden="true">#</a> 2.2 SVN</h3><p>SVN 是另一种版本控制工具，比 Git 早期出现，采用中央式版本控制，即将所有的代码存放在一个中央服务器上，并在本地以副本方式工作。</p><h3 id="_2-3-visual-studio-code" tabindex="-1"><a class="header-anchor" href="#_2-3-visual-studio-code" aria-hidden="true">#</a> 2.3 Visual Studio Code</h3><p>Visual Studio Code 是一个源代码编辑器。它内置了 Git 版本控制，可以方便地进行代码管理与协作开发。同时，Visual Studio Code 还支持多种语言和文件类型，并预装了大量插件，扩展了其功能。</p><h3 id="_2-4-webstorm" tabindex="-1"><a class="header-anchor" href="#_2-4-webstorm" aria-hidden="true">#</a> 2.4 WebStorm</h3><p>WebStorm 是一款专业的前端工具，提供了很多常用的功能，如代码自动完成、语法检查、代码重构等。同时，WebStorm 还内置了 Git 版本控制，可以很好地支持多人协作开发。</p><h3 id="_2-5-typora" tabindex="-1"><a class="header-anchor" href="#_2-5-typora" aria-hidden="true">#</a> 2.5 Typora</h3><p>Typora 是一款现代化的 Markdown 编辑器，支持即时渲染。在多人协作中，经常需要写文档来记录项目进度和标记问题，Typora 可以使写作更加简单和舒适。</p><h2 id="_3-如何选择协作开发工具" tabindex="-1"><a class="header-anchor" href="#_3-如何选择协作开发工具" aria-hidden="true">#</a> 3. 如何选择协作开发工具</h2><p>选择协作开发工具时，需要考虑以下因素：</p><ul><li>版本管理和分支管理功能是否完善，例如 Git。</li><li>代码编辑功能是否符合个人习惯，例如 Visual Studio Code、WebStorm 等。</li><li>工作流程是否方便高效，例如在线聊天功能。</li></ul><p>除了这些因素，不要忘记选择熟悉的工具也很重要，这样可以让多人协作开发更加顺畅。</p></div>
							`,
			infoIcon: [{
					icon: '&#xe600',
					name: '评论',
					num: 2,
					text: '评论',
					color: '#EF6D57',
				},
				{
					icon: '&#xe622;',
					name: '浏览',
					num: 200,
					text: '浏览',
					color: '#50bcb6',
				},
				{
					icon: '&#xe65c;',
					name: '点赞',
					num: 30,
					text: '点赞',
					color: '#ffa800',
				}
			]
		}
	]
})
Mock.mock('api/getList', 'get', {
	code: 200,
	...content,
	total: content.length
})
const img = '/img/rain-bg.1e21d5f3.gif'
// Mock.mock('/img', 'get', (res)=>{
// 	return res;
// })
Mock.mock(/getById/, 'get', ({
	url
}) => {
	// 获取？后面的参数
	const query = url.split('?')[1]
	// console.log(query)
	// 解析参数
	const queryStr = new URLSearchParams(query)
	const id = queryStr.get('id')
	return {
		code: 0,
		data: content.content.find(item => item.id === Number(id))
	}
})