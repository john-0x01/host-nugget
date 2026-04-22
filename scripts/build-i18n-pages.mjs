import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const publicBase = "https://john-0x01.github.io/host-nugget";
const repoBase = "/host-nugget";

const locales = [
  { code: "en", path: "", htmlLang: "en", label: "English", official: "en" },
  { code: "ja", path: "ja", htmlLang: "ja", label: "日本語", official: "ja" },
  { code: "ko", path: "ko", htmlLang: "ko", label: "한국어", official: "ko" },
  { code: "ru", path: "ru", htmlLang: "ru", label: "Русский", official: "ru" },
  { code: "th", path: "th", htmlLang: "th", label: "ไทย", official: "th" },
  { code: "vi", path: "vi", htmlLang: "vi", label: "Tiếng Việt", official: "vi" },
  { code: "zh-TW", path: "zh-TW", htmlLang: "zh-Hant-TW", label: "繁體中文（台灣）", official: "zh-TW" },
  { code: "zh-HK", path: "zh-HK", htmlLang: "zh-Hant-HK", label: "繁體中文（香港）", official: "zh-HK" },
];

const languages = Object.fromEntries(locales.map((locale) => [locale.code, locale]));

const commonKeywords = [
  "Nugget",
  "Nugget iOS",
  "Nugget download",
  "Nugget GitHub",
  "leminlimez Nugget",
  "iOS customization",
  "no jailbreak iOS",
  "Dynamic Island",
  "Status Bar tweaks",
  "PosterBoard wallpaper",
  "Motion Wallpaper",
  "Pocket Poster",
  "Cowabunga",
  "Cowabun.ga",
  "MobileGestalt",
  "SparseRestore",
  "BookRestore",
  "iOS 17",
  "iOS 18",
  "iOS 26",
];

