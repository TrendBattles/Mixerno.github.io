setTimeout(function() {
    //location.reload();
  }, 7200000);
  var randomNumber = Math.floor(Math.random()*textArray.length);
  var stufflol = "";
  stufflol = textArray[randomNumber];
  var corsurl = stufflol //required works only in mixerno.github.io/ | Sorry.
 
  var key = "";
  key = textArray[randomNumber]
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = '' + options.url;
      setInterval(function() {
        var randomNumber = Math.floor(Math.random()*textArray.length);

        key = textArray[randomNumber];
      }, 1000);
    }
  });
  var parms = window.location.href;
    var params = parms.split('?');
  $(document).ready(function() {
    $('#whitee').click(function() {
      $('body').css('color', 'black');
      $('body').css('background-color', 'white');
      console.log("White theme activated");
      location.href = `${params[0]}?${params[1]}?1?${params[3]}`;
    });
    $('#blackk').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'black');
      console.log("Black theme activated");
      location.href = `${params[0]}?${params[1]}?2?${params[3]}`;
    });
    $('#transparent1').click(function() {
      $('body').css('color', 'white');
      $('body').css('background-color', 'transparent');
      console.log("transparent1 activated");
      location.href = `${params[0]}?${params[1]}?3?${params[3]}`;
    });
    $('#transparent2').click(function() {
      $('body').css('color', 'black');
      $('body').css('background-color', 'transparent');
      console.log("transparent2 activated");
      location.href = `${params[0]}?${params[1]}?4?${params[3]}`;
    });
    
    var stuff = new Highcharts.chart('container', {
      chart: {
        backgroundColor: 'transparent',
        renderTo: container,
        type: 'spline'
      },
      title: {
        text: `Follower graph`,
        style: {
          color: '#1E90FF',
          fontWeight: 'bold'
        }

      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 500
      },
      yAxis: {
        title: {
          text: ''
        }
      },
  
      credits: {
        enabled: false
      },
  
      series: [{
        name: 'Followers',
        marker: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        labels: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
  
      }]
    })

    
    var fans2 = "not using here sorry bois.";
    var chanelid = "no";
    usernamelol(params[1]);




    function usernamelol() {
      url1 = `${key}https://mixer.com/api/v1/channels/${params[1]}/details`,
      url2 = `${key}https://freewebtools.com/compteur-youtube/?channelId=` + params[1],
      url3 = `${key}https://api.thesocialcounter.com/twitter/?name=` + params[1],
      url3x = `https://bastet.socialblade.com/twitter/lookup?query=` + params[1],
      url4 = `${key}https://api.dailymotion.com/users?usernames=${params[1]}&fields=screenname%2Cverified%2Curl%2Cdescription%2Cavatar_720_url%2Ccover_url%2Ccountry%2Cfollowers_total%2Cfollowing_total%2Cplaylists_total%2Cvideos_total%2Cviews_total%2Cid`,
      url5 = `${key}https://storyfire.com/app/users/getProfile/` + params[1],
      url6 = `${key}https://mixernobest.herokuapp.com/tiktok/@` + params[1],
      url7 = `${key}https://mixernobest.herokuapp.com/ytestimate2/@` + params[1],
      url8 = `${key}https://blastup.com/instagram/info?username=` + params[1]
      //url8 = `https://blastup.com/instagram/info?username=` + params[1]
      //url8 = `${key}https://blastup.com/instagram/info?username=` + params[1]


      if(params[3] == "mixer") {
        $.getJSON(url1, function(data) {
          fans1.innerHTML = Math.floor(data.numFollowers)
  name1.innerHTML = data.token;
  $("#img1").attr('src', `${data.user.avatarUrl}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.numFollowers)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "youtube") {
        $.getJSON(url2, function(data) {
          fans1.innerHTML = Math.floor(data.count)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.avatarurl}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.count)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "twitter") {
        $.getJSON(url3, function(data) {
          
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.profile_image_url_https}`);
  
          
         

      });
      $.getJSON(url3x, function(data) {
          
        fans1.innerHTML = Math.floor(data)
        stuff.series[0].addPoint([
          (new Date()).getTime(),
          Math.floor(data)
        ]);
      
        if (stuff.series[0].data.length >= 700) {
        stuff.series[0].data[0].remove()
      }
                
               
      
            });
      }
      if(params[3] == "dailymotion") {
        $.getJSON(url4, function(data) {
          fans1.innerHTML = Math.floor(data.list[0].followers_total)
  name1.innerHTML = data.list[0].screenname;
  $("#img1").attr('src', `${data.list[0].avatar_720_url}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.list[0].followers_total)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "storyfire") {
        $.getJSON(url5, function(data) {
          fans1.innerHTML = Math.floor(data.followersCount)
  name1.innerHTML = data.username;
  $("#img1").attr('src', `${data.userimage}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.followersCount)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "tiktok") {
        $.getJSON(url6, function(data) {
          fans1.innerHTML = Math.floor(data.body.userData.fans)
  name1.innerHTML = data.body.userData.nickName;
  $("#img1").attr('src', `${data.body.userData.covers[0]}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.body.userData.fans)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      if(params[3] == "ytestimation2") {
        $.getJSON(url7, function(data) {
          fans1.innerHTML = Math.floor(data.count)
  name1.innerHTML = data.name;
  $("#img1").attr('src', `${data.avatarurl}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    Math.floor(data.count)
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }
      var temporary1 = 0;
      var temporary2 = 0;
      if(params[3] == "instagram") {
        $.getJSON(url8, function(data) {
          temporary1 = (data.data.followers).replace(/,/g, "")
          fans1.innerHTML = temporary1
          console.log(temporary1);
  name1.innerHTML = data.data.username;
  $("#img1").attr('src', `${data.data.profile_picture}`);
  stuff.series[0].addPoint([
    (new Date()).getTime(),
    temporary1
  ]);

  if (stuff.series[0].data.length >= 700) {
  stuff.series[0].data[0].remove()
}
          
         

      });
      }



    }






    setInterval(usernamelol, 4000)






  });
  if(params[2] == 1) {
    $('body').css('color', 'black');
    $('body').css('background-color', 'white');
    console.log("White theme activated")
  }
  if(params[2] == 2) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'black');
    console.log("Black theme activated")
  
  }
  if(params[2] == 3) {
  
    $('body').css('color', 'white');
    $('body').css('background-color', 'transparent');
    console.log("transparent1 activated")
  
  }
  if(params[2] == 4) {
  
    $('body').css('color', 'black');
    $('body').css('background-color', 'transparent');
    console.log("transparent2 activated")
  
  }
