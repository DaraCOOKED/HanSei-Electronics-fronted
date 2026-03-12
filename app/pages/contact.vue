<template>
  <div class="emp-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon">⬡</span>
        <span class="logo-text">Nexus HR</span>
      </div>
      <nav class="sidebar-nav">
        <a class="nav-item active" href="#">
          <span class="nav-icon">◈</span> Employees
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">◉</span> Departments
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">◎</span> Payroll
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">◇</span> Reports
        </a>
        <a class="nav-item" href="#">
          <span class="nav-icon">◳</span> Settings
        </a>
      </nav>
      <div class="sidebar-footer">
        <div class="admin-avatar">A</div>
        <div class="admin-info">
          <div class="admin-name">Admin User</div>
          <div class="admin-role">Super Admin</div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Header -->
      <header class="page-header">
        <div class="header-left">
          <h1 class="page-title">Employee Management</h1>
          <p class="page-subtitle">{{ filteredEmployees.length }} of {{ employees.length }} employees</p>
        </div>
        <div class="header-actions">
          <div class="search-box">
            <span class="search-icon">⌕</span>
            <input
              v-model="search"
              type="text"
              placeholder="Search employees..."
              class="search-input"
            />
          </div>
          <select v-model="filterDept" class="dept-filter">
            <option value="">All Departments</option>
            <option v-for="d in departments" :key="d" :value="d">{{ d }}</option>
          </select>
          <button class="btn-add" @click="openModal()">+ Add Employee</button>
        </div>
      </header>

      <!-- Stats Row -->
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-value">{{ employees.length }}</div>
          <div class="stat-label">Total Employees</div>
          <div class="stat-bar" style="--w: 100%"></div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ activeCount }}</div>
          <div class="stat-label">Active</div>
          <div class="stat-bar" :style="`--w: ${(activeCount/employees.length)*100}%`"></div>
        </div>
        <div class="stat-card">
          <div class="stat-value">{{ departments.length }}</div>
          <div class="stat-label">Departments</div>
          <div class="stat-bar" style="--w: 60%"></div>
        </div>
        <div class="stat-card">
          <div class="stat-value">3</div>
          <div class="stat-label">New This Month</div>
          <div class="stat-bar" style="--w: 25%"></div>
        </div>
      </div>

      <!-- Employee Table -->
      <div class="table-container">
        <table class="emp-table">
          <thead>
            <tr>
              <th @click="sort('name')" class="sortable">
                Name <span class="sort-arrow">{{ sortField === 'name' ? (sortAsc ? '↑' : '↓') : '↕' }}</span>
              </th>
              <th @click="sort('department')" class="sortable">
                Dept <span class="sort-arrow">{{ sortField === 'department' ? (sortAsc ? '↑' : '↓') : '↕' }}</span>
              </th>
              <th @click="sort('role')" class="sortable">
                Role <span class="sort-arrow">{{ sortField === 'role' ? (sortAsc ? '↑' : '↓') : '↕' }}</span>
              </th>
              <th @click="sort('salary')" class="sortable">
                Salary <span class="sort-arrow">{{ sortField === 'salary' ? (sortAsc ? '↑' : '↓') : '↕' }}</span>
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="emp in paginatedEmployees"
              :key="emp.id"
              class="emp-row"
              :class="{ selected: selectedIds.includes(emp.id) }"
            >
              <td>
                <div class="emp-identity">
                  <div class="emp-avatar" :style="`background: ${emp.color}`">
                    {{ emp.name.charAt(0) }}
                  </div>
                  <div>
                    <div class="emp-name">{{ emp.name }}</div>
                    <div class="emp-email">{{ emp.email }}</div>
                  </div>
                </div>
              </td>
              <td><span class="dept-badge">{{ emp.department }}</span></td>
              <td class="role-cell">{{ emp.role }}</td>
              <td class="salary-cell">${{ emp.salary.toLocaleString() }}</td>
              <td>
                <span class="status-badge" :class="emp.status">{{ emp.status }}</span>
              </td>
              <td>
                <div class="action-btns">
                  <button class="btn-icon btn-edit" @click="openModal(emp)" title="Edit">✎</button>
                  <button class="btn-icon btn-delete" @click="deleteEmployee(emp.id)" title="Delete">✕</button>
                </div>
              </td>
            </tr>
            <tr v-if="filteredEmployees.length === 0">
              <td colspan="6" class="empty-state">No employees found.</td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="pagination">
          <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
          <div class="page-btns">
            <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">‹</button>
            <button
              v-for="p in totalPages"
              :key="p"
              class="page-btn"
              :class="{ active: p === currentPage }"
              @click="currentPage = p"
            >{{ p }}</button>
            <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">›</button>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal -->
    <transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <div class="modal-header">
            <h2>{{ editingEmployee ? 'Edit Employee' : 'Add New Employee' }}</h2>
            <button class="modal-close" @click="closeModal">✕</button>
          </div>
          <form class="modal-form" @submit.prevent="saveEmployee">
            <div class="form-row">
              <div class="form-group">
                <label>Full Name</label>
                <input v-model="form.name" type="text" required placeholder="Jane Smith" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" type="email" required placeholder="jane@company.com" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Department</label>
                <select v-model="form.department" required>
                  <option value="">Select department</option>
                  <option v-for="d in departments" :key="d" :value="d">{{ d }}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Role</label>
                <input v-model="form.role" type="text" required placeholder="Senior Engineer" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Salary ($)</label>
                <input v-model.number="form.salary" type="number" required min="0" placeholder="75000" />
              </div>
              <div class="form-group">
                <label>Status</label>
                <select v-model="form.status" required>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="onleave">On Leave</option>
                </select>
              </div>
            </div>
            <div class="modal-actions">
              <button type="button" class="btn-cancel" @click="closeModal">Cancel</button>
              <button type="submit" class="btn-save">{{ editingEmployee ? 'Save Changes' : 'Add Employee' }}</button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const avatarColors = ['#e05c5c','#5c8de0','#5ce08a','#e0a35c','#a35ce0','#5cc4e0','#e05ca3']

