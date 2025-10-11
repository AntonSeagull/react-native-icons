

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsLeftRight = (props: IconProps) => {

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
          <Path d="M21 17l-18 0" />
          <Path d="M6 10l-3 -3l3 -3" />
          <Path d="M3 7l18 0" />
          <Path d="M18 20l3 -3l-3 -3" />
        </G>
      </Svg>
    );
  }

