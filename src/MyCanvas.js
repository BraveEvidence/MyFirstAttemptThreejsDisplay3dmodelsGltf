import React from 'react'
import { useCallback } from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MyCanvas = ({source}) => {

    const canvasRef = useCallback((node) => {
        if(node !== null){
          const scene = new THREE.Scene();
          const gltfLoader = new GLTFLoader();
        
          gltfLoader.load(
            source,
            (gltf) => {
            console.log("success")
              // gltf.scene.scale.set(0.5, 0.5, 0.5);
              scene.add(gltf.scene);
            },
            () => {
              console.log("progress");
            },
            () => {
              console.log("error");
            }
          );
    
          const floor = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(10, 10),
            new THREE.MeshStandardMaterial({
              color: "#444444",
              metalness: 0,
              roughness: 0.5,
            })
          );
          floor.receiveShadow = true;
          floor.rotation.x = -Math.PI * 0.5;
          scene.add(floor);
          
          /**
           * Lights
           */
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
          scene.add(ambientLight);
          
          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
          directionalLight.castShadow = true;
          directionalLight.shadow.mapSize.set(1024, 1024);
          directionalLight.shadow.camera.far = 15;
          directionalLight.shadow.camera.left = -7;
          directionalLight.shadow.camera.top = 7;
          directionalLight.shadow.camera.right = 7;
          directionalLight.shadow.camera.bottom = -7;
          directionalLight.position.set(5, 5, 5);
          scene.add(directionalLight);
        
          const sizes = {
            width: window.innerWidth - 20,
            height: 200,
          };
        
          const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
          );
          camera.position.set(2, 2, 2);
          scene.add(camera);
        
    
          // Controls
    const controls = new OrbitControls(camera, node);
    controls.target.set(0, 0.75, 0);
    controls.enableDamping = true;
      
    
      const renderer = new THREE.WebGLRenderer({
        canvas: node,
      });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // renderer.render(scene, camera);
      const tick = () => {
       
        // Update controls
        controls.update();
      
        // Render
        renderer.render(scene, camera);
      
        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };
      
      tick();
    }
    
      },[]);

    return (
        <canvas  ref={canvasRef} className="webgl"></canvas>
    )
}

export default MyCanvas
