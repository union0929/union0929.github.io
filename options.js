/* ============================================================
   유니온 인쇄출판 — 제작문의 사양 옵션 데이터
   관리자 페이지에서 자동 생성됨 · 2026. 7. 9. 오전 9:58:44
   이 파일을 GitHub 레포의 options.js에 교체 업로드하세요.
   ============================================================ */
window.UNION_PRODUCT_SPECS = {
  "booklet": {
    "label": "책자·보고서",
    "icon": "📖",
    "fields": [
      {
        "key": "size",
        "label": "규격",
        "type": "select",
        "options": [
          "A4 (210×297)",
          "A5 (148×210)",
          "B5 (182×257)",
          "46배판",
          "국배판",
          "직접입력"
        ]
      },
      {
        "key": "binding",
        "label": "제본 방식",
        "type": "select",
        "options": [
          "무선제본",
          "중철제본",
          "스프링제본",
          "양장제본"
        ]
      },
      {
        "key": "pages",
        "label": "내지 페이지 수",
        "type": "number",
        "placeholder": "예: 100 (표지 제외)"
      },
      {
        "key": "qty",
        "label": "수량",
        "type": "number",
        "placeholder": "예: 130 (부)"
      },
      {
        "key": "cover_paper",
        "label": "표지 재질",
        "type": "select",
        "options": [
          "아트지",
          "아트지 150g",
          "아트지 250g",
          "스노우지",
          "랑데뷰",
          "반누보",
          "머메이드"
        ]
      },
      {
        "key": "cover_weight",
        "label": "표지 평량",
        "type": "select",
        "options": [
          "150g",
          "200g",
          "250g",
          "300g"
        ]
      },
      {
        "key": "cover_print",
        "label": "표지 인쇄",
        "type": "select",
        "options": [
          "양면 컬러",
          "단면 컬러",
          "양면 흑백",
          "단면 흑백"
        ]
      },
      {
        "key": "cover_coat",
        "label": "표지 코팅",
        "type": "select",
        "options": [
          "단면 무광",
          "단면 유광",
          "양면 무광",
          "양면 유광",
          "코팅 없음"
        ]
      },
      {
        "key": "inner_paper",
        "label": "내지 재질",
        "type": "select",
        "options": [
          "모조지",
          "스노우지",
          "아트지"
        ]
      },
      {
        "key": "inner_weight",
        "label": "내지 평량",
        "type": "select",
        "options": [
          "80g",
          "100g",
          "120g",
          "150g"
        ]
      },
      {
        "key": "inner_print",
        "label": "내지 인쇄",
        "type": "select",
        "options": [
          "양면 컬러",
          "양면 흑백",
          "컬러+흑백 혼합"
        ]
      }
    ]
  },
  "banner": {
    "label": "현수막",
    "icon": "🎏",
    "fields": [
      {
        "key": "size",
        "label": "규격 (가로×세로 cm)",
        "type": "text",
        "placeholder": "예: 150×90"
      },
      {
        "key": "qty",
        "label": "수량",
        "type": "number",
        "placeholder": "예: 5 (장)"
      },
      {
        "key": "material",
        "label": "원단",
        "type": "select",
        "options": [
          "현수막천",
          "방수천",
          "메쉬(바람구멍)"
        ]
      },
      {
        "key": "place",
        "label": "설치 장소",
        "type": "select",
        "options": [
          "실내",
          "실외"
        ]
      },
      {
        "key": "finish",
        "label": "마감",
        "type": "select",
        "options": [
          "아일렛(구멍)",
          "각목",
          "로프",
          "끈 처리"
        ]
      }
    ]
  },
  "namecard": {
    "label": "명함",
    "icon": "💳",
    "fields": [
      {
        "key": "qty",
        "label": "수량",
        "type": "select",
        "options": [
          "200매",
          "500매",
          "1000매",
          "2000매"
        ]
      },
      {
        "key": "side",
        "label": "인쇄면",
        "type": "select",
        "options": [
          "단면",
          "양면"
        ]
      },
      {
        "key": "paper",
        "label": "용지",
        "type": "select",
        "options": [
          "일반지",
          "고급지(랑데뷰)",
          "수입지",
          "친환경지"
        ]
      },
      {
        "key": "coat",
        "label": "코팅",
        "type": "select",
        "options": [
          "무광",
          "유광",
          "없음"
        ]
      }
    ]
  },
  "poster": {
    "label": "포스터",
    "icon": "🖼️",
    "fields": [
      {
        "key": "size",
        "label": "규격",
        "type": "select",
        "options": [
          "A1",
          "A2",
          "A3",
          "B2",
          "직접입력"
        ]
      },
      {
        "key": "qty",
        "label": "수량",
        "type": "number",
        "placeholder": "예: 50 (장)"
      },
      {
        "key": "paper",
        "label": "용지",
        "type": "select",
        "options": [
          "아트지",
          "스노우지",
          "유포지(방수)"
        ]
      },
      {
        "key": "weight",
        "label": "평량",
        "type": "select",
        "options": [
          "150g",
          "200g",
          "250g"
        ]
      },
      {
        "key": "coat",
        "label": "코팅",
        "type": "select",
        "options": [
          "무광",
          "유광",
          "없음"
        ]
      }
    ]
  },
  "leaflet": {
    "label": "리플렛·전단",
    "icon": "📄",
    "fields": [
      {
        "key": "size",
        "label": "규격",
        "type": "select",
        "options": [
          "A4",
          "A5",
          "3단 접지",
          "직접입력"
        ]
      },
      {
        "key": "qty",
        "label": "수량",
        "type": "number",
        "placeholder": "예: 1000 (장)"
      },
      {
        "key": "paper",
        "label": "용지",
        "type": "select",
        "options": [
          "아트지",
          "스노우지",
          "모조지"
        ]
      },
      {
        "key": "weight",
        "label": "평량",
        "type": "select",
        "options": [
          "100g",
          "150g",
          "200g"
        ]
      },
      {
        "key": "side",
        "label": "인쇄면",
        "type": "select",
        "options": [
          "단면",
          "양면"
        ]
      },
      {
        "key": "fold",
        "label": "접지",
        "type": "select",
        "options": [
          "접지 없음",
          "2단 접지",
          "3단 접지",
          "대문 접지"
        ]
      }
    ]
  },
  "etc": {
    "label": "기타 (봉투·명찰·친환경 등)",
    "icon": "✨",
    "fields": [
      {
        "key": "item",
        "label": "품목명",
        "type": "text",
        "placeholder": "예: 봉투, 명찰, 스티커 등"
      },
      {
        "key": "qty",
        "label": "수량",
        "type": "text",
        "placeholder": "예: 500매"
      }
    ]
  }
};
