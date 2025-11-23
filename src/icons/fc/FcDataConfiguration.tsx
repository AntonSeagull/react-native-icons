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

export const FcDataConfiguration = (props: IconProps) => {
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
        <Path d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M38 19H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M38 31H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2" />
        <Path fill="#607D8B" d="M45.2 38.1c.1-.4.1-.8.1-1.1s0-.8-.1-1.1l2.3-1.7c.2-.2.3-.5.2-.7l-2.3-3.9c-.1-.2-.4-.3-.7-.2l-2.6 1.2c-.6-.5-1.3-.9-2-1.2l-.3-2.9c0-.3-.3-.5-.5-.5h-4.5c-.3 0-.5.2-.5.5l-.3 2.9c-.7.3-1.4.7-2 1.2l-2.6-1.2c-.3-.1-.6 0-.7.2l-2.3 3.9c-.1.2-.1.6.2.7l2.3 1.7c-.1.4-.1.8-.1 1.1s0 .8.1 1.1l-2.3 1.7c-.2.2-.3.5-.2.7l2.3 3.9c.1.2.4.3.7.2l2.6-1.2c.6.5 1.3.9 2 1.2l.3 2.9c0 .3.3.5.5.5h4.5c.3 0 .5-.2.5-.5l.3-2.9c.7-.3 1.4-.7 2-1.2l2.6 1.2c.3.1.6 0 .7-.2l2.3-3.9c.1-.2.1-.6-.2-.7zM37 42.2c-2.9 0-5.2-2.3-5.2-5.2s2.3-5.2 5.2-5.2 5.2 2.3 5.2 5.2-2.3 5.2-5.2 5.2" />
        <Path fill="#455A64" d="M37 31c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
      </G>
    </Svg>
  );
};