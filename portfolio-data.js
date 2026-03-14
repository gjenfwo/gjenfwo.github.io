window.PORTFOLIO_DATA = {
  profile: {
    nameKo: "허유정",
    terminalUser: "yoojung@samsung",
    terminalPath: "~/portfolio",
    titleLine1: "Data Observability",
    titleLine2: "DevOps Engineer",
    subtitle: "Data Observability, DevOps, Platform Engineering을 중심으로 대규모 운영 환경을 설계하고 개선하는 엔지니어입니다.",
    company: "Samsung Electronics",
    since: "2018~",
    email: "gjenfwo@gmail.com",
    githubUrl: "https://github.com/gjenfwo",
    githubLabel: "github.com/traffic-tacos"
  },
  stats: [
    { title: "Experience", label: "Years at Samsung", value: "7+", sub: "", color: "green", spark: 85 },
    { title: "K8s Certifications", label: "Kubestronaut", value: "5", sub: "CKA CKAD CKS KCNA KCSA", color: "blue", spark: 100 },
    { title: "ETL Scale", label: "Tables Monitored", value: "45K", sub: "", color: "orange", spark: 92 },
    { title: "Infra Scope", label: "Prometheus Targets", value: "6.2K", sub: "servers + apps", color: "purple", spark: 78 }
  ],
  career: [
    {
      period: "2025.08-now",
      status: "Running",
      role: "DataOps Engineer",
      team: "AI센터 - Platform Engineering그룹",
      details: [
        "45,000개 테이블 ETL 파이프라인 가시화 아키텍처 설계",
        "Kafka -> Data Prepper -> OpenSearch 실시간 알림",
        "CDC 파이프라인 안정화 및 운영 자동화"
      ]
    },
    {
      period: "2023.07-25.07",
      status: "Done",
      role: "DevOps Engineer",
      team: "AI센터 - Data Platform그룹",
      details: [
        "On-prem K8s PaaS, Metric/Trace/Log 통합 모니터링",
        "Prometheus 25대 (6,200서버, 5,800앱) 샤딩 설계",
        "EFK 로그 파이프라인 및 ILM 자동화"
      ]
    },
    {
      period: "2021.03-23.06",
      status: "Done",
      role: "Backend Engineer",
      team: "Flash Memory - Product Engineering",
      details: [
        "300GB/일 수율 배치 서버 및 Report 백엔드 개발",
        "Django/Python/Oracle 지표 분석 대시보드 리드"
      ]
    }
  ],
  stack: {
    platform: ["Kubernetes", "Helm", "OpenTelemetry"],
    observability: ["Prometheus", "Grafana", "OpenSearch", "Elasticsearch"],
    streaming: ["Kafka"],
    backend: ["Python", "Django", "Oracle"],
    certifications: ["CKA", "CKAD", "CKS", "KCNA", "KCSA", "SQLD"]
  },
  project: {
    title: "Cloud-Native Ticketing Platform (30,000 RPS)",
    description: "GitHub Actions + ArgoCD CI/CD, k6 부하 테스트, FinOps 관점의 확장성 검증",
    url: "https://github.com/traffic-tacos",
    label: "github.com/traffic-tacos"
  },
  publishingPlan: [
    "운영 장애 대응 사례 문서화",
    "모니터링 아키텍처 비교 분석 정기 발행",
    "Prometheus/OTel 운영 팁 아카이브 구축"
  ],
  blog: [
    {
      hash: "a3f1c2d",
      level: "INFO",
      time: "latest",
      title: "Data Observability Architecture for Large-Scale ETL",
      detail: "ETL 장애 탐지 시간을 줄이기 위한 실행 상태 판별 로직과 OpenSearch Trace 시각화"
    },
    {
      hash: "e7b4a9f",
      level: "DEBUG",
      time: "2025",
      title: "Prometheus Sharding Strategy in On-Prem Clusters",
      detail: "기준정보 라벨링으로 수집 대상을 분산하고 운영 복잡도를 낮춘 경험"
    },
    {
      hash: "1d8f3e0",
      level: "PERF",
      time: "2024",
      title: "What I Learned from 30K RPS Ticketing Load Tests",
      detail: "k6 부하 테스트로 병목을 찾고 GitOps 배포 안정성 검증"
    }
  ],
  about: {
    education: {
      school: "성균관대학교",
      major: "화학공학 / 컴퓨터공학 (복수전공)"
    },
    language: "Korean (Native) / English (Professional) / OPIC AL"
  },
  footer: {
    year: "2025",
    builtFor: "Built for GitHub Pages"
  }
};
