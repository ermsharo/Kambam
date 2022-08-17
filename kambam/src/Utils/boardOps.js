


export const deleteCardById = (Cards, session, cardId) => {
    //Take a card id and return a object without the same
    console.log("Cards from here ", Cards, session, cardId)
    let List = Cards[session];
    List.splice(List.findIndex(e => e.id === cardId), 1);
    console.log("List withoutElement", List)
    return ({
        "ToDo": Cards["ToDo"],
        "Doing": Cards["Doing"],
        "Done": Cards["Done"],
    })
    //Update api

}

const getCardById = (Cards, session, cardId) => {
    let filterResult = Cards[session].filter(e => e.id.includes(cardId))
}

const moveCardToSession = (Cards, card, session, newSession) => {
    //Move the card for the new position
    Cards[newSession].push(card);
    deleteCardById(Cards, session, card.Id)
    return ({
        "ToDo": Cards["ToDo"],
        "Doing": Cards["Doing"],
        "Done": Cards["Done"],
    })
    //Update api

}
