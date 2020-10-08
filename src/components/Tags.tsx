import React from "react"

type Props = {
  name: string;
}

const Tag: React.FC<Props> = ({ name }) => (
  <>
    <a className="tag" href={`/tags/${name}`}>
      {name}
    </a>
  </>
)

const Tags = ({ tags = [] }) =>
  tags &&
  !!tags.length && (
    <>
      {tags.slice(0, -1).map((tag, i) => (
        <React.Fragment key={tag}>
          {i !== 0 && ", "}
          <Tag name={tag} />
        </React.Fragment>
      ))}
      {tags.length > 1 && " and "}
      {tags.slice(-1).map(tag => (
        <Tag key={tag} name={tag} />
      ))}
    </>
  )

export default Tags
