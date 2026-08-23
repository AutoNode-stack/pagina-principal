/**
 * AUTONODE LINK PORTAL - INTERACTIVE JAVASCRIPT
 */

// Master dataset of developers
const DEVS_DIRECTORY = [
  { name: 'Sergio Aparicio', github: 'Sergioandresaparicio', email: 'sergiocampuslands@gmail.com', portfolio: 'https://sergioportafolio.auto-node.tech/', initials: 'SA' },
  { name: 'Santiago Pabón', github: 'Santiago09', email: 'santy122324@gmail.com', portfolio: 'https://santiagoportafolio.auto-node.tech/', initials: 'SP' },
  { name: 'Jhon Reyes', github: 'JhonHenryReyesPerez', email: 'jhonrysprzhh@gmail.com', portfolio: 'https://jhonrys.auto-node.tech/', initials: 'JR' },
  { name: 'Diego León', github: 'Alter-09', email: 'diegoleonp09@gmail.com', portfolio: 'https://diegoleon.auto-node.tech/', initials: 'DL' },
  { name: 'Sebastian Ayala', github: 'SebbsAL', email: 'sebbs0610@gmail.com', portfolio: 'https://sebbsalportfolio.auto-node.tech/', initials: 'SA' },
  { name: 'Carlos Lindarte', github: 'carlosan0967', email: 'carloslindarte694@gmail.com', portfolio: 'https://carlosportfolio.auto-node.tech/', initials: 'CL' },
  { name: 'Diego Parra', github: 'DiegoAndresParra14', email: 'dieguitop678@gmail.com', portfolio: 'https://diegop.auto-node.tech/', initials: 'DP' },
  { name: 'Santiago Sarmiento', github: 'SantiSarmiento11', email: 'sansamablogers@gmail.com', portfolio: 'https://sportfolio.auto-node.tech/', initials: 'SS' },
  { name: 'Yeison Pallares', github: 'ypd651', email: 'yeisonpallares80@gmail.com', portfolio: 'https://yeisonportfolio.auto-node.tech/', initials: 'YP' },
  { name: 'Brayan Fonseca', github: 'BrayanFonseca29', email: '12brayanstiven@gmail.com', portfolio: 'https://brayan.auto-node.tech/', initials: 'BF' }
];

