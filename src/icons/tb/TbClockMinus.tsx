

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbClockMinus = (props: IconProps) => {

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
          <Path d="M20.477 15.022a9 9 0 1 0 -7.998 5.965" />
          <Path d="M12 7v5l3 3" />
          <Path d="M16 19h6" />
        </G>
      </Svg>
    );
  }

