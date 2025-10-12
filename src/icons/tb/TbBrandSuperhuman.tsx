

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandSuperhuman = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M16 12l4 3l-8 7l-8 -7l4 -3" />
          <Path  d="M12 3l-8 6l8 6l8 -6z" />
          <Path  d="M12 15h8" />
        </G>
      </Svg>
    );
  }

