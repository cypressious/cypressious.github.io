import { PurgeCSS } from 'purgecss';
import { promises } from 'fs';

const purgeCSSResult = await new PurgeCSS().purge({
    content: ['dist/**/*.html', 'dist/**/*.js'],
    css: ['dist/assets/css/*.css']
});

for (const result of purgeCSSResult) {
    if (result.rejected) {
        console.error(result.rejected);
        continue;
    }

    console.log('optimized', result.file);
    await promises.writeFile(result.file, result.css);
}
