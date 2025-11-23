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

export const TbCampfireFilled = (props: IconProps) => {
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
        <Path d="M19.757 16.03a1 1 0 0 1 .597 1.905l-.111.035-16 4a1 1 0 0 1-.597-1.905l.111-.035z" />
        <Path d="M3.03 16.757a1 1 0 0 1 1.098-.749l.115.022 16 4a1 1 0 0 1-.37 1.962l-.116-.022-16-4a1 1 0 0 1-.727-1.213M13.553 2.106C9.379 4.192 7 7.464 7 11a5 5 0 0 0 10 0c0-1.047-.188-1.808-.606-2.705l-.169-.345-.33-.647C15.274 6.063 15 4.965 15 3a1 1 0 0 0-1.447-.894" />
      </G>
    </Svg>
  );
};