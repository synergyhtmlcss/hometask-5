export const PostCard = ({ data }) => {
  const { location, image } = data;
  // создать компонент карточки-поста, данные для карточки взять 
  // из переменных location и image

  // кнопка лайка реагирует на ховер

  return (
    <>
      <img src={image} alt="" />
      {location}
    </>
  )
}