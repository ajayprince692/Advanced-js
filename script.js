setTimeout(() => {
  console.log("10");
  document.getElementById("count").innerText = "10";
  setTimeout(() => {
    console.log("9");
    document.getElementById("count").innerText = "9";
    setTimeout(() => {
      console.log("8");
      document.getElementById("count").innerText = "8";
      setTimeout(() => {
        console.log("7");
        document.getElementById("count").innerText = "7";
        setTimeout(() => {
          console.log("6");
          document.getElementById("count").innerText = "6";
          setTimeout(() => {
            console.log("5");
            document.getElementById("count").innerText = "5";
            setTimeout(() => {
              console.log("4");
              document.getElementById("count").innerText = "4";
              setTimeout(() => {
                console.log("3");
                document.getElementById("count").innerText = "3";
                setTimeout(() => {
                  console.log("2");
                  document.getElementById("count").innerText = "2";
                  setTimeout(() => {
                    console.log("1");
                    document.getElementById("count").innerText = "1";
                    setTimeout(() => {
                      console.log("Happy dependence day");
                      document.getElementById("count").innerText =
                        "Happy independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
