
function ContentProgressBar() {
  return (
    <div style={{ backgroundColor: "#E07C7C", borderRadius: 20,padding:20,gap: 10,display:"flex",flexDirection:'column' }}>
      <div style={{fontSize:28,fontWeight:'500',fontStyle:'normal',color:'white'}}>
        Progress
      </div>
      <progress value="50" max="100" style={{width: '100%'}}></progress>
      <div style={{fontSize:16,fontWeight:'400',fontStyle:'normal',color:'#EBB9B8'}}>
        12 completed
      </div>
    </div>
  );
}

export default ContentProgressBar;
