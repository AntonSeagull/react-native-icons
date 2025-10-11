

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiLuciferCannon = (props: IconProps) => {

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
          <Path d="M376 76c30 60-120 30-210 75 150 0 270 15 270 105S316 361 166 361c90 45 240 15 210 75 90-15 120-120 120-180S466 91 376 76zm-95.625 105.938C216.005 182.577 127.562 203.5 16 256c255 120 390 75 390 0 0-42.188-42.865-74.886-125.625-74.063z" fill="#000" />
        </G>
      </Svg>
    );
  }

