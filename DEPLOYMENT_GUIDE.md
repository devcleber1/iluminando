# Guia de Deployment e Performance - Iluminando o Futuro

## 1. BUILD OTIMIZADO

```bash
# Build com análise de tamanho
yarn build

# Analisar bundle size
npm install -g vite-plugin-visualizer
```

## 2. TESTE LOCAL DE PERFORMANCE

```bash
# Preview do build
yarn preview

# Testar como PWA
# Abrir em Chrome DevTools > Lighthouse
# Rodar relatórios de Performance, SEO, Accessibility
```

## 3. DEPLOYMENT RECOMENDADO

### Opção 1: Vercel (Recomendado para Next.js, mas funciona com React)
```bash
npm install -g vercel
vercel
```

### Opção 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opção 3: Cloudflare Pages
```bash
# Conectar repositório GitHub
# Configurar:
# - Framework: Vite
# - Build command: yarn build
# - Build output directory: dist
```

### Opção 4: Servidor Apache/cPanel
```bash
# 1. Build localmente
yarn build

# 2. Upload da pasta 'dist' para /public_html

# 3. Verificar .htaccess está em public_html

# 4. Recarregar domínio
```

## 4. CHECKLIST PÓS-DEPLOYMENT

- [ ] Verificar em https://pagespeed.web.dev/
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Verificar PWA offline em Android
- [ ] Testar links internos (React Router)
- [ ] Verificar imagens carregam
- [ ] Testar formulários
- [ ] Verificar vídeos do YouTube
- [ ] Verificar Analytics
- [ ] Submeter em Google Search Console
- [ ] Monitorar Core Web Vitals

## 5. OTIMIZAÇÕES CONTÍNUAS

### Google Search Console
1. Verificar site
2. Submeter sitemap.xml
3. Monitorar erros de crawl
4. Verificar mobile usability

### Google PageSpeed Insights
- Rodar regularmente
- Acompanhar métricas Core Web Vitals
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

### Monitoramento em Produção
```javascript
// Adicionar ao main.jsx para monitorar performance
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}ms`);
      });
    });
    observer.observe({ entryTypes: ['navigation', 'resource'] });
  } catch (e) {
    console.warn('Performance Observer não suportado');
  }
}
```

## 6. OTIMIZAÇÕES ADICIONAIS

### Compressão de Imagens
```bash
# Instalar ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Converter JPG para WebP
mogrify -format webp -quality 80 *.jpg

# Redimensionar imagens grandes
mogrify -resize 1920x1080 image.webp
```

### Cache Busting
O Vite faz automaticamente com hash nos nomes dos arquivos.

### CDN Recomendado
- **Cloudflare** (Grátis, ótimo para cache)
- **BunnyCDN** (Pagode, muito rápido)
- **AWS CloudFront** (Escalável)

## 7. MONITORAMENTO DE ERROS

### Sentry (Recomendado)
```bash
npm install @sentry/react @sentry/tracing
```

```javascript
// main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [
    new Sentry.Replay(),
  ],
  tracesSampleRate: 0.1,
});
```

## 8. ANALÍTICAS

### Google Analytics 4
```html
<!-- Adicionar ao index.html dentro de <head> -->
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 9. SEGURANÇA

### Headers de Segurança
O .htaccess já inclui:
- Content Security Policy headers
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Permissions-Policy restritiva

### HTTPS
- ✅ Obrigatório em produção
- Cloudflare fornece SSL grátis
- Todos os certificados HTTP redirecionar para HTTPS

## 10. MÉTRICAS ESPERADAS

Após todas as otimizações:

| Métrica | Meta |
|---------|------|
| Lighthouse Performance | 90+ |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | 95+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| First Contentful Paint | < 1.8s |
| Time to Interactive | < 3.8s |

## 11. PROBLEMAS COMUNS

### "Build muito grande"
- Verificar dependências não utilizadas
- Usar dynamic imports com React.lazy()
- Otimizar imagens

### "Slow First Load"
- Ativar compressão GZIP
- Usar CDN
- Aumentar cache de navegador

### "Layout Shift"
- Definir dimensões de imagens
- Evitar fonte não web incapacidade (verificar font-display: swap)
- Usar placeholder

## 12. VERIFICAÇÃO FINAL

```bash
# 1. Build final
yarn build

# 2. Verificar tamanho
ls -lh dist/

# 3. Preview
yarn preview

# 4. Abrir em https://pagespeed.web.dev/
# Copiar URL do preview e testar

# 5. Verificar PWA
# DevTools > Application > Service Workers
# Deve estar registrado e funcional

# 6. Testar offline
# DevTools > Network > Offline
# Ainda deve funcionar (com Service Worker)
```

## 13. CONTATO E SUPORTE

Para dúvidas sobre performance:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse: Integrado no Chrome DevTools
- WebPageTest: https://www.webpagetest.org/
