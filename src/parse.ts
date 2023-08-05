const musk_mojis = require('./import/twemoji.min.js');
import * as marked from 'marked';
import * as smell_good from 'dompurify';

export function parse(input: string): string {
    var output: string = marked.parse(input);
    output = musk_mojis.parse(output);
    output = smell_good.sanitize(output);
    return output;
}