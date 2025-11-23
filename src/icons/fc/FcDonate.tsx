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

export const FcDonate = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#E69329" d="m11.7 21.6 5.1 9.9 9.5-3.9 4.4-12.7-14.8.8z" />
        <Circle cx={15} cy={36} r={7.8} fill="#546E7A" />
        <Path d="M15 27c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7" />
        <Path d="M14 33h2v8h-2z" />
        <Path d="M12.9 36c1 1.9 3.2 2.7 5.1 1.7l16.5-8.5c1-.5 1.7-1.2 2.2-1.9 1.7-3.2 5.6-10.7 8.2-17.2l-18.2 8.7-4.8 7.2-6.8 3.6c-2.6 1.3-3.4 4.2-2.2 6.4" />
        <Path d="M30.2 3 13.7 9.3c-.7.2-1.5 1-2.2 1.7l-5.6 7.5c-1 1.5-1.2 3.4-.5 5.1.4 1 1.7 3.4 3.1 6.1C10.1 28 12.4 27 15 27c.4 0 .9 0 1.3.1l-2.1-4.2 4.6-4.1h8s15.5-2.2 18.2-8.7z" />
        <Path fill="#FFCDD2" d="M18.2 36c-1.3.6-2.8 0-3.3-1.3-.6-1.3 0-2.8 1.3-3.3 1.2-.6 3.2 4 2 4.6" />
      </G>
    </Svg>
  );
};