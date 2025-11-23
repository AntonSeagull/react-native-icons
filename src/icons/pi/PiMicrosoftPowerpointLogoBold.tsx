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

export const PiMicrosoftPowerpointLogoBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M94 88H76a12 12 0 0 0-12 12v52a12 12 0 0 0 24 0v-4h6a30 30 0 0 0 0-60m0 36h-6v-12h6a6 6 0 0 1 0 12m42-104a108.16 108.16 0 0 0-76.73 32H40a20 20 0 0 0-20 20v108a20 20 0 0 0 20 20h15.5A108 108 0 1 0 136 20m0 24a84.12 84.12 0 0 1 83.13 72H164V72a20 20 0 0 0-20-20h-43.73A83.9 83.9 0 0 1 136 44M44 76h96v100H44Zm92 136a83.67 83.67 0 0 1-43.32-12H144a20 20 0 0 0 20-20v-40h55.13A84.12 84.12 0 0 1 136 212" />
      </G>
    </Svg>
  );
};