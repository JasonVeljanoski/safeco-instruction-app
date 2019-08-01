# Readme

## Usage

This app reads all its data from an `sqlite` database.

You simply use the navigation bar to search for a specific product and the following information will be displayed:

- `video` and `short description [optional]` for each particular **step**
- - A **step** is simply a single instruction. A number of **steps** are combined to explain a particular procedure. Specifically, how to assemble/ build the particular product

- A `.pdf [optional]`  document is optionally attached after the **steps** to give further information if required. This can be filled with written documentation and diagrams (provided by **Ian**).

## SQL Table Structure

A separate document explains the **structure** of the `sqlite` tables required for a functional app. 

But here you will need to conform to the below.

The `steps` table has a `video` column. 

- the `video file` must be in the `/public/media` directory

- this must be a `String` of the `video-path` (after `/public/media/` )
- example: if the path is `/public/media/productx/sample.mp4` , your table entry should be `productx/sample.mp4`
- **All table entries for this column must have the correct file path and the file must exist in the correct directory. Limited error checking is done here.**

The `variations` table has a `variation_documentation` column. This holds a `.pdf` of additional information.

- the `.pfd file` must be in the `/public/documents` directory

- this must be a `String` of the `file-path` (after `/public/documents/` )
- example: if the path is `/public/documents/productx/sample.pdf` , your table entry should be `productx/sample.pdf`
- If you do **not** want a pdf just make this field `""` (empty string)
- **All table entries for this column must have the correct file path and the file must exist in the correct directory. Limited error checking is done here.**

