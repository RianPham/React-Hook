import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"

function Paragraph() {
  const context = useContext(ThemeContext)
  return(
    <p className={context.theme}> 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, magni similique totam ducimus necessitatibus recusandae! Recusandae porro, dolore enim earum accusamus dolorum ullam possimus voluptatibus mollitia impedit ratione animi velit?
      Consequatur est aperiam eaque minus culpa necessitatibus laudantium! Id itaque ad minus repellendus explicabo adipisci odit esse architecto perferendis debitis necessitatibus fuga aliquam autem recusandae, maxime molestias non placeat.
    </p>
  )
}
export default Paragraph