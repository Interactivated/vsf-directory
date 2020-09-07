# Directory module for Vue Storefront
Module load regions from magento2 to frontend and implements the select component

```bash
git clone git@github.com:Interactivated/vsf-directory.git src/modules/vsf-directory
```

## Frontend configuration

```bash
"directory": {
    "endpoint": {
      "regions": "/api/ext/directory/regions"
    }
},
```

## Registeration of api extension

```bash
cp -fr src/modules/vsf-directory/api/directory ../vue-storefront-api/src/api/extensions/
```


```json
"registeredExtensions": [
    ...
    "directory"
]
```
