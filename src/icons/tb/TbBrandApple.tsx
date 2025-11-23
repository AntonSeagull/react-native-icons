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

export const TbBrandApple = (props: IconProps) => {
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
        <Path d="M8.286 7.008C5.07 7.008 4 10.238 4 12.928 4 16.157 6.143 21 8.286 21c1.165-.05 1.799-.538 3.214-.538 1.406 0 1.607.538 3.214.538S19 17.771 19 15.619c-.03-.011-2.649-.434-2.679-3.23-.02-2.335 2.589-3.179 2.679-3.228-1.096-1.606-3.162-2.113-3.75-2.153-1.535-.12-3.032 1.077-3.75 1.077-.729 0-2.036-1.077-3.214-1.077M12 4a2 2 0 0 0 2-2 2 2 0 0 0-2 2" />
      </G>
    </Svg>
  );
};