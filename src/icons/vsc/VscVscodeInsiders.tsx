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

export const VscVscodeInsiders = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m9.785 1.38-4.22 3.87 2.123 1.621L10 5.107V2c0-.234-.08-.45-.215-.62M10 9.893 2.584 4.234a.54.54 0 0 0-.691.031l-.716.655a.545.545 0 0 0 0 .805l8.608 7.894A1 1 0 0 0 10 13zM10.753 1.037c.158.286.247.614.247.963v11c0 .35-.09.678-.247.963a1 1 0 0 0 .11-.043l2.677-1.295a.82.82 0 0 0 .46-.736V3.11c0-.314-.179-.6-.46-.736L10.863 1.08a1 1 0 0 0-.11-.043M1.177 9.275l1.195-1.097 1.637 1.5-1.425 1.088a.54.54 0 0 1-.691-.031l-.716-.655a.547.547 0 0 1 0-.805" />
      </G>
    </Svg>
  );
};