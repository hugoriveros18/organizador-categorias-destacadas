type CategoriasDestacadas = {
  nombreCategoria: string
  imagenCategoria: string
}

type OrganizadorProps = {
  categoriasDestacadas: CategoriasDestacadas[]
  children: ReactNode
}
