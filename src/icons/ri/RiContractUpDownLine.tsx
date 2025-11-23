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

export const RiContractUpDownLine = (props: IconProps) => {
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
        <Path d="M5.793 5.207 12 11.414l6.207-6.207-1.414-1.414L12 8.586 7.207 3.793zm12.414 13.586L12 12.586l-6.207 6.207 1.414 1.414L12 15.414l4.793 4.793z" />
      </G>
    </Svg>
  );
};