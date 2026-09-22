/* ============================================================
   유니온 인쇄출판 — 홈페이지 공통 연결 (Supabase)
   모든 회원 페이지에서 이 파일 하나만 불러오면 됩니다.
   ⚠ 여기에는 Publishable key만 넣습니다. Secret key는 절대 넣지 마세요.
   ============================================================ */
(function(){
  const SUPABASE_URL = 'https://wcqsjvxhvuhskcexpoup.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_oXVQdcZBEiuMoVczVA7pJQ_8QfUEuzP';

  if(!window.supabase || !window.supabase.createClient){
    console.error('Supabase 라이브러리를 불러오지 못했어요.');
    window.UNION = { ready:false };
    return;
  }
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: { persistSession:true, autoRefreshToken:true, detectSessionInUrl:true }
  });

  // 진행 상태 — 표시 이름·색
  const STATUS = {
    draft:     { label:'임시저장',   cls:'st-draft' },
    requested: { label:'주문 요청',  cls:'st-requested' },
    confirmed: { label:'견적 확정',  cls:'st-confirmed' },
    producing: { label:'제작 중',    cls:'st-producing' },
    delivered: { label:'납품 완료',  cls:'st-delivered' },
    canceled:  { label:'취소',       cls:'st-canceled' }
  };
  const PRODUCT = { banner:'현수막', binding:'제본', etc:'기타' };

  // Supabase 영어 오류 → 고객이 알아볼 수 있는 한국어
  function krError(err){
    const m = String((err && (err.message || err.error_description)) || err || '');
    const map = [
      [/Invalid login credentials/i,        '이메일 또는 비밀번호가 맞지 않아요.'],
      [/Email not confirmed/i,              '가입 확인 메일의 링크를 먼저 눌러 주세요.'],
      [/User already registered/i,          '이미 가입된 이메일이에요. 로그인해 주세요.'],
      [/profiles_org_required/i,            '기관 회원은 기관·단체명을 꼭 입력해 주세요.'],
      [/Database error saving new user/i,   '가입 정보를 확인해 주세요. 기관 회원은 기관·단체명이 필요해요.'],
      [/Password should be at least/i,      '비밀번호는 8자 이상으로 정해 주세요.'],
      [/weak.?password|Password is known/i, '너무 쉬운 비밀번호예요. 다른 비밀번호를 써 주세요.'],
      [/Unable to validate email|invalid.*email/i, '이메일 주소 형식을 확인해 주세요.'],
      [/rate limit|too many/i,              '요청이 너무 많아요. 잠시 후 다시 시도해 주세요.'],
      [/For security purposes/i,            '보안을 위해 잠시 후(1분 정도) 다시 시도해 주세요.'],
      [/Failed to fetch|NetworkError/i,     '인터넷 연결을 확인해 주세요.'],
      [/JWT expired|session/i,              '로그인이 만료됐어요. 다시 로그인해 주세요.']
    ];
    for(const [re,msg] of map){ if(re.test(m)) return msg; }
    // DB에서 직접 보낸 한국어 안내(탈퇴 제한 등)는 그대로
    if(/[가-힣]/.test(m)) return m;
    return '문제가 생겼어요. 잠시 후 다시 시도하거나 043-273-0929로 연락 주세요.';
  }

  function esc(s){
    return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function won(n){ return (Math.round(Number(n)||0)).toLocaleString('ko-KR'); }
  function fmtDate(iso){
    if(!iso) return '';
    const d=new Date(iso);
    return `${d.getFullYear()}. ${d.getMonth()+1}. ${d.getDate()}.`;
  }
  // 전화번호 하이픈: 휴대폰 010-1234-5678 / 지역번호 043-123-4567 / 서울 02-123-4567, 02-1234-5678
  function formatPhone(raw){
    const v=String(raw||'').replace(/[^\d]/g,'').slice(0,11);
    if(v.startsWith('02')){
      if(v.length<=2)  return v;
      if(v.length<=5)  return v.slice(0,2)+'-'+v.slice(2);
      if(v.length<=9)  return v.slice(0,2)+'-'+v.slice(2,5)+'-'+v.slice(5);
      return v.slice(0,2)+'-'+v.slice(2,6)+'-'+v.slice(6,10);
    }
    if(v.length<=3)  return v;
    if(v.length<=6)  return v.slice(0,3)+'-'+v.slice(3);
    if(v.length<=10) return v.slice(0,3)+'-'+v.slice(3,6)+'-'+v.slice(6);
    return v.slice(0,3)+'-'+v.slice(3,7)+'-'+v.slice(7);
  }
  function autoHyphen(el){ el.value=formatPhone(el.value); }

  async function getUser(){
    const { data } = await sb.auth.getSession();
    return (data && data.session && data.session.user) || null;
  }
  async function getProfile(){
    const u = await getUser(); if(!u) return null;
    const { data, error } = await sb.from('profiles').select('*').eq('id', u.id).maybeSingle();
    if(error) throw error;
    return data;
  }

  window.UNION = { ready:true, sb, STATUS, PRODUCT, krError, esc, won, fmtDate, autoHyphen, formatPhone, getUser, getProfile };
})();
