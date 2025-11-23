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

export const CgSmartphoneShake = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13 14h-2v2h2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2 0h4v10h-4z" clipRule="evenodd" />
        <Path fill="currentColor" d="M18 9h2v6h-2zM0 14h2v-4H0zM6 15H4V9h2zM24 10h-2v4h2z" />
      </G>
    </Svg>
  );
};