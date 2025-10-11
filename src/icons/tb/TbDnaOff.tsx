

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDnaOff = (props: IconProps) => {

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
          <Path d="M16 12a3.898 3.898 0 0 0 -1.172 -2.828a4.027 4.027 0 0 0 -2.828 -1.172m-2.828 1.172a4 4 0 1 0 5.656 5.656" />
          <Path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
          <Path d="M14.828 3.515a4 4 0 1 0 5.657 5.657" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

