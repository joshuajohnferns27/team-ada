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
  var author = "";
  const BtnFunction = () => {
    fetch("https://quote-api-app.herokuapp.com/quote")
      .then((data) => {
        //console.log(data);
        return data.json(); //converted to object
      })
      .then((ok) => {
        // console.log(ok[0]);
        let list = "";
        ok.map((values) => {
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
        o.map((value) => {
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
        return function () {
          author = row.innerHTML;
          document.getElementById("input").value = author;
          return SearchButton();
        };
      };
      currentRow.onClick = createClickHandler(currentRow);
    }
  }

  const SearchButton = () => {
    let users = [];
    const url = "https://quote-api-app.herokuapp.com/quote/search?author=";
    const value = document.getElementById("input").value;
    const api = url + value;
    fetch(api)
      .then((data3) => {
        return data3.json();
      })
      .then((info) => {
        users = info.map((users) => {
          //  console.log(info[0]);
          let list2 = "";
          info.map((values) => {
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
      .then((day) => {
        let roww = "";
        let quote = Math.floor(Math.random() * 102);
        //console.log("data", day[quote]);
        roww += `  <h2>Quote of the day</h2> <br/>  
              <h5>"${day[quote].quote}"</h5>
              <p><b >&nbsp~${day[quote].author}</b></p>
              <li>Likes:&nbsp${day[quote].likes}</li>
              <li>Dislikes:&nbsp${day[quote].dislikes}</li>
                <br>  <br>     
          `;
        document.getElementById("names").innerHTML = roww;

        /* localStorage.setItem("stay", day[quote].quote);
        document.getElementById("names").innerHTML =
          localStorage.getItem("stay");*/
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
