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

export const VscPin = (props: IconProps) => {
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
        <Path d="M14 5v7h-.278q-.609 0-1.117-.258A2.5 2.5 0 0 1 11.73 11H8.87a3.5 3.5 0 0 1-.546.828 3.7 3.7 0 0 1-.735.633q-.406.266-.882.398a3.9 3.9 0 0 1-.985.141h-.5V9H2l-1-.5L2 8h3.222V4h.5q.508 0 .977.14t.883.4A3.4 3.4 0 0 1 8.87 6h2.859a2.56 2.56 0 0 1 .875-.734q.507-.258 1.117-.266zm-.778 1.086a1.2 1.2 0 0 0-.32.156 1.5 1.5 0 0 0-.43.461L12.285 7H8.183l-.117-.336a2.46 2.46 0 0 0-.711-1.047C7.027 5.331 6.427 5.09 6 5v7c.427-.088 1.027-.33 1.355-.617q.492-.43.71-1.047L8.184 10h4.102l.18.297q.085.14.195.25.109.11.242.21.132.102.32.157z" />
      </G>
    </Svg>
  );
};