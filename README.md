# Effusion

A next generation social media backend. Just drop in your own frontend.

# Usage

Here's an example of how Effusion would be used with React

```js
import * as ef from 'effusion';

function Post(props) {
    return (
        <>
            {ef.get_post(props.postid)};
        </>
    );
}
```

Here the componet `Post` will use `ef.get_post()` and return the contents of a post.