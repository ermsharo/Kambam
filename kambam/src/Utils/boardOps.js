export const moveCardToSession = (originalsession, destinySession, cardId) => {
    //Take a session as a parameter, and move the object to their
}

 const verifyElement = (session, sessionName, List, Cards) => {
    console.log("->", session,sessionName)
    return Cards[sessionName];
}

export const deleteCardById = (Cards, session, cardId) => {
    //Take a card id and return a object without the same
    console.log("Cards from here ",Cards, session, cardId)
    let List = Cards[session];
    List.splice(List.findIndex(e => e.id === cardId), 1);
    console.log("List withoutElement", List)
    return ({
        "ToDo": verifyElement(session, "ToDo", List, Cards),
        "Doing": verifyElement(session, "Doing", List, Cards),
        "Done": verifyElement(session, "Done", List, Cards),
    })
    //Update api

}
