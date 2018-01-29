# Elasticsearch Notes


## 显示所有 index

- 请求
```
curl 'localhost:9200/_cat/indices?v'
```

- 响应
```
health status index               uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   php_log.2018-01-29  WRzJYx0KReW0knzjOFcvhg   5   1   18290285            0     20.2gb         10.1gb
green  open   logstash-2018.01.25 7esArKVrRVaHC-JDV3H-mw   5   1   67219639            0    122.5gb         61.2gb
green  open   .kibana             bdQXhj__QRqlniKoFzFYjQ   1   1          3            1     38.4kb         19.2kb
green  open   logstash-2018.01.26 AVEOzsP-R2S1KAMBfVYNUw   5   1   63525288            0    116.3gb         58.1gb
green  open   php_log.2018-01-28  dur8PpDdQTWPD_P7sHFL5w   5   1   86847592            0     90.2gb         45.1gb
green  open   php_log.2018-01-27  china4RIRMqmfgPv8GtHfQ   5   1   79251511            0     82.2gb         41.1gb
green  open   syslog.2018-01-27   MxBReloKR52wxm-Ec6vEmA   5   1  582795578            0    505.4gb        252.7gb
green  open   syslog.2018-01-26   R0tk7qsBQpuklGLH0vDSsA   5   1  573680308            0    499.2gb        249.5gb
green  open   php_log.2018-01-25  OCAiBoacTE6gZUHoP080pw   5   1   96133863            0    101.2gb         50.6gb
green  open   php_log.2018-01-26  3MnFQMjEQt2z76rN_MbWdg   5   1   91187874            0     95.8gb         47.9gb
green  open   logstash-2018.01.27 mSARfrldQnqKqGdb3Za1vA   5   1   57266089            0    103.9gb         51.9gb
green  open   syslog.2018-01-29   ko71qXiHSSux79jon-9VdA   5   1  184431950            0    178.4gb         91.2gb
green  open   syslog.2018-01-28   HoAm12AwQ9OXmsdtfBoFYA   5   1  641978910            0    559.8gb        279.9gb
green  open   logstash-2018.01.29 1h9mYN19RmCWzhLan56gkQ   5   1   13826148            0     28.1gb         13.4gb
green  open   syslog.2018-01-25   5GIxrQJzQ_y2s3Bh1OBuLg   5   1  591059195            0    513.2gb        256.6gb
green  open   logstash-2018.01.28 l5NMGQQSSeibvJO9EI-B9Q   5   1   59735048            0    106.8gb         53.3gb
```
