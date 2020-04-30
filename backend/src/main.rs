#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

extern crate rocket_contrib;

use std::path::{Path, PathBuf};
use rocket::response::content;
use rocket::request::Form;
use rocket::response::NamedFile;
use std::fs;

use std::fs::OpenOptions;
use std::io::Write;

use std::fs::File;
use std::io::{self, BufRead};

use std::hash::{Hash, Hasher};
use std::collections::hash_map::DefaultHasher;

// For reading lines in txt files TEMP
fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where P: AsRef<Path>, {
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}

// Return list of kennels
#[get("/home_kennels")]
fn top_kennels() -> String {
	// Get list of kennels in database
    let mut kennels = "".to_owned();

	// File hosts must exist in current path before this produces output
    if let Ok(lines) = read_lines("db/kennels.txt") {
        // Consumes the iterator, returns an (Optional) String
        for line in lines {
            if let Ok(k) = line {
    			kennels = kennels + "<li><a href=signup>" + &k + "</a></li>";
            }
        }
    }

    println!{"Data {}", &kennels};
    return kennels;
}

// Load home page for empty file path
#[get("/<url>", rank=1)]
fn url(url: String) -> Option<NamedFile> {
	// Empty file path, give home page
	//NamedFile::open(Path::new("static/pages/homepage.html")).ok()
	NamedFile::open("static/pages/test.html").ok()
}


// Load home page for empty file path
#[get("/")]
fn home() -> Option<NamedFile> {
	// Empty file path, give home page
	//NamedFile::open(Path::new("static/pages/homepage.html")).ok()
	NamedFile::open("static/pages/test.html").ok()
}

// Generic static file access
#[get("/<file..>", rank = 3)]
fn files(file: PathBuf) -> Option<NamedFile> {
	// Static file access
	NamedFile::open(Path::new("static/").join(file)).ok()
}

fn rocket() -> rocket::Rocket {
    rocket::ignite().mount("/", routes![files, home, url, top_kennels])
}

fn main() {
    rocket().launch();
}
