console.clear();
const localStoragePrefix = 'apmJwP';
const defaultValues = {
  pug: `- var texts = ['P', 'U', 'G', '', 'Z', 'O', 'N', 'E', ': )'];
- var number_of_particle = 12;

- for (var i = 0; i < texts.length; i++)
  .background(class="background" + i)
.criterion
  - for (var i = 0; i < texts.length; i++)
    .text(class='text' + i) #{texts[i]}
  - for (var i = 0; i < texts.length; i++)
    .frame(class='frame' + i)
  - for (var i = 0; i < texts.length; i++)
    - for (var j = 0; j < number_of_particle; j++)
      .particle(class="particle" + i + j)`,
  stylus: `@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

/**
* get random number.
* @param {number} min - min number.
* @param {number} max - max number.
*/

random(min,max)
  return floor(math(0, 'random') * (max - min + 1) + min)

/*
* variable
*/

_number_of_text = 9;
_number_of_particle = 12;
_mult_num_text = 360 / _number_of_text;
_mult_num_particle = 360 / _number_of_particle;
_width = 40;
_height = 40;

html, body
  height: 100vh;
  width: 100vw;
  
body
  font-family: 'Montserrat', sans-serif;
  background: #FFF;
  position: relative;
  overflow: hidden;
  font-size: 100%;
  text-align: center;

.criterion
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 0;
  width: 0;
  transform: translate(-(_width / 2)px, -(_height / 2)px);

/*
* background
*/

.background
  position: absolute;
  top: 0;
  height: 100vh;
  width: 0;
  animation: background-animation 2s ease-in-out 4s 1 normal forwards;
for i in (0.._number_of_text)
  .background{i}
    left: 12.5% * i;
    height: 100vh;
    background-color: hsl(i * _mult_num_text, 80%, 60%);
    
@keyframes background-animation
  0%
    width: 0;
  50%
    width: 12.5%;
    opacity: 1;
  100%
    opacity: 0;
    width: 25%;
      
/*
* text
*/

.text
  position: absolute;
  width: _width px;
  line-height: _height px;
  opacity: 0;
  overflow: hidden;
  &::after
    z-index: -1;
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: _height px;

for i in (0.._number_of_text)
  .text{i}
    left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
    top: 0;
    animation: text-animation + i 1s ease-in-out 1s + (i * 200)ms 1 normal forwards,
               text2-animation + i 2s ease-in-out 5s 1 normal forwards;
    &::after
      animation: text-after-animation + i 2s ease-in-out 3s 1 normal forwards;
      
for i in (0.._number_of_text)
  @keyframes text-animation{i}
    0%
      transform: scale(0, 0);
      opacity: 0;
    50%
      transform: scale(3, 3);
    100%
      transform: scale(1, 1);
      opacity: 1;
      
for i in (0.._number_of_text)
  @keyframes text-after-animation{i}
    0%
      width: 0px;
      background-color: hsl(i * _mult_num_text, 80%, 60%);
      opacity: 1;
    50%
      width: _width px;
      opacity: 1;
    100%
      left: _width px;
      opacity: 0;
      
for i in (0.._number_of_text)
  @keyframes text2-animation{i}
    if i != _number_of_text - 1
      0%
        left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
        opacity: 1;
      50%
        left: -(_number_of_text / 2 - i - 1) * _width + (_width / 2) px;
        opacity: 0;
      100%
        left: -(_number_of_text / 2 - i - 1) * _width + (_width / 2) px;
        opacity: 0;
    else
      0%
        left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
        opacity: 1;
        top: 0;
        transform: scale(1, 1);
      50%
        left: -(_number_of_text / 2 - i - 1) * _width + (_width / 2) px;
        opacity: 1;
        transform: scale(1, 1);
      65%
        top: 0;
        transform: scale(1, 1);
      70%
        transform: scale(3, 3) rotate(90deg);
        top: -30px;
      75%
        left: -(_number_of_text / 2 - i - 1) * _width + (_width / 2) px;
        top: 0;
        opacity: 1;
        transform: scale(2, 2) rotate(90deg);
      85%
        left: -(_number_of_text / 2 - i - 1) * _width + (_width / 2) px;
      100%
        left: 1000px;
        opacity: 0;
        transform: scale(2, 2) rotate(90deg);
        
/*
* frame
*/
      
.frame
  position: absolute;
  width: _width px;
  height: _height px;
  border-radius: 50%;
  opacity: 0;
  
for i in (0.._number_of_text)
  .frame{i}
    left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
    top: 0;
    animation: frame-animation + i 1s ease-in-out (i * 200)ms 1 normal forwards;
    background-color: hsl(i * _mult_num_text, 80%, 60%);
    
for i in (0.._number_of_text)
   @keyframes frame-animation{i}
     0%
       transform: translateY(-1000px);
       opacity: 1;
     50%
       opacity: 0.8; 
     100%
       transform: translateY(0);
       opacity: 0;

/*
* particle
*/

.particle
  position: absolute;
  width: _width px;
  height: _height px;
  border-radius: 50%;
  
for i in (0.._number_of_text)
  for j in (0.._number_of_particle)
    .particle{i}{j}
      left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
      opacity: 0;
      background-color: hsl(i * _mult_num_text, 80%, 60%);
      animation: particle-animation + i + j 1s ease-in-out 1s + (i * 200)ms 1 normal forwards;
      
for i in (0.._number_of_text)
  for j in (0.._number_of_particle)
    @keyframes particle-animation{i}{j}
      0%
        left: -(_number_of_text / 2 - i) * _width + (_width / 2) px;
        top: 0;
        opacity: 0;
        transform: scale(1, 1);
      100%
        left: -(_number_of_text / 2 - i) * _width + (_width / 2) + cos(j * _mult_num_particle deg) * 100 px;
        top: sin(j * _mult_num_particle deg) * 100 px;
        opacity: 1;
        transform: scale(0, 0);`,
  javascript: ``
};

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