const i18n = {
  en: {
    title: "Nugget Community Gateway - iOS customization, downloads, resources, and motion wallpapers",
    metaDescription:
      "A multilingual Nugget community gateway for the official site, downloads, resources, release notes, Pocket Poster, Cowabun.ga, and the Motion Wallpaper gallery.",
    ogTitle: "Nugget Community Gateway",
    ogDescription: "Open Nugget downloads, resources, release notes, Pocket Poster, and Motion Wallpaper in one place.",
    keywords: ["Nugget community gateway", "iOS customization without jailbreak", "Motion wallpaper gallery"],
    skip: "Skip to main content",
    brandSubtitle: "Downloads, resources, wallpapers",
    nav: {
      links: "Links",
      wallpapers: "Wallpapers",
      releases: "Releases",
      languages: "Languages",
      faq: "FAQ",
    },
    languageMenu: "Language",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget Community Gateway",
    heroCopy:
      "A user-first directory for Nugget: official community site, downloads, resources, release notes, Pocket Poster, Cowabun.ga, and the Motion Wallpaper gallery.",
    openOfficial: "Open nugget.host",
    downloadNugget: "Download Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["Resources", "Nugget, Pocket Poster, FAQ, and related tools."],
      ["GitHub repository", "Source code, releases, issues, and project updates."],
      ["Release notes", "Follow stable versions and compatibility changes."],
      ["Pocket Poster", "Create iOS 17+ PosterBoard motion wallpapers."],
    ],
    officialTitle: "Official And Community Links",
    officialIntro:
      "These entries mirror the core pages from the Nugget sitemap and help users download, read resources, follow releases, and browse wallpapers.",
    cards: [
      ["Official", "Nugget Website", "The community home for Nugget, Pocket Poster, wallpapers, and setup information.", "Open website"],
      ["Download", "Nugget Downloads", "Get Windows, Linux, macOS Apple silicon, and macOS Intel builds.", "Go to downloads"],
      ["Resources", "Resource Center", "Open Nugget, Pocket Poster, MotionWallpaper, Cowabun.ga, and FAQ resources.", "View resources"],
      ["Releases", "GitHub Releases", "Get release assets and version notes from the official Nugget repository.", "View releases"],
      ["PosterBoard", "Pocket Poster", "A project for building custom animated PosterBoard wallpapers for iOS 17 and later.", "Open repository"],
      ["Cowabunga", "Cowabun.ga", "The home for Cowabunga tools and community resources.", "Visit Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper Gallery",
    wallpaperCopy:
      "Motion Wallpaper provides dynamic and interactive wallpapers for iPhone and iPad, supporting iOS and iPadOS 17 through 26 plus generic platforms.",
    openMwallx: "Open mwallx.com",
    latestWallpapers: "Latest wallpapers",
    updatesTitle: "Recent Releases",
    updatesIntro:
      "The Nugget changelog currently highlights the latest 3 stable releases. Always use the official pages and GitHub Releases for download and compatibility details.",
    releaseNotes: [
      "Minor update focused on PosterBoard compatibility and pymobiledevice3 executable fixes.",
      "Added watchOS compatibility options, PosterBoard force refresh, partial iOS 26.4 beta support, and BookRestore adjustments.",
      "Updated BookRestore, feature flags, Kiosk mode, Liquid Glass disabling, and Apple Intelligence eligibility.",
    ],
    languagesTitle: "Supported Languages",
    languagesIntro: "The GitHub Pages version defaults to English and provides dedicated static pages for each supported language.",
    thisPage: "This page",
    officialPage: "Nugget official page",
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Short answers for users entering the Nugget ecosystem.",
    faq: [
      ["What is Nugget?", "Nugget is a no-jailbreak iOS customization tool maintained by the leminlimez community for supported iPhone and iPad devices."],
      ["Do I need a jailbreak?", "No. Nugget is designed for rootless customization. Review compatibility and back up important data before applying changes."],
      ["Which versions are supported?", "The official site focuses on compatibility information for iOS 17.0 through iOS 26.1. Feature availability can change by device and release."],
      ["How are Motion Wallpaper and Pocket Poster related?", "Pocket Poster helps create iOS 17+ PosterBoard motion wallpapers, while Motion Wallpaper provides a browsable wallpaper gallery."],
    ],
    footer: "Nugget Community Gateway - a user-facing directory that links to official Nugget community resources.",
  },
  ja: {
    title: "Nugget コミュニティ入口 - iOS カスタマイズ、ダウンロード、リソース、モーション壁紙",
    metaDescription:
      "Nugget の公式サイト、ダウンロード、リソース、更新履歴、Pocket Poster、Cowabun.ga、Motion Wallpaper ギャラリーへ移動できる多言語コミュニティ入口です。",
    ogTitle: "Nugget コミュニティ入口",
    ogDescription: "Nugget のダウンロード、リソース、更新履歴、Pocket Poster、Motion Wallpaper をまとめて開けます。",
    keywords: ["Nugget 日本語", "脱獄なし iOS カスタマイズ", "モーション壁紙"],
    skip: "本文へ移動",
    brandSubtitle: "ダウンロード、リソース、壁紙",
    nav: { links: "リンク", wallpapers: "壁紙", releases: "リリース", languages: "言語", faq: "FAQ" },
    languageMenu: "言語",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget コミュニティ入口",
    heroCopy:
      "Nugget の公式コミュニティサイト、ダウンロード、リソース、更新履歴、Pocket Poster、Cowabun.ga、Motion Wallpaper ギャラリーを素早く開けるユーザー向けディレクトリです。",
    openOfficial: "nugget.host を開く",
    downloadNugget: "Nugget をダウンロード",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["リソース", "Nugget、Pocket Poster、FAQ、関連ツール。"],
      ["GitHub リポジトリ", "ソースコード、リリース、Issue、更新情報。"],
      ["更新履歴", "安定版と互換性の変更を確認。"],
      ["Pocket Poster", "iOS 17 以降の PosterBoard モーション壁紙を作成。"],
    ],
    officialTitle: "公式リンクとコミュニティリンク",
    officialIntro:
      "Nugget sitemap の主要ページに対応した入口です。ダウンロード、資料、リリース、壁紙をすぐに確認できます。",
    cards: [
      ["Official", "Nugget 公式サイト", "Nugget、Pocket Poster、壁紙、セットアップ情報のコミュニティホーム。", "サイトを開く"],
      ["Download", "Nugget ダウンロード", "Windows、Linux、macOS Apple silicon、macOS Intel ビルドを入手。", "ダウンロードへ"],
      ["Resources", "リソースセンター", "Nugget、Pocket Poster、MotionWallpaper、Cowabun.ga、FAQ を開く。", "リソースを見る"],
      ["Releases", "GitHub Releases", "公式 Nugget リポジトリの配布ファイルとリリースノートを確認。", "リリースを見る"],
      ["PosterBoard", "Pocket Poster", "iOS 17 以降のカスタム PosterBoard アニメーション壁紙を作るプロジェクト。", "リポジトリを開く"],
      ["Cowabunga", "Cowabun.ga", "Cowabunga ツールとコミュニティリソースのホーム。", "Cowabun.ga へ"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper ギャラリー",
    wallpaperCopy:
      "Motion Wallpaper は iPhone と iPad 向けの動的・インタラクティブ壁紙を提供し、iOS / iPadOS 17 から 26 と汎用プラットフォームに対応します。",
    openMwallx: "mwallx.com を開く",
    latestWallpapers: "最新の壁紙",
    updatesTitle: "最近のリリース",
    updatesIntro:
      "Nugget の更新履歴では直近 3 件の安定版が紹介されています。ダウンロードと互換性の詳細は公式ページと GitHub Releases を確認してください。",
    releaseNotes: [
      "PosterBoard の互換性と pymobiledevice3 関連の実行ファイル問題に対応した小規模更新。",
      "watchOS 互換性オプション、PosterBoard 強制更新、一部 iOS 26.4 beta 対応、BookRestore 調整を追加。",
      "BookRestore、機能フラグ、Kiosk mode、Liquid Glass 無効化、Apple Intelligence eligibility を更新。",
    ],
    languagesTitle: "対応言語",
    languagesIntro: "GitHub Pages 版は英語を既定言語とし、対応言語ごとの静的ページを提供します。",
    thisPage: "このページ",
    officialPage: "Nugget 公式ページ",
    faqTitle: "よくある質問",
    faqIntro: "Nugget エコシステムを使い始めるユーザー向けの短い回答です。",
    faq: [
      ["Nugget とは？", "Nugget は leminlimez コミュニティが保守する、対応 iPhone / iPad 向けの脱獄不要な iOS カスタマイズツールです。"],
      ["脱獄は必要ですか？", "いいえ。Nugget は rootless カスタマイズ向けです。変更を適用する前に互換性を確認し、重要なデータをバックアップしてください。"],
      ["どのバージョンに対応していますか？", "公式サイトは iOS 17.0 から iOS 26.1 までの互換性情報を中心に扱っています。機能の可用性は端末やリリースで変わる場合があります。"],
      ["Motion Wallpaper と Pocket Poster の関係は？", "Pocket Poster は iOS 17+ の PosterBoard モーション壁紙作成を支援し、Motion Wallpaper は壁紙ギャラリーを提供します。"],
    ],
    footer: "Nugget コミュニティ入口 - 公式 Nugget コミュニティリソースへ案内するユーザー向けディレクトリです。",
  },
  ko: {
    title: "Nugget 커뮤니티 게이트웨이 - iOS 커스터마이징, 다운로드, 리소스, 모션 배경화면",
    metaDescription:
      "Nugget 공식 사이트, 다운로드, 리소스, 변경 기록, Pocket Poster, Cowabun.ga, Motion Wallpaper 갤러리로 이동하는 다국어 커뮤니티 게이트웨이입니다.",
    ogTitle: "Nugget 커뮤니티 게이트웨이",
    ogDescription: "Nugget 다운로드, 리소스, 변경 기록, Pocket Poster, Motion Wallpaper를 한곳에서 엽니다.",
    keywords: ["Nugget 한국어", "탈옥 없는 iOS 커스터마이징", "모션 배경화면"],
    skip: "본문으로 건너뛰기",
    brandSubtitle: "다운로드, 리소스, 배경화면",
    nav: { links: "링크", wallpapers: "배경화면", releases: "릴리스", languages: "언어", faq: "FAQ" },
    languageMenu: "언어",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget 커뮤니티 게이트웨이",
    heroCopy:
      "Nugget 공식 커뮤니티 사이트, 다운로드, 리소스, 변경 기록, Pocket Poster, Cowabun.ga, Motion Wallpaper 갤러리를 빠르게 여는 사용자 중심 디렉터리입니다.",
    openOfficial: "nugget.host 열기",
    downloadNugget: "Nugget 다운로드",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["리소스", "Nugget, Pocket Poster, FAQ, 관련 도구."],
      ["GitHub 저장소", "소스 코드, 릴리스, 이슈, 프로젝트 업데이트."],
      ["변경 기록", "안정 버전과 호환성 변경 사항 확인."],
      ["Pocket Poster", "iOS 17+ PosterBoard 모션 배경화면 제작."],
    ],
    officialTitle: "공식 및 커뮤니티 링크",
    officialIntro:
      "Nugget sitemap의 핵심 페이지를 반영한 입구입니다. 다운로드, 문서, 릴리스, 배경화면을 빠르게 확인할 수 있습니다.",
    cards: [
      ["Official", "Nugget 웹사이트", "Nugget, Pocket Poster, 배경화면, 설정 정보를 제공하는 커뮤니티 홈.", "웹사이트 열기"],
      ["Download", "Nugget 다운로드", "Windows, Linux, macOS Apple silicon, macOS Intel 빌드를 받습니다.", "다운로드로 이동"],
      ["Resources", "리소스 센터", "Nugget, Pocket Poster, MotionWallpaper, Cowabun.ga, FAQ를 엽니다.", "리소스 보기"],
      ["Releases", "GitHub Releases", "공식 Nugget 저장소의 릴리스 파일과 버전 노트를 확인합니다.", "릴리스 보기"],
      ["PosterBoard", "Pocket Poster", "iOS 17 이상용 커스텀 애니메이션 PosterBoard 배경화면 프로젝트.", "저장소 열기"],
      ["Cowabunga", "Cowabun.ga", "Cowabunga 도구와 커뮤니티 리소스의 홈.", "Cowabun.ga 방문"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper 갤러리",
    wallpaperCopy:
      "Motion Wallpaper는 iPhone과 iPad용 동적, 인터랙티브 배경화면을 제공하며 iOS / iPadOS 17부터 26 및 일반 플랫폼을 지원합니다.",
    openMwallx: "mwallx.com 열기",
    latestWallpapers: "최신 배경화면",
    updatesTitle: "최근 릴리스",
    updatesIntro:
      "Nugget 변경 기록은 최근 3개의 안정 릴리스를 보여줍니다. 다운로드와 호환성 세부 정보는 공식 페이지와 GitHub Releases를 확인하세요.",
    releaseNotes: [
      "PosterBoard 호환성과 pymobiledevice3 실행 파일 문제를 다룬 소규모 업데이트.",
      "watchOS 호환성 옵션, PosterBoard 강제 새로고침, 일부 iOS 26.4 beta 지원, BookRestore 조정 추가.",
      "BookRestore, 기능 플래그, Kiosk mode, Liquid Glass 비활성화, Apple Intelligence eligibility 업데이트.",
    ],
    languagesTitle: "지원 언어",
    languagesIntro: "GitHub Pages 버전은 영어를 기본 언어로 사용하며 각 지원 언어의 정적 페이지를 제공합니다.",
    thisPage: "이 페이지",
    officialPage: "Nugget 공식 페이지",
    faqTitle: "자주 묻는 질문",
    faqIntro: "Nugget 생태계를 처음 사용하는 사용자를 위한 짧은 답변입니다.",
    faq: [
      ["Nugget이 무엇인가요?", "Nugget은 leminlimez 커뮤니티가 유지 관리하는, 지원되는 iPhone과 iPad용 탈옥 없는 iOS 커스터마이징 도구입니다."],
      ["탈옥이 필요한가요?", "아니요. Nugget은 rootless 커스터마이징을 위해 설계되었습니다. 적용 전에 호환성을 확인하고 중요한 데이터를 백업하세요."],
      ["어떤 버전을 지원하나요?", "공식 사이트는 iOS 17.0부터 iOS 26.1까지의 호환성 정보를 중심으로 안내합니다. 기능 지원은 기기와 릴리스에 따라 달라질 수 있습니다."],
      ["Motion Wallpaper와 Pocket Poster는 어떤 관계인가요?", "Pocket Poster는 iOS 17+ PosterBoard 모션 배경화면 제작을 돕고, Motion Wallpaper는 탐색 가능한 배경화면 갤러리를 제공합니다."],
    ],
    footer: "Nugget 커뮤니티 게이트웨이 - 공식 Nugget 커뮤니티 리소스로 연결되는 사용자용 디렉터리입니다.",
  },
  ru: {
    title: "Nugget Community Gateway - настройка iOS, загрузки, ресурсы и движущиеся обои",
    metaDescription:
      "Многоязычный вход в сообщество Nugget: официальный сайт, загрузки, ресурсы, журнал изменений, Pocket Poster, Cowabun.ga и галерея Motion Wallpaper.",
    ogTitle: "Nugget Community Gateway",
    ogDescription: "Откройте загрузки Nugget, ресурсы, журнал изменений, Pocket Poster и Motion Wallpaper в одном месте.",
    keywords: ["Nugget на русском", "настройка iOS без джейлбрейка", "движущиеся обои"],
    skip: "Перейти к содержимому",
    brandSubtitle: "Загрузки, ресурсы, обои",
    nav: { links: "Ссылки", wallpapers: "Обои", releases: "Релизы", languages: "Языки", faq: "FAQ" },
    languageMenu: "Язык",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget Community Gateway",
    heroCopy:
      "Удобный каталог для Nugget: официальный сайт сообщества, загрузки, ресурсы, журнал изменений, Pocket Poster, Cowabun.ga и галерея Motion Wallpaper.",
    openOfficial: "Открыть nugget.host",
    downloadNugget: "Скачать Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["Ресурсы", "Nugget, Pocket Poster, FAQ и связанные инструменты."],
      ["GitHub репозиторий", "Исходный код, релизы, вопросы и обновления проекта."],
      ["Журнал изменений", "Стабильные версии и изменения совместимости."],
      ["Pocket Poster", "Создание PosterBoard motion wallpaper для iOS 17+."],
    ],
    officialTitle: "Официальные и community-ссылки",
    officialIntro:
      "Эти входы соответствуют ключевым страницам sitemap Nugget и помогают скачать приложение, читать ресурсы, следить за релизами и смотреть обои.",
    cards: [
      ["Official", "Сайт Nugget", "Главная страница сообщества для Nugget, Pocket Poster, обоев и информации по настройке.", "Открыть сайт"],
      ["Download", "Загрузки Nugget", "Сборки для Windows, Linux, macOS Apple silicon и macOS Intel.", "Перейти к загрузкам"],
      ["Resources", "Центр ресурсов", "Nugget, Pocket Poster, MotionWallpaper, Cowabun.ga и FAQ.", "Открыть ресурсы"],
      ["Releases", "GitHub Releases", "Файлы релизов и заметки версий из официального репозитория Nugget.", "Смотреть релизы"],
      ["PosterBoard", "Pocket Poster", "Проект для создания кастомных анимированных PosterBoard обоев для iOS 17 и новее.", "Открыть репозиторий"],
      ["Cowabunga", "Cowabun.ga", "Дом для инструментов Cowabunga и ресурсов сообщества.", "Открыть Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Галерея Motion Wallpaper",
    wallpaperCopy:
      "Motion Wallpaper предоставляет динамические и интерактивные обои для iPhone и iPad, поддерживая iOS и iPadOS 17-26, а также универсальные платформы.",
    openMwallx: "Открыть mwallx.com",
    latestWallpapers: "Новые обои",
    updatesTitle: "Недавние релизы",
    updatesIntro:
      "Журнал изменений Nugget показывает 3 последних стабильных релиза. Для загрузок и совместимости используйте официальные страницы и GitHub Releases.",
    releaseNotes: [
      "Небольшое обновление для совместимости PosterBoard и исправлений исполняемого файла, связанных с pymobiledevice3.",
      "Добавлены опции совместимости watchOS, принудительное обновление PosterBoard, частичная поддержка iOS 26.4 beta и настройки BookRestore.",
      "Обновлены BookRestore, feature flags, Kiosk mode, отключение Liquid Glass и Apple Intelligence eligibility.",
    ],
    languagesTitle: "Поддерживаемые языки",
    languagesIntro: "Версия GitHub Pages по умолчанию открывается на английском и имеет отдельные статические страницы для каждого поддерживаемого языка.",
    thisPage: "Эта страница",
    officialPage: "Официальная страница Nugget",
    faqTitle: "Частые вопросы",
    faqIntro: "Короткие ответы для пользователей, которые впервые заходят в экосистему Nugget.",
    faq: [
      ["Что такое Nugget?", "Nugget - инструмент настройки iOS без джейлбрейка, поддерживаемый сообществом leminlimez для совместимых iPhone и iPad."],
      ["Нужен ли джейлбрейк?", "Нет. Nugget рассчитан на rootless-настройку. Перед изменениями проверьте совместимость и сделайте резервную копию важных данных."],
      ["Какие версии поддерживаются?", "Официальный сайт фокусируется на совместимости iOS 17.0-26.1. Доступность функций может меняться по устройствам и релизам."],
      ["Как связаны Motion Wallpaper и Pocket Poster?", "Pocket Poster помогает создавать PosterBoard motion wallpaper для iOS 17+, а Motion Wallpaper дает галерею таких обоев."],
    ],
    footer: "Nugget Community Gateway - пользовательский каталог ссылок на официальные ресурсы сообщества Nugget.",
  },
  th: {
    title: "Nugget Community Gateway - ปรับแต่ง iOS ดาวน์โหลด แหล่งข้อมูล และวอลล์เปเปอร์เคลื่อนไหว",
    metaDescription:
      "ประตูทางเข้าชุมชน Nugget แบบหลายภาษา สำหรับเว็บไซต์ทางการ ดาวน์โหลด แหล่งข้อมูล บันทึกอัปเดต Pocket Poster, Cowabun.ga และ Motion Wallpaper gallery",
    ogTitle: "Nugget Community Gateway",
    ogDescription: "เปิดดาวน์โหลด Nugget แหล่งข้อมูล บันทึกอัปเดต Pocket Poster และ Motion Wallpaper ได้ในที่เดียว",
    keywords: ["Nugget ภาษาไทย", "ปรับแต่ง iOS ไม่ต้องเจลเบรก", "วอลล์เปเปอร์เคลื่อนไหว"],
    skip: "ข้ามไปยังเนื้อหาหลัก",
    brandSubtitle: "ดาวน์โหลด แหล่งข้อมูล วอลล์เปเปอร์",
    nav: { links: "ลิงก์", wallpapers: "วอลล์เปเปอร์", releases: "รุ่นล่าสุด", languages: "ภาษา", faq: "FAQ" },
    languageMenu: "ภาษา",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget Community Gateway",
    heroCopy:
      "ไดเรกทอรีสำหรับผู้ใช้ Nugget: เว็บไซต์ชุมชนทางการ ดาวน์โหลด แหล่งข้อมูล บันทึกอัปเดต Pocket Poster, Cowabun.ga และ Motion Wallpaper gallery",
    openOfficial: "เปิด nugget.host",
    downloadNugget: "ดาวน์โหลด Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["แหล่งข้อมูล", "Nugget, Pocket Poster, FAQ และเครื่องมือที่เกี่ยวข้อง"],
      ["GitHub repository", "ซอร์สโค้ด รุ่นเผยแพร่ issues และอัปเดตโครงการ"],
      ["บันทึกอัปเดต", "ติดตามรุ่นเสถียรและการเปลี่ยนแปลงความเข้ากันได้"],
      ["Pocket Poster", "สร้าง PosterBoard motion wallpapers สำหรับ iOS 17+"],
    ],
    officialTitle: "ลิงก์ทางการและชุมชน",
    officialIntro:
      "รายการเหล่านี้สอดคล้องกับหน้าหลักใน Nugget sitemap เพื่อช่วยดาวน์โหลด อ่านแหล่งข้อมูล ติดตามรุ่น และเปิดคลังวอลล์เปเปอร์",
    cards: [
      ["Official", "เว็บไซต์ Nugget", "หน้าแรกของชุมชนสำหรับ Nugget, Pocket Poster, วอลล์เปเปอร์ และข้อมูลเริ่มต้นใช้งาน", "เปิดเว็บไซต์"],
      ["Download", "ดาวน์โหลด Nugget", "รับ build สำหรับ Windows, Linux, macOS Apple silicon และ macOS Intel", "ไปที่ดาวน์โหลด"],
      ["Resources", "ศูนย์แหล่งข้อมูล", "เปิด Nugget, Pocket Poster, MotionWallpaper, Cowabun.ga และ FAQ", "ดูแหล่งข้อมูล"],
      ["Releases", "GitHub Releases", "รับไฟล์เผยแพร่และบันทึกเวอร์ชันจาก repository ทางการของ Nugget", "ดู releases"],
      ["PosterBoard", "Pocket Poster", "โครงการสำหรับสร้างวอลล์เปเปอร์ PosterBoard แบบเคลื่อนไหวสำหรับ iOS 17 ขึ้นไป", "เปิด repository"],
      ["Cowabunga", "Cowabun.ga", "แหล่งรวมเครื่องมือ Cowabunga และทรัพยากรชุมชน", "เปิด Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper Gallery",
    wallpaperCopy:
      "Motion Wallpaper มีวอลล์เปเปอร์แบบไดนามิกและโต้ตอบได้สำหรับ iPhone และ iPad รองรับ iOS / iPadOS 17 ถึง 26 และแพลตฟอร์มทั่วไป",
    openMwallx: "เปิด mwallx.com",
    latestWallpapers: "วอลล์เปเปอร์ล่าสุด",
    updatesTitle: "รุ่นล่าสุด",
    updatesIntro:
      "บันทึกอัปเดต Nugget แสดง 3 รุ่นเสถียรล่าสุด สำหรับการดาวน์โหลดและรายละเอียดความเข้ากันได้ โปรดใช้หน้าทางการและ GitHub Releases",
    releaseNotes: [
      "อัปเดตย่อยสำหรับความเข้ากันได้ของ PosterBoard และการแก้ไข executable ที่เกี่ยวข้องกับ pymobiledevice3",
      "เพิ่มตัวเลือกความเข้ากันได้ watchOS, force refresh ของ PosterBoard, รองรับ iOS 26.4 beta บางส่วน และปรับ BookRestore",
      "อัปเดต BookRestore, feature flags, Kiosk mode, การปิด Liquid Glass และ Apple Intelligence eligibility",
    ],
    languagesTitle: "ภาษาที่รองรับ",
    languagesIntro: "เวอร์ชัน GitHub Pages ใช้ภาษาอังกฤษเป็นค่าเริ่มต้น และมีหน้าสแตติกแยกสำหรับแต่ละภาษาที่รองรับ",
    thisPage: "หน้านี้",
    officialPage: "หน้า Nugget ทางการ",
    faqTitle: "คำถามที่พบบ่อย",
    faqIntro: "คำตอบสั้น ๆ สำหรับผู้ใช้ที่เริ่มเข้าสู่ระบบนิเวศ Nugget",
    faq: [
      ["Nugget คืออะไร?", "Nugget เป็นเครื่องมือปรับแต่ง iOS แบบไม่ต้องเจลเบรก ดูแลโดยชุมชน leminlimez สำหรับ iPhone และ iPad ที่รองรับ"],
      ["ต้องเจลเบรกหรือไม่?", "ไม่ต้อง Nugget ถูกออกแบบมาสำหรับการปรับแต่งแบบ rootless ควรตรวจสอบความเข้ากันได้และสำรองข้อมูลสำคัญก่อนใช้งาน"],
      ["รองรับเวอร์ชันใด?", "เว็บไซต์ทางการเน้นข้อมูลความเข้ากันได้ตั้งแต่ iOS 17.0 ถึง iOS 26.1 ฟีเจอร์อาจแตกต่างตามอุปกรณ์และรุ่น"],
      ["Motion Wallpaper เกี่ยวข้องกับ Pocket Poster อย่างไร?", "Pocket Poster ช่วยสร้าง PosterBoard motion wallpapers สำหรับ iOS 17+ ส่วน Motion Wallpaper เป็นแกลเลอรีให้เลือกดูและดาวน์โหลด"],
    ],
    footer: "Nugget Community Gateway - ไดเรกทอรีสำหรับผู้ใช้ที่เชื่อมไปยังแหล่งข้อมูลทางการของชุมชน Nugget",
  },
  vi: {
    title: "Nugget Community Gateway - tùy biến iOS, tải xuống, tài nguyên và hình nền động",
    metaDescription:
      "Cổng cộng đồng Nugget đa ngôn ngữ cho trang chính thức, tải xuống, tài nguyên, nhật ký cập nhật, Pocket Poster, Cowabun.ga và thư viện Motion Wallpaper.",
    ogTitle: "Nugget Community Gateway",
    ogDescription: "Mở tải xuống Nugget, tài nguyên, nhật ký cập nhật, Pocket Poster và Motion Wallpaper tại một nơi.",
    keywords: ["Nugget tiếng Việt", "tùy biến iOS không jailbreak", "hình nền động"],
    skip: "Chuyển tới nội dung chính",
    brandSubtitle: "Tải xuống, tài nguyên, hình nền",
    nav: { links: "Liên kết", wallpapers: "Hình nền", releases: "Bản phát hành", languages: "Ngôn ngữ", faq: "FAQ" },
    languageMenu: "Ngôn ngữ",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget Community Gateway",
    heroCopy:
      "Một thư mục thân thiện với người dùng cho Nugget: trang cộng đồng chính thức, tải xuống, tài nguyên, nhật ký cập nhật, Pocket Poster, Cowabun.ga và thư viện Motion Wallpaper.",
    openOfficial: "Mở nugget.host",
    downloadNugget: "Tải Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["Tài nguyên", "Nugget, Pocket Poster, FAQ và công cụ liên quan."],
      ["GitHub repository", "Mã nguồn, releases, issues và cập nhật dự án."],
      ["Nhật ký cập nhật", "Theo dõi bản ổn định và thay đổi tương thích."],
      ["Pocket Poster", "Tạo PosterBoard motion wallpapers cho iOS 17+."],
    ],
    officialTitle: "Liên kết chính thức và cộng đồng",
    officialIntro:
      "Các mục này phản ánh những trang chính trong sitemap Nugget, giúp người dùng tải xuống, đọc tài nguyên, theo dõi bản phát hành và duyệt hình nền.",
    cards: [
      ["Official", "Trang Nugget", "Trang cộng đồng cho Nugget, Pocket Poster, hình nền và thông tin thiết lập.", "Mở trang"],
      ["Download", "Tải xuống Nugget", "Nhận bản dựng Windows, Linux, macOS Apple silicon và macOS Intel.", "Đi tới tải xuống"],
      ["Resources", "Trung tâm tài nguyên", "Mở Nugget, Pocket Poster, MotionWallpaper, Cowabun.ga và FAQ.", "Xem tài nguyên"],
      ["Releases", "GitHub Releases", "Tải tệp phát hành và đọc ghi chú phiên bản từ repository Nugget chính thức.", "Xem releases"],
      ["PosterBoard", "Pocket Poster", "Dự án tạo hình nền PosterBoard động tùy chỉnh cho iOS 17 trở lên.", "Mở repository"],
      ["Cowabunga", "Cowabun.ga", "Trang dành cho công cụ Cowabunga và tài nguyên cộng đồng.", "Mở Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Thư viện Motion Wallpaper",
    wallpaperCopy:
      "Motion Wallpaper cung cấp hình nền động và tương tác cho iPhone và iPad, hỗ trợ iOS / iPadOS 17 đến 26 cùng các nền tảng phổ thông.",
    openMwallx: "Mở mwallx.com",
    latestWallpapers: "Hình nền mới nhất",
    updatesTitle: "Bản phát hành gần đây",
    updatesIntro:
      "Nhật ký cập nhật Nugget hiện hiển thị 3 bản ổn định mới nhất. Hãy dùng trang chính thức và GitHub Releases cho tải xuống và chi tiết tương thích.",
    releaseNotes: [
      "Bản cập nhật nhỏ tập trung vào tương thích PosterBoard và sửa lỗi executable liên quan đến pymobiledevice3.",
      "Thêm tùy chọn tương thích watchOS, làm mới bắt buộc PosterBoard, hỗ trợ một phần iOS 26.4 beta và điều chỉnh BookRestore.",
      "Cập nhật BookRestore, feature flags, Kiosk mode, tắt Liquid Glass và Apple Intelligence eligibility.",
    ],
    languagesTitle: "Ngôn ngữ được hỗ trợ",
    languagesIntro: "Phiên bản GitHub Pages mặc định là tiếng Anh và cung cấp trang tĩnh riêng cho từng ngôn ngữ được hỗ trợ.",
    thisPage: "Trang này",
    officialPage: "Trang Nugget chính thức",
    faqTitle: "Câu hỏi thường gặp",
    faqIntro: "Câu trả lời ngắn cho người dùng mới bước vào hệ sinh thái Nugget.",
    faq: [
      ["Nugget là gì?", "Nugget là công cụ tùy biến iOS không cần jailbreak do cộng đồng leminlimez duy trì cho iPhone và iPad được hỗ trợ."],
      ["Có cần jailbreak không?", "Không. Nugget được thiết kế cho tùy biến rootless. Hãy kiểm tra tương thích và sao lưu dữ liệu quan trọng trước khi áp dụng thay đổi."],
      ["Hỗ trợ phiên bản nào?", "Trang chính thức tập trung vào thông tin tương thích từ iOS 17.0 đến iOS 26.1. Tính năng có thể thay đổi theo thiết bị và bản phát hành."],
      ["Motion Wallpaper và Pocket Poster liên quan thế nào?", "Pocket Poster giúp tạo PosterBoard motion wallpapers cho iOS 17+, còn Motion Wallpaper cung cấp thư viện hình nền để duyệt."],
    ],
    footer: "Nugget Community Gateway - thư mục cho người dùng liên kết tới tài nguyên cộng đồng Nugget chính thức.",
  },
  "zh-TW": {
    title: "Nugget 社群入口 - iOS 自訂、下載、資源與動態桌布",
    metaDescription:
      "Nugget 多語系社群入口，連到官方網站、下載、資源、更新記錄、Pocket Poster、Cowabun.ga 與 Motion Wallpaper 動態桌布庫。",
    ogTitle: "Nugget 社群入口",
    ogDescription: "快速開啟 Nugget 下載、資源、更新記錄、Pocket Poster 與 Motion Wallpaper。",
    keywords: ["Nugget 繁體中文", "免越獄 iOS 自訂", "動態桌布庫"],
    skip: "跳到主要內容",
    brandSubtitle: "下載、資源、桌布",
    nav: { links: "連結", wallpapers: "桌布", releases: "版本", languages: "語言", faq: "FAQ" },
    languageMenu: "語言",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget 社群入口",
    heroCopy:
      "面向使用者的 Nugget 目錄頁：官方社群網站、下載、資源、更新記錄、Pocket Poster、Cowabun.ga 與 Motion Wallpaper 動態桌布庫。",
    openOfficial: "開啟 nugget.host",
    downloadNugget: "下載 Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["資源", "Nugget、Pocket Poster、FAQ 與相關工具。"],
      ["GitHub 儲存庫", "原始碼、版本、問題回報與專案更新。"],
      ["更新記錄", "追蹤穩定版本與相容性變更。"],
      ["Pocket Poster", "建立 iOS 17+ PosterBoard 動態桌布。"],
    ],
    officialTitle: "官方與社群連結",
    officialIntro:
      "這些入口對應 Nugget sitemap 中的核心頁面，方便使用者下載、閱讀資源、追蹤版本並瀏覽桌布。",
    cards: [
      ["Official", "Nugget 官方網站", "Nugget、Pocket Poster、桌布與設定資訊的社群首頁。", "開啟網站"],
      ["Download", "Nugget 下載", "取得 Windows、Linux、macOS Apple silicon 與 macOS Intel 版本。", "前往下載"],
      ["Resources", "資源中心", "開啟 Nugget、Pocket Poster、MotionWallpaper、Cowabun.ga 與 FAQ。", "查看資源"],
      ["Releases", "GitHub Releases", "從官方 Nugget 儲存庫取得版本檔案與發行說明。", "查看版本"],
      ["PosterBoard", "Pocket Poster", "用於建立 iOS 17 以上自訂 PosterBoard 動態桌布的專案。", "開啟儲存庫"],
      ["Cowabunga", "Cowabun.ga", "Cowabunga 工具與社群資源的入口。", "造訪 Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper 動態桌布庫",
    wallpaperCopy:
      "Motion Wallpaper 提供 iPhone 與 iPad 的動態、互動式桌布，支援 iOS / iPadOS 17 到 26 與通用平台。",
    openMwallx: "開啟 mwallx.com",
    latestWallpapers: "最新桌布",
    updatesTitle: "近期版本",
    updatesIntro:
      "Nugget 更新記錄目前顯示最近 3 個穩定版本。下載與相容性細節請以官方頁面和 GitHub Releases 為準。",
    releaseNotes: [
      "小版本更新，重點處理 PosterBoard 相容性與 pymobiledevice3 相關執行檔問題。",
      "加入 watchOS 相容選項、PosterBoard 強制重新整理、部分 iOS 26.4 beta 支援與 BookRestore 調整。",
      "更新 BookRestore、功能旗標、Kiosk mode、Liquid Glass 停用與 Apple Intelligence eligibility。",
    ],
    languagesTitle: "支援語言",
    languagesIntro: "GitHub Pages 版本預設為英文，並為每個支援語言提供獨立靜態頁面。",
    thisPage: "此頁面",
    officialPage: "Nugget 官方頁面",
    faqTitle: "常見問題",
    faqIntro: "提供給剛進入 Nugget 生態的使用者的簡短回答。",
    faq: [
      ["Nugget 是什麼？", "Nugget 是 leminlimez 社群維護的免越獄 iOS 自訂工具，適用於支援的 iPhone 與 iPad。"],
      ["需要越獄嗎？", "不需要。Nugget 面向 rootless 自訂情境。套用變更前請確認相容性，並備份重要資料。"],
      ["支援哪些版本？", "官方網站聚焦 iOS 17.0 到 iOS 26.1 的相容性資訊。功能可用性可能因裝置與版本而變動。"],
      ["Motion Wallpaper 和 Pocket Poster 有什麼關係？", "Pocket Poster 協助建立 iOS 17+ PosterBoard 動態桌布，Motion Wallpaper 則提供可瀏覽的桌布庫。"],
    ],
    footer: "Nugget 社群入口 - 連到官方 Nugget 社群資源的使用者導覽頁。",
  },
  "zh-HK": {
    title: "Nugget 社群入口 - iOS 自訂、下載、資源同動態牆紙",
    metaDescription:
      "Nugget 多語言社群入口，連到官方網站、下載、資源、更新記錄、Pocket Poster、Cowabun.ga 同 Motion Wallpaper 動態牆紙庫。",
    ogTitle: "Nugget 社群入口",
    ogDescription: "快速開啟 Nugget 下載、資源、更新記錄、Pocket Poster 同 Motion Wallpaper。",
    keywords: ["Nugget 繁體香港", "免越獄 iOS 自訂", "動態牆紙庫"],
    skip: "跳到主要內容",
    brandSubtitle: "下載、資源、牆紙",
    nav: { links: "連結", wallpapers: "牆紙", releases: "版本", languages: "語言", faq: "FAQ" },
    languageMenu: "語言",
    heroEyebrow: "NUGGET IOS COMMUNITY GATEWAY",
    heroTitle: "Nugget 社群入口",
    heroCopy:
      "面向用戶嘅 Nugget 目錄頁：官方社群網站、下載、資源、更新記錄、Pocket Poster、Cowabun.ga 同 Motion Wallpaper 動態牆紙庫。",
    openOfficial: "開啟 nugget.host",
    downloadNugget: "下載 Nugget",
    openWallpaper: "Motion Wallpaper",
    quick: [
      ["資源", "Nugget、Pocket Poster、FAQ 同相關工具。"],
      ["GitHub 儲存庫", "原始碼、版本、問題回報同專案更新。"],
      ["更新記錄", "追蹤穩定版本同相容性變更。"],
      ["Pocket Poster", "建立 iOS 17+ PosterBoard 動態牆紙。"],
    ],
    officialTitle: "官方同社群連結",
    officialIntro:
      "呢啲入口對應 Nugget sitemap 入面嘅核心頁面，方便用戶下載、睇資源、追蹤版本同瀏覽牆紙。",
    cards: [
      ["Official", "Nugget 官方網站", "Nugget、Pocket Poster、牆紙同設定資訊嘅社群首頁。", "開啟網站"],
      ["Download", "Nugget 下載", "取得 Windows、Linux、macOS Apple silicon 同 macOS Intel 版本。", "前往下載"],
      ["Resources", "資源中心", "開啟 Nugget、Pocket Poster、MotionWallpaper、Cowabun.ga 同 FAQ。", "查看資源"],
      ["Releases", "GitHub Releases", "由官方 Nugget 儲存庫取得版本檔案同發行說明。", "查看版本"],
      ["PosterBoard", "Pocket Poster", "用嚟建立 iOS 17 或以上自訂 PosterBoard 動態牆紙嘅專案。", "開啟儲存庫"],
      ["Cowabunga", "Cowabun.ga", "Cowabunga 工具同社群資源入口。", "造訪 Cowabun.ga"],
    ],
    wallpaperEyebrow: "MOTION WALLPAPER",
    wallpaperTitle: "Motion Wallpaper 動態牆紙庫",
    wallpaperCopy:
      "Motion Wallpaper 提供 iPhone 同 iPad 嘅動態、互動式牆紙，支援 iOS / iPadOS 17 到 26 同通用平台。",
    openMwallx: "開啟 mwallx.com",
    latestWallpapers: "最新牆紙",
    updatesTitle: "近期版本",
    updatesIntro:
      "Nugget 更新記錄而家顯示最近 3 個穩定版本。下載同相容性詳情請以官方頁面同 GitHub Releases 為準。",
    releaseNotes: [
      "小版本更新，重點處理 PosterBoard 相容性同 pymobiledevice3 相關執行檔問題。",
      "加入 watchOS 相容選項、PosterBoard 強制重新整理、部分 iOS 26.4 beta 支援同 BookRestore 調整。",
      "更新 BookRestore、功能旗標、Kiosk mode、Liquid Glass 停用同 Apple Intelligence eligibility。",
    ],
    languagesTitle: "支援語言",
    languagesIntro: "GitHub Pages 版本預設係英文，並為每個支援語言提供獨立靜態頁面。",
    thisPage: "此頁面",
    officialPage: "Nugget 官方頁面",
    faqTitle: "常見問題",
    faqIntro: "畀剛開始使用 Nugget 生態嘅用戶嘅簡短回答。",
    faq: [
      ["Nugget 係咩？", "Nugget 係 leminlimez 社群維護嘅免越獄 iOS 自訂工具，適用於支援嘅 iPhone 同 iPad。"],
      ["需要越獄嗎？", "唔需要。Nugget 面向 rootless 自訂情境。套用變更前請確認相容性，並備份重要資料。"],
      ["支援邊啲版本？", "官方網站聚焦 iOS 17.0 到 iOS 26.1 嘅相容性資訊。功能可用性可能因裝置同版本而變動。"],
      ["Motion Wallpaper 同 Pocket Poster 有咩關係？", "Pocket Poster 協助建立 iOS 17+ PosterBoard 動態牆紙，Motion Wallpaper 就提供可瀏覽嘅牆紙庫。"],
    ],
    footer: "Nugget 社群入口 - 連到官方 Nugget 社群資源嘅用戶導覽頁。",
  },
};

const links = {
  github: "https://github.com/leminlimez/Nugget",
  releases: "https://github.com/leminlimez/Nugget/releases",
  pocketPoster: "https://github.com/leminlimez/Pocket-Poster",
  cowabunga: "https://cowabun.ga",
  mwallx: "https://mwallx.com",
  latestWallpapers: "https://mwallx.com/en/wallpapers?sortBy=latest",
  wallpapers: [
    ["https://mwallx.com/en/wallpapers/cyberpunk-edgerunners-david-moon", "David And Locy"],
    ["https://mwallx.com/en/wallpapers/love-chunibyo-other-delusions-rikka-takanashi-fan", "Rikka Takanashi Fan"],
    ["https://mwallx.com/en/wallpapers/xiao-mi-car-yu7-leopoldchou", "Xiaomi YU7"],
    ["https://mwallx.com/en/wallpapers/the-lord-of-the-rings-collection", "The Lord of the Rings"],
  ],
};

const releases = [
  ["7.3.1", "2026-03-27"],
  ["7.3", "2026-03-19"],
  ["7.2", "2026-02-04"],
];

function pageUrl(locale) {
  return `${publicBase}/${locale.path ? `${locale.path}/` : ""}`;
}

function pageHref(locale, fromLocale) {
  if (fromLocale.path) {
    return locale.path ? `../${locale.path}/` : "../";
  }
  return locale.path ? `./${locale.path}/` : "./";
}

function officialUrl(locale, page = "") {
  return `https://nugget.host/${locale.official}${page ? `/${page}` : ""}`;
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonLd(data) {
  return JSON.stringify(data, null, 2).replaceAll("</", "<\\/");
}

function renderPage(locale) {
  const t = i18n[locale.code];
  const assetPrefix = locale.path ? "../assets" : "assets";
  const canonical = pageUrl(locale);
  const keywords = [...commonKeywords, ...t.keywords].join(",");
  const alternateLinks = locales
    .map((item) => `    <link rel="alternate" hreflang="${esc(item.code)}" href="${esc(pageUrl(item))}">`)
    .join("\n");
  const languageLinks = locales
    .map((item) => {
      const active = item.code === locale.code ? ' aria-current="page"' : "";
      return `<a${active} href="${esc(pageHref(item, locale))}">${esc(item.label)}</a>`;
    })
    .join("");
  const languageCards = locales
    .map((item) => {
      const label = esc(item.label);
      return `<article class="card language-card">
                <h3>${label}</h3>
                <nav aria-label="${label}">
                  <a href="${esc(pageHref(item, locale))}">${esc(t.thisPage)}</a>
                  <a href="${esc(officialUrl(item))}" rel="noopener">${esc(t.officialPage)}</a>
                </nav>
              </article>`;
    })
    .join("\n");
  const cards = t.cards
    .map((card, index) => {
      const cardLinks = [
        officialUrl(locale),
        officialUrl(locale, "download"),
        officialUrl(locale, "resource"),
        links.releases,
        links.pocketPoster,
        links.cowabunga,
      ];
      return `<a class="card link-card" href="${esc(cardLinks[index])}" rel="noopener">
                <span class="tag">${esc(card[0])}</span>
                <h3>${esc(card[1])}</h3>
                <p>${esc(card[2])}</p>
                <span class="open">${esc(card[3])}</span>
              </a>`;
    })
    .join("\n");
  const quick = t.quick
    .map((item, index) => {
      const quickLinks = [officialUrl(locale, "resource"), links.github, officialUrl(locale, "change-log"), links.pocketPoster];
      return `<a href="${esc(quickLinks[index])}" rel="noopener">
                <strong>${esc(item[0])}</strong>
                <span>${esc(item[1])}</span>
              </a>`;
    })
    .join("\n");
  const wallpaperCards = `<a class="wallpaper-preview" href="${links.mwallx}" rel="noopener">
                <img src="https://mwallx.com/opengraph-image.png" width="1200" height="630" loading="lazy" alt="Motion Wallpaper gallery preview">
                <span>Motion Wallpaper</span>
              </a>
              <div class="wallpaper-list">
                ${links.wallpapers
    .map(
      ([href, name]) => `<a href="${esc(href)}" rel="noopener">
                    <strong>${esc(name)}</strong>
                    <span>${esc(t.latestWallpapers)}</span>
                  </a>`,
    )
    .join("\n")}
              </div>`;
  const releaseCards = releases
    .map(
      ([version, date], index) => `<article class="card version-item">
                <div>
                  <strong>${esc(version)}</strong>
                  <time datetime="${esc(date)}">${esc(date)}</time>
                </div>
                <p>${esc(t.releaseNotes[index])}</p>
              </article>`,
    )
    .join("\n");
  const faqCards = t.faq
    .map(
      ([question, answer]) => `<article class="card faq-item">
                <h3>${esc(question)}</h3>
                <p>${esc(answer)}</p>
              </article>`,
    )
    .join("\n");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: t.ogTitle,
        description: t.metaDescription,
        inLanguage: locale.htmlLang,
        isPartOf: { "@id": `${publicBase}/#website` },
        about: [
          {
            "@type": "SoftwareApplication",
            name: "Nugget",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Windows, macOS, Linux",
            url: "https://nugget.host",
            sameAs: links.github,
            description: t.faq[0][1],
          },
          {
            "@type": "WebSite",
            name: "Motion Wallpaper for Nugget",
            url: links.mwallx,
            description: t.wallpaperCopy,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${publicBase}/#website`,
        url: `${publicBase}/`,
        name: "Nugget Community Gateway",
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#official-links`,
        name: t.officialTitle,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.cards[0][1], url: officialUrl(locale) },
          { "@type": "ListItem", position: 2, name: t.cards[1][1], url: officialUrl(locale, "download") },
          { "@type": "ListItem", position: 3, name: t.cards[2][1], url: officialUrl(locale, "resource") },
          { "@type": "ListItem", position: 4, name: t.wallpaperTitle, url: links.mwallx },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: t.faq.map(([name, answer]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return `<!doctype html>
<html lang="${esc(locale.htmlLang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(t.title)}</title>
    <meta name="description" content="${esc(t.metaDescription)}">
    <meta name="keywords" content="${esc(keywords)}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <meta name="theme-color" content="#10130f">
    <link rel="canonical" href="${esc(canonical)}">
${alternateLinks}
    <link rel="alternate" hreflang="x-default" href="${publicBase}/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Nugget Community Gateway">
    <meta property="og:title" content="${esc(t.ogTitle)}">
    <meta property="og:description" content="${esc(t.ogDescription)}">
    <meta property="og:url" content="${esc(canonical)}">
    <meta property="og:image" content="https://nugget.host/opengraph-image.jpg">
    <meta property="og:image:alt" content="Nugget iOS Community">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(t.ogTitle)}">
    <meta name="twitter:description" content="${esc(t.ogDescription)}">
    <meta name="twitter:image" content="https://nugget.host/opengraph-image.jpg">
    <link rel="icon" href="https://nugget.host/favicon/favicon.ico">
    <link rel="apple-touch-icon" href="https://nugget.host/favicon/apple-touch-icon.png">
    <link rel="stylesheet" href="${assetPrefix}/site.css">
    <script type="application/ld+json">${jsonLd(structuredData)}</script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0WMX8PSKG8"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-0WMX8PSKG8');
    </script>
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "wfqrkrovpy");
    </script>
  </head>
  <body>
    <a class="skip-link" href="#content">${esc(t.skip)}</a>

    <header class="site-header">
      <nav class="nav" aria-label="Primary">
        <a class="brand" href="${esc(officialUrl(locale))}" rel="noopener">
          <img src="https://nugget.host/logo.png" width="44" height="44" alt="Nugget Community logo">
          <span>
            Nugget Community
            <small>${esc(t.brandSubtitle)}</small>
          </span>
        </a>
        <div class="nav-actions">
          <div class="nav-links">
            <a href="#official">${esc(t.nav.links)}</a>
            <a href="#wallpapers">${esc(t.nav.wallpapers)}</a>
            <a href="#updates">${esc(t.nav.releases)}</a>
            <a href="#languages">${esc(t.nav.languages)}</a>
            <a href="#faq">${esc(t.nav.faq)}</a>
          </div>
          <details class="language-menu">
            <summary>${esc(t.languageMenu)}</summary>
            <div>${languageLinks}</div>
          </details>
        </div>
      </nav>
    </header>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true">
        <img src="https://nugget.host/opengraph-image.jpg" width="1200" height="630" alt="">
      </div>
      <div class="hero-inner">
        <p class="eyebrow">${esc(t.heroEyebrow)}</p>
        <h1 id="hero-title">${esc(t.heroTitle)}</h1>
        <p class="hero-copy">${esc(t.heroCopy)}</p>
        <div class="hero-actions" aria-label="Primary links">
          <a class="button primary" href="${esc(officialUrl(locale))}" rel="noopener">${esc(t.openOfficial)}</a>
          <a class="button" href="${esc(officialUrl(locale, "download"))}" rel="noopener">${esc(t.downloadNugget)}</a>
          <a class="button" href="${links.mwallx}" rel="noopener">${esc(t.openWallpaper)}</a>
        </div>
        <div class="quick-strip" aria-label="Quick links">
          ${quick}
        </div>
      </div>
    </section>

    <main id="content">
      <section id="official">
        <div class="section-inner">
          <div class="section-heading">
            <h2>${esc(t.officialTitle)}</h2>
            <p>${esc(t.officialIntro)}</p>
          </div>
          <div class="grid three">${cards}</div>
        </div>
      </section>

      <section id="wallpapers" class="band">
        <div class="section-inner">
          <div class="feature-layout">
            <div class="feature-text">
              <p class="eyebrow">${esc(t.wallpaperEyebrow)}</p>
              <h2>${esc(t.wallpaperTitle)}</h2>
              <p>${esc(t.wallpaperCopy)}</p>
              <div class="content-actions">
                <a class="button primary" href="${links.mwallx}" rel="noopener">${esc(t.openMwallx)}</a>
                <a class="button" href="${links.latestWallpapers}" rel="noopener">${esc(t.latestWallpapers)}</a>
              </div>
            </div>
            <div class="wallpaper-frame" aria-label="Motion Wallpaper previews">${wallpaperCards}</div>
          </div>
        </div>
      </section>

      <section id="updates">
        <div class="section-inner">
          <div class="section-heading">
            <h2>${esc(t.updatesTitle)}</h2>
            <p>${esc(t.updatesIntro)}</p>
          </div>
          <div class="version-list">${releaseCards}</div>
        </div>
      </section>

      <section id="languages" class="band">
        <div class="section-inner">
          <div class="section-heading">
            <h2>${esc(t.languagesTitle)}</h2>
            <p>${esc(t.languagesIntro)}</p>
          </div>
          <div class="languages">${languageCards}</div>
        </div>
      </section>

      <section id="faq">
        <div class="section-inner">
          <div class="section-heading">
            <h2>${esc(t.faqTitle)}</h2>
            <p>${esc(t.faqIntro)}</p>
          </div>
          <div class="faq-grid">${faqCards}</div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <p>${esc(t.footer)}</p>
        <div class="footer-links">
          <a href="https://nugget.host" rel="noopener">nugget.host</a>
          <a href="https://mwallx.com" rel="noopener">mwallx.com</a>
          <a href="${links.github}" rel="noopener">Nugget GitHub</a>
        </div>
      </div>
    </footer>
  </body>
</html>
`;
}

const styles = `:root {
  color-scheme: light;
  --ink: #11140f;
  --ink-soft: #3d4639;
  --paper: #fbfbf7;
  --panel: #ffffff;
  --line: #d9ded2;
  --mint: #197567;
  --saffron: #cb8b1c;
  --shadow: 0 22px 70px rgba(20, 26, 18, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    linear-gradient(90deg, rgba(17, 20, 15, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, rgba(17, 20, 15, 0.035) 1px, transparent 1px),
    var(--paper);
  background-size: 42px 42px;
  color: var(--ink);
  font-family: "Avenir Next", "Trebuchet MS", Verdana, sans-serif;
  letter-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: 12px;
  z-index: 10;
  transform: translateY(-160%);
  background: var(--ink);
  color: #fff;
  padding: 10px 14px;
  border-radius: 8px;
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 8;
  border-bottom: 1px solid rgba(217, 222, 210, 0.88);
  background: rgba(251, 251, 247, 0.92);
  backdrop-filter: blur(18px);
}

.nav {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  font-weight: 800;
}

.brand img {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: #fff;
}

.brand span {
  display: block;
  line-height: 1.1;
}

.brand small {
  display: block;
  color: var(--ink-soft);
  font-size: 12px;
  font-weight: 600;
  margin-top: 3px;
}

.nav-actions,
.nav-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.nav-links a,
.button,
.language-menu summary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.72);
  color: var(--ink);
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
}

.nav-links a:hover,
.button:hover,
.language-menu summary:hover {
  border-color: var(--mint);
  color: var(--mint);
}

.button.primary {
  border-color: var(--mint);
  background: var(--mint);
  color: #fff;
}

.button.primary:hover {
  border-color: #0f5b4f;
  background: #0f5b4f;
  color: #fff;
}

.language-menu {
  position: relative;
}

.language-menu summary {
  list-style: none;
}

.language-menu summary::-webkit-details-marker {
  display: none;
}

.language-menu div {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 220px;
  display: grid;
  gap: 6px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 8px;
  background: #fff;
  box-shadow: var(--shadow);
}

.language-menu a {
  border-radius: 8px;
  padding: 9px 10px;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 800;
}

.language-menu a:hover,
.language-menu a[aria-current="page"] {
  background: #edf6f2;
  color: var(--mint);
}

.hero {
  position: relative;
  min-height: 620px;
  display: grid;
  align-items: end;
  overflow: hidden;
  isolation: isolate;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: -2;
  background: #151811;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-media::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 13, 9, 0.9) 0%, rgba(10, 13, 9, 0.7) 48%, rgba(10, 13, 9, 0.38) 100%),
    linear-gradient(180deg, rgba(10, 13, 9, 0.24) 0%, rgba(10, 13, 9, 0.82) 100%);
}

.hero-inner,
.section-inner {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.hero-inner {
  padding: 88px 0 72px;
  color: #fff;
}

.eyebrow {
  margin: 0 0 18px;
  color: #f2c36e;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0;
}

h1,
h2,
h3 {
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: 0;
}

h1 {
  max-width: 900px;
  margin: 0;
  font-size: 74px;
  line-height: 1;
}

.hero-copy {
  max-width: 760px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 20px;
  line-height: 1.75;
}

.hero-actions,
.content-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero .hero-actions .button {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.38);
  color: #fff;
}

.hero .hero-actions .button.primary {
  background: #f2c36e;
  border-color: #f2c36e;
  color: #13130c;
}

.quick-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 42px;
}

.quick-strip a {
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 8px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
}

.quick-strip strong,
.quick-strip span {
  display: block;
}

.quick-strip strong {
  font-size: 15px;
}

.quick-strip span {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.6;
}

main section {
  padding: 76px 0;
}

.band {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.62);
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-size: 46px;
  line-height: 1.08;
}

.section-heading p {
  max-width: 540px;
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.8;
}

.grid {
  display: grid;
  gap: 16px;
}

.grid.three {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: var(--shadow);
}

.link-card {
  display: flex;
  flex-direction: column;
  min-height: 232px;
  padding: 22px;
}

.link-card:hover {
  border-color: var(--mint);
}

.link-card .tag {
  width: fit-content;
  border-radius: 8px;
  padding: 6px 9px;
  background: #edf6f2;
  color: var(--mint);
  font-size: 12px;
  font-weight: 900;
}

.link-card h3 {
  margin: 24px 0 12px;
  font-size: 27px;
  line-height: 1.15;
}

.link-card p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.75;
}

.link-card .open {
  margin-top: auto;
  padding-top: 22px;
  color: var(--mint);
  font-size: 14px;
  font-weight: 900;
}

.feature-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 28px;
  align-items: center;
}

.feature-text h2 {
  margin: 0;
  font-size: 54px;
  line-height: 1.05;
}

.feature-text p {
  margin: 18px 0 0;
  color: var(--ink-soft);
  font-size: 18px;
  line-height: 1.85;
}

.wallpaper-frame {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(220px, 0.85fr);
  gap: 12px;
}

.wallpaper-preview {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(17, 20, 15, 0.2);
  background: #161713;
}

.wallpaper-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wallpaper-preview span {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 8px;
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.58);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  line-height: 1.35;
}

.wallpaper-list {
  display: grid;
  gap: 12px;
}

.wallpaper-list a {
  display: flex;
  min-height: 82px;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  background: #fff;
}

.wallpaper-list a:hover {
  border-color: var(--mint);
}

.wallpaper-list strong,
.wallpaper-list span {
  display: block;
}

.wallpaper-list strong {
  font-size: 16px;
  line-height: 1.35;
}

.wallpaper-list span {
  margin-top: 6px;
  color: var(--mint);
  font-size: 13px;
  font-weight: 800;
}

.version-list {
  display: grid;
  gap: 12px;
}

.version-item {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding: 20px;
}

.version-item strong {
  display: block;
  font-size: 26px;
  line-height: 1;
}

.version-item time {
  display: block;
  margin-top: 8px;
  color: var(--ink-soft);
  font-size: 13px;
}

.version-item p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.75;
}

.languages {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.language-card {
  padding: 18px;
  min-height: 150px;
}

.language-card h3 {
  margin: 0 0 12px;
  font-size: 22px;
}

.language-card nav {
  display: grid;
  gap: 8px;
}

.language-card a {
  color: var(--mint);
  font-size: 14px;
  font-weight: 800;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.faq-item {
  padding: 22px;
}

.faq-item h3 {
  margin: 0 0 12px;
  font-size: 23px;
  line-height: 1.25;
}

.faq-item p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.75;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 32px 0;
  background: #11140f;
  color: #fff;
}

.footer-inner {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.footer-inner p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-links a {
  color: #f2c36e;
  font-weight: 800;
}

@media (max-width: 980px) {
  .nav {
    min-height: auto;
    padding: 14px 0;
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-actions,
  .nav-links {
    justify-content: flex-start;
  }

  h1 {
    font-size: 54px;
  }

  .quick-strip,
  .grid.three,
  .feature-layout,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .wallpaper-frame,
  .languages {
    grid-template-columns: 1fr;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .section-heading h2,
  .feature-text h2 {
    font-size: 38px;
  }
}

@media (max-width: 560px) {
  .brand small {
    display: none;
  }

  .nav-links a {
    flex: 1 1 calc(50% - 8px);
  }

  .language-menu {
    width: 100%;
  }

  .language-menu summary {
    width: 100%;
  }

  .language-menu div {
    left: 0;
    right: auto;
    width: min(280px, calc(100vw - 32px));
  }

  h1 {
    font-size: 40px;
  }

  .hero-copy {
    font-size: 17px;
  }

  .section-heading h2,
  .feature-text h2 {
    font-size: 32px;
  }

  .quick-strip,
  .languages {
    grid-template-columns: 1fr;
  }

  .wallpaper-preview {
    min-height: 220px;
  }

  .version-item {
    grid-template-columns: 1fr;
  }
}
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales
  .map((locale) => {
    return `  <url>
    <loc>${pageUrl(locale)}</loc>
    <lastmod>2026-04-22T15:50:35.559Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${locale.code === "en" ? "1.0" : "0.9"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

function write(path, contents) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents, "utf8");
}

for (const path of locales.filter((locale) => locale.path).map((locale) => join("docs", locale.path))) {
  rmSync(path, { recursive: true, force: true });
}

write("docs/assets/site.css", styles);
for (const locale of locales) {
  const path = locale.path ? join("docs", locale.path, "index.html") : join("docs", "index.html");
  write(path, renderPage(locale));
}
write("docs/sitemap.xml", sitemap);
write(
  "docs/robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${publicBase}/sitemap.xml
`,
);
write("docs/googleb61c8f82012ad232.html", "google-site-verification: googleb61c8f82012ad232.html\n");

console.log(`Generated ${locales.length} localized pages under docs/.`);
