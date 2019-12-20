function show_div(div_id) {
      // hide all the divs
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'none';
      //document.getElementById('part7').style.display = 'none';
      // show the requested div
      document.getElementById(div_id).style.display = 'block';
    }
    function build_four(div_id) {
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';

      var content_4 = "<h2>";
      content_4 += document.getElementById("name").value;
      content_4 += "</h2>";
      var n1 = document.getElementById("number").value;

      var amt = n1 * 25;
      content_4 += amt;
      document.getElementById("x").innerHTML = amt;
      document.getElementById("four").innerHTML = content_4;
      document.getElementById(div_id).style.display = 'block';
    }



    function build_three(div_id) {
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      var content_3 = "this is some information";

      document.getElementById("h2_content").innerHTML = content_3;

      document.getElementById(div_id).style.display = 'block';
    }
