

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcEditImage = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M31,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v17C44,35.2,38.2,41,31,41z" fill="#8CBCD6" />
          <Path d="M47.7,29.1l-2.8-2.8c-0.4-0.4-1.1-0.4-1.6,0L42,27.6l4.4,4.4l1.3-1.3C48.1,30.3,48.1,29.6,47.7,29.1z" fill="#E57373" />
        </G>
      </Svg>
    );
  }

