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

export const LiaChevronUpSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 5.688 1.594 20.094l.687.718 3.907 3.907.718.687L16 16.313l9.094 9.093.718-.687 3.907-3.907.687-.718Zm0 2.843 11.563 11.594-2.438 2.438-8.406-8.375L16 13.5l-.719.688-8.406 8.375-2.437-2.438Z" />
      </G>
    </Svg>
  );
};