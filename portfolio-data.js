window.PORTFOLIO_DATA = {
  i18n: {
    defaultLang: "ko",
    ui: {
      ko: {
        dashboards: "대시보드",
        portfolio: "포트폴리오",
        overviewSuffix: "개요",
        timeRange: "2018 - 현재",
        topLangButton: "EN",
        topThemeDark: "Dark",
        topThemeLight: "Light",
        navOverview: "Overview",
        navCareer: "Career",
        navTech: "Tech Stack",
        navProjects: "Projects",
        navBlog: "Blog",
        navAbout: "About",
        rowMetrics: "Key Metrics",
        rowCareerStack: "Career & Stack",
        rowProjectsLogs: "Projects & Logs",
        rowAbout: "About",
        panelEngineerOverview: "Engineer Overview",
        panelCareerTimeline: "Career Timeline",
        panelTechStack: "Tech Stack",
        panelProjects: "Projects",
        panelBlogLogs: "Blog - Log Stream",
        panelEducation: "Education",
        panelCertificate: "Certificate",
        panelLanguage: "Language",
        panelPresentations: "Presentations",
        statsExperience: "Experience",
        statsYearsAtSamsung: "Years at Samsung",
        statsCertifications: "K8s Certifications",
        statsKubestronaut: "Kubestronaut",
        statsEtlScale: "ETL Scale",
        statsTablesMonitored: "Tables Monitored",
        statsInfraScope: "Infra Scope",
        statsPromTargets: "Prometheus Targets",
        statsServersApps: "servers + apps",
        tablePeriod: "Period",
        tableStatus: "Status",
        tableRole: "Role",
        tableDetails: "Details",
        statusRunning: "running",
        statusDone: "done",
        stackPlatform: "Platform",
        stackObservability: "Observability",
        stackStreaming: "Streaming",
        stackBackend: "Backend",
        stackCerts: "Certifications",
        publishingPlan: "Publishing Plan",
        aboutEmail: "Email",
        aboutGithub: "GitHub",
        aboutUniversity: "University",
        aboutMajor: "Major",
        aboutKorean: "Korean",
        aboutEnglish: "English"
      },
      en: {
        dashboards: "Dashboards",
        portfolio: "Portfolio",
        overviewSuffix: "Overview",
        timeRange: "2018 - Present",
        topLangButton: "KO",
        topThemeDark: "Dark",
        topThemeLight: "Light",
        navOverview: "Overview",
        navCareer: "Career",
        navTech: "Tech Stack",
        navProjects: "Projects",
        navBlog: "Blog",
        navAbout: "About",
        rowMetrics: "Key Metrics",
        rowCareerStack: "Career & Stack",
        rowProjectsLogs: "Projects & Logs",
        rowAbout: "About",
        panelEngineerOverview: "Engineer Overview",
        panelCareerTimeline: "Career Timeline",
        panelTechStack: "Tech Stack",
        panelProjects: "Projects",
        panelBlogLogs: "Blog - Log Stream",
        panelEducation: "Education",
        panelCertificate: "Certificate",
        panelLanguage: "Language",
        panelPresentations: "Presentations",
        statsExperience: "Experience",
        statsYearsAtSamsung: "Years at Samsung",
        statsCertifications: "K8s Certifications",
        statsKubestronaut: "Kubestronaut",
        statsEtlScale: "ETL Scale",
        statsTablesMonitored: "Tables Monitored",
        statsInfraScope: "Infra Scope",
        statsPromTargets: "Prometheus Targets",
        statsServersApps: "servers + apps",
        tablePeriod: "Period",
        tableStatus: "Status",
        tableRole: "Role",
        tableDetails: "Details",
        statusRunning: "running",
        statusDone: "done",
        stackPlatform: "Platform",
        stackObservability: "Observability",
        stackStreaming: "Streaming",
        stackBackend: "Backend",
        stackCerts: "Certifications",
        publishingPlan: "Publishing Plan",
        aboutEmail: "Email",
        aboutGithub: "GitHub",
        aboutUniversity: "University",
        aboutMajor: "Major",
        aboutKorean: "Korean",
        aboutEnglish: "English"
      }
    }
  },
  profile: {
    nameKo: "허유정",
    nameEn: "Yoojung Huh",
    terminalUser: "yoojung@",
    terminalPath: "~/portfolio",
    titleLine1: "DataOps",
    titleLine2: "DevOps Engineer",
    subtitle: {
      ko: "Data Observability, DevOps, Platform Engineering을 중심으로 대규모 운영 환경을 설계하고 개선하는 엔지니어입니다.",
      en: "I design and improve large-scale production environments focused on Data Observability, DevOps, and Platform Engineering."
    },
    company: "Samsung Electronics",
    since: "2018~",
    email: "gjenfwo@gmail.com",
    githubUrl: "https://github.com/gjenfwo",
    githubLabel: "github.com/gjenfwo",
    linkedinUrl: "https://www.linkedin.com/in/yoojunghuh/"
  },
  stats: [
    { key: "experience", title: { ko: "Experience", en: "Experience" }, label: { ko: "Years at Samsung", en: "Years at Samsung" }, value: "7+", sub: "", color: "green", spark: 85 },
    { key: "certifications", title: { ko: "K8s Certifications", en: "K8s Certifications" }, label: { ko: "Kubestronaut", en: "Kubestronaut" }, value: "5", sub: "CKA CKAD CKS KCNA KCSA", color: "blue", spark: 100 },
    { key: "etl", title: { ko: "ETL Scale", en: "ETL Scale" }, label: { ko: "Tables Monitored", en: "Tables Monitored" }, value: "45K", sub: "", color: "orange", spark: 92 },
    { key: "infra", title: { ko: "Infra Scope", en: "Infra Scope" }, label: { ko: "Prometheus Targets", en: "Prometheus Targets" }, value: "6.2K", sub: { ko: "servers + apps", en: "servers + apps" }, color: "purple", spark: 78 }
  ],
  career: [
    {
      period: "2025.08-now",
      status: { ko: "Running", en: "Running" },
      role: "DataOps Engineer",
      team: {
        ko: "AI센터 - Platform Engineering그룹",
        en: "AI Center - Platform Engineering Group"
      },
      details: [
        {
          ko: "45,000개 테이블 ETL 파이프라인 가시화 아키텍처 설계",
          en: "Designed observability architecture for ETL pipelines spanning 45,000 tables"
        },
        {
          ko: "Kafka -> Data Prepper -> OpenSearch 실시간 알림",
          en: "Implemented real-time alerting with Kafka -> Data Prepper -> OpenSearch"
        },
        {
          ko: "CDC 파이프라인 안정화 및 운영 자동화",
          en: "Stabilized CDC pipelines and automated operations"
        }
      ],
      expanded: {
        ko: [
          "역할: ETL 신뢰성 향상을 위한 Data Observability 플랫폼 설계/구축",
          "범위: 약 45,000개 테이블, 다수 ETL 잡의 실행/품질 지표 통합 수집",
          "아키텍처: Kafka -> Data Prepper -> OpenSearch 파이프라인 기반 실시간 이벤트 처리",
          "핵심 기여: 실패 유형 분류 로직과 알림 체계를 표준화해 장애 인지 시간을 단축",
          "운영: CDC(OGG/Kafka/Spark/Iceberg) 연계 구간의 안정화 및 운영 자동화"
        ],
        en: [
          "Role: Designed and implemented a Data Observability platform for ETL reliability.",
          "Scope: Integrated execution/quality telemetry for ~45,000 tables across large ETL workloads.",
          "Architecture: Real-time event pipeline with Kafka -> Data Prepper -> OpenSearch.",
          "Key contribution: Standardized failure classification and alerting to reduce MTTD.",
          "Ops: Stabilized CDC integrations (OGG/Kafka/Spark/Iceberg) and automated operations."
        ]
      }
    },
    {
      period: "2023.07-2025.07",
      status: { ko: "Done", en: "Done" },
      role: "DevOps Engineer",
      team: {
        ko: "AI센터 - Data Platform그룹",
        en: "AI Center - Data Platform Group"
      },
      details: [
        {
          ko: "On-prem K8s PaaS, Metric/Trace/Log 통합 모니터링",
          en: "Built integrated Metric/Trace/Log monitoring for on-prem K8s PaaS"
        },
        {
          ko: "Prometheus 25대 (6,200서버, 5,800앱) 샤딩 설계",
          en: "Designed sharding strategy for 25 Prometheus instances (6,200 servers, 5,800 apps)"
        },
        {
          ko: "EFK 로그 파이프라인 및 ILM 자동화",
          en: "Automated EFK log pipelines and ILM lifecycle policies"
        }
      ],
      expanded: {
        ko: [
          "역할: 사내 DevOps/Observability 플랫폼 운영 및 고도화",
          "인프라: On-prem Kubernetes 기반 PaaS 환경의 관측성 체계 통합",
          "규모: Prometheus 25대, 약 6,200 서버 + 5,800 애플리케이션 메트릭 수집",
          "핵심 기여: 수동 샤딩/라벨 전략 정립으로 수집 부하 분산 및 운영 복잡도 완화",
          "로그: Elasticsearch/Filebeat/Kibana 파이프라인과 ILM 자동화 운영"
        ],
        en: [
          "Role: Operated and advanced the internal DevOps/Observability platform.",
          "Infra: Unified observability across on-prem Kubernetes-based PaaS environments.",
          "Scale: Managed 25 Prometheus instances for ~6,200 servers and ~5,800 apps.",
          "Key contribution: Established sharding and labeling strategies to distribute scrape load.",
          "Logs: Operated Elasticsearch/Filebeat/Kibana pipeline with automated ILM lifecycle."
        ]
      }
    },
    {
      period: "2021.03-2023.06",
      status: { ko: "Done", en: "Done" },
      role: "Backend Engineer",
      team: {
        ko: "Flash개발실 - Product Engineering팀",
        en: "Flash Memory - Product Engineering Team"
      },
      details: [
        {
          ko: "300GB/일 수율 배치 서버 및 Report 백엔드 개발",
          en: "Developed yield batch servers and report backend processing 300GB/day"
        },
        {
          ko: "Django/Python/Oracle 지표 분석 대시보드 리드",
          en: "Led KPI analytics backend dashboard with Django/Python/Oracle"
        }
      ],
      expanded: {
        ko: [
          "역할: 반도체 수율/품질 분석 백엔드 개발 및 운영",
          "데이터: 일 300GB 규모 배치 처리 파이프라인과 리포트 API 개발",
          "기술: Django/Python/Oracle 기반 분석 서비스 구조 설계 및 구현",
          "핵심 기여: 지표 산출 로직과 리포팅 API 성능 개선으로 분석 리드타임 단축"
        ],
        en: [
          "Role: Built and operated backend services for semiconductor yield/quality analytics.",
          "Data: Developed batch pipelines and report APIs processing ~300GB per day.",
          "Tech: Designed and implemented analytics services with Django/Python/Oracle.",
          "Key contribution: Improved KPI computation and reporting API performance."
        ]
      }
    }
  ],
  stack: {
    platform: ["Kubernetes", "Helm"],
    observability: ["Prometheus", "Grafana", "OpenSearch", "Elasticsearch", "Kibana", "OpenTelemetry"],
    streaming: ["Kafka"],
    backend: ["Python", "Django", "SpringBoot"],
    database: ["Oracle"],
    certifications: ["CKA", "CKAD", "CKS", "KCNA", "KCSA", "SQLD"]
  },
  projects: [
    {
      period: "2026.01-now",
      status: { ko: "Running", en: "Running" },
      title: "All-in-One DevSecOps Platform (Nullus)",
      description: {
        ko: "대규모 ETL 파이프라인 상태/품질 가시화, 실시간 알림, 장애 분석 워크플로우를 위한 내부 플랫폼",
        en: "Internal platform for ETL health/quality observability, real-time alerting, and incident analysis workflows"
      },
      url: "https://github.com/traffic-tacos",
      label: "github.com/traffic-tacos"
    },
    {
      period: "2025.07-08",
      status: { ko: "Done", en: "Done" },
      title: "30K RPS Ticketing Platform PoC (Traffic-Tacos)",
      description: {
        ko: "GitHub Actions + ArgoCD CI/CD, k6 부하 테스트, FinOps 관점의 확장성 검증",
        en: "Implemented GitHub Actions + ArgoCD CI/CD, k6 load testing, and scalability validation with a FinOps perspective"
      },
      url: "https://github.com/cloud-nullus",
      label: "github.com/cloud-nullus"
    }
  ],
  presentations: [
    {
      period: "2026.04.04",
      status: { ko: "To-Do", en: "To-Do" },
      title: "Nullus",
      description: {
        ko: "All-In-One DevSecOps Platform Nullus 소개",
        en: "All-In-One DevSecOps Platform Nullus Introduction"
      },
      url: "https://event-us.kr/cloudbro/event/122081",
      label: "https://event-us.kr/cloudbro/event/122081"
    }
  ],
  publishingPlan: [
    {
      ko: "운영 장애 대응 사례 문서화",
      en: "Document incident response cases from production environments"
    },
    {
      ko: "모니터링 아키텍처 비교 분석 정기 발행",
      en: "Publish regular comparative analyses of monitoring architectures"
    },
    {
      ko: "Prometheus/OTel 운영 팁 아카이브 구축",
      en: "Build an archive of Prometheus/OpenTelemetry operational tips"
    }
  ],
  blog: [
    {
      hash: "a3f1c2d",
      level: "INFO",
      time: "latest",
      title: "Data Observability Architecture for Large-Scale ETL",
      detail: {
        ko: "ETL 장애 탐지 시간을 줄이기 위한 실행 상태 판별 로직과 OpenSearch Trace 시각화",
        en: "Execution-state logic and OpenSearch trace visualization to reduce ETL incident detection time"
      }
    },
    {
      hash: "e7b4a9f",
      level: "DEBUG",
      time: "2025",
      title: "Prometheus Sharding Strategy in On-Prem Clusters",
      detail: {
        ko: "기준정보 라벨링으로 수집 대상을 분산하고 운영 복잡도를 낮춘 경험",
        en: "How metadata labeling distributed scrape targets and reduced operational complexity"
      }
    },
    {
      hash: "1d8f3e0",
      level: "PERF",
      time: "2024",
      title: "What I Learned from 30K RPS Ticketing Load Tests",
      detail: {
        ko: "k6 부하 테스트로 병목을 찾고 GitOps 배포 안정성 검증",
        en: "Finding bottlenecks with k6 load tests and validating GitOps deployment stability"
      }
    }
  ],
  about: {
    education: {
      items: [
        {
          school: { ko: "성균관대학교", en: "Sungkyunkwan University" },
          major: {
            ko: "화학공학 / 컴퓨터공학 (복수전공)",
            en: "Chemical Engineering / Computer Engineering (Double Major)"
          }
        },
        {
          school: { ko: "학사(교환학생)", en: "Bachelor(Exchange Student)" },
          major: {
            ko: "학기 교환 이수",
            en: "Completed semester exchange studies"
          }
        }
      ]
    },
    language: {
      ko: "Korean (Native) / English (Professional) / OPIC AL",
      en: "Korean (Native) / English (Professional) / OPIC AL"
    },
    certificates: [
      { name: "CKA" },
      { name: "CKAD" },
      { name: "CKS" },
      { name: "KCNA" },
      { name: "KCSA" },
      { name: "SQLD" },
      { name: "OPIC AL" }
    ]
  },
  footer: {
    year: "2025",
    builtFor: {
      ko: "Built for GitHub Pages",
      en: "Built for GitHub Pages"
    }
  }
};
