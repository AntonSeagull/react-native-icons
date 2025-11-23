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

export const FaModx = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 224, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m356 241.8 36.7 23.7V480l-133-83.8zM440 75H226.3l-23 37.8 153.5 96.5zm-89 142.8L55.2 32v214.5l46 29zM97 294.2 8 437h213.7l125-200.5z" />
      </G>
    </Svg>
  );
};