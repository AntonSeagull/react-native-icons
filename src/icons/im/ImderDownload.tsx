

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImderDownload = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9 4l-2-2h-7v13h16v-11h-7zM8 13.5l-3.5-3.5h2.5v-4h2v4h2.5l-3.5 3.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

