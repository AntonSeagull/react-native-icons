

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPushPinSimpleLight = (props: IconProps) => {

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
          <Path d="M216,170H205L183.15,46H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12h8.85L51,170H40a6,6,0,0,0,0,12h82v58a6,6,0,0,0,12,0V182h82a6,6,0,0,0,0-12ZM85,46H171l21.88,124H63.15Z" />
        </G>
      </Svg>
    );
  }

