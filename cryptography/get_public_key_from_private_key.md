# Get public key from private key

```
openssl rsa -in private.pem -pubout -out public.pem
```

```
ssh-keygen -y -f id_rsa > id_rsa.pub
```

ssh-keygen reported sha256 fingerprints. In order to get md5 fingerprints run
```
ssh-keygen -l -E md5 -f ~/.ssh/id_rsa.pub
```

