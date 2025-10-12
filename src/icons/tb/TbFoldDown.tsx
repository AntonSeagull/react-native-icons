

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFoldDown = (props: IconProps) => {

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
          <Path  d="M12 11v8l3 -3m-6 0l3 3" />
          <Path  d="M9 7l1 0" />
          <Path  d="M14 7l1 0" />
          <Path  d="M19 7l1 0" />
          <Path  d="M4 7l1 0" />
        </G>
      </Svg>
    );
  }

