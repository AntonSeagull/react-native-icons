

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutListPost = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M14 5h-14v-2h14v2zM0 6v1h17v-1h-17zM14 10h-14v2h14v-2zM0 14h17v-1h-17v1z" fill="#000000" />
        </G>
      </Svg>
    );
  }

