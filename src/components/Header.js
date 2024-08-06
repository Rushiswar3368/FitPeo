export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <input type="search" class="form-control w-25" placeholder="Search" />
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="ms-auto navbar-nav">
            <i class="header-icon m-2 fa-xl fa-regular fa-envelope"></i>
            <i class="header-icon m-2 fa-xl fa-solid fa-gear"></i>
            <i class="header-icon m-2 fa-xl fa-regular fa-bell"></i>
            <i class="header-icon m-2 fa-xl fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
