

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlayCard8 = (props: IconProps) => {

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
          <Path  d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
          <Path  d="M8 6h.01" />
          <Path  d="M16 18h.01" />
          <Path  d="M12 12h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1z" />
          <Path  d="M12 12h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1" />
        </G>
      </Svg>
    );
  }

