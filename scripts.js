function setLanguage(lang) {
    const englishContent = document.getElementById('english-content');
    const hindiContent = document.getElementById('hindi-content');
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');

    if (lang === 'en') {
        englishContent.style.display = 'block';
        hindiContent.style.display = 'none';
        headerTitle.textContent = 'Yojna Portal';
        headerSubtitle.textContent = 'This site is under progress, soon this website will look in a better view, stay tuned to Yojana Portal website';
    } else {
        englishContent.style.display = 'none';
        hindiContent.style.display = 'block';
        headerTitle.textContent = 'योजना पोर्टल';
        headerSubtitle.textContent = 'यह साइट प्रगति पर है, जल्द ही यह वेबसाइट बेहतर दृश्य में दिखेगी, योजना पोर्टल वेबसाइट पर बने रहें';
    }

    // Update language buttons active state
    document.querySelectorAll('.language-buttons button').forEach(btn => {
        btn.ariaPressed = btn.innerText === (lang === 'en' ? 'English' : 'हिंदी');
    });

    // Show the home category by default when switching languages
    showCategory('home');
}

function showCategory(category) {
    const currentLang = document.getElementById('english-content').style.display === 'block' ? 'en' : 'hi';
    const categories = document.querySelectorAll('.category-content');

    categories.forEach(cat => {
        cat.style.display = 'none';
    });

    document.getElementById(category + '-' + currentLang).style.display = 'block';

    // Update navbar active state
    document.querySelectorAll('.navbar a').forEach(nav => {
        nav.classList.remove('active');
    });
    document.querySelector(`.navbar a[href="#${category}"]`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    setLanguage('en'); // Default language is English
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


<script>
  function myFunction() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }

<script>
  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
</script>
