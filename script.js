console.clear();
const localStoragePrefix = 'apmJwP';
const defaultValues = {
  pug: `                                                                                                                                                                                               
#wrapper
\t.sub
\t\t.sub
\t\t\t.sub
\t\t\t\t.sub
\t\t\t\t\t.sub
\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub
\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.sub`,
  stylus: `body {
\tbackground: #060000;
}

#wrapper, .sub {
\tbackground: #ff73a0;
\toverflow: hidden;
\tbox-shadow: 0px 0px 20px 1px hsla(200, 50%, 10%, 1) inset;
\tborder: 1px solid hsla(200, 50%, 10%, 0.1);
}

#wrapper {
\twidth: 500px;
\theight: 500px;
\tmargin: calc(50vh - 250px) calc(50vw - 250px);
}

.sub {
\tposition: relative;
\twidth: 90%;
\theight: 90%;
\ttransform-origin: 50% 50%;
\ttransform: rotate(12deg);
\tanimation: 100s rot linear infinite;
}

@keyframes rot {
\t0% { transform: rotate(12deg);}
\t100% { transform: rotate(372deg);}
}`,
  javascript: ``
};

require.config({
  paths: {
    'vs': 'https://unpkg.com/monaco-editor@0/min/vs' } });


// const workerLoaderURL = "https://codepen.io/yukulele/pen/27ce17bb4f9a85237a4f8028324c178a.js";
const workerLoaderURL = "https://unpkg.com/monaco-editor@0/min/vs/base/worker/workerMain.js"
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