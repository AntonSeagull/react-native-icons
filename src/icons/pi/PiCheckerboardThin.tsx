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

export const PiCheckerboardThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m-14.34 88L132 62.34V44h18.34L212 105.66V124ZM132 73.66 182.34 124H132ZM212 48v46.34L161.66 44H208a4 4 0 0 1 4 4M48 44h76v80H44V48a4 4 0 0 1 4-4m57.66 168L44 150.34V132h18.34L124 193.66V212ZM124 182.34 73.66 132H124ZM44 208v-46.34L94.34 212H48a4 4 0 0 1-4-4m164 4h-76v-80h80v76a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};