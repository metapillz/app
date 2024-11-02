import { useState } from 'react'
import styles from '../styles/Lectures.module.css'

const BOOTCAMP_LECTURES = [
  { 
    id: 1, 
    name: "약국 개국 입지 분석", 
    professor: "김성공 약사", 
    capacity: 30,
    duration: "4주",
    description: "빅데이터를 활용한 상권 분석과 입지 선정 전략"
  },
  { 
    id: 2, 
    name: "약국 인테리어 기획", 
    professor: "이공간 약사", 
    capacity: 25,
    duration: "3주",
    description: "효율적인 동선과 차별화된 약국 공간 설계"
  },
  { 
    id: 3, 
    name: "약국 직원 채용과 관리", 
    professor: "박인사 약사", 
    capacity: 35,
    duration: "4주",
    description: "우수 인재 채용과 팀 빌딩 전략"
  },
  { 
    id: 4, 
    name: "약국 재고 관리 시스템", 
    professor: "정재고 약사", 
    capacity: 40,
    duration: "3주",
    description: "효율적인 재고 관리와 발주 시스템 구축"
  },
  { 
    id: 5, 
    name: "약국 마케팅 전략", 
    professor: "최마케팅 약사", 
    capacity: 45,
    duration: "5주",
    description: "디지털 마케팅과 고객 관리 전략"
  },
  { 
    id: 6, 
    name: "보험청구 완전정복", 
    professor: "한보험 약사", 
    capacity: 50,
    duration: "4주",
    description: "보험청구 노하우와 수익 최적화"
  },
  { 
    id: 7, 
    name: "약국 세무 회계", 
    professor: "임세무 약사", 
    capacity: 40,
    duration: "4주",
    description: "약국 특화 세무 전략과 재무관리"
  },
  { 
    id: 8, 
    name: "약국 서비스 혁신", 
    professor: "송서비스 약사", 
    capacity: 35,
    duration: "3주",
    description: "차별화된 고객 서비스와 만족도 향상"
  },
  { 
    id: 9, 
    name: "약국 컨설팅 실전", 
    professor: "강경영 약사", 
    capacity: 30,
    duration: "6주",
    description: "약국 경영 진단과 개선 전략"
  },
  { 
    id: 10, 
    name: "디지털 약국 운영", 
    professor: "윤디지털 약사", 
    capacity: 45,
    duration: "5주",
    description: "디지털 도구 활용과 스마트 약국 구축"
  },
]

export default function Lectures() {
  const [lectures, setLectures] = useState(BOOTCAMP_LECTURES)

  const handleRegister = (lectureId) => {
    setLectures(lectures.map(lecture => 
      lecture.id === lectureId 
        ? {...lecture, registered: true}
        : lecture
    ))
  }

  return (
    <div className={styles.container}>
      <h1>💊 K약사 BOOTCAMP 강의 목록</h1>
      <div className={styles.lectureGrid}>
        {lectures.map(lecture => (
          <div key={lecture.id} className={styles.lectureCard}>
            <h2>{lecture.name}</h2>
            <p className={styles.professor}>강사: {lecture.professor}</p>
            <p className={styles.duration}>수강 기간: {lecture.duration}</p>
            <p className={styles.description}>{lecture.description}</p>
            <button 
              onClick={() => handleRegister(lecture.id)}
              disabled={lecture.registered}
            >
              신청하기
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 