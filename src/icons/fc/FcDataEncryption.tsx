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

export const FcDataEncryption = (props: IconProps) => {
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
        <Path d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M38 19H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h25.1c1.3-1.3 4.9-.9 4.9-2v-6c0-1.1-.9-2-2-2M34.4 31H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-2.4c0-3.1-2.5-5.6-5.6-5.6" />
        <Path d="m43 46-2 2h-2l-2-2V35.4h6V40l-1 1 1 1v1l-1 1 1 1z" />
        <Path d="M47.5 28.5c-.3-.9-1-1.6-2-1.8-1.3-.3-3.3-.7-5.5-.7s-4.2.4-5.5.6c-1 .2-1.7.9-2 1.8-.2 1-.5 2.2-.5 3.6s.3 2.6.5 3.5c.3.9 1 1.6 2 1.8 1.3.3 3.2.6 5.5.6s4.2-.4 5.5-.6c1-.2 1.7-.9 2-1.8s.5-2.1.5-3.5-.3-2.6-.5-3.5M42.9 31h-5.7c-.6 0-1.1-.5-1.1-1.1v-1.4c0-.3 1.8-.6 4-.6s4 .3 4 .6v1.4c-.1.6-.6 1.1-1.2 1.1" />
        <Path fill="#D68600" d="M39 37.1h1V48h-1z" />
      </G>
    </Svg>
  );
};