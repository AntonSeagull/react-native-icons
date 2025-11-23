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

export const CgArrowLongLeftC = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m5.27 7.757-4.25 4.236 4.236 4.25 1.416-1.412-1.814-1.82 12.288.042a3.001 3.001 0 0 0 5.834-.975 3 3 0 0 0-5.825-1.025L4.839 11.01l1.843-1.836zm13.71 4.303a1 1 0 1 1 2 .009 1 1 0 0 1-2-.01" clipRule="evenodd" />
      </G>
    </Svg>
  );
};