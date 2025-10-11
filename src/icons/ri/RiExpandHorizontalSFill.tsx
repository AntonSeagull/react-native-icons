

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiExpandHorizontalSFill = (props: IconProps) => {

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
          <Path d="M7.44975 7.05017L2.5 11.9999L7.44727 16.9472L7.44826 12.9999H16.5501L16.55 16.9491L21.5 11.9994L16.5503 7.04968L16.5502 10.9999H7.44876L7.44975 7.05017Z" />
        </G>
      </Svg>
    );
  }

