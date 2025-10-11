

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandWalmart = (props: IconProps) => {

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
          <Path  d="M12 8.04v-5.04" />
          <Path  d="M15.5 10l4.5 -2.5" />
          <Path  d="M15.5 14l4.5 2.5" />
          <Path  d="M12 15.96v5.04" />
          <Path  d="M8.5 14l-4.5 2.5" />
          <Path  d="M8.5 10l-4.5 -2.505" />
        </G>
      </Svg>
    );
  }

