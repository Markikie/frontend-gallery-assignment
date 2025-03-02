export const fetchPictures = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const pictures = await response.json();
    return pictures;
  };