var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"https://github.io/41223107/wcm2024/blog/pages/about/"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w1-blog-tutorial.html"},{"title":"2024 W1 課程","text":"四技 WCM 第一週課程, 主要引導學員登入 MS Online 並建立 Github 帳號, 以及利用 cmsimde_site 作為 Template 建立個人課程網站. 登入 MS Online 網際內容管理課程學員上課時必須登入 MS Online, 主要目的是能在 MS Teams 中上課, 一邊觀看教學示範, 一邊自行操作. Github 帳號 還未擁有 Github 帳號者, 必須自行建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site, 以此倉儲作為 Template 建立個人的 wcm2024 倉儲, 並將倉儲主分支設定 Github Pages 後, 檢查是否已經可以連線到個人的課程網頁. 如何建立個人網站 點這裡~","tags":"w1","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w1.-blog-tutorial.html"},{"title":"2024 W2 課程","text":"四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 1.登入 Github 2.連結到 https://github.com/mdecycu/cmsimde_site 3.利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 4.在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 5.等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 確認學員已經會利用 Replit 維護網站 建議學員以 email 作為登入 Replit 的帳號, 不要依附在 Github 或 Gmail 帳號下, 以保有使用的獨立性. 由於 wcm2024 課程學員使用 Replit 免費帳號, 因此雲端 IDE 僅允許使用 Port 80 與 443 啟動網頁, 因此若要在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用. 如何使用 Codespaces 維護自己的倉儲 可使用init_replit指令安裝Python模組 chmod u+x init_replit ./init_replit 接著輸入(這是動態網站) python3 main.py 再開啟新的終端機 python3 -m http.server 這是靜態網站 即可編輯網站","tags":"w2","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w2-blog-tutorial.html"},{"title":"2024 W3 課程","text":"四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 利用 Github Classroom 分組 期中分組作業名稱為 1a, 組長在取得作業連結之後, 自行建立各組 Team, 以第一組為例, Team 名稱為 ag1, 之後以每組至多 6 名組員, 透過作業連結加入 ag1 Team, 其餘各組組員則依序建立 ag2, ag3 等 Team 名稱, 讓該組組員可以加入. 以第一組為例, 完成 ag1 Team 建立後, 將取得 mdewcm2024 帳號下的 1a-ag1 倉儲, 所有第一組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版. 由於在 Replit 免費帳號下, 僅能與登入 Github 的帳號進行授權, 且在 Replit 導入的倉儲, 任何人都能夠取得倉儲下 .git 的所有資料, 因此無法利用組員的 Github 帳號 token 取得管理授權, 而必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容. 本組倉儲連結 1a-ag5 利用 Github Codespaces 維護倉儲 用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站, 唯一的限制是每個月只能使用 120 core hours, 若以內定的 2 core 執行管理, 平均每天可以使用兩個小時~!!! 如何利用 Codespaces 維護分組倉儲 常用的 git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git clone --recurse-submodules 倉儲網址_協定.git 指定目錄與否 說明如何將組員的個人倉儲 納入分組倉儲","tags":"w3","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w3-blog-tutorial.html"},{"title":"2024 W4 課程","text":"四技 WCM 第四週課程, 複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法. 有關建立網站 這裡所謂的網站指的是 Web site, 也就是 WWW (World Wide Web) 伺服器 (Server)端的超文件 (Hypertext), 且此超文件包含 css 與 Javascript 資料, 用來定義使用者利用瀏覽器連線時所得到的資料內容. 網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理, 而這些內容除了具備各種不同格式的文字外, 還包括靜態圖片與動態的影音多媒體. 因為希望所管理的網站內容, 從無到有的過程留下改版歷程, 因此使用分散式版次管理系統進行網頁的配置, 也就是利用 Github 所提供的 Pages 功能來建立網頁. Replit 靜態網站檢視 下載與 main2.txt static.txt , (老師的網誌裡面有txt碼)其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵 Replit 建立分組倉儲權限 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號)","tags":"w4","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w4-blog-tutorial.html"},{"title":"2024 W5 課程","text":"第五週網際內容管理上課內容，以iframe嵌入先前學的教學影片，並摘要個影片內容。 複習W3-W4內容 把一些沒做完的補上。","tags":"w5","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w5-blog-tutorial.html"},{"title":"2024 W6 課程","text":"四技 WCM 第六週課程, 說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法. Git 歷史與希望解決的問題 問題: 請簡述一下 Git 的發展歷史, 以及當時的背景如何? Git 想要解決甚麼問題? Git 如何解決產品設計問題 問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率?","tags":"w6","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w6-blog-tutorial.html"},{"title":"2024 W8 課程","text":"四技 WCM 第八週課程, 從教育的本質看網際內容管理課程的內容要點. wcm2024 1a w8 從教育的本質看課程內容. wcm2024 1a w8 從教育的本質看課程內容 問GPT問題 wcm2024 1a w8 說明如何將影片嵌入網頁","tags":"w8","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w8-blog-tutorial.html"},{"title":"2024 W11 課程","text":"第 11 週課程, 說明如何在網頁中加入 Brython 程式應用以及利用 wsgi_v2.py 擷取各學期班級課表 從教務主機直接擷取資料 利用 wsgi_v2.py 擷取各學期班級課表各學期班級課表 Brython 程式環境 將 brython_w_editor_html.txt 超文件內容放入網誌中, 即可得到下列內容.","tags":"w11","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w11-blog-tutorial.html"},{"title":"2024 W12 課程","text":"第 12 週課程, 複習加深前幾週所教學內容 git pull處理要點 如果自己不是最新版本，在pull後內容會顯示新增 修改的內容 WSGIserver(Web Server Gateway Interface)：具有高效、易於使用和可擴展性等特點，是 Python 中用於定義 Web 應用程序與 Web 服務器之間通信的標準界面。","tags":"w12","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w12-blog-tutorial.html"},{"title":"2024 W13 課程","text":"網際內容管理課程第十三週, 從單機猜數字遊戲與 AI 應用談起 第十三週, 從單機猜數字遊戲與 AI 應用談起 在 Linux 設定全域 Proxy 伺服器的位置, 可以是 /etc/environment 檔案中的: http_proxy=\"http://your_proxy_server:port\" https_proxy=\"http://your_proxy_server:port\" 猜猜看遊戲 guess_game.7z 是在 AI 輔助下, 將簡單的單人 Brython 線上猜數字遊戲 轉化為可以多人同場比賽猜數字的線上遊戲.","tags":"w13","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w13-blog-tutorial.html"},{"title":"2024 W14 課程","text":"第十四週，各組一起參與單機猜數字遊戲 啟動並執行網際猜數字遊戲 有關可攜程式系統的批次檔案說明 如何針對不同的 Python 版本修改啟動批次檔案, 並利用 AI 取得各指令的詳細說明 以下影片說明如何在近端電腦執行猜數字遊戲伺服器程式說明影片","tags":"w14","url":"https://github.io/41223107/wcm2024/blog/2024-Spring-w14-blog-tutorial.html"}]};