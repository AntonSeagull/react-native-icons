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

export const RxComponentNone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M7.854 1.49a.5.5 0 0 0-.708 0L1.49 7.146a.5.5 0 0 0 0 .708l2.475 2.474-2.319 2.318a.5.5 0 0 0 .708.708l2.318-2.318 2.475 2.474a.5.5 0 0 0 .707 0l5.657-5.656a.5.5 0 0 0 0-.708l-2.475-2.474 2.318-2.318a.5.5 0 1 0-.708-.708l-2.318 2.318zM9.62 4.672 7.5 2.55 2.55 7.5l2.122 2.121zM5.38 10.328 7.5 12.45l4.95-4.95-2.121-2.121z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};