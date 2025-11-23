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

export const GrUnorderedList = (props: IconProps) => {
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
        <Path d="M5.94 6.42H24v1.75H5.94zM5.94 11.71H24v1.75H5.94zM5.94 16.99H24v1.75H5.94z" />
        <Circle cx={1.85} cy={7.29} r={1.52} />
        <Circle cx={1.85} cy={12.58} r={1.52} />
        <Circle cx={1.85} cy={17.87} r={1.52} />
      </G>
    </Svg>
  );
};