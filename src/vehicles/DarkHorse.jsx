/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/DarkHorse.glb 
*/

import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function Darkhorse(props) {
  const { nodes, materials } = useGLTF('models/DarkHorse.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.Object_10.geometry} material={materials.Meshestrololofrontlights0121Mtl_7} />
      <mesh geometry={nodes.Object_100.geometry} material={materials.Meshestrololofrontlights0121Mtl_89} />
      <mesh geometry={nodes.Object_101.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_102.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_103.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_104.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_105.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_106001.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_107.geometry} material={materials.Merged_materials} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Meshestrololofrontlights0121Mtl_8} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Meshestrololofrontlights0121Mtl_9} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Meshestrololofrontlights0121Mtl_10} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Meshestrololofrontlights0121Mtl_11} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Meshestrololofrontlights0121Mtl_12} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Meshestrololofrontlights0121Mtl_13} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.Meshestrololofrontlights0121Mtl_14} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.Meshestrololofrontlights0121Mtl_15} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.Meshestrololofrontlights0121Mtl_16} />
      <mesh geometry={nodes.Object_2.geometry} material={materials.Meshestrololofrontlights0121Mtl} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.Meshestrololofrontlights0121Mtl_17} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.Meshestrololofrontlights0121Mtl_18} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Meshestrololofrontlights0121Mtl_19} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.Meshestrololofrontlights0121Mtl_20} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.Meshestrololofrontlights0121Mtl_21} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.Meshestrololofrontlights0121Mtl_22} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.Meshestrololofrontlights0121Mtl_23} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.Meshestrololofrontlights0121Mtl_24} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.Meshestrololofrontlights0121Mtl_25} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.Meshestrololofrontlights0121Mtl_26} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.Meshestrololofrontlights0121Mtl_0} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.Meshestrololofrontlights0121Mtl_27} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.Meshestrololofrontlights0121Mtl_28} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.Meshestrololodoordsidef1Mtl} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Meshestrololofrontlights0121Mtl_29} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Meshestrololofrontlights0121Mtl_30} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.Meshestrololofrontlights0121Mtl_31} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.Meshestrololofrontlights0121Mtl_32} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.Meshestrololofrontlights0121Mtl_33} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.Meshestrololofrontlights0121Mtl_34} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.Meshestrololofrontlights0121Mtl_35} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.Meshestrololofrontlights0121Mtl_1} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.Meshestrololodoordsidef1Mtl_0} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.Meshestrololofrontlights0121Mtl_36} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.Meshestrololofrontlights0121Mtl_37} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.Meshestrololofrontlights0121Mtl_38} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.Meshestrololofrontlights0121Mtl_39} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.Meshestrololofrontlights0121Mtl_40} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.Meshestrololofrontlights0121Mtl_41} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.Meshestrololofrontlights0121Mtl_42} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.Meshestrololodoordsidef1Mtl_1} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.Meshestrololofrontlights0121Mtl_43} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Meshestrololofrontlights0121Mtl_2} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.Meshestrololofrontlights0121Mtl_44} />
      <mesh geometry={nodes.Object_51.geometry} material={materials.Meshestrololofrontlights0121Mtl_45} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.Meshestrololofrontlights0121Mtl_46} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.Meshestrololofrontlights0121Mtl_47} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.Meshestrololofrontlights0121Mtl_48} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.Meshestrololofrontlights0121Mtl_49} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.Meshestrololofrontlights0121Mtl_50} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.Meshestrololofrontlights0121Mtl_51} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.Meshestrololofrontlights0121Mtl_52} />
      <mesh geometry={nodes.Object_59.geometry} material={materials.Meshestrololofrontlights0121Mtl_53} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Meshestrololofrontlights0121Mtl_3} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.Meshestrololofrontlights0121Mtl_54} />
      <mesh geometry={nodes.Object_61.geometry} material={materials.Meshestrololofrontlights0121Mtl_55} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.Meshestrololofrontlights0121Mtl_56} />
      <mesh geometry={nodes.Object_63.geometry} material={materials.Meshestrololofrontlights0121Mtl_57} />
      <mesh geometry={nodes.Object_64.geometry} material={materials.Meshestrololofrontlights0121Mtl_58} />
      <mesh geometry={nodes.Object_65.geometry} material={materials.Meshestrololofrontlights0121Mtl_59} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.Meshestrololofrontlights0121Mtl_60} />
      <mesh geometry={nodes.Object_67.geometry} material={materials.Meshestrololofrontlights0121Mtl_61} />
      <mesh geometry={nodes.Object_68.geometry} material={materials.Meshestrololofrontlights0121Mtl_62} />
      <mesh geometry={nodes.Object_69.geometry} material={materials.Meshestrololofrontlights0121Mtl_63} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Meshestrololofrontlights0121Mtl_4} />
      <mesh geometry={nodes.Object_70.geometry} material={materials.Meshestrololofrontlights0121Mtl_64} />
      <mesh geometry={nodes.Object_71.geometry} material={materials.Meshestrololofrontlights0121Mtl_65} />
      <mesh geometry={nodes.Object_72.geometry} material={materials.Meshestrololofrontlights0121Mtl_66} />
      <mesh geometry={nodes.Object_73.geometry} material={materials.Meshestrololofrontlights0121Mtl_67} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.Meshestrololodoordsidef1Mtl_2} />
      <mesh geometry={nodes.Object_75.geometry} material={materials.Meshestrololofrontlights0121Mtl_68} />
      <mesh geometry={nodes.Object_76.geometry} material={materials.Meshestrololofrontlights0121Mtl_69} />
      <mesh geometry={nodes.Object_77.geometry} material={materials.Meshestrololofrontlights0121Mtl_70} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.Meshestrololofrontlights0121Mtl_71} />
      <mesh geometry={nodes.Object_79.geometry} material={materials.Meshestrololofrontlights0121Mtl_72} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Meshestrololofrontlights0121Mtl_5} />
      <mesh geometry={nodes.Object_80.geometry} material={materials.Meshestrololofrontlights0121Mtl_73} />
      <mesh geometry={nodes.Object_81.geometry} material={materials.Meshestrololofrontlights0121Mtl_74} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.Meshestrololofrontlights0121Mtl_75} />
      <mesh geometry={nodes.Object_83.geometry} material={materials.Meshestrololofrontlights0121Mtl_76} />
      <mesh geometry={nodes.Object_84.geometry} material={materials.Meshestrololofrontlights0121Mtl_77} />
      <mesh geometry={nodes.Object_85.geometry} material={materials.Meshestrololofrontlights0121Mtl_78} />
      <mesh geometry={nodes.Object_86.geometry} material={materials.Meshestrololofrontlights0121Mtl_79} />
      <mesh geometry={nodes.Object_87.geometry} material={materials.Meshestrololofrontlights0121Mtl_80} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.Meshestrololofrontlights0121Mtl_81} />
      <mesh geometry={nodes.Object_89.geometry} material={materials.Meshestrololofrontlights0121Mtl_82} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Meshestrololofrontlights0121Mtl_6} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.Meshestrololofrontlights0121Mtl_83} />
      <mesh geometry={nodes.Object_91.geometry} material={materials.Meshestrololofrontlights0121Mtl_84} />
      <mesh geometry={nodes.Object_92.geometry} material={materials.Meshestrololofrontlights0121Mtl_85} />
      <mesh geometry={nodes.Object_93.geometry} material={materials.Meshestrololofrontlights0121Mtl_86} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.Meshestrololodoordsidef1Mtl_3} />
      <mesh geometry={nodes.Object_95.geometry} material={materials.Meshestrololodoordsidef1Mtl_4} />
      <mesh geometry={nodes.Object_96.geometry} material={materials.Meshestrololofrontlights0121Mtl_87} />
      <mesh geometry={nodes.Object_97.geometry} material={materials.Meshestrololofrontlights0121Mtl_88} />
      <mesh geometry={nodes.Object_98.geometry} material={materials.Union1Mtl} />
      <mesh geometry={nodes.Object_99.geometry} material={materials.Tire1Mtl} />
    </group>
  )
}

useGLTF.preload('/DarkHorse.glb')
