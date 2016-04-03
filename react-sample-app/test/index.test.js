import assert from 'power-assert';
import jsdomify from 'jsdomify';

describe('index', () => {
  let target;

  before(() => {
    // テストの開始時にDOMを作る
    jsdomify.create('<!doctype html><html><body><div id="content"></div></body></html>');
    target = document.querySelector('#content');
  });
  beforeEach(() => {
    target.innerHTML = '';
  });
  after(() => {
    // テストが終わったら削除する
    jsdomify.destroy();
  });

  it('Can render html', () => {
    const assertHtmlString = '<div>SubModule#render</div>';

    const beforeHtmlString = target.innerHTML;
    require('../src/index.js');
    const afterHtmlString = target.innerHTML;

    assert(beforeHtmlString !== afterHtmlString);
    assert(afterHtmlString === assertHtmlString);
  });
});
