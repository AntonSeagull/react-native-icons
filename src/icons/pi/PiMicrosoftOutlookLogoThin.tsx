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

export const PiMicrosoftOutlookLogoThin = (props: IconProps) => {
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
        <Path d="M116 128a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-48 0a20 20 0 1 1 20 20 20 20 0 0 1-20-20m156-20h-20V40a4 4 0 0 0-4-4h-96a4 4 0 0 0-4 4v28H40a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h36v20a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-96a4 4 0 0 0-4-4m-4 100.17L158.83 164 220 119.82V208a1 1 0 0 1 0 .17M211.63 116l-7.63 5.51V116ZM108 44h88v83.29l-44 31.78-4-2.89V80a12 12 0 0 0-12-12h-28ZM36 176V80a4 4 0 0 1 4-4h96a4 4 0 0 1 4 4v96a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4m48 32v-20h52a12 12 0 0 0 12-12v-9.95L211.63 212H88a4 4 0 0 1-4-4" />
      </G>
    </Svg>
  );
};