enchant()

function Load(width,height){
  var core = new Core(width, height);
  core.preload("sound.wav");
  core.preload("image/Round.png");
  core.preload("image/title.png");
  core.preload("image/white.png");
  core.preload("image/Buttons.png");
  core.preload("image/Trophies.png");
  core.preload("image/Background.png");
  core.preload("image/Characters.png");
  core.preload("image/Transparent.png");
  core.preload("image/Trophies_image.png");
  for (var i = 0; i <= 7; i++){
    core.preload("image/背景/"+i+".png");
  }
  core.fps = 100;
  core.onload = function(){
    if(window.localStorage.getItem("syoken")!="false"){
      var Data = false;
      var Flag = [false,false];
      window.localStorage.setItem("flag",Flag);
      window.localStorage.setItem("gender","男");
      window.localStorage.setItem("name","");
      window.localStorage.setItem("surname","");
    }
    else var Data = true;

    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }

    function Scene_loads(Number,Datas,Return,Flag){
      var Name = window.localStorage.getItem("name");
      var Gender = window.localStorage.getItem("gender");
      var Surname = window.localStorage.getItem("surname");
      if(Datas!=false){
        if(Datas.length==20){
          if(Datas[13]!=false) Datas[13] = Number-1;
          if(Datas[17]!=false) Datas[17] = Number+1;
        }
        else if(Datas[17]!=false) Datas[11] = Number-1;
      }
      else var Datas = [0,0,0,0,0,0,0,0,"？？？","…",Number-1,0,Number,0,Number+1,false,0];
      //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
      //(背景,左,frame,中,frame,右,frame,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
      var Datas_c = [0,false,0,false,0,false,0,false,false,false,false,0,0,Number,0,0,0,0];
      if(Number=="セーブ読み込み"){
        var Datas = window.localStorage.getItem("datas").split(",");
        if(Datas.length==17){
          //(背景,背景時間,(キャラ番号,ポーズ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          for (var i = 0; i <17 ; i++){
            if(i==8||i==9) continue;
            if(Datas[i]=="false") Datas[i] = false;
            else if(i!=15) Datas[i] = Datas[i]*1;
          }
          if(Datas[12]!=false) Number = Datas[12];
        }
        else Number = Datas[14]*1;
        console.log(Datas);
        Flag = window.localStorage.getItem("flag").split(",");
        for (var i = 0; i < Flag.length; i++){
          if(Flag[i]=="true") Flag[i] = true;
          else Flag[i] = false;
        }
      }
      if(Datas.length==17){
        Datas[3] = 0;
        Datas[5] = 0;
        Datas[7] = 0;
        if(Datas[12]!=false) Datas[12] = Number;
      }
      var Result1 = core.Mainscene_datas;
      var Result2 = core.Choicescene_datas;
      var Result3 = core.Inspectscene_datas;
      for (var i = 0; i < Result1.length; i++){
        if(Number == Result1[i].現在のシーン){
          Result1[i].文章 = Result1[i].文章.replace(/\(苗字\)/g,Surname).replace(/\(名前\)/g,Name);;
          Result1[i].名前 = Result1[i].名前.replace(/\(苗字\)/g,Surname).replace(/\(名前\)/g,Name);;
          Datas[0] = Result1[i].背景ナンバー;
          Datas[1] = Result1[i].背景が現れるまでの時間;
          Datas[2] = Result1[i].左のキャラナンバー;
          Datas[3] = Result1[i].左のキャラが現れるまでの時間;
          Datas[4] = Result1[i].真ん中のキャラナンバー;
          Datas[5] = Result1[i].真ん中のキャラが現れるまでの時間;
          Datas[6] = Result1[i].右のキャラナンバー;
          Datas[7] = Result1[i].右のキャラが現れるまでの時間;
          Datas[8] = Result1[i].名前;
          Datas[9] = Result1[i].文章;
          Datas[10] = Result1[i].戻るボタンで飛ぶシーン;
          Datas[11] = Result1[i].戻るボタン2で飛ぶシーン;
          Datas[12] = Result1[i].現在のシーン;
          Datas[13] = Result1[i].スキップボタンで飛ぶシーン;
          Datas[14] = Result1[i].次のボタンで飛ぶシーン;
          Datas[15] = Result1[i].トロフィー;
          Datas[16] = Result1[i].トロフィー画像ナンバー;
          core.replaceScene(MainScene(Datas,Return,Flag));
          return;
        }
      }
      for (var i = 0; i < Result2.length; i++){
        if(Number == Result2[i].現在のシーン){
          Datas[0] = Result2[i].背景ナンバー;
          Datas[1] = Result2[i].左のキャラナンバー;
          Datas[2] = Result2[i].真ん中のキャラナンバー;
          Datas[3] = Result2[i].右のキャラナンバー;
          Datas[4] = Result2[i].選択肢1;
          Datas[5] = Result2[i].選択肢2;
          Datas[6] = Result2[i].選択肢3;
          Datas[7] = Result2[i].選択肢4;
          Datas[8] = Result2[i].選択肢1ボタンで飛ぶシーン;
          Datas[9] = Result2[i].選択肢2ボタンで飛ぶシーン;
          Datas[10] = Result2[i].選択肢3ボタンで飛ぶシーン;
          Datas[11] = Result2[i].選択肢4ボタンで飛ぶシーン;
          Datas[12] = Result2[i].戻るボタンで飛ぶシーン;
          Datas[13] = Result2[i].戻るボタン2で飛ぶシーン;
          Datas[14] = Result2[i].現在のシーン;
          core.replaceScene(ChoiceScene(Datas,false,Flag));
          return;
        }
      }
      switch (Number) {
        case -7:
        Datas = [0,0,0,0,0,0,0,0,"？？？","ホレ。",Number+1,-1,0,0,"ゲームオーバー","説明用",0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -6:
        Datas = [0,0,0,0,0,0,0,0,"？？？","試しにならしてみようかね。",Number+1,-1,0,0,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -5:
        Datas = [0,0,0,0,0,0,0,0,"？？？","個人的にトロフィー機能がお気に入り。",Number+1,-1,0,-7,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -4:
        Datas = [0,0,0,0,0,0,0,0,"？？？","…………説明いる？",Number+1,-1,0,-7,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -3:
        Datas = [0,0,0,0,0,0,0,0,"？？？","………",Number+1,-1,0,-7,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -2:
        Datas = [0,0,0,0,0,0,0,0,"？？？","……",Number+1,0,0,-7,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case -1:
        Datas = [0,0,0,0,0,0,0,0,"？？？","…",Number+1,0,0,-7,Number-1,false,0];
        core.replaceScene(MainScene(Datas,Return,Flag));
        break;
        case "タイトルに戻る":
          core.replaceScene(TitleScene());
          break;
        case "ゲームオーバー":
          //(背景,左,中,右,C1,C2,C3,C4,1,2,3,4,前,一番前,現在)
          Datas = [0,0,0,0,"タイトルに戻る",0,0,0,"タイトルに戻る","セーブ読み込み",0,0,0,0,Number];
          if(window.localStorage.getItem("Save")=="マニュアル") Datas[5] = "セーブ読み込み";
          core.replaceScene(ChoiceScene(Datas,Flag));
          break;
        default:
          //(背景,背景時間,(キャラ番号,時間)*3,名前,文章,戻る1,戻る2,設定,スキップ,次のシーン,トロフィー,トロフィー画像
          Datas = [0,0,0,0,0,0,0,0,"","ここから先はできていません。",0,0,0,0,"ゲームオーバー",false,0];
          core.replaceScene(MainScene(Datas,Return,Flag));
          break;
      }
    }
    function Inspect_loads(Number,Flag){
      var Result3 = core.Inspectscene_datas;
      var Name = window.localStorage.getItem("name");
      var Datas = [];
      for (var i = 0; i < Result3.length; i++){
        if(Number == Result3[i].シーンナンバー){
          Result3[i].名前1 = Result3[i].名前1.replace(/\(名前\)/g,Name);
          Result3[i].名前2 = Result3[i].名前2.replace(/\(名前\)/g,Name);
          Result3[i].名前3 = Result3[i].名前3.replace(/\(名前\)/g,Name);
          Result3[i].名前4 = Result3[i].名前4.replace(/\(名前\)/g,Name);
          Datas[0] = Result3[i].背景;
          Datas[1] = Result3[i].幅1;
          Datas[2] = Result3[i].高1;
          Datas[3] = Result3[i].x1;
          Datas[4] = Result3[i].y1;
          Datas[5] = Result3[i].名前1;
          Datas[6] = Result3[i].テキスト1;
          Datas[7] = Result3[i].幅2;
          Datas[8] = Result3[i].高2;
          Datas[9] = Result3[i].x2;
          Datas[10] = Result3[i].y2;
          Datas[11] = Result3[i].名前2;
          Datas[12] = Result3[i].テキスト2;
          Datas[13] = Result3[i].幅3;
          Datas[14] = Result3[i].高3;
          Datas[15] = Result3[i].x3;
          Datas[16] = Result3[i].y3;
          Datas[17] = Result3[i].名前3;
          Datas[18] = Result3[i].テキスト3;
          Datas[19] = Result3[i].幅4;
          Datas[20] = Result3[i].高4;
          Datas[21] = Result3[i].x4;
          Datas[22] = Result3[i].y4;
          Datas[23] = Result3[i].名前4;
          Datas[24] = Result3[i].テキスト4;
          core.pushScene(InspectScene(Datas,Flag));
          return;
        }
      }
    }
    var TitleScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Title = new Sprite(1600,900);
      Title.image = core.assets["image/title.png"];
      Title.x = 0;
      Title.y = 0;
      scene.addChild(Title);

      var Beginning = new Label();
      Beginning.font  = "60px monospace";
      Beginning.color = 'black';
      Beginning.x = 0;
      Beginning.y = 960;
      Beginning.width = 1600;
      Beginning.height = 60;
      Beginning.text = "▶ 最初から";
      scene.addChild(Beginning);

      var Continuation = new Label();
      Continuation.font  = "60px monospace";
      Continuation.color = 'black';
      Continuation.x = 0;
      Continuation.y = 1040;
      Continuation.width = 1600;
      Continuation.height = 60;
      Continuation.text = "▶ 説明";
      if(Data) Continuation.text = "▶ 続きから";
      scene.addChild(Continuation);

      var Explanation = new Label();
      Explanation.font  = "60px monospace";
      Explanation.color = 'black';
      Explanation.x = 0;
      Explanation.y = 1120;
      Explanation.width = 1600;
      Explanation.height = 60;
      Explanation.text = "▶ 説明";
      if(Data) scene.addChild(Explanation);

      Beginning.addEventListener('touchstart',function(e){
        Scene_loads(1,false);
      });

      Continuation.addEventListener('touchstart',function(e){
        if(Continuation.text == "▶ 説明") Scene_loads(-1,false);
        else Scene_loads("セーブ読み込み",false);
      });

      Explanation.addEventListener('touchstart',function(e){
        Scene_loads(-1,false);
      });

      return scene;
    };
    var MainScene = function(Datas,Return,Flag){
      var scene = new Scene();                                // 新しいシーンを作る
      if(window.localStorage.getItem("Save")!="マニュアル"&&Datas[12]!=false&&Datas[12]!=1){
        console.log(Flag);
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("datas",Datas);
      }

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      if(Datas[1]!=0){
        Background.opacity = 0;
        Background.tl.fadeIn(Datas[1]);
      }
      scene.addChild(Background);//背景

      if(Datas[2]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/Characters.png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[2];
        if(Datas[3]!=0&&Return!=true){
          Character1.opacity = 0;
          Character1.tl.fadeIn(Datas[3]);
        }
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[6]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/Characters.png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[6];
        if(Datas[7]!=0&&Return!=true){
          Character3.opacity = 0;
          Character3.tl.fadeIn(Datas[7]);
        }
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[4]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/Characters.png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[4];
        if(Datas[5]!=0&&Return!=true){
          Character2.opacity = 0;
          Character2.tl.fadeIn(Datas[5]);
        }
        scene.addChild(Character2);
      }//キャラ真ん中

      if(Datas[8]!=""){
        var C_name = new Label();
        C_name.font  = "60px monospace";
        C_name.color = 'black';
        C_name.x = 0;
        C_name.y = 960;
        C_name.width = 1600;
        C_name.height = 60;
        C_name.text = "【" + Datas[8] + "】";
        scene.addChild(C_name);//キャラ名
      }

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = Datas[9];
      scene.addChild(Text);//テキスト

      if(Datas[10]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[10],Datas,true,Flag);
        });
      } //戻る1

      if(Datas[11]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[11],Datas,true,Flag);
        });
      }//戻る2

      if(Datas[12]!=false){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas,Flag));
          scene.addChild(Enter2);
        });
      }//設定

      if(Datas[13]!=false){
        var Enter1 = new Sprite(320,60);
        Enter1.image = core.assets["image/Buttons.png"];
        Enter1.x = 960;
        Enter1.y = height-65;
        Enter1.frame = 3;
        scene.addChild(Enter1);
        Enter1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],Datas,false,Flag);
        });
      }//スキップ

      var Enter2 = new Sprite(320,60);
      Enter2.image = core.assets["image/Buttons.png"];
      Enter2.x = 1280;
      Enter2.y = height-65;
      Enter2.frame = 4;
      scene.addChild(Enter2);
      Enter2.addEventListener('touchstart',function(e){
        Scene_loads(Datas[14],Datas,false,Flag);
      });//進む

      if(Datas[15]!=false){
        if(window.localStorage.getItem(Datas[15])==undefined){
          if(Datas[12]!=false) window.localStorage.setItem(Datas[15],"獲得！");
          var Time = 0;
          var Trophies = new Sprite(443,113);
          Trophies.image = core.assets["image/Trophies.png"];
          Trophies.x = width-463;
          Trophies.y = 20;
          Trophies.opacity = 0;
          Trophies.tl.fadeIn(5);
          scene.addChild(Trophies);
          var Trophies_image = new Sprite(88,85);
          Trophies_image.image = core.assets["image/Trophies_image.png"];
          Trophies_image.x = width-453;
          Trophies_image.y = 35;
          Trophies_image.frame = Datas[16];
          Trophies_image.opacity = 0;
          Trophies_image.tl.fadeIn(5);
          scene.addChild(Trophies_image);
          var Trophies_text = new Label();
          Trophies_text.font  = "30px monospace";
          Trophies_text.color = 'white';
          Trophies_text.x = width-453+145;
          Trophies_text.y = 90;
          Trophies_text.width = 1600;
          Trophies_text.height = 30;
          Trophies_text.opacity = 0;
          Trophies_text.tl.fadeIn(5);
          Trophies_text.text = Datas[15];
          scene.addChild(Trophies_text);
          core.assets["sound.wav"].play();
          Trophies.addEventListener("enterframe",function(){
            Time++;
            if(Time==50){
              Trophies.tl.fadeOut(5);
              Trophies_image.tl.fadeOut(5);
              Trophies_text.tl.fadeOut(5);
            }
          })
        }
      }//トロフィー*/
      return scene;
    };
    var ChoiceScene = function(Datas,Datas_M,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("Save")!="マニュアル"&Datas[14]!="ゲームオーバー"){
        console.log(Flag);
        window.localStorage.setItem("flag",Flag);
        window.localStorage.setItem("datas",Datas);
      }
      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      if(Datas[1]!=false){
        var Character1 = new Sprite(800,900);
        Character1.image = core.assets["image/Characters.png"];
        Character1.x = 0;
        Character1.y = 0;
        Character1.frame = Datas[1];
        scene.addChild(Character1);
      }//キャラ左

      if(Datas[3]!=false){
        var Character3 = new Sprite(800,900);
        Character3.image = core.assets["image/Characters.png"];
        Character3.x = 800;
        Character3.y = 0;
        Character3.frame = Datas[3];
        scene.addChild(Character3);
      }//キャラ右

      if(Datas[2]!=false){
        var Character2 = new Sprite(800,900);
        Character2.image = core.assets["image/Characters.png"];
        Character2.x = 400;
        Character2.y = 0;
        Character2.frame = Datas[2];
        scene.addChild(Character2);
      }//キャラ真ん中

      if(Datas[4]!=false){
        var C1 = new Label();
        C1.font  = "60px monospace";
        C1.color = 'black';
        C1.x = 0;
        C1.y = 960;
        C1.width = 1600;
        C1.height = 60;
        C1.text = "▶ " + Datas[4];
        scene.addChild(C1);
        C1.addEventListener('touchstart',function(e){
          if(C1.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[8],false,false,Flag);
        });
      }

      if(Datas[5]!=false){
        var C2 = new Label();
        C2.font  = "60px monospace";
        C2.color = 'black';
        C2.x = 0;
        C2.y = 1060;
        C2.width = 1600;
        C2.height = 60;
        C2.text = "▶ " + Datas[5];
        scene.addChild(C2);
        C2.addEventListener('touchstart',function(e){
          if(C2.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[9],false,false,Flag);
        });
      }

      if(Datas[6]!=false){
        var C3 = new Label();
        C3.font  = "60px monospace";
        C3.color = 'black';
        C3.x = 0;
        C3.y = 1160;
        C3.width = 1600;
        C3.height = 60;
        C3.text = "▶ " + Datas[6];
        scene.addChild(C3);
        C3.addEventListener('touchstart',function(e){
          if(C3.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[10],false,false,Flag);
        });
      }

      if(Datas[7]!=false){
        var C4 = new Label();
        C4.font  = "60px monospace";
        C4.color = 'black';
        C4.x = 0;
        C4.y = 1260;
        C4.width = 1600;
        C4.height = 60;
        C4.text = "▶ " + Datas[7];
        scene.addChild(C4);
        C4.addEventListener('touchstart',function(e){
          if(C4.text == "▶ 調べる") Inspect_loads(Datas[14],Flag);
          else Scene_loads(Datas[11],false,false,Flag);
        });
      }

      if(Datas[12]!=false){
        var Return1 = new Sprite(320,60);
        Return1.image = core.assets["image/Buttons.png"];
        Return1.x = 0;
        Return1.y = height-65;
        Return1.frame = 0;
        scene.addChild(Return1);
        Return1.addEventListener('touchstart',function(e){
          Scene_loads(Datas[12],Datas_M,true,Flag);
        });
      } //戻る1

      if(Datas[13]!=false){
        var Return2 = new Sprite(320,60);
        Return2.image = core.assets["image/Buttons.png"];
        Return2.x = 320;
        Return2.y = height-65;
        Return2.frame = 1;
        scene.addChild(Return2);
        Return2.addEventListener('touchstart',function(e){
          Scene_loads(Datas[13],Datas_M,true,Flag);
        });
      }//戻る2

      if(Datas[14]!="ゲームオーバー"){
        var Settings = new Sprite(320,60);
        Settings.image = core.assets["image/Buttons.png"];
        Settings.x = 640;
        Settings.y = height-65;
        Settings.frame = 2;
        scene.addChild(Settings);
        Settings.addEventListener('touchstart',function(e){
          core.pushScene(SettingScene(Datas,Flag));
        });
      }

      return scene;
    };
    var SettingScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      if(window.localStorage.getItem("name")==""){
        window.localStorage.setItem("name","十代")
        window.localStorage.setItem("surname","遊城")
      }

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 200;
      Text.y = 200;
      Text.width = 1600;
      Text.height = 60;
      Text.text = "▶ 設定を閉じる";
      scene.addChild(Text);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 200;
      Text2.y = 300;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "▶ タイトルに戻る";
      scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 400;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "▶ セーブ方法の切り替え";
      scene.addChild(Text3);

      var Text4 = new Label();
      Text4.font  = "60px monospace";
      Text4.color = 'black';
      Text4.x = 200;
      Text4.y = 500;
      Text4.width = 1600;
      Text4.height = 60;
      if(window.localStorage.getItem("Save")=="マニュアル") Text4.text = "▶ セーブする";
      else Text4.text = "現在はオートセーブです。";
      scene.addChild(Text4);

      var Text5 = new Label();
      Text5.font  = "60px monospace";
      Text5.color = 'black';
      Text5.x = 200;
      Text5.y = 600;
      Text5.width = 1600;
      Text5.height = 60;
      Text5.text = "セーブしました。";

      var Text6 = new Label();
      Text6.font  = "60px monospace";
      Text6.color = 'black';
      Text6.x = 200;
      Text6.y = 900;
      Text6.width = 1600;
      Text6.height = 60;
      Text6.text = "性別";
      scene.addChild(Text6);

      var Text7 = new Label();
      Text7.font  = "60px monospace";
      Text7.color = 'black';
      Text7.x = 200;
      Text7.y = 1000;
      Text7.width = 1600;
      Text7.height = 60;
      Text7.text = "姓";
      scene.addChild(Text7);

      var S_Input = new Entity();
      S_Input.moveTo(270,1000);
      S_Input.width = 190;
      S_Input.height = 60;
      S_Input._element = document.createElement('input');
      S_Input._element.type = "text";
      S_Input._element.name = "myText";
      S_Input._element.value = window.localStorage.getItem("surname");
      S_Input._element.placeholder = "姓を入力";
      scene.addChild(S_Input);

      var Text8 = new Label();
      Text8.font  = "60px monospace";
      Text8.color = 'black';
      Text8.x = 200;
      Text8.y = 1100;
      Text8.width = 1600;
      Text8.height = 60;
      Text8.text = "名";
      scene.addChild(Text8);

      var S_Input2 = new Entity();
      S_Input2.moveTo(270,1100);
      S_Input2.width = 190;
      S_Input2.height = 60;
      S_Input2._element = document.createElement('input');
      S_Input2._element.type = "text";
      S_Input2._element.name = "myText";
      S_Input2._element.value = window.localStorage.getItem("name");
      S_Input2._element.placeholder = "名を入力";
      scene.addChild(S_Input2);

      var Text9 = new Label();
      Text9.font  = "60px monospace";
      Text9.color = 'black';
      Text9.x = 400;
      Text9.y = 900;
      Text9.width = 1600;
      Text9.height = 60;
      Text9.text = "男";
      scene.addChild(Text9);

      var Text10 = new Label();
      Text10.font  = "60px monospace";
      Text10.color = 'black';
      Text10.x = 500;
      Text10.y = 900;
      Text10.width = 1600;
      Text10.height = 60;
      Text10.text = "女";
      scene.addChild(Text10);

      var Text11 = new Label();
      Text11.font  = "60px monospace";
      Text11.color = 'black';
      Text11.x = 200;
      Text11.y = 1200;
      Text11.width = 1600;
      Text11.height = 60;
      Text11.text = "▶ 設定する";
      scene.addChild(Text11);

      var Text12 = new Label();
      Text12.font  = "60px monospace";
      Text12.color = 'black';
      Text12.x = 200;
      Text12.y = 1300;
      Text12.width = 1600;
      Text12.height = 60;
      Text12.text = "設定しました。";

      var Text13 = new Label();
      Text13.font  = "60px monospace";
      Text13.color = 'black';
      Text13.x = 800;
      Text13.y = 200;
      Text13.width = 1600;
      Text13.height = 60;
      Text13.text = "▶ 獲得トロフィー";
      scene.addChild(Text13);

      var Round = new Sprite(60,60);
      Round.image = core.assets["image/Round.png"];
      if(window.localStorage.getItem("gender")=="女"){
        Round.x = Text10.x;
        Round.y = Text10.y;
      }
      else{
        Round.x = Text9.x;
        Round.y = Text9.y;
      }
      scene.addChild(Round);

      Text.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      Text2.addEventListener('touchstart',function(e){
        core.popScene();
        Scene_loads("タイトルに戻る",false);
        return;
      });

      Text3.addEventListener('touchstart',function(e){
        if(window.localStorage.getItem("Save")=="マニュアル"){
          window.localStorage.setItem("Save","オート");
          Text4.text = "現在はオートセーブです。";
          scene.removeChild(Text5);
        }
        else{
          window.localStorage.setItem("Save","マニュアル");
          Text4.text = "▶ セーブする";
        }
        return;
      });

      Text4.addEventListener('touchstart',function(e){
        if(Text4.text == "▶ セーブする"){
          console.log(Flag);
          window.localStorage.setItem("flag",Flag);
          window.localStorage.setItem("datas",Datas);
          core.assets["sound.wav"].play();
          scene.addChild(Text5);
        }
        return;
      });

      Text9.addEventListener('touchstart',function(e){
        Round.x = Text9.x;
        Round.y = Text9.y;
        return;
      });

      Text10.addEventListener('touchstart',function(e){
        Round.x = Text10.x;
        Round.y = Text10.y;
        return;
      });

      Text11.addEventListener('touchstart',function(e){
        window.localStorage.setItem("surname",S_Input._element.value);
        window.localStorage.setItem("name",S_Input2._element.value);
        if(Round.x == Text9.x){
          window.localStorage.setItem("gender","男");
          if(S_Input._element.value=="") window.localStorage.setItem("surname","遊城");
          if(S_Input2._element.value=="") window.localStorage.setItem("name","十代");
        }
        else{
          window.localStorage.setItem("gender","女");
          if(S_Input._element.value=="") window.localStorage.setItem("surname","湊");
          if(S_Input2._element.value=="") window.localStorage.setItem("name","みお");
        }
        core.assets["sound.wav"].play();
        scene.addChild(Text12);
        return;
      });

      Text13.addEventListener('touchstart',function(e){
        core.pushScene(TrophiesScene());
        return;
      });

      return scene;
    };
    var TrophiesScene = function(){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,1600);
      Background.image = core.assets["image/Background.png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 200;
      Text.y = 200;
      Text.width = 1600;
      Text.height = 60;
      Text.text = "▶ 戻る";
      scene.addChild(Text);

      var Text2 = new Label();
      Text2.font  = "60px monospace";
      Text2.color = 'black';
      Text2.x = 200;
      Text2.y = 300;
      Text2.width = 1600;
      Text2.height = 60;
      Text2.text = "通り魔";
      if(window.localStorage.getItem("通り魔")!=undefined) scene.addChild(Text2);

      var Text3 = new Label();
      Text3.font  = "60px monospace";
      Text3.color = 'black';
      Text3.x = 200;
      Text3.y = 400;
      Text3.width = 1600;
      Text3.height = 60;
      Text3.text = "マグロ化";
      if(window.localStorage.getItem("マグロ化")!=undefined) scene.addChild(Text3);

      Text.addEventListener('touchstart',function(e){
        core.popScene();
        return;
      });

      return scene;
    };
    var InspectScene = function(Datas,Flag){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/背景/"+ Datas[0] +".png"];
      Background.x = 0;
      Background.y = 0;
      scene.addChild(Background);

      var Background2 = new Sprite(1600,900);
      Background2.image = core.assets["image/white.png"];
      Background2.x = 0;
      Background2.y = 900;
      scene.addChild(Background2);

      if(Datas[5]!=false){
        var Background3 = new Sprite(Datas[1],Datas[2]);
        Background3.image = core.assets["image/Transparent.png"];
        Background3.x = Datas[3];
        Background3.y = Datas[4];
        scene.addChild(Background3);
        Background3.addEventListener('touchstart',function(e){
          if(Datas[5]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[6],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[5],Datas[6]));
        });
      }

      if(Datas[11]!=false){
        var Background4 = new Sprite(Datas[7],Datas[8]);
        Background4.image = core.assets["image/Transparent.png"];
        Background4.x = Datas[9];
        Background4.y = Datas[10];
        scene.addChild(Background4);
        Background4.addEventListener('touchstart',function(e){
          if(Datas[11]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[12],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[11],Datas[12]));
        });
      }

      if(Datas[17]!=false){
        var Background5 = new Sprite(Datas[13],Datas[14]);
        Background5.image = core.assets["image/Transparent.png"];
        Background5.x = Datas[15];
        Background5.y = Datas[16];
        scene.addChild(Background5);
        Background5.addEventListener('touchstart',function(e){
          if(Datas[17]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[18],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[17],Datas[18]));
        });
      }

      if(Datas[23]!=false){
        var Background6 = new Sprite(Datas[19],Datas[20]);
        Background6.image = core.assets["image/Transparent.png"];
        Background6.x = Datas[21];
        Background6.y = Datas[22];
        scene.addChild(Background6);
        Background6.addEventListener('touchstart',function(e){
          if(Datas[23]=="シーンロード"){
            core.popScene();
            Scene_loads(Datas[24],false,false,Flag);
          }
          else core.pushScene(TextScene(Data[0],Datas[23],Datas[24]));
        });
      }

      var C1 = new Label();
      C1.font  = "60px monospace";
      C1.color = 'black';
      C1.x = 0;
      C1.y = 960;
      C1.width = 1600;
      C1.height = 60;
      C1.text = "▶ 戻る";
      scene.addChild(C1);
      C1.addEventListener('touchstart',function(e){
        core.popScene();
      });

      return scene;
    };
    var TextScene = function(a,b,c){
      var scene = new Scene();                                // 新しいシーンを作る

      var Background = new Sprite(1600,900);
      Background.image = core.assets["image/white.png"];
      Background.x = 0;
      Background.y = 900;
      scene.addChild(Background);

      var C_name = new Label();
      C_name.font  = "60px monospace";
      C_name.color = 'black';
      C_name.x = 0;
      C_name.y = 960;
      C_name.width = 1600;
      C_name.height = 60;
      C_name.text = "【" + b + "】";
      if(C_name.text == "【】") C_name.text = "";
      scene.addChild(C_name);//キャラ名

      var Text = new Label();
      Text.font  = "60px monospace";
      Text.color = 'black';
      Text.x = 60;
      Text.y = 1040;
      Text.width = 1480;
      Text.height = 800;
      Text.text = c;
      scene.addChild(Text);//テキスト

      scene.on("touchstart",function(e){
        core.popScene();
      });

      return scene;
    }
    core.replaceScene(TitleScene());  // ゲームの_rootSceneをスタートシーンに置き換える
  }
  core.start()
}
