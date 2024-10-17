import _ecomPassport from '@ecomplus/passport-client'

const toggleFavorite = (productId, ecomPassport = _ecomPassport) => {
  const customer = ecomPassport.getCustomer()
  const favorites = customer.favorites || []
  const isFavorite = checkFavorite(productId, ecomPassport)
  if(customer.display_name){
    if (!isFavorite) {
      favorites.push(productId)
      window.messageBullet(`Adicionado aos favoritos`)
    } else {
      const favIndex = favorites.indexOf(productId)
      favorites.splice(favIndex, 1)
      window.messageBullet(`Removido dos favoritos`)
      $(`[data-product-id="${productId}"] .svg-ico`).removeClass(`active`)
    }
  
    ecomPassport.requestApi('/me.json', 'patch', { favorites })    
    $(`#favorites-toggle span`).text(favorites.length)  

    return !isFavorite
  }else{
    let localFavorites = localStorage.getItem(`apxLocalFavorites`)
    if(localFavorites){
      localFavorites = JSON.parse(localFavorites)
    }else{
      localFavorites = []
    }

    if (!isFavorite) {
      localFavorites.push(productId)
      window.messageBullet(`Adicionado aos favoritos`)
    } else {
      const favIndex = localFavorites.indexOf(productId)
      localFavorites.splice(favIndex, 1)
      window.messageBullet(`Removido dos favoritos`)

      $(`[data-product-id="${productId}"] .svg-ico`).removeClass(`active`)
    }
    localStorage.setItem(`apxLocalFavorites`,JSON.stringify(localFavorites))
    $(`#favorites-toggle span`).text(localFavorites.length)
    return !isFavorite
  }
  
}

const checkFavorite = (productId, ecomPassport) => {
  const customer = ecomPassport.getCustomer()
  if(customer.display_name){
    const { favorites } = ecomPassport.getCustomer()
    return favorites && favorites.includes(productId)
  }else{
    let localFavorites = localStorage.getItem(`apxLocalFavorites`)
    if(localFavorites){
      localFavorites = JSON.parse(localFavorites)
      return localFavorites && localFavorites.includes(productId)
    }    
  }  
}

export { toggleFavorite, checkFavorite }