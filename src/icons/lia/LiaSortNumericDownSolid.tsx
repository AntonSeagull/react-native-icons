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

export const LiaSortNumericDownSolid = (props: IconProps) => {
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
        <Path d="m8.594 5-.156.781s-.165.574-.563 1.157C7.477 7.52 6.98 8 6 8v2c1.375 0 2.32-.676 3-1.406V15h2V5ZM22 5v18.688l-2.594-2.594L18 22.5l4.281 4.313.719.687.719-.687L28 22.5l-1.406-1.406L24 23.687V5ZM8.5 17A3.514 3.514 0 0 0 5 20.5v.5h2v-.5c0-.875.625-1.5 1.5-1.5h1c.875 0 1.5.625 1.5 1.5 0 .457-.352.98-.937 1.344-1.235.758-2.317 1.242-3.22 1.75-.452.254-.866.496-1.218.875S5 25.418 5 26v1h8v-2H8.438c.734-.379 1.582-.758 2.687-1.437C12.141 22.926 13 21.843 13 20.5c0-1.922-1.578-3.5-3.5-3.5Z" />
      </G>
    </Svg>
  );
};