#### 文字排版

##### 标题

- 标题：HTML中的所有标题标签，从`<h1>` 到 `<h6>` 均可用。提供了`.h1` 到`.h6` class，给`inline`属性的文本赋予标题的样式。
- 副标题：在标题内可以包含`<small>`标签或`.small`元素，用来标记副标题。

![标题](https://upload-images.jianshu.io/upload_images/12817540-e2b2fdabd531fa9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![实践](https://upload-images.jianshu.io/upload_images/12817540-fbae79fc9609b6f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 段落

- Bootstrap将全局font-size设置为14px，line-height为1.428。这些属性直接赋给`<body>`和所有段落元素。
- `<p>`元素被设置了等于1/2行高（20px）的底部外边距（即10px）。

![p标签特性](https://upload-images.jianshu.io/upload_images/12817540-d19db93d42b58aea.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


+ 通过添加.lead可以让段落更强调的突出显示。`<p class="lead">...</p>`


+ 内联文本元素
  + 标记文本 `<mark>…</mark>`
  + 被删除的文本 `<del>…</del>`
  + 无用的文本 `<s>…</s>`
  + 额外插入的文本 `<ins>…</ins>`
  + 带下划线的文本 `<u>…</u>`
  + 小号文本 `<small>…</small>` 和.small一样的效果，其内的文本将被设置为父容器字体大小的 85%


![实例](https://upload-images.jianshu.io/upload_images/12817540-b7b2d4aff4a830ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


+ 文本对齐：通过文本对齐类，可以简单方便的将文字重新对齐

```markdown
1. class = “text-left” 文本左对齐
2. class = “text-right”  文本右对齐
3. class = “text-center” 文本中对齐
4. class = “text-justify ” 文本两端对齐
5. class = “text-nowrap” 禁止文本换行
```

+ 改变大小写

```markdown
1. class =“text-lowercase”  转成小写
2. class = “text-uppercase” 转成大写
3. class = “text-capitalize” 首字母大写
```

+ 缩写

外观表现为文本底部的虚线框，鼠标移至上面时会变成带有“问号”的指针。当鼠标悬停在上面时会显示完整的文本（需要为 `<abbr>`title 属性添加了文本）`<abbr title="World Wide Web">WWW</abbr>万维网`

![实例](https://upload-images.jianshu.io/upload_images/12817540-fec77d9c5feff529.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```html
<!DOCTYPE html>
<html>
  <head>
    <title>文本</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
  </head>
  <body>
		<div class="container">
			<div class="row">
			  <div class="col-md-12">
			  	<p class="text-left">左对齐文本</p>
					<p class="text-center">居中对齐文本</p>
					<p class="text-right">右对齐文本</p>
					<p class="text-justify">两端对齐</p>
					<p class="text-nowrap">禁止文本换行</p>
					<br/>
					<p class="text-lowercase">Lowercased text.</p>
					<p class="text-uppercase">Uppercased text.</p>
					<p class="text-capitalize">Capitalized text.</p>
					<br/>
					<abbr title="World Wide Web">WWW</abbr>万维网
					<br/>
				</div>
			</div>
		</div>
    <script src="js/jquery.js"></script>    
    <script src="js/bootstrap.min.js"></script> 
  </body>
</html>
```

##### 文本颜色

+ 文本强调（文本颜色）

```txt
.text-muted：提示，使用浅灰色（#999）
.text-primary：主要，使用蓝色（#428bca）
.text-success：成功，使用浅绿色(#3c763d)
.text-info：通知信息，使用浅蓝色（#31708f）
.text-warning：警告，使用黄色（#8a6d3b）
.text-danger：危险，使用褐色（#a94442）
```

![实例](https://upload-images.jianshu.io/upload_images/12817540-8d1dd13e7fd26fd5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


+ 文本背景颜色

```txt
<p class="bg-primary">...</p>
<p class="bg-success">...</p>
<p class="bg-info">...</p>
<p class="bg-warning">...</p>
<p class="bg-danger">...</p>
链接组件，鼠标经过时，颜色会加深！
```

![实例](https://upload-images.jianshu.io/upload_images/12817540-684639cf57d952f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 列表

- Bootstrap 支持有序列表、无序列表和定义列表。
- 有序列表：有序列表是指以数字或其他有序字符开头的列表。
- 无序列表：无序列表是指没有特定顺序的列表。
- 如果不想显示列表项符号，使用 class .list-unstyled 来移除样式。
- 内联列表：通过引用 .list-inline，将所有列表项放置于同一行。
- 每个列表项可以包含 `<dt>` 和 `<dd>` 元素。
  `<dt>` 代表 定义术语，就像字典，是被定义的属于（或短语）。
  `<dd>` 是 `<dt>` 的描述。
  `.dl-horizontal` 可以让 `<dl>` 内的短语及其描述排在一行。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>文本</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
  </head>
  <body>
		<h4>有序列表</h4>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
		<h4>无序列表</h4>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
		<h4>未定义样式列表</h4>
		<ul class="list-unstyled">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
		<h4>内联列表</h4>
		<ul class="list-inline">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<h4>定义列表</h4>
		<dl>
			<dt>Description 1</dt>
			<dd>Item 1</dd>
			<dt>Description 2</dt>
			<dd>Item 2</dd>
		</dl>
		<h4>水平的定义列表</h4>
		<dl class="dl-horizontal">
			 <dt>Description 1</dt>
			 <dd>Item 1</dd>
			 <dt>Description 2</dt>
			 <dd>Item 2</dd>
		</dl>
    <script src="js/jquery.js"></script>    
    <script src="js/bootstrap.min.js"></script>   
  </body>
</html>
```

![列表实例](https://upload-images.jianshu.io/upload_images/12817540-55db991d661b5c66.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#### 代码

Bootstrap 允许以两种方式显示代码：

+ `<code>` 标签。内联显示代码。


+ `<pre>` 标签。代码需要被显示为一个独立的块元素或者代码

有多行时，应该使用 `<pre>` 标签。使用 `<pre>` 和 `<code>` 标签时，确保开始和结束标签使用**字符实体**：

```txt
&lt;和&gt;
```

![pre](https://upload-images.jianshu.io/upload_images/12817540-86f6ce5ee37fc8ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```html
<!DOCTYPE html>
<html>
  <head>
    <title>响应式图片</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <link rel="stylesheet" href="css/bootstrap.min.css">
  </head>
  <body>
  	<div class="container">
			<p><code>&lt;header&gt;</code> 作为内联元素被包围。</p>
			<p>如果需要把代码显示为一个独立的块元素，使用 &lt;pre&gt; 标签：</p>
			<pre>
				&lt;article&gt;
				    &lt;h1&gt;文章标题&lt;/h1&gt;
				&lt;/article&gt;
			</pre>
  	</div>
		<script src="js/jquery.js"></script>    
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

#### 图片

+ 响应式图片

添加.img-responsive 可以让Bootstrap 3中的图片更友好地支持响应式布局。

实质是为图片赋予了max-width: 100%; 和height: auto; 属性，可以让图片按比例缩放，不超过其父元素的尺寸。

`<img src="..." class="img-responsive" alt="Responsive image">` 

+ 圆角图片：`<img src="..." class="img-rounded">`


+ 圆形图片：`<img src="..." class="img-circle">`


+ 边框圆角：`<img src="..." class="img-thumbnail">`

注意：Internet Explorer 8 不支持 CSS3 中的圆角属性。

![image](https://upload-images.jianshu.io/upload_images/12817540-1a17ffc3acffd160.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)