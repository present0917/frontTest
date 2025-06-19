// Fallback 데이터 (기존 하드코딩 데이터)
import type { EventResponse } from "@/lib/api/events"

export const fallbackEvents: EventResponse[] = [
  {
    id: 1,
    title: "뮤지컬 라이온킹",
    subtitle: "디즈니의 감동 대서사시",
    venue: "샬롯데씨어터",
    startDate: "2024-06-01",
    endDate: "2024-12-31",
    runtime: "150분 (인터미션 20분 포함)",
    ageLimit: "8세 이상",
    category: "뮤지컬",
    price: {
      vip: "170,000원",
      r: "140,000원",
      s: "110,000원",
      a: "80,000원",
    },
    rating: 4.8,
    reviewCount: 1247,
    poster: "/images/poster1.png",
    gallery: ["/images/poster1.png", "/images/poster2.png", "/images/poster3.png", "/images/poster4.png"],
    cast: [
      { name: "정성화", role: "심바", image: "/images/poster1.png" },
      { name: "김소향", role: "날라", image: "/images/poster2.png" },
      { name: "정동화", role: "무파사", image: "/images/poster3.png" },
      { name: "서경수", role: "스카", image: "/images/poster4.png" },
    ],
    schedule: {
      showDate: "2024-06-15",
      showTime: "19:00",
    },
    description: "아프리카 대초원을 배경으로 펼쳐지는 디즈니의 대표작 라이온킹이 뮤지컬로 찾아옵니다.",
  },
  {
    id: 2,
    title: "BTS 월드투어",
    subtitle: "Yet To Come in Cinemas",
    venue: "잠실올림픽주경기장",
    startDate: "2024-08-15",
    endDate: "2024-08-17",
    runtime: "180분 (인터미션 15분 포함)",
    ageLimit: "전체관람가",
    category: "콘서트",
    price: {
      vip: "220,000원",
      r: "180,000원",
      s: "150,000원",
      a: "120,000원",
    },
    rating: 4.9,
    reviewCount: 2847,
    poster: "/images/poster2.png",
    gallery: ["/images/poster2.png", "/images/poster3.png", "/images/poster4.png", "/images/poster5.png"],
    cast: [
      { name: "RM", role: "리더", image: "/images/poster2.png" },
      { name: "진", role: "보컬", image: "/images/poster3.png" },
      { name: "슈가", role: "래퍼", image: "/images/poster4.png" },
      { name: "제이홉", role: "래퍼", image: "/images/poster5.png" },
    ],
    schedule: {
      showDate: "2024-08-15",
      showTime: "19:00",
    },
    description: "전 세계를 감동시킨 BTS의 특별한 무대를 대형 스크린으로 만나보세요.",
  },
  {
    id: 3,
    title: "뮤지컬 위키드",
    subtitle: "브로드웨이 최고의 뮤지컬",
    venue: "블루스퀘어 인터파크홀",
    startDate: "2024-09-01",
    endDate: "2024-12-15",
    runtime: "165분 (인터미션 20분 포함)",
    ageLimit: "8세 이상",
    category: "뮤지컬",
    price: {
      vip: "160,000원",
      r: "130,000원",
      s: "100,000원",
      a: "70,000원",
    },
    rating: 4.7,
    reviewCount: 892,
    poster: "/images/poster3.png",
    gallery: ["/images/poster3.png", "/images/poster4.png", "/images/poster5.png", "/images/poster6.png"],
    cast: [
      { name: "옥주현", role: "엘파바", image: "/images/poster3.png" },
      { name: "정선아", role: "글린다", image: "/images/poster4.png" },
      { name: "정성화", role: "피에로", image: "/images/poster5.png" },
      { name: "김법래", role: "마법사", image: "/images/poster6.png" },
    ],
    schedule: {
      showDate: "2024-09-15",
      showTime: "14:00",
    },
    description: "마법사 오즈의 숨겨진 이야기를 그린 브로드웨이 최고의 뮤지컬입니다.",
  },
  {
    id: 4,
    title: "연극 햄릿",
    subtitle: "셰익스피어의 불멸의 명작",
    venue: "대학로 예술극장",
    startDate: "2024-08-01",
    endDate: "2024-10-31",
    runtime: "140분 (인터미션 15분 포함)",
    ageLimit: "12세 이상",
    category: "연극",
    price: {
      vip: "80,000원",
      r: "60,000원",
      s: "45,000원",
      a: "30,000원",
    },
    rating: 4.6,
    reviewCount: 456,
    poster: "/images/poster4.png",
    gallery: ["/images/poster4.png", "/images/poster5.png", "/images/poster6.png", "/images/poster7.png"],
    cast: [
      { name: "이정성", role: "햄릿", image: "/images/poster4.png" },
      { name: "김영옥", role: "거트루드", image: "/images/poster5.png" },
      { name: "박정자", role: "오필리어", image: "/images/poster6.png" },
      { name: "손숙", role: "클로디어스", image: "/images/poster7.png" },
    ],
    schedule: {
      showDate: "2024-08-20",
      showTime: "19:30",
    },
    description: "복수와 광기, 그리고 인간의 본성을 그린 셰익스피어의 걸작입니다.",
  },
  // 추가 이벤트들...
  {
    id: 5,
    title: "클래식 갈라 콘서트",
    subtitle: "세계적 거장들의 만남",
    venue: "예술의전당 콘서트홀",
    startDate: "2024-10-01",
    endDate: "2024-10-03",
    runtime: "120분 (인터미션 20분 포함)",
    ageLimit: "전체관람가",
    category: "클래식",
    price: {
      vip: "150,000원",
      r: "120,000원",
      s: "90,000원",
      a: "60,000원",
    },
    rating: 4.5,
    reviewCount: 324,
    poster: "/images/poster5.png",
    gallery: ["/images/poster5.png", "/images/poster6.png"],
    cast: [],
    schedule: {
      showDate: "2024-10-01",
      showTime: "19:30",
    },
    description: "베토벤부터 차이콥스키까지, 클래식의 정수를 만나보세요.",
  },
]

export function getFallbackEventById(id: number): EventResponse | undefined {
  return fallbackEvents.find((event) => event.id === id)
}

export function getFallbackEventsByCategory(category: string): EventResponse[] {
  return fallbackEvents.filter((event) => event.category.toLowerCase() === category.toLowerCase())
}
