import './App.css';
import MyCanvas from './MyCanvas';


function App() {


  const list = [
    {
      id:1,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:2,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:3,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:4,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:5,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:6,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:7,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:8,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:9,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:10,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:11,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }, {
      id:12,url:"https://firebasestorage.googleapis.com/v0/b/wyiin-12de6.appspot.com/o/Duck.gltf?alt=media&token=5a310676-e1b9-4205-b82a-d26430fb7229"
    }
  ]

  return (
    <div>
      {list.map((element)=>{
        return <MyCanvas key={element.id.toString()} source={element.url} />
      })}
    
    </div>
  );
}

export default App;
