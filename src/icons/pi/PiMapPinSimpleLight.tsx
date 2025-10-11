

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMapPinSimpleLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M182,72a54,54,0,1,0-60,53.66V232a6,6,0,0,0,12,0V125.66A54.07,54.07,0,0,0,182,72Zm-54,42a42,42,0,1,1,42-42A42,42,0,0,1,128,114Z" />
        </G>
      </Svg>
    );
  }

