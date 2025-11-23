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

export const TbShieldCheckeredFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.013 12v9.754A13 13 0 0 1 2.28 12zm9.284 3.794a13 13 0 0 1-7.283 5.951L13.013 12h8.708a13 13 0 0 1-1.424 3.794M11.014 2.526 11.013 10H2.027c-.068-1.432.101-2.88.514-4.282a1 1 0 0 1 1.005-.717 11 11 0 0 0 7.192-2.256zM13.013 10V2.547l-.09-.073a11 11 0 0 0 7.189 2.537l.342-.01a1 1 0 0 1 1.005.717c.413 1.403.582 2.85.514 4.282z" />
      </G>
    </Svg>
  );
};