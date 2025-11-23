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

export const GiPianoKeys = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M24 80v352h64V288H72V80zm96 0v208h-16v144h64V288h-16V80zm80 0v208h-16v144h64V288h-16V80zm80 0v208h-16v144h64V80zm64 0v352h64V288h-16V80zm96 0v208h-16v144h64V80z" />
      </G>
    </Svg>
  );
};