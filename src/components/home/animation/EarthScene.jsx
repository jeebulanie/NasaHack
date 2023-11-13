import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const EarthScene = () => {
  let scene, camera, renderer, controls;

  const init = () => {
    // Инициализация сцены, камеры и рендерера
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.set(0, 20, 190);

    // Initialize the renderer with a transparent background
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearAlpha(0); // Make the background transparent
    document.getElementById("earth-container").appendChild(renderer.domElement);

    // Загрузка текстур Земли и облаков (замените на ваши URL-адреса)
    const earthTexture = new THREE.TextureLoader().load(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/MODIS_Map.jpg/1200px-MODIS_Map.jpg"
    );
    const cloudTexture = new THREE.TextureLoader().load(
      "https://img.freepik.com/free-vector/day-and-night-weather-forecast-app-realistic-vector-icons-set-isolated-on-transparent-background-su_1441-2791.jpg?t=st=1696702856~exp=1696703456~hmac=66501dbd3763934a7564753dcb85f79793db594d7d49edb4db582a5bfd121e59"
    );

    // Создание материалов
    const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
    const cloudMaterial = new THREE.MeshLambertMaterial({
      map: cloudTexture,
      transparent: true,
    });

    // Добавление Земли
    const geometry = new THREE.SphereGeometry(50, 32, 32);
    const earth = new THREE.Mesh(geometry, earthMaterial);
    scene.add(earth);

    // Добавление слоя облаков
    const cloudGeometry = new THREE.SphereGeometry(51, 32, 32);
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // Добавление света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 100, 100);
    scene.add(light);

    // Настройка управления
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = true;
    controls.enableZoom = true;
  };
  const navigate = useNavigate();

  const animate = () => {
    requestAnimationFrame(animate);

    // Вращение Земли и облаков
    scene.children.forEach((child) => {
      if (child instanceof THREE.Mesh) {
        child.rotation.y += 0.005;
      }
    });

    // Обновление управления
    controls.update();

    // Рендеринг сцены
    renderer.render(scene, camera);
  };

  useEffect(() => {
    init();
    animate();

    // Обработка изменения размеров окна
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

    // Очистка при удалении компонента
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      <div
        className="cursor-pointer"
        // onClick={() => navigate("/")}
        id="earth-container"
      />
    </>
  );
};

export default EarthScene;
