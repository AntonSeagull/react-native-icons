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

export const AiOutlineWindows = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M120.1 770.6 443 823.2V543.8H120.1zm63.4-163.5h196.2v141.6l-196.2-31.9zm340.3 226.5 382 62.2v-352h-382zm63.4-226.5h255.3v214.4l-255.3-41.6zm-63.4-415.7v288.8h382V128.1zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5zM183.5 309l196.2-32.5v140.4H183.5z" />
      </G>
    </Svg>
  );
};