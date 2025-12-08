#!/bin/bash

# Script de verificação de otimizações implementadas
# Execute para verificar se tudo foi implementado corretamente

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  Verificando Implementação de Otimizações                     ║"
echo "║  Iluminando o Futuro - 100% Performance & SEO                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

PROJECT_ROOT="."
PASS=0
FAIL=0

# Função para verificar arquivo
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1 - ENCONTRADO"
        ((PASS++))
    else
        echo "❌ $1 - NÃO ENCONTRADO"
        ((FAIL++))
    fi
}

# Função para verificar string no arquivo
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo "✅ $1 contém '$2'"
        ((PASS++))
    else
        echo "❌ $1 não contém '$2'"
        ((FAIL++))
    fi
}

echo "═══════════════════════════════════════════════════════════════════"
echo "📁 VERIFICANDO ARQUIVOS CRIADOS"
echo "═══════════════════════════════════════════════════════════════════"
echo ""

check_file "$PROJECT_ROOT/public/manifest.json"
check_file "$PROJECT_ROOT/public/.htaccess"
check_file "$PROJECT_ROOT/public/robots.txt"
check_file "$PROJECT_ROOT/public/sitemap.xml"
check_file "$PROJECT_ROOT/public/sw.js"
check_file "$PROJECT_ROOT/src/utils/registerServiceWorker.js"
check_file "$PROJECT_ROOT/src/components/OptimizedImage.jsx"
check_file "$PROJECT_ROOT/PERFORMANCE_SEO.md"
check_file "$PROJECT_ROOT/DEPLOYMENT_GUIDE.md"
check_file "$PROJECT_ROOT/OPTIMIZATION_SUMMARY.md"
check_file "$PROJECT_ROOT/CHECKLIST_FINAL.md"
check_file "$PROJECT_ROOT/PERFORMANCE_REPORT.md"
check_file "$PROJECT_ROOT/METRICS.html"
check_file "$PROJECT_ROOT/README_OTIMIZACOES.txt"

echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo "🔧 VERIFICANDO CONFIGURAÇÕES"
echo "═══════════════════════════════════════════════════════════════════"
echo ""

check_content "$PROJECT_ROOT/vite.config.js" "build:"
check_content "$PROJECT_ROOT/vite.config.js" "minify: 'terser'"
check_content "$PROJECT_ROOT/index.html" "og:title"
check_content "$PROJECT_ROOT/index.html" "manifest"
check_content "$PROJECT_ROOT/index.html" "schema.org"
check_content "$PROJECT_ROOT/tailwind.config.js" "corePlugins"
check_content "$PROJECT_ROOT/src/main.jsx" "registerServiceWorker"

echo ""
echo "═══════════════════════════════════════════════════════════════════"
echo "📊 RESULTADOS"
echo "═══════════════════════════════════════════════════════════════════"
echo ""

TOTAL=$((PASS + FAIL))
PERCENTAGE=$((PASS * 100 / TOTAL))

echo "Verificações Passadas:  $PASS"
echo "Verificações Falhadas:  $FAIL"
echo "Total:                 $TOTAL"
echo ""
echo "Taxa de Conclusão:     $PERCENTAGE%"
echo ""

if [ $FAIL -eq 0 ]; then
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║  ✅ TODAS AS OTIMIZAÇÕES FORAM IMPLEMENTADAS COM SUCESSO!     ║"
    echo "║  🚀 Seu site está pronto para deployment em produção!        ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
else
    echo "⚠️  Algumas otimizações não foram encontradas."
    echo "Verifique os erros acima e complete a implementação."
fi

echo ""
echo "Próximos passos:"
echo "  1. yarn build"
echo "  2. yarn preview"
echo "  3. Testar em https://pagespeed.web.dev/"
echo "  4. Fazer deploy"
echo ""
