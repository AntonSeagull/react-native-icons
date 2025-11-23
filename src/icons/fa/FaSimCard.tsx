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

export const FaSimCard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 384 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 192, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128L256 0H64C28.7 0 0 28.7 0 64m224 192h-64v-64h64zm96 0h-64v-64h32c17.7 0 32 14.3 32 32zm-64 128h64v32c0 17.7-14.3 32-32 32h-32zm-96 0h64v64h-64zm-96 0h64v64H96c-17.7 0-32-14.3-32-32zm0-96h256v64H64zm0-64c0-17.7 14.3-32 32-32h32v64H64z" />
      </G>
    </Svg>
  );
};