use std::path::PathBuf;

use actix_files::{self as fs, NamedFile};
use actix_web::{web, App, HttpServer};
use lazy_static::lazy_static;

lazy_static! {
    static ref STATIC_PATH: PathBuf = PathBuf::from(
        std::env::var("BLOG_SERVER_STATIC_PATH").expect("BLOG_SERVER_STATIC_PATH must be set")
    );
    static ref INDEX_HTML: PathBuf = STATIC_PATH.join("index.html");
}

async fn index() -> actix_web::Result<NamedFile> {
    Ok(NamedFile::open(INDEX_HTML.clone()).unwrap())
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(index))
            .route("/games", web::get().to(index))
            .route("/games/{game}", web::get().to(index))
            .route("/modes", web::get().to(index))
            .route("/modes/{mode}", web::get().to(index))
            .route("/sites", web::get().to(index))
            .service(fs::Files::new("/", STATIC_PATH.clone()).use_last_modified(true))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
