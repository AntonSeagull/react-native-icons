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

export const TiCogOutline = (props: IconProps) => {
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
        <Path d="m13 5 .855 3.42 3.389-.971 1.501 2.6-2.535 2.449 2.535 2.451-1.5 2.6-3.39-.971L13 20h-3l-.855-3.422-3.39.971-1.501-2.6 2.535-2.451-2.534-2.449 1.5-2.6 3.39.971L10 5zm0-2h-3c-.918 0-1.718.625-1.939 1.516l-.354 1.412-1.4-.4a2 2 0 0 0-2.283.922l-1.5 2.6a2 2 0 0 0 .342 2.438l1.047 1.011-1.048 1.015a2 2 0 0 0-.343 2.438l1.502 2.6a2 2 0 0 0 2.283.924l1.399-.401.354 1.415A2 2 0 0 0 10 22h3c.918 0 1.718-.625 1.939-1.516l.354-1.414 1.399.4q.277.078.552.077a2 2 0 0 0 1.731-1l1.5-2.6c.459-.796.317-1.8-.342-2.438l-1.047-1.013 1.047-1.013a2 2 0 0 0 .342-2.438l-1.5-2.6a2 2 0 0 0-2.283-.924l-1.4.401-.354-1.413A2 2 0 0 0 13 3m-1.5 7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0-1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3" />
      </G>
    </Svg>
  );
};