// Master dataset of links
const LINKS_DATA = [
  // --- PORTAFOLIOS ---
  {
    id: 'port-brayan',
    title: 'Portafolio Brayan Fonseca',
    subtitle: 'Desarrollador AutoNode | GitHub: BrayanFonseca29',
    url: 'https://brayan.auto-node.tech/',
    category: 'portafolios',
    iconText: 'BF',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Brayan Fonseca', 'BrayanFonseca29', '12brayanstiven@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-carlos',
    title: 'Portafolio Carlos Lindarte',
    subtitle: 'Desarrollador AutoNode | GitHub: carlosan0967',
    url: 'https://carlosportfolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'CL',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Carlos Lindarte', 'carlosan0967', 'carloslindarte694@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-diegoleon',
    title: 'Portafolio Diego León',
    subtitle: 'Desarrollador AutoNode | GitHub: Alter-09',
    url: 'https://diegoleon.auto-node.tech/',
    category: 'portafolios',
    iconText: 'DL',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Diego León', 'Alter-09', 'diegoleonp09@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-diegop',
    title: 'Portafolio Diego Parra',
    subtitle: 'Desarrollador AutoNode | GitHub: DiegoAndresParra14',
    url: 'https://diegop.auto-node.tech/',
    category: 'portafolios',
    iconText: 'DP',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Diego Parra', 'DiegoAndresParra14', 'dieguitop678@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-jhonrys',
    title: 'Portafolio Jhon Reyes',
    subtitle: 'Desarrollador AutoNode | GitHub: JhonHenryReyesPerez',
    url: 'https://jhonrys.auto-node.tech/',
    category: 'portafolios',
    iconText: 'JR',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Jhon Reyes', 'JhonHenryReyesPerez', 'jhonrysprzhh@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-santiago',
    title: 'Portafolio Santiago Pabón',
    subtitle: 'Desarrollador AutoNode | GitHub: Santiago09',
    url: 'https://santiagoportafolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'SP',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Santiago Pabón', 'Santiago09', 'santy122324@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-sportfolio',
    title: 'Portafolio Santiago Sarmiento',
    subtitle: 'Desarrollador AutoNode | GitHub: SantiSarmiento11',
    url: 'https://sportfolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'SS',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Santiago Sarmiento', 'SantiSarmiento11', 'sansamablogers@gmail.com', 'sportfolio'],
    protocol: 'https'
  },
  {
    id: 'port-sebbsal',
    title: 'Portafolio Sebastian Ayala',
    subtitle: 'Desarrollador AutoNode | GitHub: SebbsAL',
    url: 'https://sebbsalportfolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'SA',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Sebastian Ayala', 'SebbsAL', 'sebbs0610@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-sergio',
    title: 'Portafolio Sergio Aparicio',
    subtitle: 'Desarrollador AutoNode | GitHub: Sergioandresaparicio',
    url: 'https://sergioportafolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'SA',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Sergio Aparicio', 'Sergioandresaparicio', 'sergiocampuslands@gmail.com'],
    protocol: 'https'
  },
  {
    id: 'port-yeison',
    title: 'Portafolio Yeison Pallares',
    subtitle: 'Desarrollador AutoNode | GitHub: ypd651',
    url: 'https://yeisonportfolio.auto-node.tech/',
    category: 'portafolios',
    iconText: 'YP',
    tags: ['Portafolio', 'AutoNode Team', 'Dev', 'Yeison Pallares', 'ypd651', 'yeisonpallares80@gmail.com'],
    protocol: 'https'
  },

  // --- HERRAMIENTAS ---
  {
    id: 'tool-n8n-prod',
    title: 'n8n Producción',
    subtitle: 'Plataforma de Automatización de Flujos',
    url: 'https://n8n-dev2.auto-node.tech/',
    category: 'herramientas',
    iconText: '<i class="fa-solid fa-gears"></i>',
    tags: ['n8n', 'Producción', 'Automatización'],
    badgeStatus: 'Producción',
    protocol: 'https'
  },
  {
    id: 'tool-n8n-dev',
    title: 'n8n Desarrollo',
    subtitle: 'Entorno de Pruebas y Desarrollo de Flujos',
    url: 'https://n8n-dev1.auto-node.tech/',
    category: 'herramientas',
    iconText: '<i class="fa-solid fa-code-branch"></i>',
    tags: ['n8n', 'Desarrollo', 'Testing'],
    badgeStatus: 'Desarrollo',
    protocol: 'https'
  },
  {
    id: 'tool-oficina',
    title: 'Oficina Virtual',
    subtitle: 'Portal de Gestión y Espacio de Trabajo',
    url: 'https://oficina.auto-node.tech/',
    category: 'herramientas',
    iconText: '<i class="fa-solid fa-building-user"></i>',
    tags: ['Oficina', 'Gestión', 'Workspace'],
    protocol: 'https'
  },
  {
    id: 'tool-server-8978',
    title: 'Herramientas de Servidor',
    subtitle: 'Panel Administrativo en Servidor Directo',
    url: 'http://2.24.207.152:8978/#/',
    category: 'herramientas',
    iconText: '<i class="fa-solid fa-server"></i>',
    tags: ['Servidor', 'IP Directa', 'Admin'],
    protocol: 'http'
  },
  {
    id: 'tool-server-8001',
    title: 'cloudbeaver',
    subtitle: 'Aplicación / Servicio Interno',
    url: 'https://cloudbeaver-7zxtqu62fkd3uqmajk6euym1.2.24.207.152.sslip.io/#/',
    category: 'herramientas',
    iconText: '<i class="fa-solid fa-terminal"></i>',
    tags: ['Servidor', 'IP Directa', 'API'],
    protocol: 'http'
  },

  // --- PROYECTOS ---
  {
    id: 'proj-reportes',
    title: 'Sistema de Reportes',
    subtitle: 'Plataforma de Informes y Analítica',
    url: 'https://reporte.auto-node.tech/',
    category: 'proyectos',
    iconText: '<i class="fa-solid fa-chart-line"></i>',
    tags: ['Reportes', 'Analítica', 'Dashboard'],
    protocol: 'https'
  }
];

// State Management
let currentCategory = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('autonode_favorites') || '[]');

// DOM Elements
const linksGrid = document.getElementById('links-grid');
const directoryView = document.getElementById('directory-view');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryTabs = document.getElementById('category-tabs');
const emptyState = document.getElementById('empty-state');
const linksCountText = document.getElementById('links-count-text');
const currentCategoryTitle = document.getElementById('current-category-title');
const favCountBadge = document.getElementById('fav-count');

// Stats DOM Elements
const statTotal = document.getElementById('stat-total');
const statPortfolios = document.getElementById('stat-portfolios');
const statTools = document.getElementById('stat-tools');
const statProjects = document.getElementById('stat-projects');

// Toast DOM
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  updateMetrics();
  renderLinks();

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
    renderLinks();
  });

  // Clear search click handler
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderLinks();
  });

  // Category Tabs click handler
  categoryTabs.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn');
    if (!tabBtn) return;

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    tabBtn.classList.add('active');
    
    currentCategory = tabBtn.dataset.category;
    updateCategoryHeaderTitle();
    renderLinks();
  });

  // Keyboard Shortcuts ('/' to search, 'Esc' to clear)
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      searchInput.blur();
      renderLinks();
    }
  });
});

