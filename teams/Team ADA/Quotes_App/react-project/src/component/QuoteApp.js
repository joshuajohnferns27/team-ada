import React, { useEffect } from "react";
import $ from "jquery";
import axios from "axios";

const QuoteApp = () => {
  useEffect(() => {
    BtnFunction();
    ForAuthor();
    SearchButton();
    addLisHandlers();
    getQuoteOfDay();
  });

  const BtnFunction = () => {
    fetch("https://quote-api-app.herokuapp.com/quote")
      .then((data) => {
        //console.log(data);
        return data.json(); //converted to object
      })
      .then((ok) => {
        // console.log(ok[0]);
        let list = "";
        ok.forEach((values) => {
          list += `   
                  <h5>"${values.quote}"</h5>
                  <p><b >&nbsp~${values.author}</b></p>
                  <li>Likes:&nbsp${values.likes}</li>
                  <li>Dislikes:&nbsp${values.dislikes}</li>
                    <br>  <br>     
              `;
        });
        document.getElementById("names").innerHTML = list;
      });
  };
  const ForAuthor = () => {
    fetch("https://quote-api-app.herokuapp.com/author")
      .then((dat) => {
        //console.log(data);
        return dat.json(); //converted to object
      })
      .then((o) => {
        // console.log(o[0]);
        let lis = "";
        o.forEach((value) => {
          lis += ` 
          <li><a href="#author_Name">${value}</a></li>
               `;
        });
        document.getElementById("name").innerHTML = lis;
        addLisHandlers();
      });
  };

  function addLisHandlers() {
    var lis = document.getElementById("name");
    var rows = lis.getElementsByTagName("a");
    //console.log(rows);
    for (var i = 0; i < rows.length; i++) {
      var currentRow = rows[i];
      const createClickHandler = function (row) {
        console.log("helloooooo");

        return function () {
          console.log("test");
          var author = row.innerHTML;
          document.getElementById("input").value = author;
          SearchButton();
        };
      };
      currentRow.onClick = createClickHandler(currentRow);
    }
  }

  const SearchButton = () => {
    console.log("call search");
    const url = "https://quote-api-app.herokuapp.com/quote/search?author=";
    const value = document.getElementById("input").value;
    const api = url + value;
    fetch(api)
      .then((data3) => {
        return data3.json();
      })
      .then((info) => {
        let list2 = "";
        info.forEach((values) => {
          list2 += `   
                      <h5>"${values.quote}"</h5>
                      <p><b >&nbsp${values.author}</b></p>
                      <li>Likes:&nbsp${values.likes}</li>
                      <li>Dislikes:&nbsp${values.dislikes}</li>
                       <br><br>    
                  `;
        });
        document.getElementById("names").innerHTML = list2;
      });
  };

  function getQuoteOfDay() {
    fetch("https://quote-api-app.herokuapp.com/quote")
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const now = new Date();
        const day = now.getDate();
        let roww = "";
        let quote = "";
        if (localStorage.getItem("date") == null) {
          quote = Math.floor(Math.random() * 102);
          sessionStorage.setItem("quote", quote);
          localStorage.setItem("date", day);
        } else {
          quote = sessionStorage.getItem("quote");
        }
        roww += `  <h2>Quote of the day</h2> <br/>  
              <h5>"${data[quote].quote}"</h5>
              <p><b >&nbsp~${data[quote].author}</b></p>
              <li>Likes:&nbsp${data[quote].likes}</li>
              <li>Dislikes:&nbsp${data[quote].dislikes}</li>
                <br>  <br>     
          `;
        document.getElementById("names").innerHTML = roww;
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newQuote = e.target.newQuote.value;
    axios
      .post("https://quote-api-app.herokuapp.com/quote/posts", { newQuote })
      .then((response) => {
        console.log(response);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid main">
        <h1>Software Quotes</h1>
        <div className="forbtn">
          <div className="btn-group tabs">
            <button id="bb" className="btn btn-default" onClick={BtnFunction}>
              Quotes
            </button>

            <button id="bb2" className="btn btn-default" onClick={ForAuthor}>
              Authors
            </button>
            <button
              id="bb3"
              className="btn btn-default"
              onClick={getQuoteOfDay}
            >
              home
            </button>
          </div>
        </div>
        <div className="newAdd">
          <form onSubmit={submitHandler}>
            <label>Add New Quote: </label>
            <input type="text" name="newQuote" />
            <button type="Enter">Add</button>
          </form>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col maincol">
            <p className="search2">Search by Author</p>
            <div className="search-bar">
              <input id="input" data-search></input>
              <button id="search" onClick={SearchButton}>
                Search
              </button>
              <br /> <br />
            </div>
            <div id="names"></div>
          </div>
          <div className="col maincol2" id="name"></div>
        </div>
      </div>
    </>
  );
};

$(document).ready(function () {
  $(".maincol2").hide();
});

$(document).ready(function () {
  $("#bb").click(function () {
    $(".maincol").show();
  });
});

$(document).ready(function () {
  $("#bb3").click(function (e) {
    $(".maincol").show();
    e.preventDefault();
  });
});
$(document).ready(function () {
  $("#bb2").click(function () {
    $(".maincol2").toggle();
  });
});
export default QuoteApp;
