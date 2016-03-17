# Jenkins

- 解决 robot 报告在 jekins 中无法显示问题
    Jenkins 装上 robot 插件运行后生成 report 和 log，但是 Opening Robot Framework report failed 错误
    错误原因是因为不能运行 js，还有防御跨站点攻击（不太了解，之后了解）
    -  [解决方案](https://groups.google.com/forum/#!topic/robotframework-users/58Gxyxm9gns)
    但是因为是 Google 的网页，我翻译一下
    ```
    <arguments>-Xrs -Xmx256m -Dhudson.model.DirectoryBrowserSupport.CSP= -Dhudson.lifecycle=hudson.lifecycle.WindowsServiceLifecycle -jar "%BASE%\jenkins.war" --httpPort=8080</arguments>
    ```
    关键要添加
    ```
    -Xrs -Xmx256m -Dhudson.model.DirectoryBrowserSupport.CSP=
    ```
    我使用的 Jenkins 是部署在 CentOs 上面的，修改方法如下(su -)：
    ```
    vi /etc/sysconfig/jenkins
    ```
    替换：
    ```
    JENKINS_JAVA_OPTIONS="-Djava.awt.headless=true"
    ```
    ```
    JENKINS_JAVA_OPTIONS="-Djava.awt.headless=true -Xrs -Xmx256m -Dhudson.model.DirectoryBrowserSupport.CSP=\"\""
    ```
    重启 Jenkins
    ```
    service jenkins restart
    ```


