# 注文受付システム

Node.js、PM2、nginx、AWSを使って構築した注文受付用のWebシステム

## 概要

- Node.js でサーバー構築
- Express を使って注文データを POST で受け取り
- PM2 でプロセス管理・常駐化
- nginx を使ってリバースプロキシ設定・ポートフォワード・セキュリティ向上
- AWS（EC2）上で稼働し、全世界からアクセス可能
- 独自ドメイン取得 yu0824.com
- Let’s Encryptを使用しHTTPS化

## 使用技術

- Node.js
- Express
- PM2
- nginx
- AWS EC2 (Ubuntu)
- HTML / CSS / JavaScript (フロント)

## 構成図
[ユーザーのブラウザ]<br>
↓ HTTPSアクセス（ポート443)<br>　
[nginx（リバースプロキシ）]<br>　
↓ フォワード（localhost:3000）<br>　　
[Node.js（Expressサーバー）]<br>
↓<br>
[注文処理 / ログ出力 / レスポンス返す]<br>

CICD_test4
<pre/>iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.1.1:80
</pre>
