import { Accelerometer } from 'expo-sensors';
import { useState, useEffect } from 'react';

export default function SensorAcelerometro() {
  const [datos, setDatos] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const suscripcion = Accelerometer.addListener(setDatos);
    Accelerometer.setUpdateInterval(500); // cada 500ms

    return () => suscripcion.remove();
  }, []);

  return (
    <Text>
      Movimiento: x={datos.x.toFixed(2)} y={datos.y.toFixed(2)} z={datos.z.toFixed(2)}
    </Text>
  );
}
