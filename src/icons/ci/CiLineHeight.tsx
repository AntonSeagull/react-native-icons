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

export const CiLineHeight = (props: IconProps) => {
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
        <Path d="M20.439 4.062h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1M20.439 9.686h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M20.439 15.31h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M20.439 20.934h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1M3.208 18.8a.5.5 0 0 1 .71-.71l1.14 1.14V4.775l-1.14 1.14a.513.513 0 0 1-.71 0 .5.5 0 0 1 0-.71l2-2a.5.5 0 0 1 .34-.14.55.55 0 0 1 .37.14l2 2a.524.524 0 0 1 0 .71.5.5 0 0 1-.71 0l-1.15-1.15v14.47l1.15-1.15a.5.5 0 1 1 .71.71l-2 2a.513.513 0 0 1-.71 0Z" />
      </G>
    </Svg>
  );
};