// Tailwind CSS 配置 — 在 Tailwind CDN 加载后执行
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Noto Sans SC"', 'sans-serif'],
        body: ['"Noto Sans SC"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: '#0a0c0a',
        ink2: '#0f1310',
        lime: '#a3e635',
        lime2: '#88ce02',
        lime3: '#65a30d',
        paper: '#f4f4f0',
        ash: '#8a8f86',
      }
    }
  }
};
