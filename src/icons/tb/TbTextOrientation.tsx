

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTextOrientation = (props: IconProps) => {

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
          <Path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
          <Path d="M5.5 11.5l5 -5" />
          <Path d="M21 12l-9 9" />
          <Path d="M21 12v4" />
          <Path d="M21 12h-4" />
        </G>
      </Svg>
    );
  }

