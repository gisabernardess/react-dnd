export const useHandleElements = () => {
  const getElementPosition = (card_id, elements) => {
    return elements?.findIndex((element) => element?.id === Number(card_id));
  };

  const handleReorderElements = (index, elements, storage) => {
    elements.push(elements.splice(index, 1)[0]);
    localStorage.setItem(storage, JSON.stringify(elements));
  };

  const handleSaveElements = (
    card_id,
    targetElements,
    storageToSave,
    storageToGetAndExclude
  ) => {
    const elementsStorage = localStorage.getItem(storageToGetAndExclude);

    if (elementsStorage) {
      const sourceElements = JSON.parse(elementsStorage);

      //seeks the element to be saved
      const elementToBeSaved = sourceElements?.find(
        (element) => element?.id === Number(card_id)
      );

      //add the element to the target location and save the state
      targetElements.push(elementToBeSaved);
      localStorage.setItem(storageToSave, JSON.stringify(targetElements));

      //seeks the position of the element, removes it from its original location and saves the state.
      const index = sourceElements?.findIndex(
        (element) => element?.id === elementToBeSaved.id
      );
      sourceElements.splice(index, 1);
      localStorage.setItem(
        storageToGetAndExclude,
        JSON.stringify(sourceElements)
      );
    }
  };

  return {
    getElementPosition,
    handleReorderElements,
    handleSaveElements,
  };
};
