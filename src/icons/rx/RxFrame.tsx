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

export const RxFrame = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M11 1.5a.5.5 0 0 0-1 0V4H5V1.5a.5.5 0 0 0-1 0V4H1.5a.5.5 0 0 0 0 1H4v5H1.5a.5.5 0 0 0 0 1H4v2.5a.5.5 0 0 0 1 0V11h5v2.5a.5.5 0 0 0 1 0V11h2.5a.5.5 0 0 0 0-1H11V5h2.5a.5.5 0 0 0 0-1H11zM10 10V5H5v5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};