// Update Statistics Counters
function updateMetrics() {
  const total = LINKS_DATA.length;
  const portfolios = LINKS_DATA.filter(l => l.category === 'portafolios').length;
  const tools = LINKS_DATA.filter(l => l.category === 'herramientas').length;
  const projects = LINKS_DATA.filter(l => l.category === 'proyectos').length;

  animateCounter(statTotal, total);
  animateCounter(statPortfolios, portfolios);
  animateCounter(statTools, tools);
  animateCounter(statProjects, projects);

  favCountBadge.textContent = favorites.length;
}

function animateCounter(element, target) {
  let current = 0;
  const increment = Math.ceil(target / 15);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = current;
    }
  }, 30);
}

// Category Title Header Update
function updateCategoryHeaderTitle() {
  const categoryTitles = {
    all: '<i class="fa-solid fa-compass"></i> Todos los Enlaces',
    portafolios: '<i class="fa-solid fa-user-astronaut"></i> Portafolios del Equipo',
    herramientas: '<i class="fa-solid fa-screwdriver-wrench"></i> Herramientas y Servicios',
    proyectos: '<i class="fa-solid fa-rocket"></i> Proyectos de la Empresa',
    directorio: '<i class="fa-solid fa-address-book"></i> Directorio de Desarrolladores AutoNode',
    favorites: '<i class="fa-solid fa-star"></i> Mis Enlaces Favoritos'
  };

  currentCategoryTitle.innerHTML = categoryTitles[currentCategory] || categoryTitles.all;
}

// Filter and Render Links Grid / Directory Table
function renderLinks() {
  if (currentCategory === 'directorio') {
    renderDirectoryTable();
    return;
  }

  // Hide directory view when in standard category tabs
  if (directoryView) directoryView.style.display = 'none';

  let filtered = LINKS_DATA.filter(item => {
    // Category match
    if (currentCategory === 'favorites') {
      if (!favorites.includes(item.id)) return false;
    } else if (currentCategory !== 'all' && item.category !== currentCategory) {
      return false;
    }

    // Search query match
    if (searchQuery) {
      const matchTitle = item.title.toLowerCase().includes(searchQuery);
      const matchSub = item.subtitle.toLowerCase().includes(searchQuery);
      const matchUrl = item.url.toLowerCase().includes(searchQuery);
      const matchTags = item.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      return matchTitle || matchSub || matchUrl || matchTags;
    }

    return true;
  });

  // Count text update
  linksCountText.textContent = `Mostrando ${filtered.length} de ${LINKS_DATA.length} enlaces`;

  // Handle empty state
  if (filtered.length === 0) {
    linksGrid.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    linksGrid.style.display = 'grid';
    emptyState.style.display = 'none';
  }

  // Render cards HTML
  linksGrid.innerHTML = filtered.map(item => createCardHTML(item)).join('');
}

