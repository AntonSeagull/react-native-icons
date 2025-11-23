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

export const VscDiffAdded = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M1.5 1h12l.5.5v12l-.5.5h-12l-.5-.5v-12zM2 13h11V2H2z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M8 4H7v3H4v1h3v3h1V8h3V7H8z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};