const employees = ref([
  { id: 1, name: 'Aria Johnson', email: 'aria@nexus.io', department: 'Engineering', role: 'Lead Engineer', salary: 120000, status: 'active', color: '#5c8de0' },
  { id: 2, name: 'Marcus Lee', email: 'marcus@nexus.io', department: 'Design', role: 'UX Designer', salary: 95000, status: 'active', color: '#e05c5c' },
  { id: 3, name: 'Priya Kapoor', email: 'priya@nexus.io', department: 'Product', role: 'Product Manager', salary: 110000, status: 'onleave', color: '#a35ce0' },
  { id: 4, name: 'Tobias Müller', email: 'tobias@nexus.io', department: 'Engineering', role: 'Backend Dev', salary: 98000, status: 'active', color: '#5ce08a' },
  { id: 5, name: 'Selin Yıldız', email: 'selin@nexus.io', department: 'Marketing', role: 'Growth Lead', salary: 87000, status: 'active', color: '#e0a35c' },
  { id: 6, name: 'James O\'Brien', email: 'james@nexus.io', department: 'Finance', role: 'CFO Analyst', salary: 105000, status: 'inactive', color: '#5cc4e0' },
  { id: 7, name: 'Nadia Hassan', email: 'nadia@nexus.io', department: 'Design', role: 'Motion Designer', salary: 88000, status: 'active', color: '#e05ca3' },
  { id: 8, name: 'Leo Chen', email: 'leo@nexus.io', department: 'Engineering', role: 'Frontend Dev', salary: 92000, status: 'active', color: '#5c8de0' },
  { id: 9, name: 'Fatima Al-Amin', email: 'fatima@nexus.io', department: 'HR', role: 'HR Manager', salary: 89000, status: 'active', color: '#a35ce0' },
  { id: 10, name: 'Ryu Tanaka', email: 'ryu@nexus.io', department: 'Product', role: 'Product Designer', salary: 96000, status: 'active', color: '#e05c5c' },
  { id: 11, name: 'Sofia Rossi', email: 'sofia@nexus.io', department: 'Marketing', role: 'Brand Strategist', salary: 82000, status: 'onleave', color: '#5ce08a' },
  { id: 12, name: 'Derek Williams', email: 'derek@nexus.io', department: 'Finance', role: 'Controller', salary: 112000, status: 'active', color: '#e0a35c' },
])

const departments = ['Engineering', 'Design', 'Product', 'Marketing', 'Finance', 'HR']

const search = ref('')
const filterDept = ref('')
const sortField = ref('name')
const sortAsc = ref(true)
const currentPage = ref(1)
const perPage = 6
const selectedIds = ref([])
const showModal = ref(false)
const editingEmployee = ref(null)

const form = ref({ name: '', email: '', department: '', role: '', salary: '', status: 'active' })

const activeCount = computed(() => employees.value.filter(e => e.status === 'active').length)

const filteredEmployees = computed(() => {
  let list = employees.value
  if (search.value) list = list.filter(e => e.name.toLowerCase().includes(search.value.toLowerCase()) || e.email.toLowerCase().includes(search.value.toLowerCase()))
  if (filterDept.value) list = list.filter(e => e.department === filterDept.value)
  list = [...list].sort((a, b) => {
    const av = a[sortField.value], bv = b[sortField.value]
    return sortAsc.value ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1)
  })
  return list
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredEmployees.value.length / perPage)))
const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredEmployees.value.slice(start, start + perPage)
})

