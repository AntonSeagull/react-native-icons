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

export const CiMountain1 = (props: IconProps) => {
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
        <Path d="m20.857 19.525-6.57-14.96a2.5 2.5 0 0 0-4.58-.01l-6.56 14.96a1 1 0 0 0 .07.96.99.99 0 0 0 .84.46h15.89a1 1 0 0 0 .91-1.41m-10.23-14.56a1.5 1.5 0 0 1 2.75 0l2.43 5.53-1.45 1.45a.5.5 0 0 1-.71 0l-2.04-2.03a1.5 1.5 0 0 0-1.06-.44h-1.9Zm-6.57 14.96 4.15-9.45h2.34a.5.5 0 0 1 .36.15l2.03 2.03A1.5 1.5 0 0 0 14 13.1a1.5 1.5 0 0 0 1.06-.44l1.18-1.17 3.71 8.45Z" data-name="Mountain 1" />
      </G>
    </Svg>
  );
};