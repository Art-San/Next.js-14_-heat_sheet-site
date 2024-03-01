interface IProps {
  params: {
    slug: string
  }
}

const VariablesPage = ({ params }: IProps) => {
  const { slug } = params
  console.log('params', slug) // params {id: 23}
  return <div>PostPage-ID - {slug}-</div>
}

export default VariablesPage
