

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiUniversalAccess = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <Path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z" />
        </G>
      </Svg>
    );
  }

