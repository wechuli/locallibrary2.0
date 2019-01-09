# locallibrary2.0
Complete rewrite of local library website on MDN - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website

Functionality   

      -This is a library managament system
      -have a collection of books with how many they are
      -two kinds of users - library members and librarians(library admins)
      -Unauthenticated users can view all the books and book details of a particular book
      -Authenticated users can manage their user details, reserve and borrow books
      -Only librarians can approve a user's request to borrow a book
      -Users can signup using local(with email verification), social accounts(facebook, google)
      -Borrowed books will have a deadline date -(as a challenge, try implementing a worker that checks all expired dates and sends notification email to the users-later)
      -Librarians will be able to add books and book genres
      -Librarians will be able to view all library users along with their details and borrowed books and history
      -Users will be able to upload pictures for their profiles
      -Librarians can upload pictures for a book
      -Machine learning and ai services to analyse the book description, and determine what the book is talking about.
 Technologies
 
        -Express for the back-end
        -React for the front-end->Implement without using Redux + implement another version with redux-Use React hooks a number of places in the code
        -File upload to s3 or azure storages
        -Host app in cloud -heroku,aws,gcp or azure
        -Take a look at Formik for forms, malter for file uploads
        -Bootstrap or Materialize or Semantic UI for the front-end
        -MongoDB for the database
      
     
