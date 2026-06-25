# Rugosidade Eixos — Site + PWA

Site de treinamento técnico em rugosidade e acabamento superficial de eixos comando.
Hospedado via **GitHub Pages**. © 2026 Wesley Peixoto.

---

## Como publicar no GitHub Pages

1. Crie um repositório **público** (ex.: `rugosidade-eixos`).
2. Suba **todo o conteúdo desta pasta** (Add file → Upload files → arraste tudo,
   inclusive a pasta `.well-known`). Commit changes.
3. Vá em **Settings → Pages**.
4. Em *Source*, escolha **Deploy from a branch** → branch **main** → pasta **/ (root)** → Save.
5. Aguarde 1–2 minutos. A URL aparece no topo da página, no formato:
   `https://SEU-USUARIO.github.io/rugosidade-eixos/`

## URLs que você vai usar

- **Site do app:**
  `https://SEU-USUARIO.github.io/rugosidade-eixos/`

- **Política de privacidade** (cole no Play Console):
  `https://SEU-USUARIO.github.io/rugosidade-eixos/politica-privacidade.html`

- **assetlinks.json** (verificação do app):
  `https://SEU-USUARIO.github.io/rugosidade-eixos/.well-known/assetlinks.json`

---

## IMPORTANTE: arquivo .well-known/assetlinks.json

Esse arquivo faz o app abrir em **tela cheia** (sem a barra do navegador).
Ele precisa da impressão digital **SHA-256** da chave que assinou seu `.aab`.

### Onde pegar o SHA-256

Como você gerou o `.aab` pelo PWA Builder e ativou o **Play App Signing**:

1. No **Play Console** → seu app → **Testes e versões → Configuração → Integridade do app**
   (ou *Setup → App integrity*).
2. Procure **"Assinatura de apps do Google Play"** (App signing key certificate).
3. Copie o valor de **SHA-256 certificate fingerprint** (formato `AA:BB:CC:...`).
4. Abra o arquivo `.well-known/assetlinks.json`, substitua
   `SUBSTITUA_PELO_SHA256_DA_SUA_CHAVE` por esse valor, e faça commit.

> Observação: se o PWA Builder também forneceu um `assetlinks.json` pronto no pacote
> do app, você pode usar o conteúdo dele diretamente — já vem com o SHA-256 correto.

### Confira o package name

O `package_name` no arquivo deve ser exatamente o mesmo do app:
`br.com.wesleypeixoto.rugosidade`

---

## Nota sobre GitHub Pages e subpasta

Como o site fica em uma subpasta (`/rugosidade-eixos/`), todos os caminhos do
projeto são **relativos** (`./arquivo`) para funcionar corretamente. Não use
caminhos que comecem com `/` (barra), pois apontariam para a raiz do domínio.
