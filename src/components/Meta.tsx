
import { FC } from "react";

type TProps = {
  title: string
}

const Meta: FC<TProps> = ({ title }) => {
  return (
<>
      <title>{title}</title>
      </>
  )
}

export default Meta
