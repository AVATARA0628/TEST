(() => {
  'use strict';
  const copy = {
    ko: {
      study: '시각안 비교', switchLanguage: 'Switch to English', directions: '시각안 선택', paper: '아침의 종이', glass: '숲의 유리', slate: '달빛의 광물', compare: '나란히', about: '목업 안내', close: '닫기',
      paperSub: '부드러운 무광 · 따뜻한 확산광', glassSub: '깊은 녹색 · 절제된 투명함', slateSub: '청회색 표면 · 은은한 달빛',
      place: '숲의 가장자리', character: '닉소에게 가볍게 손짓하기', name: '닉소', user: '나', history: '대화 기록', memory: '기억', settings: '설정',
      sound: '음성 출력 설정', skip: '이번 모의 발화 건너뛰기', mic: '음성 입력 안내', send: '보내기', message: '메시지', placeholder: '하고 싶은 말을 들려줘',
      greeting: '왔구나. 숲이 조용해졌어. 잠깐 같이 걸을래?', path: '어디로 갈까?', day: '오늘은 어땠어?',
      answerPath: '저 나무 사이로 빛이 들어오는 길, 보여? 오늘은 네 걸음에 맞춰서 갈게.',
      answerDay: '바람에 실려 온 이야기를 듣고 있었어. 네 하루는 어떤 빛이었어?',
      answerText: '네 이야기를 들으며 닉소가 고개를 기울인다. 조금 더 들려줄래?',
      touch: '닉소가 귀를 쫑긋 세운다.', demo: '비교용 목업 · AI·음성 미연결', speaking: '모의 발화 중 · 소리 없음', waiting: '답변 대기', cancel: '대기 메시지 취소',
      reviewHint: '같은 캐릭터, 같은 배치. 표면과 빛의 차이를 비교해 보세요.',
      demoNotice: '칩·캐릭터·설정을 눌러볼 수 있습니다. 입력은 외부로 전송되지 않으며 새로고침하면 사라집니다.',
      aboutText: 'A는 무광 종이와 아침빛, B는 녹색 반투명 표면, C는 달빛을 받은 광물 표면입니다. 세 안은 선택을 위한 시안이며 최종 제품 디자인이 아닙니다.',
      aboutDetail: '기존 닉소 이미지를 비교용으로 사용했습니다. 최종 모듈형 캐릭터·감정 표현은 별도 제작 대상입니다. 대사는 준비된 예시이며 AI 응답, 실제 음성, 마이크, 로그인, 서버 기억은 연결하지 않았습니다.',
      reset: '이 시안 다시 시작', resetDone: '이 시안의 예시 대화와 기억을 초기화했습니다.',
      soundOn: '음성 켜짐 상태를 표시합니다. 이 목업은 실제 소리를 재생하지 않습니다.', soundOff: '무음 상태로 바꿨습니다.',
      soundSetting: '음성 출력 상태 시연', reduced: '움직임 줄이기', language: '언어', settingsNote: '설정은 이 목업에만 적용됩니다. 글자 크기는 브라우저·시스템 설정을 따릅니다.',
      micTitle: '음성 입력', micText: '캐릭터가 말을 마친 뒤 녹음하고, 인식한 글을 확인한 다음 전송합니다. 이 목업에서는 실제 마이크를 켜지 않습니다.',
      historyNote: '이 페이지에서 주고받은 예시입니다. 새로고침하면 사라집니다.',
      memoryNote: '기억 관리 화면의 가상 예시입니다. 입력한 대화에서 실제 기억을 만들지 않습니다.',
      memories: ['숲길을 함께 걸어 보기로 했다.', '조용한 곳에서 쉬는 것을 좋아한다.', '달빛 아래에서 반딧불이를 함께 보았다.'],
      memoryTypes: ['단기', '장기', '추억'], deleteSelected: '선택한 기억 삭제', confirmTitle: '선택한 기억을 지울까요?', confirmText: '선택한 가상 기억을 이 목업에서 삭제합니다. 대화 기록은 그대로 남습니다.', confirmDelete: '삭제', back: '돌아가기', emptyMemory: '남아 있는 가상 기억이 없습니다.', emptyHistory: '아직 대화가 없습니다.', deleted: '선택한 가상 기억을 삭제했습니다.', chooseMemory: '삭제할 기억을 먼저 선택해 주세요.', recordingBlocked: '현재 모의 발화가 끝나면 음성 입력을 사용할 수 있습니다.', queueFull: '이 목업의 대기 입력 한도에 도달했습니다. 발화 종료 후 다시 보내 주세요.'
    },
    en: {
      study: 'Visual study', switchLanguage: '한국어로 전환', directions: 'Choose a visual direction', paper: 'Morning paper', glass: 'Forest glass', slate: 'Moonlit mineral', compare: 'Compare', about: 'About', close: 'Close',
      paperSub: 'Soft matte · warm diffused light', glassSub: 'Deep green · restrained translucency', slateSub: 'Blue slate · soft moonlight',
      place: 'At the forest edge', character: 'Greet Nixo with a gentle gesture', name: 'Nixo', user: 'You', history: 'Conversation history', memory: 'Memories', settings: 'Settings',
      sound: 'Voice output setting', skip: 'Skip this simulated turn', mic: 'About voice input', send: 'Send', message: 'Message', placeholder: 'Tell me what is on your mind',
      greeting: 'You’re here. The forest has grown quiet. Shall we walk for a while?', path: 'Where shall we go?', day: 'How was your day?',
      answerPath: 'See the light between those trees? Let’s take that path. I’ll walk at your pace.',
      answerDay: 'I was listening to the stories carried by the wind. What color was your day?',
      answerText: 'Nixo tilts his head, listening to your story. Will you tell me a little more?',
      touch: 'Nixo’s ears perk up.', demo: 'UI mockup · no AI or audio', speaking: 'Simulated turn · no audio', waiting: 'Waiting for a reply', cancel: 'Cancel pending message',
      reviewHint: 'One character, one layout. Compare the materials and the light.',
      demoNotice: 'Try the chips, character and settings. Input stays on this page and disappears on reload.',
      aboutText: 'A explores matte paper and morning light. B explores green translucent surfaces. C explores moonlit mineral surfaces. These are comparison concepts, not a final product design.',
      aboutDetail: 'The existing Nixo image is used for comparison. Modular character art and expressions will be designed separately. Replies are prepared examples. AI, audio, microphone, authentication and server memory are not connected.',
      reset: 'Reset this study', resetDone: 'Sample conversation and memories reset.',
      soundOn: 'Voice-on state shown. This mockup does not play audio.', soundOff: 'Switched to the muted state.',
      soundSetting: 'Simulate voice output state', reduced: 'Reduce motion', language: 'Language', settingsNote: 'These settings affect this mockup only. Text sizing follows your browser and system settings.',
      micTitle: 'Voice input', micText: 'Record after the character finishes speaking, review the transcript, then send. This mockup never activates your microphone.',
      historyNote: 'Sample exchanges from this page. They disappear on reload.',
      memoryNote: 'Fictional memory-management examples. Your input does not create real memories.',
      memories: ['We planned a walk along a forest path.', 'You enjoy resting in quiet places.', 'We watched fireflies in the moonlight.'],
      memoryTypes: ['Short term', 'Long term', 'Shared moment'], deleteSelected: 'Delete selected memories', confirmTitle: 'Delete selected memories?', confirmText: 'Remove the selected fictional memories from this mockup. Conversation history will remain.', confirmDelete: 'Delete', back: 'Go back', emptyMemory: 'No fictional memories remain.', emptyHistory: 'No conversation yet.', deleted: 'Selected fictional memories deleted.', chooseMemory: 'Select memories to delete first.', recordingBlocked: 'Voice input is available when this simulated turn ends.', queueFull: 'This mockup’s pending-input limit is reached. Please wait for the turn to finish.'
    }
  };
  const paths = {
    history: '<path d="M3 11a9 9 0 1 1 2 7M3 5v6h6M12 7v5l3 2"/>',
    memory: '<path d="M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v16"/>',
    settings: '<path d="m10 2-1 3-3 1-3-1-2 4 2 2v3l-2 2 2 4 3-1 3 1 1 3h4l1-3 3-1 3 1 2-4-2-2v-3l2-2-2-4-3 1-3-1-1-3Z" transform="translate(1 0) scale(.92)"/><circle cx="12" cy="12" r="3"/>',
    leaf: '<path d="M20 3C8 1 2 8 4 16c8 5 18-1 16-13ZM3 21 17 7M6 16l1-7M10 13h7"/>',
    sound: '<path d="m11 4-6 5H2v6h3l6 5ZM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/>',
    muted: '<path d="m11 4-6 5H2v6h3l6 5ZM16 9l5 6m0-6-5 6"/>',
    skip: '<path d="m3 5 8 7-8 7Zm9 0 8 7-8 7ZM21 5v14"/>',
    mic: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>',
    send: '<path d="m3 10 18-7-7 18-3-8ZM11 13 21 3"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>'
  };
  const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]}</svg>`;
  let lang = 'ko';
  const t = key => copy[lang][key];
  const themes = ['paper', 'glass', 'slate'];
  const states = themes.map(() => ({ queue: [], history: [], memories: [0, 1, 2], busy: false, muted: false, timer: null, reply: 'greeting', nextId: 1 }));
  const main = document.querySelector('#main');
  const sheet = document.querySelector('#sheet');
  let toastTimer;
  function button(name, key = name, extra = '') { return `<button type="button" class="icon-button ${extra}" data-action="${name}" data-label="${key}">${icon(name)}</button>`; }
  themes.forEach((theme, i) => {
    const section = document.createElement('section');
    section.className = 'study'; section.dataset.theme = theme;
    section.innerHTML = `<div class="caption"><b>${String.fromCharCode(65 + i)}</b><div><h1 data-i18n="${theme}"></h1><p data-i18n="${theme}Sub"></p></div></div>
      <div class="phone" data-theme="${theme}">
        <header class="phone-header"><div><div class="wordmark">Soul</div><p class="place">${icon('leaf')}<span data-i18n="place"></span></p></div><nav class="utilities" data-label="settings">${button('history')}${button('memory')}${button('settings')}</nav></header>
        <div class="stage"><button class="character" type="button" data-label="character"><img src="assets/character.webp" alt="" width="1280" height="1920" draggable="false"></button><span class="reaction" aria-hidden="true">✧</span><p class="direction" data-i18n="touch" aria-hidden="true"></p></div>
        <section class="conversation" data-label="message"><div class="dialogue-head"><span class="speaker" data-i18n="name"></span><div class="voice-controls">${button('sound')}${button('skip')}</div></div>
          <p class="dialogue" aria-live="polite" aria-atomic="true"></p>
          <div class="chips"><button class="chip" data-reply="path"><span data-i18n="path"></span>${icon('leaf')}</button><button class="chip" data-reply="day"><span data-i18n="day"></span>${icon('leaf')}</button></div>
          <ul class="queue" data-label="waiting"></ul>
          <form class="composer"><div class="input-wrap"><textarea rows="1" maxlength="500" data-label="message" data-placeholder="placeholder"></textarea>${button('mic')}</div><button class="icon-button send" type="submit" data-label="send">${icon('send')}</button></form>
          <p class="prototype-note"></p>
        </section>
      </div>`;
    main.append(section);
    const state = states[i]; state.el = section;
    section.querySelector('.composer').addEventListener('submit', event => {
      event.preventDefault();
      const field = section.querySelector('textarea');
      const text = field.value.trim();
      if (!text || !enqueue(i, { text, kind: 'text' })) return;
      field.value = ''; field.style.height = '';
    });
    section.querySelector('textarea').addEventListener('input', event => {
      event.target.style.height = '2.625rem';
      event.target.style.height = `${Math.min(event.target.scrollHeight, parseFloat(getComputedStyle(document.documentElement).fontSize) * 7)}px`;
    });
    section.querySelectorAll('[data-reply]').forEach(chip => chip.addEventListener('click', () => enqueue(i, { key: chip.dataset.reply, kind: chip.dataset.reply })));
    section.querySelector('.character').addEventListener('click', () => {
      const character = section.querySelector('.character'); const stage = section.querySelector('.stage');
      character.classList.remove('react'); stage.classList.remove('touched');
      void character.offsetWidth; character.classList.add('react'); stage.classList.add('touched');
      stage.querySelector('.direction').setAttribute('aria-hidden', 'false');
      clearTimeout(state.touchTimer); state.touchTimer = setTimeout(() => { stage.classList.remove('touched'); stage.querySelector('.direction').setAttribute('aria-hidden', 'true'); }, 1800);
    });
    section.querySelectorAll('[data-action]').forEach(control => control.addEventListener('click', () => {
      const action = control.dataset.action;
      if (action === 'skip') { finish(i); return; }
      if (action === 'sound') { state.muted = !state.muted; if (state.muted) finish(i); paint(i); toast(state.muted ? 'soundOff' : 'soundOn'); return; }
      if (action === 'mic') { openSheet('micTitle'); paragraph('micText'); return; }
      if (action === 'history') showHistory(i);
      if (action === 'memory') showMemories(i);
      if (action === 'settings') showSettings(i);
    }));
  });
  function translate(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll('[data-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.label)); el.title = t(el.dataset.label); });
    root.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
  }
  function paint(i) {
    const s = states[i];
    s.el.querySelector('.dialogue').textContent = t(s.reply);
    s.el.querySelector('.prototype-note').textContent = t(s.busy ? 'speaking' : 'demo');
    s.el.querySelector('[data-action="skip"]').disabled = !s.busy;
    s.el.querySelector('[data-action="mic"]').disabled = s.busy;
    s.el.querySelector('[data-action="sound"]').innerHTML = icon(s.muted ? 'muted' : 'sound');
    s.el.querySelector('[data-action="sound"]').setAttribute('aria-pressed', String(!s.muted));
    const list = s.el.querySelector('.queue'); list.replaceChildren();
    s.queue.forEach(item => {
      const li = document.createElement('li'); const text = document.createElement('span');
      text.textContent = item.key ? t(item.key) : item.text;
      const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'icon-button'; cancel.innerHTML = icon('close'); cancel.setAttribute('aria-label', t('cancel'));
      cancel.addEventListener('click', () => { s.queue = s.queue.filter(x => x.id !== item.id); paint(i); });
      li.append(text, cancel); list.append(li);
    });
  }
  function enqueue(i, item) {
    const s = states[i];
    // Mockup-only bound; this is not the service's approved queue limit.
    if (s.queue.length >= 3) { toast('queueFull'); return false; }
    s.queue.push({ ...item, id: s.nextId++ });
    if (!s.busy) processBatch(i); else paint(i);
    return true;
  }
  function processBatch(i) {
    const s = states[i]; if (!s.queue.length) { paint(i); return; }
    const batch = s.queue.splice(0);
    batch.forEach(item => s.history.push({ role: 'user', key: item.key, text: item.text }));
    s.reply = batch.length === 1 && batch[0].kind === 'path' ? 'answerPath' : batch.length === 1 && batch[0].kind === 'day' ? 'answerDay' : 'answerText';
    s.history.push({ role: 'name', key: s.reply });
    s.busy = !s.muted; paint(i);
    clearTimeout(s.timer);
    // A labelled visual turn demonstration; no audio or provider operation.
    if (s.busy) s.timer = setTimeout(() => finish(i), 7000);
  }
  function finish(i) { const s = states[i]; clearTimeout(s.timer); s.busy = false; processBatch(i); }
  function toast(key) {
    const el = document.querySelector('#toast'); el.textContent = t(key); el.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 4200);
  }
  function openSheet(title) {
    document.querySelector('#sheet-title').textContent = t(title); document.querySelector('#sheet-content').replaceChildren();
    if (!sheet.open) sheet.showModal();
  }
  function paragraph(key, className = '') { const p = document.createElement('p'); p.textContent = t(key); p.className = className; document.querySelector('#sheet-content').append(p); }
  function sheetAction(key, callback) { const b = document.createElement('button'); b.className = 'sheet-action'; b.textContent = t(key); b.addEventListener('click', callback); document.querySelector('#sheet-content').append(b); return b; }
  function showHistory(i) {
    openSheet('history'); paragraph('historyNote', 'sample-label');
    if (!states[i].history.length) paragraph('emptyHistory');
    states[i].history.forEach(item => { const line = document.createElement('div'); line.className = 'history-line'; const who = document.createElement('strong'); who.textContent = t(item.role); const text = document.createElement('span'); text.textContent = item.key ? t(item.key) : item.text; line.append(who, text); document.querySelector('#sheet-content').append(line); });
  }
  function showMemories(i) {
    openSheet('memory'); paragraph('memoryNote', 'sample-label');
    const s = states[i];
    if (!s.memories.length) { paragraph('emptyMemory'); return; }
    s.memories.forEach(id => {
      const row = document.createElement('label'); row.className = 'sheet-row';
      const text = document.createElement('span'); text.textContent = `${t('memoryTypes')[id]} · ${t('memories')[id]}`;
      const check = document.createElement('input'); check.type = 'checkbox'; check.value = String(id);
      row.append(text, check); document.querySelector('#sheet-content').append(row);
    });
    const action = sheetAction('deleteSelected', () => {
      const ids = [...document.querySelectorAll('#sheet-content input:checked')].map(el => Number(el.value));
      if (!ids.length) { toast('chooseMemory'); return; }
      openSheet('confirmTitle'); paragraph('confirmText');
      sheetAction('confirmDelete', () => { s.memories = s.memories.filter(id => !ids.includes(id)); showMemories(i); toast('deleted'); });
      const back = sheetAction('back', () => showMemories(i)); back.style.marginLeft = '8px';
    }); action.style.marginTop = '20px';
  }
  function showSettings(i) {
    openSheet('settings'); paragraph('settingsNote');
    const toggle = (key, checked, onChange) => {
      const row = document.createElement('label'); row.className = 'sheet-row'; const text = document.createElement('span'); text.textContent = t(key);
      const input = document.createElement('input'); input.type = 'checkbox'; input.checked = checked; input.addEventListener('change', () => onChange(input.checked)); row.append(text, input); document.querySelector('#sheet-content').append(row);
    };
    toggle('soundSetting', !states[i].muted, checked => { states[i].muted = !checked; if (!checked) finish(i); paint(i); });
    toggle('reduced', document.body.classList.contains('reduced'), checked => document.body.classList.toggle('reduced', checked));
    const reset = sheetAction('reset', () => { const s = states[i]; clearTimeout(s.timer); s.queue = []; s.history = []; s.memories = [0, 1, 2]; s.busy = false; s.reply = 'greeting'; s.el.querySelector('textarea').value = ''; paint(i); sheet.close(); toast('resetDone'); }); reset.style.marginTop = '20px';
  }
  document.querySelector('#close-sheet').innerHTML = icon('close');
  document.querySelector('#close-sheet').addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', event => { if (event.target === sheet) { const r = sheet.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) sheet.close(); } });
  document.querySelector('#about').addEventListener('click', () => { openSheet('about'); paragraph('aboutText'); paragraph('aboutDetail'); });
  document.querySelector('#language').addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko'; document.documentElement.lang = lang;
    document.querySelector('#language').textContent = lang === 'ko' ? 'EN' : 'KO';
    document.querySelector('#language').setAttribute('aria-label', t('switchLanguage'));
    if (sheet.open) sheet.close(); translate(); states.forEach((_, i) => paint(i));
  });
  const selectView = view => {
    if (!['all', ...themes].includes(view)) return;
    document.body.dataset.view = view;
    document.querySelectorAll('.variants button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  };
  document.querySelectorAll('.variants button').forEach(b => b.addEventListener('click', () => selectView(b.dataset.view)));
  const requested = new URLSearchParams(location.search).get('view');
  selectView(requested || (matchMedia('(max-width: 899px)').matches ? 'paper' : 'all'));
  translate(); states.forEach((_, i) => paint(i));
})();
