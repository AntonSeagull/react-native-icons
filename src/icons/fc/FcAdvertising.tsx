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

export const FcAdvertising = (props: IconProps) => {
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
        <Path d="M17.4 33H15v-4h4l.4 1.5c.3 1.3-.7 2.5-2 2.5M37 36s-11.8-7-18-7V15c5.8 0 18-7 18-7z" />
        <Circle cx={9} cy={22} r={5} />
        <Path d="M40 19h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3M18.6 41.2c-.9.6-2.5 1.2-4.6 1.4-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5.5.7.5 1.6 0 2.3-.2.2-.4.3-.6.4" />
        <Path fill="#3F51B5" d="M9 29h10V15H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2" />
        <Path fill="#42A5F5" d="M38 38c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v28c0 1.1-.9 2-2 2" />
      </G>
    </Svg>
  );
};