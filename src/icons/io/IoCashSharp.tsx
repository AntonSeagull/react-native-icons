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

export const IoCashSharp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M48 368h416v32H48zM80 416h352v32H80zM480 176a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96h16v-64ZM256 304a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96" />
        <Path d="M96 80V64H16v80h16a64.07 64.07 0 0 0 64-64M32 272H16v80h80v-16a64.07 64.07 0 0 0-64-64M480 144h16V64h-80v16a64.07 64.07 0 0 0 64 64M416 336v16h80v-80h-16a64.07 64.07 0 0 0-64 64" />
        <Circle cx={256} cy={208} r={64} />
      </G>
    </Svg>
  );
};