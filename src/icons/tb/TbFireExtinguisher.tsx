

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFireExtinguisher = (props: IconProps) => {

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
          <Path  d="M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4z" />
          <Path  d="M9 16h6" />
          <Path  d="M12 7v-3" />
          <Path  d="M16 5l-4 -1l4 -1" />
          <Path  d="M12 4h-3a3 3 0 0 0 -3 3" />
        </G>
      </Svg>
    );
  }

