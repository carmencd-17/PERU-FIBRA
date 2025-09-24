const imageByIndex = (
  index: number,
  images: string[]
) => images[index % images.length];

export default imageByIndex;