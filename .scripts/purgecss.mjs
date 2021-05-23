import { PurgeCSS } from 'purgecss';
import { promises } from 'fs';

const purgeCSSResult = await new PurgeCSS().purge({
    content: ['dist/**/*.html', 'dist/**/*.js'],
    css: ['dist/assets/css/*.css']
});

for (const result of purgeCSSResult) {
    await promises.writeFile(result.file, result.css);
}
