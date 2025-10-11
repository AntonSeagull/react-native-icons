

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCornerLeftUpLine = (props: IconProps) => {

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
          <Path d="M10.0001 19.0001L19 19.0002L19 17.0002L12.0001 17.0001L12 6.8283L15.9498 10.778L17.364 9.36381L11 2.99985L4.63605 9.36381L6.05026 10.778L10 6.82825L10.0001 19.0001Z" />
        </G>
      </Svg>
    );
  }

