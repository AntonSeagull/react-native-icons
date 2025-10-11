

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const HiOutlineChevronDoubleUp = (props: IconProps) => {

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
          <Path d="m4.5 18.75 7.5-7.5 7.5 7.5" />
          <Path d="m4.5 12.75 7.5-7.5 7.5 7.5" />
        </G>
      </Svg>
    );
  }

