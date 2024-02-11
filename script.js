console.clear();
const localStoragePrefix = 'apmJwP';
const defaultValues = {
  pug: `main
    h1

    p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestias eum voluptates rem, mollitia unde earum quo cupiditate, ad temporibus, perspiciatis, nisi ullam reiciendis odio rerum quas minus aut aliquam.

    p
        | title:
        input.changetitle(type='text' value='I 💩 you')`,
  stylus: `main
    font-family sans-serif
    font-size 16px
h1
    text-align center
    font-weight normal
    font-style oblique
    font-size 3em`,
  javascript: `const title = document.querySelector('h1')
const input = document.querySelector('.changetitle')

input.addEventListener('input', (e) => {
    title.textContent = input.value.replace(/💩/g, '❤️️')
})

input.dispatchEvent(new Event('input'))` };

require.config({
  paths: {
    'vs': 'https://unpkg.com/monaco-editor@0/min/vs' } });


const workerLoaderURL = "https://codepen.io/yukulele/pen/27ce17bb4f9a85237a4f8028324c178a.js";
// const workerLoaderURL = "https://unpkg.com/monaco-editor@0/min/vs/base/worker/workerMain.js"
// const workerLoaderURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/67868/monacoEditor-workerMain.js"
window.MonacoEnvironment = {
  getWorkerUrl: function (workerId, label) {
    // return 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/67868/monacoEditor-workerMain.js'
    return window.URL.createObjectURL(
    new Blob([`self.importScripts("${workerLoaderURL}");`]),
    { type: 'text/javascript' });

  } };

require(['vs/editor/editor.main'], function () {
  const elm = (() => {
    const root = document.querySelector('#root');
    const el = {
      root };

    const e = Array.from(root.querySelectorAll('[id]'));
    e.forEach(e => el[e.id] = e);
    return el;
  })();

  const code = (() => {
    const el = {};
    const children = Array.from(elm.codes.children);
    children.forEach(code => {
      const type = code.dataset.type;
      const editor = monaco.editor.create(code, {
        wordWrap: 'on',
        automaticLayout: true,
        language: type,
        theme: 'vs-dark' });

      el[type] = {
        wrapper: code,
        editor };

      let storage = null;
      try {
        storage = localStorage.getItem(`${localStoragePrefix}.${type}`);
      } catch {}
      storage = storage == null ? defaultValues[type] : storage;
      editor.setValue(storage);
      editor.onDidChangeModelContent(e => {
        update(type);
      });
    });
    return el;
  })();

  elm.selectors.addEventListener('click', e => {
    const target = e.target;
    const selection = e.target.dataset.select;
    if (selection === undefined) {
      return;
    }
    elm.selectors.querySelector('.active').classList.remove('active');
    target.classList.add('active');
    elm.codes.querySelector('.active').classList.remove('active');
    code[selection].wrapper.classList.add('active');
    code[selection].editor.focus();
  });

  let style;

  const updateCSS = () => {
    stylus.render(code.stylus.editor.getValue(), (err, css) => {
      if (err)
      console.log(err.message);
      style.innerHTML = css;
    });
  };

  const update = (type, save = true) => {
    if (!(type in code)) {
      return;
    }
    if (save) {
      localStorage.setItem(`${localStoragePrefix}.${type}`, code[type].editor.getValue());
    }
    if (type === 'stylus')
    return updateCSS();
    elm.iframe.src = 'about:blank';
  };

  elm.iframe.addEventListener('load', e => {
    const win = elm.iframe.contentWindow;
    const doc = win.document;
    win.addEventListener("error", function (e) {
      console.log("Error occured: " + e.error);
      return false;
    });
    doc.body.innerHTML = jade.render(code.pug.editor.getValue());
    style = document.createElement('style');
    doc.head.appendChild(style);
    updateCSS();
    const script = document.createElement("script");
    doc.head.appendChild(script);
    script.innerHTML = code.javascript.editor.getValue();
  });
  update('pug', false);
});