function sort(field) {
  if (sortField.value === field) sortAsc.value = !sortAsc.value
  else { sortField.value = field; sortAsc.value = true }
}

function openModal(emp = null) {
  editingEmployee.value = emp
  if (emp) form.value = { ...emp }
  else form.value = { name: '', email: '', department: '', role: '', salary: '', status: 'active' }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  editingEmployee.value = null
}

function saveEmployee() {
  if (editingEmployee.value) {
    const idx = employees.value.findIndex(e => e.id === editingEmployee.value.id)
    if (idx !== -1) employees.value[idx] = { ...employees.value[idx], ...form.value }
  } else {
    const color = avatarColors[employees.value.length % avatarColors.length]
    employees.value.push({ id: Date.now(), ...form.value, color })
  }
  closeModal()
}

function deleteEmployee(id) {
  employees.value = employees.value.filter(e => e.id !== id)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.emp-page {
  display: flex;
  min-height: 100vh;
  background: #0d0f14;
  color: #e8e6e1;
  font-family: 'DM Sans', sans-serif;
}

/* ---- SIDEBAR ---- */
.sidebar {
  width: 230px;
  min-height: 100vh;
  background: #13161e;
  border-right: 1px solid #1f2330;
  display: flex;
  flex-direction: column;
  padding: 28px 0;
  position: sticky;
  top: 0;
  height: 100vh;
}
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 24px 32px;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  color: #f0ede6;
}
.logo-icon { font-size: 1.4rem; color: #c8f064; }
.sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 2px; padding: 0 12px; }
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #7a8098;
  text-decoration: none;
  transition: all 0.2s;
  font-weight: 500;
}
.nav-item:hover { background: #1a1d27; color: #d4d1ca; }
.nav-item.active { background: #1e2230; color: #c8f064; }
.nav-icon { font-size: 1rem; opacity: 0.8; }
.sidebar-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 0;
  border-top: 1px solid #1f2330;
  margin-top: 16px;
}
.admin-avatar {
  width: 34px; height: 34px;
  background: #c8f064;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  color: #0d0f14;
  font-size: 0.85rem;
}
.admin-name { font-size: 0.85rem; font-weight: 600; color: #e0ddd6; }
.admin-role { font-size: 0.72rem; color: #5a6075; margin-top: 1px; }

/* ---- MAIN ---- */
.main-content {
  flex: 1;
  padding: 36px 40px;
  overflow-y: auto;
}

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}
.page-title {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #f0ede6;
  letter-spacing: -0.02em;
}
.page-subtitle { color: #5a6075; font-size: 0.87rem; margin-top: 4px; }
.header-actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  color: #5a6075;
  font-size: 1.1rem;
  pointer-events: none;
}
.search-input {
  background: #13161e;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 9px 14px 9px 34px;
  color: #e0ddd6;
  font-size: 0.87rem;
  font-family: 'DM Sans', sans-serif;
  width: 210px;
  transition: border-color 0.2s;
  outline: none;
}
.search-input:focus { border-color: #c8f064; }
.search-input::placeholder { color: #3d4258; }

.dept-filter {
  background: #13161e;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 9px 14px;
  color: #9a9888;
  font-size: 0.87rem;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  cursor: pointer;
}
.dept-filter:focus { border-color: #c8f064; }

.btn-add {
  background: #c8f064;
  color: #0d0f14;
  border: none;
  border-radius: 8px;
  padding: 9px 18px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.87rem;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}
.btn-add:hover { opacity: 0.88; transform: translateY(-1px); }

/* ---- STATS ---- */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}
.stat-card {
  background: #13161e;
  border: 1px solid #1f2330;
  border-radius: 12px;
  padding: 20px 22px;
  position: relative;
  overflow: hidden;
}
.stat-value {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #f0ede6;
  line-height: 1;
}
.stat-label { font-size: 0.78rem; color: #5a6075; margin-top: 6px; text-transform: uppercase; letter-spacing: 0.06em; }
.stat-bar {
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  width: var(--w);
  background: linear-gradient(90deg, #c8f064, #5ce08a);
  border-radius: 0 3px 0 0;
  transition: width 0.6s ease;
}

/* ---- TABLE ---- */
.table-container {
  background: #13161e;
  border: 1px solid #1f2330;
  border-radius: 14px;
  overflow: hidden;
}
.emp-table {
  width: 100%;
  border-collapse: collapse;
}
.emp-table thead tr {
  background: #0f1118;
  border-bottom: 1px solid #1f2330;
}
.emp-table th {
  padding: 14px 20px;
  text-align: left;
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4a5168;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
}
.sortable { cursor: pointer; user-select: none; }
.sortable:hover { color: #c8f064; }
.sort-arrow { margin-left: 4px; font-size: 0.8rem; }

.emp-row {
  border-bottom: 1px solid #181b25;
  transition: background 0.15s;
}
.emp-row:last-child { border-bottom: none; }
.emp-row:hover { background: #161923; }
.emp-row.selected { background: #1a1f2b; }

.emp-table td {
  padding: 14px 20px;
  font-size: 0.875rem;
  vertical-align: middle;
}
.emp-identity { display: flex; align-items: center; gap: 12px; }
.emp-avatar {
  width: 36px; height: 36px;
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  color: #0d0f14;
  flex-shrink: 0;
}
.emp-name { font-weight: 500; color: #e0ddd6; font-size: 0.9rem; }
.emp-email { color: #4a5168; font-size: 0.77rem; margin-top: 1px; }

.dept-badge {
  background: #1a1f2e;
  border: 1px solid #252b3b;
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 0.77rem;
  color: #8a9ab8;
  white-space: nowrap;
}
.role-cell { color: #8a8878; font-size: 0.87rem; }
.salary-cell { color: #c8f064; font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.9rem; }

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: capitalize;
}
.status-badge.active { background: rgba(92, 224, 138, 0.12); color: #5ce08a; border: 1px solid rgba(92, 224, 138, 0.25); }
.status-badge.inactive { background: rgba(224, 92, 92, 0.12); color: #e05c5c; border: 1px solid rgba(224, 92, 92, 0.25); }
.status-badge.onleave { background: rgba(224, 163, 92, 0.12); color: #e0a35c; border: 1px solid rgba(224, 163, 92, 0.25); }

.action-btns { display: flex; gap: 6px; }
.btn-icon {
  width: 30px; height: 30px;
  border-radius: 7px;
  border: 1px solid #1f2330;
  background: transparent;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
  color: #5a6075;
}
.btn-edit:hover { background: #1a2030; border-color: #c8f064; color: #c8f064; }
.btn-delete:hover { background: #2a1418; border-color: #e05c5c; color: #e05c5c; }

.empty-state { text-align: center; color: #3d4258; padding: 40px; font-size: 0.9rem; }

/* ---- PAGINATION ---- */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid #1a1d27;
}
.page-info { font-size: 0.8rem; color: #4a5168; }
.page-btns { display: flex; gap: 4px; }
.page-btn {
  width: 30px; height: 30px;
  border-radius: 7px;
  border: 1px solid #1f2330;
  background: transparent;
  color: #5a6075;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s;
}
.page-btn:hover:not(:disabled) { border-color: #c8f064; color: #c8f064; }
.page-btn.active { background: #c8f064; color: #0d0f14; border-color: #c8f064; font-weight: 700; }
.page-btn:disabled { opacity: 0.3; cursor: not-allowed; }

/* ---- MODAL ---- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal {
  background: #13161e;
  border: 1px solid #1f2330;
  border-radius: 16px;
  width: 540px;
  max-width: 95vw;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.5);
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 28px;
  border-bottom: 1px solid #1f2330;
}
.modal-header h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #f0ede6;
}
.modal-close {
  background: transparent;
  border: none;
  color: #5a6075;
  font-size: 1rem;
  cursor: pointer;
  width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 6px;
  transition: all 0.15s;
}
.modal-close:hover { background: #1f2330; color: #e05c5c; }

.modal-form { padding: 24px 28px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.07em; color: #4a5168; font-family: 'Syne', sans-serif; font-weight: 600; }
.form-group input,
.form-group select {
  background: #0d0f14;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 10px 13px;
  color: #e0ddd6;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;
}
.form-group input:focus,
.form-group select:focus { border-color: #c8f064; }
.form-group input::placeholder { color: #3d4258; }
.form-group select option { background: #13161e; }

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid #1a1d27;
}
.btn-cancel {
  background: transparent;
  border: 1px solid #1f2330;
  border-radius: 8px;
  padding: 9px 20px;
  color: #5a6075;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-cancel:hover { border-color: #3d4258; color: #9a9888; }
.btn-save {
  background: #c8f064;
  border: none;
  border-radius: 8px;
  padding: 9px 22px;
  color: #0d0f14;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-save:hover { opacity: 0.88; }

/* ---- TRANSITIONS ---- */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .main-content { padding: 20px; }
  .sidebar { width: 60px; }
  .logo-text, .nav-item span:last-child, .admin-info { display: none; }
}
</style>