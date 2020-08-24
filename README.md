# vsf-select-regions
Module load regions from magento2 to frontend and implements the select component

```bash
git clone git@github.com:Interactivated/vsf-select-regions.git src/modules/vsf-select-regions
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
cp -fr src/modules/vsf-select-regions/api/directory ../vue-storefront-api/src/api/extensions/
```


```json
"registeredExtensions": [
    ...
    "directory"
]
```