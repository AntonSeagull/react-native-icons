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

export const VscIndent = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M4 5v1.984a.5.5 0 0 0 .5.5h6.882L9.749 5.851l.707-.707 2.121 2.121.423.423v.568L10.456 10.8l-.707-.707 1.61-1.609H4.5a1.5 1.5 0 0 1-1.5-1.5V5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};