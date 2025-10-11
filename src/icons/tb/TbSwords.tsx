

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSwords = (props: IconProps) => {

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
          <Path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" />
          <Path d="M5 13l6 6" />
          <Path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" />
          <Path d="M10 5.5l-2 -2.5h-5v5l3 2.5" />
        </G>
      </Svg>
    );
  }

