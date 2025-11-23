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

export const GiAbstract042 = (props: IconProps) => {
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
        <Path d="M21 21v224.572h179.481v20.856H21V491h111.184V370.27h247.632V491H491V266.43H311.519v-20.857H491V21H379.816v120.731H132.184V21zm139.237 0v90.034h191.379V21zm0 379.966V491h191.379v-90.034z" />
      </G>
    </Svg>
  );
};