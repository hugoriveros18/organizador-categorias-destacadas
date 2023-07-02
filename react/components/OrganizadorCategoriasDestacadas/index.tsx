import React, { useEffect, useState } from "react";
import { SearchResultDesktopBannerSchema } from "../../schema/organizadorCategoriasSchema";

const OrganizadorCategoriasDestacadas = ({categoriasDestacadas,children}:OrganizadorProps) => {

  //ESTADOS
  const [newChildren, setNewChildren] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);

  //EFECTOS
  useEffect(() => {
    try {
      let childrenToSet: any[] = [];
      for(let i = 0; i < categoriasDestacadas.length; i++) {
        let categoriaActual: string = '';
        switch(categoriasDestacadas[i].nombreCategoria) {
          case 'Tecnologia':
            categoriaActual = 'category-5';
            break;
          case 'Escolar':
            categoriaActual = 'category-1';
            break;
          case 'Juguetes':
            categoriaActual = 'category-4';
            break;
          case 'Libros':
            categoriaActual = 'category-2';
            break;
          case 'Videojuegos':
            categoriaActual = 'category-3';
            break;
        }
        for(let child of children) {
          if(child.props.blockProps.tabId === categoriaActual) {
            if(i === 0) {
              let childCopy = child;
              childCopy.props.blockProps.defaultActiveTab = true;
              childrenToSet.push(childCopy);
              break;
            }
            childrenToSet.push(child);
            break;
          }
        }
      }
      setNewChildren(childrenToSet);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  },[])

  return(
    <>
      {
        !error &&
        newChildren
      }
      {
        error &&
        children
      }
    </>
  )
}

OrganizadorCategoriasDestacadas.schema = SearchResultDesktopBannerSchema;

export default OrganizadorCategoriasDestacadas;
