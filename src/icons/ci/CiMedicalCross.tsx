import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const CiMedicalCross = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.943 20.93h-1.886a2.39 2.39 0 0 1-2.386-2.386V15.3l-3.215.029a2.39 2.39 0 0 1-2.387-2.386v-1.886A2.39 2.39 0 0 1 5.456 8.67H8.7l-.029-3.214a2.39 2.39 0 0 1 2.386-2.386h1.886a2.39 2.39 0 0 1 2.386 2.386V8.7l3.215-.03a2.39 2.39 0 0 1 2.387 2.387v1.886a2.39 2.39 0 0 1-2.387 2.386H15.3l.028 3.215a2.39 2.39 0 0 1-2.385 2.386M5.456 9.67a1.39 1.39 0 0 0-1.387 1.387v1.886a1.39 1.39 0 0 0 1.387 1.386H8.7a.97.97 0 0 1 .972.971v3.244a1.39 1.39 0 0 0 1.386 1.386h1.886a1.39 1.39 0 0 0 1.386-1.386V15.3a.97.97 0 0 1 .972-.971h3.243a1.39 1.39 0 0 0 1.387-1.386v-1.886a1.39 1.39 0 0 0-1.388-1.387H15.3a.97.97 0 0 1-.972-.97V5.456a1.39 1.39 0 0 0-1.385-1.386h-1.886a1.39 1.39 0 0 0-1.386 1.386V8.7a.97.97 0 0 1-.972.97Z" data-name="Medical Cross" />
      </G>
    </Svg>
  );
};