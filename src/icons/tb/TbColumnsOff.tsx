

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbColumnsOff = (props: IconProps) => {

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
          <Path d="M4 6h2" />
          <Path d="M4 10h5.5" />
          <Path d="M4 14h5.5" />
          <Path d="M4 18h5.5" />
          <Path d="M14.5 6h5.5" />
          <Path d="M14.5 10h5.5" />
          <Path d="M18 14h2" />
          <Path d="M14.5 18h3.5" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

