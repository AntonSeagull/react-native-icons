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

export const PiTrainRegionalFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M168 88a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m55.72 34.1-22.39 82.11A16 16 0 0 1 185.89 216H176l14.4 19.2a8 8 0 1 1-12.8 9.6L156 216h-56l-21.6 28.8a8 8 0 1 1-12.8-9.6L80 216h-9.89a16 16 0 0 1-15.44-11.79L32.28 122.1a8.1 8.1 0 0 1 0-4.2l22.39-82.11A16 16 0 0 1 70.11 24h115.78a16 16 0 0 1 15.44 11.79l22.39 82.11a8.1 8.1 0 0 1 0 4.2M136 152a8 8 0 0 0-16 0v40a8 8 0 0 0 16 0Zm70-38.31L185.89 40H70.11L50 113.69l78 14.18Z" />
      </G>
    </Svg>
  );
};