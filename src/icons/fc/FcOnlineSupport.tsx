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

export const FcOnlineSupport = (props: IconProps) => {
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
        <Path fill="#BF360C" d="M13 30h22v12H13z" />
        <Circle cx={10} cy={26} r={4} />
        <Circle cx={38} cy={26} r={4} />
        <Path fill="#FFB74D" d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z" />
        <Circle cx={30} cy={26} r={2} />
        <Circle cx={18} cy={26} r={2} />
        <Path fill="#FF5722" d="M24 2C15.5 2 3 7.8 3 35.6L13 42V24l16.8-9.8L35 21v21l10-8.2c0-5.6-.9-29-15.4-29L28.2 2z" />
        <Path fill="#757575" d="M45 24c-.6 0-1 .4-1 1v-7c0-8.8-7.2-16-16-16h-9c-.6 0-1 .4-1 1s.4 1 1 1h9c7.7 0 14 6.3 14 14v10c0 .6.4 1 1 1s1-.4 1-1v2c0 3.9-3.1 7-7 7H24c-.6 0-1 .4-1 1s.4 1 1 1h13c5 0 9-4 9-9v-5c0-.6-.4-1-1-1" />
        <Path d="M45 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2" />
        <Circle cx={24} cy={38} r={2} />
      </G>
    </Svg>
  );
};