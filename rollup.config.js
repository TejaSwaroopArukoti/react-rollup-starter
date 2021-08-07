import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'es'
    },
    plugins:[
        resolve({extensions:['.js']}),
        babel({ presets:['@babel/preset-react'] }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
          }),
        commonjs(),
        serve({
            open:true,
            contentBase:'.',
            host:'localhost',
            port:3000,
        }),
        livereload()
    ]
  };