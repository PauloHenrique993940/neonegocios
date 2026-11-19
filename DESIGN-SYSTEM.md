# Neo Negócios & Carreira — Design System

Os tokens CSS correspondentes estão no início de `styles.css`. Componentes usam as mesmas classes em toda a página.

## Cores

| Token | HEX | RGB | Uso |
| --- | --- | --- | --- |
| `--brand-purple` | `#27095F` | `39, 9, 95` | Cor institucional principal e superfícies escuras |
| `--brand-purple-light` | `#3A1A72` | `58, 26, 114` | Variação oficial |
| `--brand-purple-dark` | `#1C0645` | `28, 6, 69` | Rodapé e fundos de maior profundidade |
| `--brand-orange` | `#FAAA0E` | `250, 170, 14` | Destaques e ação primária clara |
| `--brand-orange-light` | `#FBB940` | `251, 185, 64` | Variação oficial e mensagens no fundo escuro |
| `--brand-orange-dark` | `#E09000` | `224, 144, 0` | Variação oficial |
| `--brand-violet` | `#6A00BA` | `106, 0, 186` | Acento institucional e foco em superfícies claras |
| `--brand-turquoise` | `#00B0BA` | `0, 176, 186` | Acento institucional |
| `--muted` | `#636E72` | `99, 110, 114` | Texto secundário oficial |
| `--paper` | `#F8F9FA` | `248, 249, 250` | Fundo claro oficial |

Os tons de borda e texto de apoio são variações claras derivadas do roxo oficial. O logotipo oficial inclui sua própria faixa multicolorida.

## Tipografia e ritmo

- Corpo: DM Sans, em `--type-body` (`clamp(1rem, .96rem + .2vw, 1.125rem)`).
- Títulos e interface: Manrope; destaques editoriais: Georgia.
- Escala de espaçamento: `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-6`, `--space-8` e `--space-12` (base de 4 px).
- Títulos principais usam `clamp()` para acompanhar a largura da tela.

## Componentes e estados

- Botões: `.button`, com variantes `.button-dark`, `.button-lime` e `.button-outline`.
- Cartões de solução: `.solution-card`, com estados hover e foco interno.
- Navegação: `.main-nav`, controlada pelo botão `.menu-toggle` e pelos atributos `aria-expanded`/`aria-controls`.
- Formulário: `.contact-form`; erros ficam junto aos campos em `.field-error`, com `aria-invalid` e `aria-describedby`.
- Bordas: controles usam `--radius-control`; cartões usam `--radius-card`.
- Foco: violeta sobre fundos claros e laranja sobre fundos escuros (`--focus-ring` e `--focus-ring-dark`).
- Redução de movimento: transições e rolagem suave respeitam `prefers-reduced-motion`.

## Layout responsivo

Os estilos adaptam navegação e grades nos breakpoints de 1100 px, 780 px e 380 px; imagens são fluidas e os cartões se empilham em telas estreitas.

## Acessibilidade

- Todas as páginas incluem link para pular ao conteúdo, navegação por teclado, foco visível e suporte a movimento reduzido.
- O VLibras Widget oficial fica disponível em todas as rotas; seus estados de foco são configurados por variáveis CSS.
- A seção de parcerias usa imagens locais, carregamento tardio e texto alternativo em cada logotipo.
