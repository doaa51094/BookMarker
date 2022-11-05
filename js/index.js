var bookMarketName=document.getElementById('siteName')
var websiteUrl=document.getElementById("siteUrl")
var bookList;
var siteName=document.getElementById("siteName")



if(localStorage.getItem('list')!=null){
  bookList=JSON.parse(localStorage.getItem('list'))
  console.log(bookList);
  displayBook(bookList)
}else{
  bookList=[]
}



function addBook(){
  if(siteName.value === ""){
    document.getElementById('nameError').innerText='you must fill the book market name'
    document.getElementById('nameError').classList.replace('d-none','d-block')

  }else{
    document.getElementById('nameError').classList.replace('d-block','d-none')
    document.getElementById('nameError').innerText='BookmarkName must start with capital letter, contains 1:10 characters'
  }
  if(siteUrl.value===""){
    document.getElementById('urlError').innerText='you must fill the url'
    document.getElementById('urlError').classList.replace('d-none','d-block')

  }else{
    document.getElementById('urlError').classList.replace('d-block','d-none')
    document.getElementById('urlError').innerText='Bookmark URL must start with: (www.), then any char and ends with (.com, .org or .net)'
  }

  if(validationName()&&validationUrl()){
    var book={
      name:bookMarketName.value,
      url:websiteUrl.value
    }
    clearForm()
    bookList.push(book)
    localStorage.setItem('list',JSON.stringify(bookList))
    displayBook()
  }
  
    }

    // display book list
 function displayBook(){
      var cartona=''
      for(var i=0;i<bookList.length;i++){
        cartona+=` <tr> <td><h3 class='fs-5 ps-5'>${bookList[i].name}</h3></td>
        <td><a class="btn btn-primary" href="http://${bookList[i].url}" target="_blank">visit</a></td>
    <td><button class="btn btn-danger btndelete"  onclick="Delete(${i})">Delete</button></td></tr>`
      }
      document.getElementById("bookData").innerHTML=cartona
    }
    // clear form 
function clearForm(){
  bookMarketName.value=''
  websiteUrl.value=''
}

// when delete row
function Delete(index){
  console.log(bookList);
 bookList.splice(index,1)
  displayBook(bookList)
  localStorage.setItem('list',JSON.stringify(bookList))
}

// validation bookMarket name
function validationName(){
  var regex=/^[A-Z][a-z]{1,10}$/gm
  if(regex.test(bookMarketName.value)){
    document.getElementById('nameError').classList.replace('d-block','d-none')
    return true
  }else{
    document.getElementById('nameError').classList.replace('d-none','d-block')
    return false
  }
  
}
// validation bookMarket url
function validationUrl(){
  var regex=/^(http|ftp|https)?(\:\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^!=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])+$/gmi
  if(regex.test(websiteUrl.value)){
    document.getElementById('urlError').classList.replace('d-block','d-none')
    return true
    
  }else{
    document.getElementById('urlError').classList.replace('d-none','d-block')
    return false
    
  }
}












    



