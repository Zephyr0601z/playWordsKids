# PlayWords Core

`playwords-core.js` holds platform-neutral course data and lesson generation.

Use this file as the single source of truth for:

- `courseWords`
- `wordExpressions`
- `lessonTitles`
- `lessonSections`
- `sectionStories`
- generated `lessons`

Web usage:

```html
<script src="./packages/core/playwords-core.js"></script>
<script src="./app.js"></script>
```

Mini Program / CommonJS usage:

```js
const {
  courseWords,
  wordExpressions,
  lessons,
} = require("../../packages/core/playwords-core");
```

When adding words or changing lesson order, edit this core file first so Web and Mini Program can share the same content.