// Render Interactive Developer Directory Table
function renderDirectoryTable() {
  linksGrid.style.display = 'none';
  if (!directoryView) return;

  directoryView.style.display = 'block';

  let filteredDevs = DEVS_DIRECTORY.filter(dev => {
    if (!searchQuery) return true;
    const matchName = dev.name.toLowerCase().includes(searchQuery);
    const matchGithub = dev.github.toLowerCase().includes(searchQuery);
    const matchEmail = dev.email.toLowerCase().includes(searchQuery);
    const matchPort = dev.portfolio.toLowerCase().includes(searchQuery);
    return matchName || matchGithub || matchEmail || matchPort;
  });

  linksCountText.textContent = `Mostrando ${filteredDevs.length} de ${DEVS_DIRECTORY.length} desarrolladores`;

  if (filteredDevs.length === 0) {
    directoryView.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  } else {
    emptyState.style.display = 'none';
  }

  directoryView.innerHTML = `
    <div class="directory-container">
      <div class="directory-header-info">
        <h3><i class="fa-solid fa-table-list"></i> Guía Rápida de Desarrolladores</h3>
        <span class="selectable-notice">
          <i class="fa-solid fa-i-cursor"></i> Puedes seleccionar el texto directamente o hacer clic en copiar
        </span>
      </div>
      <div class="devs-table-wrapper">
        <table class="devs-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>GitHub</th>
              <th>Correo Electrónico</th>
              <th>Portafolio</th>
            </tr>
          </thead>
          <tbody>
            ${filteredDevs.map(dev => `
              <tr>
                <td>
                  <div class="dev-name-cell">
                    <div class="dev-avatar-sm">${dev.initials}</div>
                    <span>${escapeHTML(dev.name)}</span>
                  </div>
                </td>
                <td>
                  <a href="https://github.com/${escapeHTML(dev.github)}" target="_blank" rel="noopener noreferrer" class="github-chip" title="Ver perfil de GitHub">
                    <i class="fa-brands fa-github"></i>
                    <span>${escapeHTML(dev.github)}</span>
                  </a>
                  <button class="inline-copy-btn" onclick="copyToClipboard('${escapeHTML(dev.github)}')" title="Copiar usuario de GitHub">
                    <i class="fa-regular fa-copy"></i>
                  </button>
                </td>
                <td>
                  <span class="email-chip">
                    <i class="fa-regular fa-envelope"></i> ${escapeHTML(dev.email)}
                  </span>
                  <button class="inline-copy-btn" onclick="copyToClipboard('${escapeHTML(dev.email)}')" title="Copiar correo electrónico">
                    <i class="fa-regular fa-copy"></i>
                  </button>
                </td>
                <td>
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <a href="${dev.portfolio}" target="_blank" rel="noopener noreferrer" class="github-chip" style="border-color: rgba(199,125,255,0.3);">
                      <i class="fa-solid fa-globe"></i> Visitar
                    </a>
                    <button class="inline-copy-btn" onclick="copyToClipboard('${dev.portfolio}')" title="Copiar URL del portafolio">
                      <i class="fa-regular fa-copy"></i>
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Create Card Component HTML
function createCardHTML(item) {
  const isFav = favorites.includes(item.id);
  const avatarClass = item.category === 'herramientas' ? 'tools-icon' : (item.category === 'proyectos' ? 'proj-icon' : '');
  
  // Category label badge
  let categoryBadgeClass = 'badge-portafolio';
  let categoryName = 'Portafolio';
  if (item.category === 'herramientas') {
    categoryBadgeClass = 'badge-herramienta';
    categoryName = 'Herramienta';
  } else if (item.category === 'proyectos') {
    categoryBadgeClass = 'badge-proyecto';
    categoryName = 'Proyecto';
  }

  // Optional status badge (Produccion / Desarrollo)
  let statusBadgeHTML = '';
  if (item.badgeStatus === 'Producción') {
    statusBadgeHTML = `<span class="badge badge-prod"><i class="fa-solid fa-circle"></i> Producción</span>`;
  } else if (item.badgeStatus === 'Desarrollo') {
    statusBadgeHTML = `<span class="badge badge-dev"><i class="fa-solid fa-circle"></i> Desarrollo</span>`;
  }

  // HTTP / HTTPS protocol badge
  const protocolBadgeHTML = item.protocol === 'http' 
    ? `<span class="badge badge-http"><i class="fa-solid fa-lock-open"></i> HTTP</span>`
    : '';

  return `
    <article class="card-item" id="card-${item.id}">
      <div class="card-header">
        <div class="card-identity">
          <div class="card-avatar ${avatarClass}">
            ${item.iconText}
          </div>
          <div class="card-title-group">
            <h3 class="card-title">${escapeHTML(item.title)}</h3>
            <span class="card-subtitle">${escapeHTML(item.subtitle)}</span>
          </div>
        </div>
        <button class="fav-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFavorite('${item.id}')" title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
          <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
        </button>
      </div>

      <div class="card-body">
        <div class="badge-row">
          <span class="badge ${categoryBadgeClass}">${categoryName}</span>
          ${statusBadgeHTML}
          ${protocolBadgeHTML}
        </div>
        <div class="card-url" title="${item.url}">
          ${escapeHTML(item.url)}
        </div>
      </div>

      <div class="card-actions">
        <button class="action-btn btn-copy" onclick="copyToClipboard('${item.url}')" title="Copiar URL al portapapeles">
          <i class="fa-regular fa-copy"></i> Copiar
        </button>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="action-btn btn-open" title="Abrir enlace en una nueva pestaña">
          <span>Abrir</span>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </article>
  `;
}

// Favorite Toggle Handler
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
    showToast('Enlace quitado de favoritos');
  } else {
    favorites.push(id);
    showToast('Enlace agregado a favoritos');
  }

  localStorage.setItem('autonode_favorites', JSON.stringify(favorites));
  favCountBadge.textContent = favorites.length;
  renderLinks();
}

// Copy to Clipboard Handler
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('¡Texto copiado al portapapeles!');
    }).catch(() => {
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('¡Texto copiado al portapapeles!');
  } catch (err) {
    showToast('No se pudo copiar automáticamente');
  }
  document.body.removeChild(textArea);
}

// Toast Notification Trigger
let toastTimeout;
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Reset Filters Function
function resetFilters() {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.style.display = 'none';
  currentCategory = 'all';
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  updateCategoryHeaderTitle();
  renderLinks();
}

// Helper to escape HTML characters
function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
