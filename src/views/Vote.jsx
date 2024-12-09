const Vote = (props) => {
  let { title } = props
  return <div className="vote-box">
    <div className="header">
      <h3 className="title">{ title }</h3>
      <span>10人</span>
    </div>
    <div className="main">
      <p>支持人数：8人</p>
      <p>反对人数：2人</p>
    </div>
    <div className="main">
      <button>支持</button>
      <button>反对</button>
    </div>
  </div>

}
export default Vote