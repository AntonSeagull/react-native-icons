

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSuperscript = (props: IconProps) => {

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
          <Path d="M5 7l8 10m-8 0l8 -10" />
          <Path d="M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
        </G>
      </Svg>
    );
  }

