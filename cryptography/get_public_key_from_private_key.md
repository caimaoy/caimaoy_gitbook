# Get public key from private key

```
openssl rsa -in private.pem -pubout -out public.pem
```

```
ssh-keygen -y -f id_rsa > id_rsa.pub
```

