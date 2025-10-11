

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotEqualsBold = (props: IconProps) => {

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
          <Path d="M228,160a12,12,0,0,1-12,12H104.22L56.88,224.07a12,12,0,0,1-17.76-16.14L71.78,172H40a12,12,0,0,1,0-24H93.6L130,108H40a12,12,0,0,1,0-24H151.78l47.34-52.07a12,12,0,0,1,17.76,16.14L184.22,84H216a12,12,0,0,1,0,24H162.4L126,148h90A12,12,0,0,1,228,160Z" />
        </G>
      </Svg>
    );
  }

