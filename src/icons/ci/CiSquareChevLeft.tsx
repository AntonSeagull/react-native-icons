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

export const CiSquareChevLeft = (props: IconProps) => {
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
        <Path d="m11.21 12 2.64 2.65a.495.495 0 0 1-.7.7c-.13-.12-.25-.24-.38-.37-.87-.87-1.75-1.75-2.62-2.63a.49.49 0 0 1 0-.7l3-3a.495.495 0 0 1 .7.7Z" />
        <Path d="M18.437 20.939H5.562a2.5 2.5 0 0 1-2.5-2.5V5.566a2.5 2.5 0 0 1 2.5-2.5h12.875a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5M5.562 4.066a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.875a1.5 1.5 0 0 0 1.5-1.5V5.566a1.5 1.5 0 0 0-1.5-1.5Z" />
      </G>
    </Svg>
  );
};