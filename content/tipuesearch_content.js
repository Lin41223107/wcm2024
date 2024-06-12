var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:  https://lin41223107.github.io/wcm2024/ \n 網誌:  https://lin41223107.github.io/wcm2024/blog_ \n 簡報:  https://lin41223107.github.io/wcm2024/reveal \n 倉儲:  https://github.com/Lin41223107/wcm2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'W2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護。 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 https://ren911308.github.io/wcm2024/content/index.htm \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '', 'tags': '', 'url': 'W3.html'}, {'title': '１.WINK', 'text': 'https://www.debugmode.com/wink.html \n', 'tags': '', 'url': '１.WINK.html'}, {'title': '２.GIT ORDER', 'text': 'git add . \xa0 (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git\xa0 push\xa0(推送) \n git version\xa0(查詢目前所使用的 git 版本) \n git status\xa0(一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add\xa0倉儲網址子目錄 \n git clone --recurse-submodules\xa0(.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': '２.GIT ORDER.html'}, {'title': '３.建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n', 'tags': '', 'url': '３.建立分組倉儲.html'}, {'title': 'W4', 'text': '有關建立網站: 網站指的是 Web site針對網頁瀏覽器檢視的內容加以管理，利用 Github 所提供的 Pages 功能來建立網頁進行管理。 \n Replit靜態網站檢視:若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵，\xa0Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視。 \n Replit建立分組倉儲權限: \n 分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n Host github.com \n User git \n Hostname github.com \n \n \n \n \n \n \n \n \n ssh.py 程式內容如下: \n \n import os\nif not os.path.exists("/home/runner/.ssh"): \n    os.makedirs("/home/runner/.ssh") \nos.system("mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa")\nos.system("mv ./downloads/config.txt /home/runner/.ssh/config")\nos.system("chmod og-rwx /home/runner/.ssh/id_rsa")\n \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '以 iframe 嵌入先前的教學影片做課前預習 \n 1.在Replit 平台上的分組倉儲權限設定 \n 2.Putty Solvespace STL 零件檢視方法 \n 3.大規模人工智慧運算的時代：前景、影響及回應 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': '問題(一)', 'text': '假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n A: \n \n \n \n \n \n \n 在 Windows 上進行 Git 客戶端和 Git 伺服器的演示，可以通過以下步驟來實現： \n 前提條件 \n \n 安裝 Git 客戶端：從  Git官網  下載並安裝 Git 客戶端。 \n 安裝 Git 伺服器：可以使用 Git for Windows，或設置一個本地 Git 伺服器（例如 Gitolite、Gitea），甚至可以使用 WSL（Windows Subsystem for Linux）來運行一個輕量級的 Git 伺服器。 \n \n 準備工作 \n \n \n 安裝 Git 客戶端 ： \n \n 下載並安裝 Git 客戶端  Git for Windows ，安裝過程中可以選擇安裝 Git Bash，這樣可以使用 Unix 風格的命令行。 \n \n \n \n 設置本地 Git 伺服器 ： \n \n 使用 Git Bash 或者 WSL，在本地機器上設置一個裸倉庫作為 Git 伺服器。 \n \n \n \n', 'tags': '', 'url': '問題(一).html'}, {'title': '問題(二)', 'text': 'git創作人的相關履歷? \n 林納斯·托瓦茲（Linus Torvalds）簡歷 \n 早年生活與教育 \n \n \n 出生日期 ：1969年12月28日 \n \n \n 出生地點 ：芬蘭赫爾辛基 \n \n \n 教育背景 ：林納斯在赫爾辛基大學獲得了計算機科學學位。 \n \n \n Linux 內核 \n \n \n 創建 Linux 內核 ：1991年，林納斯在赫爾辛基大學時開始編寫 Linux 內核，最初是一個個人項目，用來取代他在大學使用的 MINIX 操作系統。 \n \n \n 開放源碼 ：他決定將 Linux 內核作為自由和開放源碼軟體發佈，這使得全球的開發者能夠參與開發和改進。 \n \n \n 創建 Git \n \n \n 創建 Git ：2005年，由於當時的分散版本控制系統 BitKeeper 收費和使用限制問題，林納斯決定開發自己的版本控制系統，這就是 Git。Git 的設計目標是高速、簡單和強大的分散版本控制。 \n \n \n 主要特點 ：Git 的主要特點包括強大的分支和合併功能、分散式架構、強大的性能和高效處理大項目等。 \n \n \n', 'tags': '', 'url': '問題(二).html'}, {'title': '問題(三)', 'text': '如何用git解決Autocad的問題? 使用 Git 来管理 AutoCAD 项目可以帮助团队更好地协作，跟踪更改，并确保项目的版本控制。以下是如何使用 Git 解决 AutoCAD 项目中常见问题的指南。前提条件\n \n 安装 Git 客户端：从  Git官网  下载并安装 Git 客户端。 \n 安装 AutoCAD：确保你已经安装了 AutoCAD 并了解基本的使用方法。 \n \n初始化 Git 仓库\n \n 打开 Git Bash 或者命令提示符。 \n 导航到你的 AutoCAD 项目目录：\n cd  /path/to/your/autocad/project  \n \n 初始化一个新的 Git 仓库：\n git init  \n \n \n添加 .gitignore 文件为了避免将不必要的文件添加到仓库中，可以创建一个  .gitignore  文件。在你的项目根目录下创建一个名为  .gitignore  的文件，并添加以下内容：\n # AutoCAD temporary files *.ac$ *.bak *.sv$ # AutoCAD backup files *.bak *.tmp  \n添加和提交文件将项目中的文件添加到 Git 仓库，并进行初次提交：\n git add . git commit -m  "Initial commit"   \n创建远程仓库（如 GitHub, GitLab 等）\n \n 在 GitHub 或 GitLab 上创建一个新的仓库。 \n 将远程仓库添加到本地仓库：\n git remote add origin https://github.com/username/repository.git  \n \n 推送本地仓库到远程仓库：\n git push -u origin master  \n \n \n团队协作\n \n 克隆仓库 ：团队成员可以克隆这个仓库进行协作：\n git  clone  https://github.com/username/repository.git  \n \n 创建分支 ：每个团队成员在进行更改时，最好创建一个新的分支：\n git checkout -b feature-branch  \n \n 提交更改并推送 ：提交更改并推送到远程仓库：\n git add . git commit -m  "Description of changes"  git push origin feature-branch  \n \n 合并分支 ：通过 Pull Request 或 Merge Request 将更改合并到主分支。 \n \n解决冲突当多个团队成员修改同一文件时，可能会出现冲突。解决冲突的步骤如下：\n \n 拉取最新更改 ：\n git pull origin master  \n \n 解决冲突 ：打开冲突的文件，手动合并更改。 \n 标记冲突已解决 ：\n git add <conflicted-file> git commit -m  "Resolve merge conflict" \n \n \n', 'tags': '', 'url': '問題(三).html'}, {'title': 'W7-W8', 'text': '期中成績登記，並輸入自己想要的理想分數。 \n 第八週上課內容 \n 1.了解教育的本質、意義 \n 2.如何把影片嵌入自己的個人網站上', 'tags': '', 'url': 'W7-W8.html'}, {'title': 'W10', 'text': '在mdewcm2024/1astud-site新增各組的心得，並解決衝突的問題 \n 並使用超文件到網誌中 \n 介紹acp的功用 \n git add . \n git commit -m "$1" --author="$2" \n git push', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '', 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};