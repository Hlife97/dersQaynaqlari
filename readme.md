# Methodlar

- Get

Datalari Serverden getirmek ucun istifade olunan bir methoddur.

- Post

Datalari servere save etmek ucun istifade olunur.

- Put

Datalari update (guncellemek) ucun istifade olunur.

- Delete

Datalaro serverden yeni data bazadan silmek ucun istifade olunur.

# Isleyis

Bizim ucun backend developerlar belirli endpoint (url'ler)
 meselen: ('https://petstore.swagger.io/v2/pet/findByStatus?status=pending) hazirlayir yeni bunlarin backend kodlarini yazir ve biz bu endpointleri istifade ederek hemen datalari elde edirik veya lazimi datalari save edirik.

 ## GET - methodu

 endpoint = 'https://petstore.swagger.io/v2/pet/99' burada urlin sonunda qeyd olunan 99 hemen datanin id'sini gostermis olur. yeni biz burada id = 99 olan datani getir demek isteyirik.

 ## PUT - methodu

endpoint = 'https://petstore.swagger.io/v2/pet' bu endpointi istifade ederek update islemi gerceklesdirmis olduq. burada datamizi json formatinda duzelderek yeniden gondermis olduq.

## DELETE - methodu

endpoint = 'https://petstore.swagger.io/v2/pet/99' burada url sonunda qeyd olunan 99 silmek istediyimiz datanin id'sidir.
