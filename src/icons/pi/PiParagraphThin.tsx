

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiParagraphThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208,44H96a60,60,0,0,0,0,120h44v44a4,4,0,0,0,8,0V52h32V208a4,4,0,0,0,8,0V52h20a4,4,0,0,0,0-8ZM140,156H96A52,52,0,0,1,96,52h44Z" />
        </G>
      </Svg>
    );
  }

