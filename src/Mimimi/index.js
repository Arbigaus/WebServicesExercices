export const convertToMimimi = text => {
    const regex = /[a,e,o,u,y,ã,í,í]/g
    let response = text.replace(regex, 'i')

    return response
}