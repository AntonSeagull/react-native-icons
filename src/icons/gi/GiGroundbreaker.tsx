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

export const GiGroundbreaker = (props: IconProps) => {
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
        <Path d="M267.785 16.48 203.56 67.027l75.544 159.854L359.057 34.18zm-126.988 1.965L95.7 27.595l157.327 213.89zm-96.57 9.842L17.865 65.135l207.877 180.478zm383.63 29.95L366.324 88.56l-56.822 144.817L453.72 98.367zm54.235 44.972-64.012 83.163 74.236-38.38zm-452.2 45.636-11.35 58.642 195.21 58.627L112.5 184.158l-13.242 30.9-69.365-66.212zM493 188.518l-81.836 38.34 23.11 53.92L421 332.448l72 8.835zM19.863 234.83l.9 39.863 104.135-1.816zm25.45 63.164L28.81 342.65l171.92-41.332zm335.36 48.334-42.708 46.11 33.232 35.515-97.865 2.7 12.658 62.208h207.008V360.114zM133.85 356.783 19.697 410.266v82.595h107.51l45.453-87.233zm65.158 38.686.015.007-50.744 97.384h118.64l-15.916-78.208-51.996-19.183z" />
      </G>
    </Svg>
  );
};