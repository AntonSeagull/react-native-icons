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

export const BiCricketBall = (props: IconProps) => {
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
        <Path d="M19.07 4.93A10 10 0 0 0 4.93 19.07 10 10 0 0 0 19.07 4.93M6.34 6.34a8 8 0 0 1 8.78-1.71l-.29.3.71.71.52-.53a10 10 0 0 1 .84.57L5.68 16.9a10 10 0 0 1-.57-.84l.53-.52-.71-.71-.29.29a8 8 0 0 1 1.7-8.78m11.32 11.32a8 8 0 0 1-8.78 1.71l.29-.3-.71-.71-.52.53a10 10 0 0 1-.84-.57L18.32 7.1a10 10 0 0 1 .57.84l-.53.52.71.71.29-.29a8 8 0 0 1-1.7 8.78m-6.37-2.12.71.7-1.41 1.42-.71-.66zm2.83-2.83.71.7-1.42 1.42-.7-.71zM17 9.88l.71.71L16.24 12l-.7-.71zm-4.29-1.42-.71-.7 1.41-1.42.71.71zm-2.83 2.83-.71-.7 1.42-1.42.7.71zm-2.83 2.83-.71-.71L7.76 12l.7.71z" />
      </G>
    </Svg>
  );
};