let books =
   
     [
      {  
           "id":1342,
           "authors":[  
              {  
                 "birth_year":1775,
                 "death_year":1817,
                 "name":"Austen, Jane"
              }
           ],
           "bookshelves":[  
              "Best Books Ever Listings",
              "Harvard Classics"
           ],
           "download_count":45668,
           "formats":{  
              "text/plain; charset=utf-8":"http://www.gutenberg.org/files/1342/1342-0.txt",
              "application/pdf":"http://www.gutenberg.org/files/1342/1342-pdf.pdf",
              "application/rdf+xml":"http://www.gutenberg.org/ebooks/1342.rdf",
              "application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/1342.kindle.noimages",
              "application/epub+zip":"http://www.gutenberg.org/ebooks/1342.epub.images",
              "text/plain; charset=us-ascii":"http://www.gutenberg.org/files/1342/1342.txt",
              "text/html; charset=utf-8":"http://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
           },
           "languages":[  
              "en"
           ],
           "media_type":"Text",
           "subjects": ["Fiction"],
           "title":"Pride and Prejudice"
        },
        {  
           "id":33283,
           "authors":[  
              {  
                 "birth_year":1851,
                 "death_year":1916,
                 "name":"Thompson, Silvanus P. (Silvanus Phillips)"
              }
           ],
           "bookshelves":[  
              "Mathematics"
           ],
           "download_count":24344,
           "formats":{  
              "application/prs.tex":"http://www.gutenberg.org/files/33283/33283-t.zip",
              "application/rdf+xml":"http://www.gutenberg.org/ebooks/33283.rdf",
              "application/pdf":"http://www.gutenberg.org/files/33283/33283-pdf.pdf"
           },
           "languages":[  
              "en"
           ],
           "media_type":"Text",
           "subjects": ["Fiction"],
           "title":"Calculus Made Easy: Being a very-simplest introduction to those beautiful methods which are generally called by the terrifying names of the Differential Calculus and the Integral Calculus"
        },
        {  
           "id":11,
           "authors":[  
              {  
                 "birth_year":1832,
                 "death_year":1898,
                 "name":"Carroll, Lewis"
              }
           ],
           "bookshelves":[  
              "Children's Literature"
           ],
           "download_count":17866,
           "formats":{  
              "text/plain; charset=utf-8":"http://www.gutenberg.org/files/11/11-0.zip",
              "application/rdf+xml":"http://www.gutenberg.org/ebooks/11.rdf",
              "application/pdf":"http://www.gutenberg.org/files/11/11-pdf.pdf",
              "application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/11.kindle.noimages",
              "application/epub+zip":"http://www.gutenberg.org/ebooks/11.epub.images",
              "text/plain; charset=us-ascii":"http://www.gutenberg.org/files/11/11.zip",
              "application/zip":"http://www.gutenberg.org/files/11/11-h.zip",
              "text/html; charset=utf-8":"http://www.gutenberg.org/files/11/11-h/11-h.htm"
           },
           "languages":[  
              "en"
           ],
           "media_type":"Text",
           "subjects": ["Fiction", "Science"],
           "title":"Alice's Adventures in Wonderland"
        },
        {  
           "id":74,
           "authors":[  
              {  
                 "birth_year":1835,
                 "death_year":1910,
                 "name":"Twain, Mark"
              }
           ],
           "bookshelves":[  
              "Banned Books from Anne Haight's list"
           ],
           "download_count":16204,
           "formats":{  
              "image/jpeg":"http://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
              "text/plain; charset=utf-8":"http://www.gutenberg.org/files/74/74-0.zip",
              "application/rdf+xml":"http://www.gutenberg.org/ebooks/74.rdf",
              "application/x-mobipocket-ebook":"http://www.gutenberg.org/ebooks/74.kindle.images",
              "application/epub+zip":"http://www.gutenberg.org/ebooks/74.epub.noimages",
              "text/html; charset=utf-8":"http://www.gutenberg.org/files/74/74-h/74-h.htm",
              "text/plain; charset=iso-8859-1":"http://www.gutenberg.org/files/74/74.txt",
              "application/zip":"http://www.gutenberg.org/files/74/74.zip"
           },
           "languages":[  
              "en"
           ],
           "media_type":"Text",
           "subjects": ["Science"],
           "title":"The Adventures of Tom Sawyer"
        }
    ]
    let scienceTitels=[]

    for(let i=0;i<books.length;i++){
        if(books[i].subjects.find(function(name){
         return   name ==="Science";
        })
          ){
            scienceTitels.push(books[i].title);
        }
    }








let scienceTitels=[]

for(let i=0;i<books.length;i++){
    if(books[i].subjects.find(function(name){
     return   name ==="Science";
    })
      ){
        scienceTitels.push(books[i].title);
        // console.log(`Science ${books[i].title}`);
    }
}

console.log(scienceTitels);




// for(let i=0;i<books.length;i++){
//     if(books[i].subjects.find(function(name){
//      return   name ==="Fiction";
//     })
//       ){
//         console.log(`Fiction ${books[i].title}`);
//     }
// }



//   console.log(books[3].subjects);
  