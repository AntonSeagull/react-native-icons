

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBookmarkOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z" />
        </G>
      </Svg>
    );
  }

