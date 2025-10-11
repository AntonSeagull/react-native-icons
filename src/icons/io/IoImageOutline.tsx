

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoImageOutline = (props: IconProps) => {

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
          <Path d="M304,335.79,213.34,245.3A32,32,0,0,0,169.47,244L48,352" />
          <Path d="M224,432,347.34,308.66a32,32,0,0,1,43.11-2L464,368" />
        </G>
      </Svg>
    );
  }

