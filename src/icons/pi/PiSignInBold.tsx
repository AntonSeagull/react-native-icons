

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSignInBold = (props: IconProps) => {

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
          <Path d="M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM200,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h64a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Z" />
        </G>
      </Svg>
    );
  }

