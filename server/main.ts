import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

// global['window'] = win;
// global['Node'] = win.Node;
// global['navigator'] = win.navigator;
// global['Event'] = win.Event;
// global['Event']['prototype'] = win.Event.prototype;
// global['document'] = win.document;
// global['Event'] = null;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600
  });
  await app.listen(process.env.PORT || 3000);
}

// Webpack将用 '__webpack_require__' 替换 'require'
// '__non_webpack_require__' is a proxy to Node 'require'
// 确保服务器只在不需要包的情况下运行
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}
