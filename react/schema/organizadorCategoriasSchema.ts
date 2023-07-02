const SearchResultDesktopBannerSchema = {
  title: "Organizacion de Categorias Destacadas - Home",
  type: "object",
  properties: {
    categoriasDestacadas: {
      title: "Categorias Destacadas",
      type: "array",
      items: {
        properties: {
          nombreCategoria: {
            title: "Nombre de Categoria",
            type: "string"
          },
          imagenCategoria: {
            title: "Imagen de Categoria",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          }
        }
      }
    },
  }
}

export { SearchResultDesktopBannerSchema }
