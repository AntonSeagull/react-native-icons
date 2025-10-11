

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeMove = (props: IconProps) => {

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
          <Path  d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
          <Path  d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
          <Path  d="M16 19h6" />
          <Path  d="M19 16l3 3l-3 3" />
        </G>
      </Svg>
    );
  }

