function sanPham(){
    document.getElementById("content").innerHTML=`
    <div class="container">
    <div>
        <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" onclick="formregister()">Register</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onclick="formLogin()">Login-Logout</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="showAddForm()">Add</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Tên muốn tìm" aria-label="Search" id="search-name">
                        <button class="btn btn-outline-success my-2 my-sm-0" onclick="search()">Search</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="row">
        <div class="col-9">
            <h2>HOUSE</h2>
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Bedrom</th>
                    <th scope="col">Bathrom</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">DELETE</th>
                    <th scope="col">EDIT</th>
                </tr>
                </thead>
                <tbody id="list">
                </tbody>
            </table>
        </div>
    </div>
</div>
    `
}