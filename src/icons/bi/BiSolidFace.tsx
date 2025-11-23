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

export const BiSolidFace = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276q.232.135.456.276c.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688S13.873 8 14.665 8s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688q.269.099.581.171c.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8" />
        <Circle cx={8.5} cy={12.5} r={1.5} />
        <Circle cx={15.5} cy={12.5} r={1.5} />
      </G>
    </Svg>
  );
};